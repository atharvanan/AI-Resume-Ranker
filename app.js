// backend/app.js - Optimized & Cleaned
const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const cors = require('cors');
const { differenceInMonths } = require('date-fns');
const { getTotalSkillsCount } = require('./skills-database');

const app = express();
app.use(cors());
app.use(express.json());
const upload = multer({ storage: multer.memoryStorage() });

// Extract comma-separated skills from JD
function extractSkillsFromText(text) {
  if (!text?.trim()) return [];
  return text.split(',')
    .map(s => s.trim().replace(/[^\w\s.+()-]/g, ''))
    .filter(Boolean);
}

// Generate skill name variations
function generateVariations(skill) {
  const s = skill.trim().toLowerCase();
  const vars = new Set([s]);
  if (s.includes('.')) {
    vars.add(s.replace(/\./g, ''));
    vars.add(s.replace(/\./g, ' '));
  }
  if (s.includes(' ')) vars.add(s.replace(/\s+/g, ''));
  if (s.endsWith('js')) vars.add(s.replace(/js$/, ''));
  else vars.add(s + 'js');
  return [...vars].filter(Boolean);
}

// Parse multiple date formats
function parseDate(str) {
  if (!str) return null;
  try {
    const clean = str.toLowerCase().replace(/–|—/g, '-').trim();
    const months = { jan:0,january:0,feb:1,february:1,mar:2,march:2,apr:3,april:3,may:4,jun:5,june:5,jul:6,july:6,aug:7,august:7,sep:8,september:8,oct:9,october:9,nov:10,november:10,dec:11,december:11 };
    if (/^\d{4}$/.test(clean)) return new Date(+clean, 0);
    const mmYyyy = clean.match(/^(\d{1,2})\/(\d{4})$/);
    if (mmYyyy) return new Date(+mmYyyy[2], +mmYyyy[1] - 1);
    const monthYear = clean.match(/^([a-z]+)\s+(\d{4})$/);
    if (monthYear) {
      const m = months[monthYear[1]];
      if (m !== undefined) return new Date(+monthYear[2], m);
    }
    return null;
  } catch { return null; }
}

// Get professional experience in months
function getExperienceMonths(text) {
  if (!text || text.length < 100) return 0;
  const section = extractExperienceSection(text);
  if (!section) return 0;
  const direct = findDirectExperienceMention(section);
  if (direct > 0) return direct;
  return extractWorkExperience(section);
}

// Extract professional experience section
function extractExperienceSection(text) {
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  const startHeaders = [/^professional\s+experience$/i,/^work\s+experience$/i,/^experience$/i,/^employment\s+history$/i,/^career\s+history$/i,/^professional\s+background$/i];
  const endHeaders = [/^education$/i,/^academic\s+background$/i,/^qualifications$/i,/^projects$/i,/^personal\s+projects$/i,/^certifications$/i,/^awards$/i,/^achievements$/i,/^publications$/i,/^references$/i,/^hobbies$/i,/^interests$/i,/^extra.curricular/i,/^volunteer/i,/^skills$/i,/^technical\s+skills$/i,/^languages$/i];
  let start = -1, end = lines.length;
  for (let i = 0; i < lines.length; i++) if (startHeaders.some(h => h.test(lines[i]))) { start = i + 1; break; }
  if (start === -1) return null;
  for (let i = start; i < lines.length; i++) if (endHeaders.some(h => h.test(lines[i]))) { end = i; break; }
  return lines.slice(start, end).join('\n');
}

// Look for "X years experience"
function findDirectExperienceMention(text) {
  const patterns = [/(\d+(?:\.\d+)?)\s*\+?\s*years?\s+(?:of\s+)?(?:professional\s+)?(?:work\s*)?experience/gi,/(\d+(?:\.\d+)?)\s*yrs?\s+(?:of\s+)?(?:professional\s+)?(?:work\s*)?experience/gi,/(?:total\s+)?(?:professional\s+)?experience\s*[:\-]?\s*(\d+(?:\.\d+)?)\s*years?/gi];
  for (const p of patterns) {
    const m = [...text.matchAll(p)];
    for (const match of m) {
      const y = parseFloat(match[1]);
      if (!isNaN(y) && y > 0 && y <= 50) return Math.round(y * 12);
    }
  }
  return 0;
}

// Extract work experience from job blocks
function extractWorkExperience(text) {
  const blocks = text.split(/\n\s*\n/).map(b => b.trim()).filter(b => b.length > 50);
  const exclude = [/\b(intern|internship|trainee|training|apprentice|apprenticeship)\b/i,/\b(college|university|school|academic|student|graduation)\b/i,/\b(volunteer|voluntary|unpaid)\b/i,/\b(project|assignment|thesis|dissertation)\b/i,/\b(course|certification|workshop|seminar)\b/i];
  const include = [/\b(engineer|developer|analyst|manager|consultant|specialist|lead|senior|junior)\b/i,/\b(software|technical|professional|full.?time|part.?time)\b/i,/\b(company|corporation|pvt\.?\s*ltd|limited|inc|llc)\b/i,/\b(position|role|designation|job|employment)\b/i];
  let months = 0;
  for (const block of blocks) {
    if (exclude.some(r => r.test(block))) continue;
    if (!include.some(r => r.test(block))) continue;
    months += extractJobDuration(block);
  }
  return months;
}

// Extract duration from job entry
function extractJobDuration(job) {
  const patterns = [/([A-Z][a-z]+\s+\d{4})\s*[-–]\s*(Present|Current|[A-Z][a-z]+\s+\d{4})/gi,/(\d{4})\s*[-–]\s*(\d{4}|Present|Current)/gi,/(\d{1,2}\/\d{4})\s*[-–]\s*(\d{1,2}\/\d{4}|Present|Current)/gi];
  for (const p of patterns) {
    const m = [...job.matchAll(p)];
    for (const match of m) {
      const start = parseDate(match[1]);
      const end = /present|current/i.test(match[2]) ? new Date() : parseDate(match[2]);
      if (start && end && end >= start) {
        const diff = differenceInMonths(end, start);
        if (diff > 0 && diff <= 600) return diff;
      }
    }
  }
  return 0;
}

// Skills matching
function findSkillsInResume(text, skills) {
  if (!text || !skills?.length) return { matched: [], missing: skills || [] };
  const lower = text.toLowerCase();
  const matched = [], missing = [];
  for (const s of skills) {
    const vars = generateVariations(s);
    let found = vars.some(v => lower.includes(v) || new RegExp(`\\b${v.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i').test(lower));
    (found ? matched : missing).push(s);
  }
  return { matched, missing };
}

// Extract text from PDF
async function extractTextFromPdf(buffer) {
  try { const data = await pdfParse(buffer); return data.text || ''; }
  catch { return ''; }
}

// API endpoint
app.post('/api/score', upload.array('resumes'), async (req, res) => {
  try {
    const skills = extractSkillsFromText(req.body.jobDesc || '');
    if (!skills.length) return res.status(400).json({ error: 'No valid skills found in JD. Provide comma-separated skills only.' });
    if (!req.files?.length) return res.status(400).json({ error: 'No resumes uploaded' });

    const results = [];
    for (const file of req.files) {
      try {
        const text = await extractTextFromPdf(file.buffer);
        const months = getExperienceMonths(text);
        const years = parseFloat((months / 12).toFixed(1));
        const level = years === 0 ? 'Fresher' : years < 2 ? 'Junior' : years < 5 ? 'Mid-Level' : 'Senior';
        const { matched, missing } = findSkillsInResume(text, skills);
        const score = skills.length ? Math.round((matched.length / skills.length) * 100) : 0;
        results.push({ filename: file.originalname.replace('.pdf', ''), experienceYears: years, experienceLevel: level, score, totalRequired: skills.length, matchedSkills: matched, missingSkills: missing });
      } catch (err) {
        results.push({ filename: file.originalname.replace('.pdf', ''), error: err.message, score: 0, experienceYears: 0, experienceLevel: 'Unknown', matchedSkills: [], missingSkills: skills, totalRequired: skills.length });
      }
    }
    results.sort((a, b) => (b.score || 0) - (a.score || 0));
    const avg = results.length ? Math.round(results.reduce((sum, r) => sum + (r.score || 0), 0) / results.length) : 0;
    res.json({ results, summary: { totalResumes: results.length, requiredSkills: skills, totalSkillsRequired: skills.length, lightcastSkillsTotal: getTotalSkillsCount?.() || 0, averageScore: avg } });
  } catch (err) {
    res.status(500).json({ error: 'Processing failed', details: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));

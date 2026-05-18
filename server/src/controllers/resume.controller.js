const { extractTextFromPdf } = require('../parsers/pdf.parser');
const { getExperienceMonths, findSkillsInResume } = require('../ai/matcher');

// Optionally import getTotalSkillsCount from skills-database if needed
// const { getTotalSkillsCount } = require('../models/skills-database');

function extractSkillsFromText(text) {
  if (!text?.trim()) return [];
  return text.split(',')
    .map(s => s.trim().replace(/[^\w\s.+()-]/g, ''))
    .filter(Boolean);
}

const analyzeResumes = async (req, res) => {
  try {
    const skills = extractSkillsFromText(req.body.jobDesc || '');
    if (!skills.length) {
      return res.status(400).json({ error: 'No valid skills found in JD. Provide comma-separated skills only.' });
    }
    
    if (!req.files?.length) {
      return res.status(400).json({ error: 'No resumes uploaded' });
    }

    const results = [];
    for (const file of req.files) {
      try {
        let text = '';
        if (file.mimetype === 'application/pdf') {
          text = await extractTextFromPdf(file.buffer);
        } else {
          // Future docx parsing
          text = '';
        }

        const months = getExperienceMonths(text);
        const years = parseFloat((months / 12).toFixed(1));
        const level = years === 0 ? 'Fresher' : years < 2 ? 'Junior' : years < 5 ? 'Mid-Level' : 'Senior';
        
        const { matched, missing } = findSkillsInResume(text, skills);
        const score = skills.length ? Math.round((matched.length / skills.length) * 100) : 0;
        
        results.push({
          filename: file.originalname.replace('.pdf', ''),
          experienceYears: years,
          experienceLevel: level,
          score,
          totalRequired: skills.length,
          matchedSkills: matched,
          missingSkills: missing
        });
      } catch (err) {
        results.push({
          filename: file.originalname.replace('.pdf', ''),
          error: err.message,
          score: 0,
          experienceYears: 0,
          experienceLevel: 'Unknown',
          matchedSkills: [],
          missingSkills: skills,
          totalRequired: skills.length
        });
      }
    }

    results.sort((a, b) => (b.score || 0) - (a.score || 0));
    const avg = results.length ? Math.round(results.reduce((sum, r) => sum + (r.score || 0), 0) / results.length) : 0;
    
    res.json({
      results,
      summary: {
        totalResumes: results.length,
        requiredSkills: skills,
        totalSkillsRequired: skills.length,
        averageScore: avg
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Processing failed', details: err.message });
  }
};

module.exports = {
  analyzeResumes
};

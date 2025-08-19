// frontend/src/App.js
import React, { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

/* =======================================================================================
   MAIN APP COMPONENT
   ======================================================================================= */
function App() {
  /* -------------------------------------------------------------------
     State Management
     ------------------------------------------------------------------- */
  const [files, setFiles] = useState([]); // Uploaded resumes
  const [jd, setJd] = useState(''); // Job description skills (comma-separated)
  const [results, setResults] = useState([]); // Backend scoring results
  const [loading, setLoading] = useState(false); // Loading spinner state
  const [summary, setSummary] = useState(null); // Processing summary (resumes + skills)

  // Rotating text for Hero section
  const [rotatingTextIndex, setRotatingTextIndex] = useState(0);
  const rotatingTexts = ['RECRUITERS*', 'HR MANAGER*', 'STARTUPS*', 'HIRING TEAMS*', 'JOB SEEKERS*'];

  /* -------------------------------------------------------------------
     Effects
     ------------------------------------------------------------------- */
  // Rotating hero subheading text (changes every 1.25s)
  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  /* -------------------------------------------------------------------
     File Upload (Dropzone)
     ------------------------------------------------------------------- */
  const onDrop = useCallback((accepted) => setFiles(accepted), []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] },
    multiple: true,
  });

  /* -------------------------------------------------------------------
     Actions: Submit & Clear
     ------------------------------------------------------------------- */
  const submit = async () => {
    if (!files.length || !jd.trim()) {
      alert('Please upload resumes AND enter comma-separated skills in the JD box.');
      return;
    }

    setLoading(true);
    setResults([]);
    setSummary(null);

    const form = new FormData();
    files.forEach((f) => form.append('resumes', f));
    form.append('jobDesc', jd);

    try {
      // Send resumes + JD to backend for scoring
      const res = await axios.post('http://localhost:5000/api/score', form, {
        headers: { 'Content-Type': 'multipart/form-data' },
        timeout: 60000,
      });

      const apiResults = res.data.results || [];
      const skillsRequiredCount = jd
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean).length;

      setResults(apiResults);
      setSummary({
        totalResumes: apiResults.length,
        totalSkillsRequired: skillsRequiredCount,
      });
    } catch (e) {
      // Error handling (network, server, unknown)
      if (e.response) {
        alert(`Server error: ${e.response.data.error || 'Unknown error'}`);
      } else if (e.request) {
        alert('Network error: Could not connect to the backend (port 5000).');
      } else {
        alert('Error: ' + e.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const clearAll = () => {
    setFiles([]);
    setJd('');
    setResults([]);
    setSummary(null);
  };

  /* -------------------------------------------------------------------
     Render
     ------------------------------------------------------------------- */
  return (
    <div className="min-h-screen bg-[#0a0b0d] text-white selection:bg-white/20 selection:text-white flex flex-col relative overflow-hidden">
      
      {/* -------------------- Aurora Background -------------------- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="aurora aurora-1" />
        <div className="aurora aurora-2" />
        <div className="aurora aurora-3" />
        <div className="aurora aurora-4" />
        <div className="aurora aurora-5" />
        <div className="aurora aurora-6" />
        <div className="aurora aurora-7" />
        <div className="aurora aurora-8" />
        <div className="aurora aurora-9" />
        <div className="aurora aurora-10" />
        <div className="aurora aurora-11" />
        <div className="aurora aurora-12" />
        <div className="aurora aurora-13" />
        <div className="aurora aurora-14" />
        <div className="aurora aurora-15" />

      </div>

      {/* -------------------- Dark Overlay (Improves text readability) -------------------- */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none z-[1]" />

      {/* -------------------- Hero Section -------------------- */}
      <header className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              AI Resume Ranker
            </span>
          </motion.h1>

          {/* Rotating Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
            className="mt-3 text-center text-lg md:text-xl text-white/70"
          >
            We serve{' '}
            <span className="font-semibold text-white">
              {rotatingTexts[rotatingTextIndex]}
            </span>
          </motion.p>

          {/* Instructions */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
            className="mt-8 mx-auto max-w-3xl text-center text-white/70"
          >
            Upload PDF resumes and paste{' '}
            <span className="font-semibold text-white">comma-separated</span> skills (e.g.,{' '}
            <em>Next.js, Node.js, JavaScript, AWS, Docker</em>). Get a clean, dashboard-style match
            analysis in seconds.
          </motion.p>
        </div>
      </header>

      {/* -------------------- Main Layout -------------------- */}
      <main
        className="w-full pb-24 flex-1 relative z-10"
        style={{ maxWidth: 'calc(100vw - 180px)', margin: '0 auto' }}
      >
        {/* Upload & Job Description Cards */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          {/* Upload Resumes Card */}
          <Card className="h-[310px] flex flex-col">
            <h2 className="text-xl font-semibold mb-3">Upload Resumes</h2>
            <div
              {...getRootProps()}
              className={`border border-white/10 rounded-lg flex-1 flex items-center justify-center text-center p-6 transition cursor-pointer backdrop-blur bg-white/[0.06] hover:bg-white/[0.09] ${
                isDragActive ? 'ring-2 ring-sky-400' : ''
              }`}
            >
              <input {...getInputProps()} />
              {isDragActive
                ? 'Drop PDF files here…'
                : 'Drag & drop PDF resumes here, or click to select'}
            </div>
            {/* Show uploaded files */}
            {files.length > 0 && (
              <div className="mt-4">
                <h3 className="font-medium text-white/80 mb-2">
                  Uploaded Files ({files.length}):
                </h3>
                <ul className="list-disc list-inside text-white/60 max-h-24 overflow-y-auto">
                  {files.map((f, i) => (
                    <li key={i} className="truncate" title={f.name}>
                      {f.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Card>

          {/* Job Description Card */}
          <Card className="h-[310px] flex flex-col">
            <h2 className="text-xl font-semibold mb-3">Job Description — Skills Only</h2>
            <textarea
              rows={6}
              placeholder="Enter comma-separated skills only..."
              className="border border-white/10 rounded-lg bg-white/[0.06] text-white placeholder-white/40 p-4 focus:outline-none focus:ring-2 focus:ring-sky-500 flex-1 resize-none w-full"
              value={jd}
              onChange={(e) => setJd(e.target.value)}
            />
            {/* Action buttons */}
            <div className="flex gap-3 mt-4">
              <Button
                onClick={submit}
                disabled={loading || !files.length || !jd.trim()}
                kind="primary"
              >
                {loading ? 'Processing…' : 'Score Resumes'}
              </Button>
              <Button onClick={clearAll} kind="ghost">
                Clear All
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Processing Summary */}
        {summary && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-10"
          >
            <Card>
              <h2 className="text-xl font-semibold mb-4">Processing Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <HighlightStat
                  label="Resumes Processed"
                  value={summary.totalResumes}
                  gradient="from-cyan-300 to-blue-300"
                />
                <HighlightStat
                  label="Skills Required"
                  value={summary.totalSkillsRequired}
                  gradient="from-emerald-300 to-teal-300"
                />
              </div>
            </Card>
          </motion.div>
        )}

        {/* Results Table */}
        {results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-10"
          >
            <Card>
              <h2 className="text-2xl font-semibold mb-4">Analysis Results</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <Th>#</Th>
                      <Th>Filename</Th>
                      <Th>Experience</Th>
                      <Th>Score</Th>
                      <Th>Match</Th>
                      <Th></Th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((r, i) => (
                      <Row key={i} result={r} rank={i + 1} />
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        )}

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400">
            About AI Resume Ranker
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/70 leading-relaxed">
            I believe at AI Resume Ranker, hiring should be smart, fair, and effortless.
            Our platform uses AI to instantly evaluate how well a resume matches
            a job Description, giving you clear, skill-based insights without the guesswork.
            <br />
            <br />
            <span className="font-semibold">Recruiters</span> can quickly shortlist top candidates with precision and confidence.
            <br />

            <br />
            By combining data-driven accuracy with an easy-to-use interface, AI Resume Ranker
            bridges the gap between talent and opportunity — making the hiring process faster,
            more transparent, and better for all.
          </p>
        </motion.section>
      </main>
    </div>
  );
}

/* =======================================================================================
   UI COMPONENTS
   ======================================================================================= */

/* ------------------------------ Card ------------------------------ */
/**
 * Generic container with rounded corners, border, blur background.
 * Used for all sections like Upload, JD, Summary, Results.
 */
function Card({ children, className = '' }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] ${className}`}
    >
      {children}
    </div>
  );
}

/* ----------------------------- Button ----------------------------- */
/**
 * Reusable button component with two styles:
 * - Primary: Solid white background
 * - Ghost: Transparent with border
 */
function Button({ children, onClick, disabled, kind = 'primary' }) {
  const base =
    'px-4 py-3 rounded-xl font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-0';
  const styles =
    kind === 'primary'
      ? 'bg-white text-black hover:bg-white/90 focus:ring-white disabled:bg-white/30 disabled:text-black/50'
      : 'border border-white/15 text-white hover:bg-white/5';
  return (
    <button onClick={onClick} disabled={disabled} className={`${base} ${styles} flex-1`}>
      {children}
    </button>
  );
}

/* ------------------------------- Th ------------------------------- */
/**
 * Table header cell with consistent padding and font style.
 */
function Th({ children }) {
  return <th className="p-3 font-semibold text-white/80">{children}</th>;
}

/* -------------------------- HighlightStat ------------------------- */
/**
 * Stat box for summary section.
 * Displays a large gradient number + smaller label text.
 */
function HighlightStat({ label, value, gradient = 'from-cyan-300 to-blue-300' }) {
  return (
    <div className="rounded-xl border border-white/10 p-5 bg-white/[0.03]">
      <div
        className={`text-4xl md:text-5xl font-extrabold bg-gradient-to-r ${gradient} bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(56,189,248,0.35)]`}
      >
        {typeof value === 'number' ? value.toLocaleString() : value}
      </div>
      <div className="text-sm text-white/70 mt-1">{label}</div>
    </div>
  );
}

/* ------------------------------- Row ------------------------------ */
/**
 * Table row representing one resume result.
 * Includes expandable details for matched & missing skills.
 */
function Row({ result, rank }) {
  const [open, setOpen] = useState(false);

  // Color tone for score text + bar based on % score
  const scoreTone =
    result.score >= 80
      ? 'text-emerald-300 bg-emerald-300/10'
      : result.score >= 60
      ? 'text-yellow-300 bg-yellow-300/10'
      : result.score >= 40
      ? 'text-orange-300 bg-orange-300/10'
      : 'text-red-300 bg-red-300/10';

  const barTone =
    result.score >= 80
      ? 'bg-emerald-400'
      : result.score >= 60
      ? 'bg-yellow-400'
      : result.score >= 40
      ? 'bg-orange-400'
      : 'bg-red-400';

  return (
    <>
      {/* Row main summary */}
      <tr className={`border-t border-white/10 ${rank <= 3 ? 'bg-white/[0.03]' : ''}`}>
        <td className="p-3">
          {/* Rank Badge */}
          <span
            className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
              rank === 1
                ? 'bg-yellow-300/20 text-yellow-200'
                : rank === 2
                ? 'bg-white/15 text-white/80'
                : rank === 3
                ? 'bg-orange-300/20 text-orange-200'
                : 'bg-sky-300/20 text-sky-200'
            }`}
          >
            {rank}
          </span>
        </td>

        {/* Filename */}
        <td className="p-3 font-medium">{result.filename}</td>

        {/* Experience */}
        <td className="p-3">
          <div className="text-sm">
            <div className="font-semibold">{result.experienceYears} years</div>
            <div className="text-white/60">({result.experienceLevel})</div>
          </div>
        </td>

        {/* Score with bar */}
        <td className="p-3 w-56">
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-white/10 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${result.score}%` }}
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                className={`h-2 ${barTone}`}
              />
            </div>
            <span className={`px-2 py-1 rounded text-sm font-bold ${scoreTone}`}>
              {result.score}%
            </span>
          </div>
        </td>

        {/* Skills match count */}
        <td className="p-3">
          <span className="text-sm font-medium">
            {result.matchedSkills.length}/{result.totalRequired}
          </span>
        </td>

        {/* Expand/Collapse button */}
        <td className="p-3">
          <button
            onClick={() => setOpen((v) => !v)}
            className="p-1 rounded hover:bg-white/10 transition"
          >
            {open ? (
              <FiChevronUp className="w-5 h-5 text-white/70" />
            ) : (
              <FiChevronDown className="w-5 h-5 text-white/70" />
            )}
          </button>
        </td>
      </tr>

      {/* Expandable Details Row */}
      <AnimatePresence>
        {open && (
          <tr>
            <td colSpan={6} className="p-0">
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="p-6 border-t border-white/10 bg-white/[0.02]">
                  <div className="grid md:grid-cols-2 gap-6">
                    
                    {/* Matched Skills */}
                    <div>
                      <h4 className="font-semibold text-emerald-300 mb-3">
                        Matched Skills ({result.matchedSkills.length})
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {result.matchedSkills.map((s, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 rounded-full text-sm bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Missing Skills */}
                    <div>
                      <h4 className="font-semibold text-red-300 mb-3">
                        Missing Skills ({result.missingSkills.length})
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {result.missingSkills.map((s, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 rounded-full text-sm bg-red-500/10 text-red-300 border border-red-500/20"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </td>
          </tr>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
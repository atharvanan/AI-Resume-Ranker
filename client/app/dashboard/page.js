"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useResumeStore } from '@/store/useResumeStore';
import { Card } from '@/components/ui/Card';
import { HighlightStat } from '@/components/ui/HighlightStat';
import { Button } from '@/components/ui/Button';

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
      <tr className={`border-t border-white/10 ${rank <= 3 ? 'bg-white/[0.03]' : ''}`}>
        <td className="p-3">
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
        <td className="p-3 font-medium">{result.filename}</td>
        <td className="p-3">
          <div className="text-sm">
            <div className="font-semibold">{result.experienceYears} years</div>
            <div className="text-white/60">({result.experienceLevel})</div>
          </div>
        </td>
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
        <td className="p-3">
          <span className="text-sm font-medium">
            {result.matchedSkills.length}/{result.totalRequired}
          </span>
        </td>
        <td className="p-3 text-right">
          <button
            onClick={() => setOpen(!open)}
            className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 transition text-sm font-medium"
          >
            {open ? 'Hide' : 'Details'}
          </button>
        </td>
      </tr>
      <AnimatePresence>
        {open && (
          <tr>
            <td colSpan={6} className="p-0">
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="p-6 border-t border-white/10 bg-white/[0.02]">
                  <div className="grid md:grid-cols-2 gap-6">
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

export default function DashboardPage() {
  const router = useRouter();
  const { results, summary, clearData } = useResumeStore();

  useEffect(() => {
    if (!results || results.length === 0) {
      router.push('/upload');
    }
  }, [results, router]);

  if (!results || results.length === 0) return null;

  return (
    <div className="flex-1 max-w-7xl mx-auto w-full px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4"
      >
        <div>
          <h1 className="text-4xl font-bold">Analysis Results</h1>
          <p className="text-white/60 mt-2">Candidate ranking based on your required skills.</p>
        </div>
        <Button 
          kind="ghost" 
          onClick={() => {
            clearData();
            router.push('/upload');
          }}
        >
          New Analysis
        </Button>
      </motion.div>

      {summary && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-10"
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

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="p-3 font-semibold text-white/80">#</th>
                  <th className="p-3 font-semibold text-white/80">Candidate</th>
                  <th className="p-3 font-semibold text-white/80">Experience</th>
                  <th className="p-3 font-semibold text-white/80">Score</th>
                  <th className="p-3 font-semibold text-white/80">Match</th>
                  <th className="p-3 font-semibold text-white/80"></th>
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
    </div>
  );
}

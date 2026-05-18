"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function LandingPage() {
  const [rotatingTextIndex, setRotatingTextIndex] = useState(0);
  const rotatingTexts = ['RECRUITERS*', 'HR MANAGER*', 'STARTUPS*', 'HIRING TEAMS*', 'JOB SEEKERS*'];

  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1 flex flex-col justify-center items-center py-20 px-6">
      <header className="max-w-4xl mx-auto w-full">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center text-5xl md:text-7xl font-extrabold tracking-tight leading-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            AI Resume Ranker
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
          className="mt-6 text-center text-xl md:text-2xl text-white/70"
        >
          We serve{' '}
          <span className="font-semibold text-white">
            {rotatingTexts[rotatingTextIndex]}
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
          className="mt-8 mx-auto max-w-3xl text-center text-lg text-white/70"
        >
          Upload PDF resumes and paste <span className="font-semibold text-white">comma-separated</span> skills. Get a clean, dashboard-style match analysis in seconds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
          className="mt-12 flex justify-center gap-4"
        >
          <Link href="/upload" className="w-full sm:w-auto block text-center">
            <Button className="w-full sm:w-auto px-10 py-4 text-lg">Start Ranking Now</Button>
          </Link>
        </motion.div>
      </header>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-32 text-center max-w-3xl"
      >
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400">
          About AI Resume Ranker
        </h2>
        <p className="mt-6 text-white/70 leading-relaxed text-lg text-justify md:text-center">
          Hiring should be smart, fair, and effortless. Our platform uses AI to instantly evaluate how well a resume matches a job description, giving you clear, skill-based insights without the guesswork.
          <br /><br />
          Recruiters can quickly shortlist top candidates with precision and confidence, bridging the gap between talent and opportunity.
        </p>
      </motion.section>
    </div>
  );
}

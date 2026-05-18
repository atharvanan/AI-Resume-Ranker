"use client";

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useResumeStore } from '@/store/useResumeStore';

export default function UploadPage() {
  const [files, setFiles] = useState([]);
  const [jd, setJd] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  
  const setAnalysisData = useResumeStore((state) => state.setAnalysisData);

  const onDrop = useCallback((accepted) => setFiles(accepted), []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] },
    multiple: true,
  });

  const submit = async () => {
    if (!files.length || !jd.trim()) {
      alert('Please upload resumes AND enter comma-separated skills in the JD box.');
      return;
    }

    setLoading(true);

    const form = new FormData();
    files.forEach((f) => form.append('resumes', f));
    form.append('jobDesc', jd);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      const res = await axios.post(`${apiUrl}/api/resume/analyze`, form, {
        headers: { 'Content-Type': 'multipart/form-data' },
        timeout: 60000,
      });

      const apiResults = res.data.results || [];
      const summary = res.data.summary || null;

      setAnalysisData(apiResults, summary);
      router.push('/dashboard');
    } catch (e) {
      if (e.response) {
        alert(`Server error: ${e.response.data.error || 'Unknown error'}`);
      } else if (e.request) {
        alert('Network error: Could not connect to the backend (port 5000).');
      } else {
        alert('Error: ' + e.message);
      }
      setLoading(false);
    }
  };

  const clearAll = () => {
    setFiles([]);
    setJd('');
  };

  return (
    <div className="flex-1 max-w-7xl mx-auto w-full px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold">New Analysis</h1>
        <p className="text-white/60 mt-2">Upload candidates and job description to get started.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Upload Resumes Card */}
        <Card className="h-[360px] flex flex-col">
          <h2 className="text-xl font-semibold mb-3">Upload Resumes (PDF)</h2>
          <div
            {...getRootProps()}
            className={`border border-white/10 rounded-lg flex-1 flex flex-col items-center justify-center text-center p-6 transition cursor-pointer backdrop-blur bg-white/[0.06] hover:bg-white/[0.09] ${
              isDragActive ? 'ring-2 ring-sky-400' : ''
            }`}
          >
            <input {...getInputProps()} />
            {isDragActive
              ? 'Drop files here…'
              : 'Drag & drop PDF resumes here, or click to select'}
          </div>
          {files.length > 0 && (
            <div className="mt-4 flex-shrink-0">
              <h3 className="font-medium text-white/80 mb-2">
                Selected Files ({files.length}):
              </h3>
              <ul className="list-disc list-inside text-white/60 max-h-20 overflow-y-auto">
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
        <Card className="h-[360px] flex flex-col">
          <h2 className="text-xl font-semibold mb-3">Job Description — Skills Only</h2>
          <textarea
            rows={6}
            placeholder="Enter comma-separated skills only..."
            className="border border-white/10 rounded-lg bg-white/[0.06] text-white placeholder-white/40 p-4 focus:outline-none focus:ring-2 focus:ring-sky-500 flex-1 resize-none w-full"
            value={jd}
            onChange={(e) => setJd(e.target.value)}
          />
          <div className="flex gap-3 mt-4">
            <Button
              onClick={submit}
              disabled={loading || !files.length || !jd.trim()}
              kind="primary"
            >
              {loading ? 'Processing…' : 'Score Resumes'}
            </Button>
            <Button onClick={clearAll} kind="ghost">
              Clear
            </Button>
          </div>
        </Card>
      </motion.div>
      
      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm">
           <div className="w-16 h-16 border-4 border-white/20 border-t-sky-400 rounded-full animate-spin mb-6" />
           <h2 className="text-2xl font-bold text-white animate-pulse">Analyzing Candidates...</h2>
           <p className="text-white/60 mt-2">Extracting skills and calculating match scores.</p>
        </div>
      )}
    </div>
  );
}

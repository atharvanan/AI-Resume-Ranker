import { create } from 'zustand';

export const useResumeStore = create((set) => ({
  results: [],
  summary: null,
  setAnalysisData: (results, summary) => set({ results, summary }),
  clearData: () => set({ results: [], summary: null })
}));

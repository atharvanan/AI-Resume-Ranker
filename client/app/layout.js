import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AI Resume Ranker',
  description: 'AI-powered resume matching and ranking.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[#0a0b0d] text-white selection:bg-white/20 selection:text-white flex flex-col relative overflow-x-hidden`}>
        {/* Aurora Background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
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
        
        {/* Dark Overlay */}
        <div className="fixed inset-0 bg-black/60 pointer-events-none z-[1]" />
        
        {/* Main Content */}
        <div className="relative z-10 flex-1 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}

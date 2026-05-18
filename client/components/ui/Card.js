export function Card({ children, className = '' }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] ${className}`}
    >
      {children}
    </div>
  );
}

export function HighlightStat({ label, value, gradient = 'from-cyan-300 to-blue-300' }) {
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

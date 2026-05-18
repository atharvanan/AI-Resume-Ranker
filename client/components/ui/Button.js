export function Button({ children, onClick, disabled, kind = 'primary', className = '' }) {
  const base = 'px-4 py-3 rounded-xl font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-0 flex justify-center items-center';
  const styles =
    kind === 'primary'
      ? 'bg-white text-black hover:bg-white/90 focus:ring-white disabled:bg-white/30 disabled:text-black/50'
      : 'border border-white/15 text-white hover:bg-white/5 disabled:opacity-50';
  return (
    <button onClick={onClick} disabled={disabled} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}

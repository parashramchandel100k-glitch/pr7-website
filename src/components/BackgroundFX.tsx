export default function BackgroundFX() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-950"
    >
      {/* Base grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-950/40 to-ink-950" />

      {/* Drifting gradient blobs */}
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[120px] animate-drift-slow" />
      <div className="absolute top-1/3 -right-40 h-[460px] w-[460px] rounded-full bg-cyan-500/15 blur-[130px] animate-drift-slow-2" />
      <div className="absolute bottom-0 left-[-10%] h-[420px] w-[420px] rounded-full bg-amber-500/10 blur-[130px] animate-drift-slow" />

      {/* Fine noise texture for cinematic depth */}
      <div className="noise-overlay absolute inset-0" />

      {/* Vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_200px_80px_rgba(5,5,10,0.9)]" />
    </div>
  );
}

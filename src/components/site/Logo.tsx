export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="moon-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#B8AEFF" />
          <stop offset="60%" stopColor="#8A6CFF" />
          <stop offset="100%" stopColor="#6D5EFF" />
        </linearGradient>
        <radialGradient id="moon-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#8A6CFF" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#8A6CFF" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* subtle white veil to increase perceived brightness */}
      <circle cx="20" cy="20" r="19" fill="rgba(255,255,255,0.02)" />
      <circle cx="20" cy="20" r="18" fill="url(#moon-glow)" />
      <path
        d="M28 20a10 10 0 1 1-9.7-10A8 8 0 0 0 28 20Z"
        fill="url(#moon-g)"
      />
      <circle cx="14" cy="17" r="1.1" fill="#0a0a0f" opacity="0.45" />
      <circle cx="18" cy="22" r="0.8" fill="#0a0a0f" opacity="0.35" />
      <circle cx="12.5" cy="22" r="0.6" fill="#0a0a0f" opacity="0.3" />
    </svg>
  );
}

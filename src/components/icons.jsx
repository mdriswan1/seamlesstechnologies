export function RingMark({ className, style }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} style={style}>
      <circle cx="16" cy="16" r="14.5" stroke="url(#gradRing)" strokeWidth="2" />
      <circle cx="16" cy="16" r="8.5" stroke="url(#gradRing)" strokeWidth="1.4" opacity="0.7" />
      <circle cx="16" cy="16" r="3" fill="url(#gradRing)" />
      <defs>
        <linearGradient id="gradRing" x1="0" y1="0" x2="32" y2="32">
          <stop offset="0%" stopColor="#ff7a3d" />
          <stop offset="100%" stopColor="#ff3d5a" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function WaIcon({ className, style }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
      <path d="M17.47 14.38c-.29-.15-1.7-.84-1.96-.93-.26-.1-.46-.15-.65.15-.2.29-.75.93-.92 1.12-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.08-.15-.65-1.58-.9-2.16-.24-.57-.48-.49-.65-.5h-.56c-.2 0-.51.07-.78.37-.26.29-1.02 1-1.02 2.44s1.05 2.83 1.19 3.02c.15.2 2.06 3.15 5 4.42.7.3 1.24.48 1.67.61.7.22 1.34.19 1.84.11.56-.08 1.7-.7 1.94-1.37.24-.68.24-1.26.17-1.38-.07-.13-.26-.2-.55-.34z" />
      <path d="M12.02 2C6.5 2 2.02 6.48 2.02 12c0 1.85.5 3.58 1.36 5.07L2 22l5.08-1.33A9.96 9.96 0 0 0 12.02 22C17.53 22 22 17.52 22 12S17.53 2 12.02 2zm0 18.1c-1.66 0-3.2-.46-4.52-1.26l-.32-.19-3.02.79.81-2.95-.21-.31A8.08 8.08 0 0 1 3.92 12c0-4.47 3.64-8.1 8.1-8.1 4.47 0 8.1 3.63 8.1 8.1s-3.63 8.1-8.1 8.1z" />
    </svg>
  );
}

export function Bolt({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" strokeLinejoin="round" />
    </svg>
  );
}

export function Leaf({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M5 21c9 0 14-5 14-14 0-1 0-2-.2-3C10 4.5 5 9 5 18c0 1 0 2 .2 3z" />
      <path d="M5 21c3-6 6-9 12-13" />
    </svg>
  );
}

export function Shield({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M12 3l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V6l7-3z" strokeLinejoin="round" />
    </svg>
  );
}

export function Gauge({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M12 21a9 9 0 1 1 9-9" />
      <path d="M12 12l4-3" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Steel({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="3" y="7" width="18" height="12" rx="1" />
      <path d="M3 11h18M8 7v-2M16 7v-2" />
    </svg>
  );
}

export function Wrench({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4l-3 3-2-2 3-3z" strokeLinejoin="round" />
    </svg>
  );
}

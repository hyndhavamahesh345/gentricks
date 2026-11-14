export function GentricksLogo({ className = 'brand-logo' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="85 125 220 125"
      className={className}
      role="img"
      aria-label="GENTRICKS logo"
      style={{ overflow: 'visible', display: 'block' }}
    >
      {/* Main Gentricks Yellow Circle */}
      <circle cx="146.65" cy="187.5" r="55.03" fill="#FFDE00" />
      {/* Signature Floating Yellow Accent Dot */}
      <circle cx="290.40" cy="200.53" r="7.03" fill="#FFDE00" />
      {/* Black GEN Inside Circle */}
      <text
        x="106.62"
        y="198.5"
        fill="#000000"
        style={{
          fontFamily: "'Syne', 'Space Grotesk', -apple-system, sans-serif",
          fontWeight: 900,
          fontSize: '34.44px',
          letterSpacing: '-0.5px',
        }}
      >
        GEN
      </text>
      {/* White TRICKS Outside Circle */}
      <text
        x="187.5"
        y="195.0"
        fill="#FFFFFF"
        style={{
          fontFamily: "'Syne', 'Space Grotesk', -apple-system, sans-serif",
          fontWeight: 800,
          fontSize: '23.13px',
          letterSpacing: '0.5px',
        }}
      >
        TRICKS
      </text>
    </svg>
  );
}

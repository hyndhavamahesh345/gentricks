export function GentricksLogo({ className = 'brand-logo' }: { className?: string }) {
  return (
    <img
      src="/gentricks-logo.png"
      alt="GENTRICKS"
      className={className}
      style={{ display: 'block', objectFit: 'contain' }}
    />
  );
}
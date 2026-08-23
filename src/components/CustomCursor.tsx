import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = target.closest('a, button, input, select, textarea, [role="button"], .interactive');
        setIsHovering(!!isClickable);
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  useEffect(() => {
    let animFrame: number;
    const followCursor = () => {
      setTrailingPos(prev => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
      }));
      animFrame = requestAnimationFrame(followCursor);
    };
    animFrame = requestAnimationFrame(followCursor);
    return () => cancelAnimationFrame(animFrame);
  }, [position]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision yellow center dot */}
      <div
        className="fixed pointer-events-none z-[9999] w-2 h-2 rounded-full bg-gentricks-yellow transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
        }}
      />
      {/* Trailing smooth magnetic aura */}
      <div
        className="fixed pointer-events-none z-[9998] rounded-full border border-gentricks-yellow/40 transition-all duration-150 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          width: isHovering ? '48px' : '28px',
          height: isHovering ? '48px' : '28px',
          backgroundColor: isHovering ? 'rgba(255, 222, 0, 0.12)' : 'transparent',
          boxShadow: isHovering ? '0 0 20px rgba(255, 222, 0, 0.3)' : 'none',
        }}
      />
    </>
  );
};

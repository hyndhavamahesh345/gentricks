import { useEffect } from 'react';

export function useStackingSheets() {
  useEffect(() => {
    // 1. Calculate Stacking Sheet Top Offsets
    const updateSheetOffsets = () => {
      const sheets = document.querySelectorAll<HTMLElement>('main > section.stack-sheet');
      const vh = window.innerHeight;

      sheets.forEach((sheet) => {
        const offset = Math.min(0, vh - sheet.offsetHeight);
        sheet.style.top = `${offset}px`;
      });
    };

    updateSheetOffsets();
    window.addEventListener('resize', updateSheetOffsets, { passive: true });

    // 2. IntersectionObserver for Scroll Reveals (.rv -> .in-view)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      document.querySelectorAll('.rv').forEach((el) => {
        el.classList.add('in-view');
      });
      return () => {
        window.removeEventListener('resize', updateSheetOffsets);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.15,
      }
    );

    const revealElements = document.querySelectorAll('.rv');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('resize', updateSheetOffsets);
      observer.disconnect();
    };
  }, []);
}

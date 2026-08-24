import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useStackingSheets() {
  useEffect(() => {
    // 1. Calculate Stacking Sheet Top Offsets
    const sheets = gsap.utils.toArray<HTMLElement>('main > section.stack-sheet');

    // 2. GSAP ScrollTrigger for 3D Card Stacking Scale & Depth Effect
    const triggers: ScrollTrigger[] = [];

    sheets.forEach((sheet, i) => {
      const nextSheet = sheets[i + 1];
      if (nextSheet) {
        const trigger = ScrollTrigger.create({
          trigger: nextSheet,
          start: 'top bottom',
          end: 'top top',
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const scale = 1 - progress * 0.05; // Smooth 1 -> 0.95 scale down
            const opacity = 1 - progress * 0.45; // Smooth 1 -> 0.55 dim
            const borderRadius = progress * 20; // 0px -> 20px rounded card depth

            gsap.set(sheet, {
              scale: scale,
              opacity: opacity,
              borderRadius: `${borderRadius}px`,
              transformOrigin: 'center top',
            });
          },
        });
        triggers.push(trigger);
      }
    });

    // 3. IntersectionObserver for Scroll Reveals (.rv, .rv-scale -> .in-view)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      document.querySelectorAll('.rv, .rv-scale').forEach((el) => {
        el.classList.add('in-view');
      });
      return () => {
        triggers.forEach((t) => t.kill());
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
        rootMargin: '50px 0px -5% 0px',
        threshold: 0.02,
      }
    );

    const revealElements = document.querySelectorAll('.rv, .rv-scale');
    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('in-view');
      }
      observer.observe(el);
    });

    return () => {
      triggers.forEach((t) => t.kill());
      observer.disconnect();
    };
  }, []);
}

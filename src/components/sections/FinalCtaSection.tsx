import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface FinalCtaSectionProps {
  onOpenModal: (type: string) => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenModal }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const yellowOrbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        yellowOrbRef.current,
        { scale: 0.5, opacity: 0.1 },
        {
          scale: 1.8,
          opacity: 0.35,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom bottom',
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-36 px-6 bg-black overflow-hidden flex items-center justify-center text-center border-t border-white/10"
    >
      {/* Expanding Yellow Sphere Climax */}
      <div
        ref={yellowOrbRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-gentricks-yellow blur-[140px] pointer-events-none z-0"
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gentricks-yellow bg-gentricks-yellow/10 border border-gentricks-yellow/20 px-4 py-1.5 rounded-full mb-8">
          The Future Belongs To Builders
        </div>

        <h2 className="font-display font-black text-4xl sm:text-6xl md:text-8xl uppercase tracking-tight text-white mb-6 leading-none">
          THE NEXT GENERATION <br />
          <span className="text-gentricks-yellow">IS BUILDING.</span>
        </h2>

        <p className="font-body text-lg sm:text-2xl text-zinc-300 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
          And there is a place for you in it.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenModal('join')}
            className="w-full sm:w-auto px-10 py-4 rounded-md bg-gentricks-yellow text-black font-display font-bold text-sm uppercase tracking-wider shadow-yellow-glow hover:bg-gentricks-yellowHover hover:shadow-yellow-glow-lg transition-all duration-300 transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
          >
            JOIN GENTRICKS
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href="#contact"
            className="w-full sm:w-auto px-10 py-4 rounded-md bg-transparent border border-white/20 text-white font-display font-bold text-sm uppercase tracking-wider hover:border-gentricks-yellow hover:text-gentricks-yellow hover:bg-gentricks-yellow/10 transition-all duration-300 transform hover:-translate-y-0.5 inline-flex items-center justify-center"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </section>
  );
};

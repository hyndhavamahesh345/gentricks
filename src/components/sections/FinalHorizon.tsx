import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FinalHorizonProps {
  onOpenModal: (type: string) => void;
}

export const FinalHorizon: React.FC<FinalHorizonProps> = ({ onOpenModal }) => {
  return (
    <section
      className="stack-sheet sheet-9 relative flex flex-col justify-between items-center min-h-screen bg-black text-white px-6 sm:px-10 lg:px-16 py-28 overflow-hidden text-center"
      id="final"
      aria-label="Final Brand Statement"
    >
      {/* Subtle Yellow Accent Light Halo (Quiet, not overwhelming) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-gentricks-yellow/[0.08] rounded-full blur-[140px] pointer-events-none" />

      {/* Top Eyebrow with Tiny Yellow Mark */}
      <div className="rv inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-zinc-400 relative z-10">
        <span className="w-1.5 h-1.5 rounded-full bg-gentricks-yellow" />
        09 // Purpose
      </div>

      {/* Center Statement & Clean CTA (Intentional Pure Black Negative Space) */}
      <div className="relative z-10 max-w-3xl mx-auto my-auto py-12">
        <p className="rv rv-delay-1 font-mono text-xs uppercase tracking-widest text-zinc-500 mb-4 font-medium">
          Great things take time.
        </p>

        <h2 className="rv rv-delay-2 font-display font-medium text-3xl sm:text-5xl md:text-6xl tracking-tight text-white mb-8 max-w-2xl mx-auto leading-tight">
          We're building this with purpose.
        </h2>

        <div className="rv rv-delay-3 flex justify-center">
          <button
            onClick={() => onOpenModal('join')}
            className="px-8 py-3.5 rounded-md bg-gentricks-yellow text-black font-display font-semibold text-xs sm:text-sm tracking-wide hover:bg-gentricks-yellowHover transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2 shadow-sm"
          >
            JOIN GENTRICKS
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Final Brand Logo Resolution Card (Quiet and Complete) */}
      <div className="rv rv-delay-4 relative z-10 p-6 sm:p-8 rounded-2xl bg-zinc-950/80 border border-white/[0.08] backdrop-blur-md shadow-2xl flex flex-col items-center max-w-sm w-full">
        <img
          src="/assets/logo.svg"
          alt="Gentricks"
          className="h-8 sm:h-9 w-auto drop-shadow-2xl mb-3"
        />
        <div className="font-mono text-[10px] uppercase tracking-widest text-gentricks-yellow font-semibold">
          CONNECT · CREATE · LEAD
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FinalHorizonProps {
  onOpenModal: (type: string) => void;
}

export const FinalHorizon: React.FC<FinalHorizonProps> = ({ onOpenModal }) => {
  return (
    <section
      className="stack-sheet sheet-8 relative flex flex-col justify-between items-center min-h-screen bg-black text-white px-6 sm:px-10 lg:px-16 py-28 overflow-hidden text-center"
      id="final"
      aria-label="Join & Final Horizon"
    >
      {/* Subtle Yellow Accent Light Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-gentricks-yellow/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Eyebrow */}
      <div className="rv inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-zinc-400 relative z-10">
        <span className="w-1.5 h-1.5 rounded-full bg-gentricks-yellow" />
        08 // Join The Ecosystem
      </div>

      {/* Center CTA Section */}
      <div className="relative z-10 max-w-3xl mx-auto my-auto py-12">
        <h2 className="rv rv-delay-1 font-display font-medium text-4xl sm:text-5xl md:text-6xl tracking-tight text-white mb-4">
          Build what comes next.
        </h2>

        <p className="rv rv-delay-2 font-body text-base sm:text-lg text-zinc-400 max-w-lg mx-auto mb-8 font-normal">
          Join the Gentricks ecosystem to connect with fellow youth innovators, founders, engineers, and creators.
        </p>

        <div className="rv rv-delay-3 flex justify-center">
          <button
            onClick={() => onOpenModal('join')}
            className="px-8 py-3.5 rounded-md bg-gentricks-yellow text-black font-display font-semibold text-xs sm:text-sm tracking-wide hover:bg-gentricks-yellowHover transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2 shadow-sm"
          >
            Join Gentricks
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Final Brand Resolution Card */}
      <div className="rv rv-delay-4 relative z-10 p-6 sm:p-8 rounded-2xl bg-zinc-950/70 border border-white/[0.08] backdrop-blur-md shadow-2xl flex flex-col items-center max-w-md w-full">
        <img
          src="/assets/logo.svg"
          alt="Gentricks"
          className="h-8 sm:h-9 w-auto drop-shadow-2xl mb-3"
        />
        <div className="font-body text-xs text-zinc-400">
          Great things take time. We're building this with purpose.
        </div>
      </div>
    </section>
  );
};

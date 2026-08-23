import React from 'react';
import { ArrowRight } from 'lucide-react';
import { editorialImages } from '../../config/editorialImages';

interface JoinSectionProps {
  onOpenModal: (type: string) => void;
}

export const JoinSection: React.FC<JoinSectionProps> = ({ onOpenModal }) => {
  return (
    <section
      className="stack-sheet sheet-8 relative flex items-center min-h-screen bg-gentricks-deep text-white px-6 sm:px-10 lg:px-16 py-28 overflow-hidden"
      id="join"
      aria-label="Join Gentricks"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: CTA Dominant (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <div className="rv inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gentricks-yellow" />
            08 // Join The Ecosystem
          </div>

          <h2 className="rv rv-delay-1 font-display font-medium text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight text-white mb-4">
            Build what comes next.
          </h2>

          <p className="rv rv-delay-2 font-body text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed mb-8 font-normal">
            Join the Gentricks ecosystem to connect with fellow youth innovators, founders, engineers, and creators.
          </p>

          <div className="rv rv-delay-3">
            <button
              onClick={() => onOpenModal('join')}
              className="px-8 py-3.5 rounded-md bg-gentricks-yellow text-black font-display font-semibold text-xs sm:text-sm tracking-wide hover:bg-gentricks-yellowHover transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2 shadow-sm"
            >
              Join Gentricks
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Small Atmospheric Visual (Occupies 25-35% of composition, wide crop) */}
        <div className="lg:col-span-5 rv-scale">
          <div className="relative rounded-xl overflow-hidden border border-white/[0.1] bg-zinc-950 shadow-2xl group">
            <img
              src={editorialImages.join}
              alt="Creative technology studio evening workspace"
              className="w-full h-full object-cover aspect-[16/10] grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-zinc-400 font-mono text-[10px] uppercase tracking-wider">
              <span>08 / Creative Studio</span>
              <span className="text-zinc-500">Collaborative Night Hub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

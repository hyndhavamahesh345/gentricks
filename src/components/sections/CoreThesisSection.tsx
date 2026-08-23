import React from 'react';
import { ArrowRight } from 'lucide-react';
import { editorialImages } from '../../config/editorialImages';

interface CoreThesisSectionProps {
  onOpenModal?: (type: string) => void;
}

export const CoreThesisSection: React.FC<CoreThesisSectionProps> = ({ onOpenModal }) => {
  return (
    <section
      className="stack-sheet sheet-2 relative flex items-center min-h-screen bg-gentricks-deep text-white px-6 sm:px-10 lg:px-16 py-28 overflow-hidden"
      id="idea"
      aria-label="The Idea"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Framed Editorial Image (4:3 Crop) */}
        <div className="lg:col-span-5 order-2 lg:order-1 rv-scale">
          <div className="relative rounded-xl overflow-hidden border border-white/[0.1] bg-zinc-950 shadow-2xl group">
            <img
              src={editorialImages.idea}
              alt="Hands prototyping and sketching ideas"
              className="w-full h-full object-cover aspect-[4/3] grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-zinc-400 font-mono text-[10px] uppercase tracking-wider">
              <span>02 / The Philosophy</span>
              <span className="text-zinc-500">Zero to One</span>
            </div>
          </div>
        </div>

        {/* Right Column: Quiet Editorial Typography */}
        <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start text-left">
          <div className="rv inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gentricks-yellow" />
            02 // The Core Idea
          </div>

          <h2 className="rv rv-delay-1 font-display font-medium text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.18] text-zinc-200 mb-6 max-w-2xl">
            The next generation shouldn't just wait for opportunities.
          </h2>

          <div className="rv rv-delay-2 mb-6">
            <p className="font-display font-semibold text-2xl sm:text-3xl text-gentricks-yellow tracking-tight">
              They should create them.
            </p>
          </div>

          <p className="rv rv-delay-3 font-body text-base text-zinc-400 max-w-xl leading-relaxed mb-8">
            We are building an ecosystem where young engineers, designers, researchers, and creators are given direct leverage to prototype, launch, and lead meaningful initiatives without waiting for permission.
          </p>

          {onOpenModal && (
            <div className="rv rv-delay-4">
              <button
                onClick={() => onOpenModal('join')}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-gentricks-yellow transition-colors group"
              >
                <span>Read our founding manifesto</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

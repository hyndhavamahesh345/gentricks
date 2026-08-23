import React from 'react';
import { ArrowRight } from 'lucide-react';

interface VisualStorySceneProps {
  onOpenModal?: (type: string) => void;
}

export const VisualStoryScene: React.FC<VisualStorySceneProps> = ({ onOpenModal }) => {
  return (
    <section
      className="stack-sheet sheet-6 relative flex items-center min-h-screen bg-gentricks-deep text-white px-6 sm:px-10 lg:px-16 py-28 overflow-hidden"
      id="build"
      aria-label="Build & Engineering"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Framed Editorial Image */}
        <div className="lg:col-span-5 order-2 lg:order-1 rv-scale">
          <div className="relative rounded-xl overflow-hidden border border-white/[0.1] bg-zinc-950 shadow-2xl">
            <img
              src="/assets/hardware_lab.jpg"
              alt="Hardware and Prototyping Lab"
              className="w-full h-full object-cover aspect-[4/3] grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-zinc-400 font-mono text-[10px] uppercase tracking-wider">
              <span>06 / Technical Lab</span>
              <span className="text-zinc-500">Hardware & Code</span>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Typography */}
        <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start text-left">
          <div className="rv inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gentricks-yellow" />
            06 // Build & Systems
          </div>

          <h2 className="rv rv-delay-1 font-display font-medium text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight text-white mb-6">
            From raw curiosity to production architectures.
          </h2>

          <p className="rv rv-delay-2 font-body text-base text-zinc-400 max-w-xl leading-relaxed mb-6">
            We provide young engineers with direct access to technical sprints, peer code reviews, open-source repositories, and hardware prototyping tracks.
          </p>

          <p className="rv rv-delay-3 font-body text-xs sm:text-sm text-zinc-500 max-w-xl leading-relaxed mb-8">
            Whether working on autonomous systems, distributed backends, or modern AI agents, Gentricks accelerates the pathway from project to production.
          </p>

          {onOpenModal && (
            <div className="rv rv-delay-4">
              <button
                onClick={() => onOpenModal('builder')}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-gentricks-yellow transition-colors group"
              >
                <span>Submit a project idea</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

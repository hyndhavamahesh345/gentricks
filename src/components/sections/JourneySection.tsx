import React from 'react';
import { editorialImages } from '../../config/editorialImages';

interface Stage {
  step: string;
  name: string;
  desc: string;
}

const stages: Stage[] = [
  { step: '01', name: 'Learn', desc: 'Explore systems engineering, AI research, and modern problem solving without academic delay.' },
  { step: '02', name: 'Connect', desc: 'Meet peers, designers, and technical co-founders who share the ambition to build.' },
  { step: '03', name: 'Build', desc: 'Transform concepts into functional software codebases, prototypes, and hardware rigs.' },
  { step: '04', name: 'Create', desc: 'Fuse engineering with cinematic design, visual identity, and compelling storytelling.' },
  { step: '05', name: 'Launch', desc: 'Ship production-ready solutions to live users and iterate based on real feedback.' },
  { step: '06', name: 'Lead', desc: 'Create opportunities for upcoming cohorts and build enduring technological initiatives.' },
];

export const JourneySection: React.FC = () => {
  return (
    <section
      className="stack-sheet sheet-4 relative flex items-center min-h-screen bg-gentricks-deep text-white px-6 sm:px-10 lg:px-16 py-28 overflow-hidden"
      id="journey"
      aria-label="The Journey"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <div className="rv inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gentricks-yellow" />
              04 // The Pathway
            </div>
            <h2 className="rv rv-delay-1 font-display font-medium text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
              The builder journey.
            </h2>
          </div>
          <p className="rv rv-delay-2 font-body text-xs sm:text-sm text-zinc-400 max-w-sm font-normal">
            A linear progression designed to take builders from foundational curiosity to high-leverage execution.
          </p>
        </div>

        {/* Asymmetric Split: 6-Stage Linear Progression on Left (7 cols) + 1:1 Square Workbench Visual on Right (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: 6-Step Linear Flow */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
            {stages.map((stage, idx) => (
              <div
                key={stage.step}
                className={`rv rv-delay-${Math.min(idx + 1, 5)} flex flex-col items-start text-left border-l border-white/[0.08] pl-4 sm:pl-5`}
              >
                <span className="font-mono text-xs text-zinc-500 font-medium mb-1.5">
                  {stage.step}
                </span>
                <h3 className="font-display font-medium text-lg sm:text-xl text-zinc-200 mb-1.5">
                  {stage.name}
                </h3>
                <p className="font-body text-xs text-zinc-400 leading-relaxed font-normal">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right: 1:1 Square Editorial Visual (Workbench: Idea → Execution) */}
          <div className="lg:col-span-5 rv-scale">
            <div className="relative rounded-xl overflow-hidden border border-white/[0.1] bg-zinc-950 shadow-2xl aspect-square group">
              <img
                src={editorialImages.journey}
                alt="Engineering workbench with sketches, electronics, and laptop"
                className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-zinc-400 font-mono text-[10px] uppercase tracking-wider">
                <span>04 / Experimentation</span>
                <span className="text-zinc-500">Idea to Prototype</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

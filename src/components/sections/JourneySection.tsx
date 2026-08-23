import React from 'react';

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
      <div className="max-w-6xl mx-auto w-full relative z-10">
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

        {/* 6-Step Clean Progression Grid (No bulky cards, just thin editorial structure) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {stages.map((stage, idx) => (
            <div
              key={stage.step}
              className={`rv rv-delay-${Math.min(idx + 1, 5)} flex flex-col items-start text-left border-l border-white/[0.08] pl-5 sm:pl-6`}
            >
              <span className="font-mono text-xs text-zinc-500 font-medium mb-2">
                {stage.step}
              </span>
              <h3 className="font-display font-medium text-xl sm:text-2xl text-zinc-200 mb-2">
                {stage.name}
              </h3>
              <p className="font-body text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                {stage.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

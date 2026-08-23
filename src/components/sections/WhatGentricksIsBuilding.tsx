import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface WhatGentricksIsBuildingProps {
  onOpenModal: (type: string) => void;
}

interface OpportunityTrack {
  title: string;
  category: string;
  brief: string;
  status: string;
}

const tracks: OpportunityTrack[] = [
  { title: 'Internships & Co-ops', category: 'Talent', brief: 'Connecting high-potential youth builders with visionary tech startups.', status: 'Active Pathways' },
  { title: 'Builder Fellowships', category: 'Grants', brief: 'Direct support and mentorship for high-leverage software & hardware projects.', status: 'Upcoming' },
  { title: 'Hackathons & Sprints', category: 'Competitions', brief: 'Fast-paced, high-impact product engineering and innovation sprints.', status: 'Upcoming' },
  { title: 'Project Incubation', category: 'Venture', brief: 'Guidance and peer architecture reviews to transition prototypes to MVP status.', status: 'Active' },
  { title: 'Startup Acceleration', category: 'Programs', brief: 'Venture formation, technical validation, and angel connection tracks.', status: 'Upcoming' },
  { title: 'Creator Residencies', category: 'Media', brief: 'Collaborative residencies for visual storytellers and UI/UX designers.', status: 'Active' },
];

export const WhatGentricksIsBuilding: React.FC<WhatGentricksIsBuildingProps> = ({ onOpenModal }) => {
  return (
    <section
      className="stack-sheet sheet-7 relative flex items-center min-h-screen bg-black text-white px-6 sm:px-10 lg:px-16 py-28 overflow-hidden"
      id="opportunities"
      aria-label="Opportunities & Programs"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <div className="rv inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gentricks-yellow" />
              07 // Pathways & Programs
            </div>
            <h2 className="rv rv-delay-1 font-display font-medium text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
              Opportunities for builders.
            </h2>
          </div>
          <p className="rv rv-delay-2 font-body text-xs sm:text-sm text-zinc-400 max-w-sm font-normal">
            Merit-based pathways designed to connect young talent with real-world problems, teams, and backing.
          </p>
        </div>

        {/* 2-Column Clean Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {tracks.map((t, idx) => (
            <div
              key={t.title}
              onClick={() => onOpenModal('join')}
              className={`rv rv-delay-${Math.min(idx + 1, 4)} p-6 rounded-xl border border-white/[0.08] hover:border-white/[0.2] bg-zinc-950/60 hover:bg-zinc-950 transition-all duration-200 cursor-pointer flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                    {t.category}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
                    {t.status}
                  </span>
                </div>

                <h3 className="font-display font-medium text-lg sm:text-xl text-zinc-200 group-hover:text-white transition-colors mb-2">
                  {t.title}
                </h3>
                <p className="font-body text-xs text-zinc-400 leading-relaxed">
                  {t.brief}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/[0.04] flex items-center justify-between text-xs text-zinc-500 group-hover:text-gentricks-yellow transition-colors">
                <span className="font-mono text-[10px] uppercase">Join Waitlist</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

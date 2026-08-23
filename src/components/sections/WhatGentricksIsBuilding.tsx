import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { editorialImages } from '../../config/editorialImages';

interface WhatGentricksIsBuildingProps {
  onOpenModal: (type: string) => void;
}

interface OpportunityTrack {
  num: string;
  title: string;
  desc: string;
}

const tracks: OpportunityTrack[] = [
  { num: '01', title: 'Internships', desc: 'Opportunities to gain practical experience with early-stage tech teams.' },
  { num: '02', title: 'Jobs', desc: 'Early-career roles and technical opportunities across software and hardware.' },
  { num: '03', title: 'Fellowships', desc: 'Direct grant programs and mentorship for ambitious young builders.' },
  { num: '04', title: 'Competitions', desc: 'Challenges where original ideas become functional working prototypes.' },
  { num: '05', title: 'Projects', desc: 'Collaborative squads engineering open-source and proprietary systems.' },
  { num: '06', title: 'Startup Programs', desc: 'Structured venture incubation for youth-led technical innovations.' },
  { num: '07', title: 'Hackathons', desc: 'Fast-paced weekend sprints to experiment, build, and deploy software.' },
  { num: '08', creator: true, title: 'Creator Opportunities', desc: 'Residencies for UI/UX designers, 3D artists, and digital storytellers.' } as any,
];

export const WhatGentricksIsBuilding: React.FC<WhatGentricksIsBuildingProps> = ({ onOpenModal }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      className="stack-sheet sheet-7 relative flex items-center min-h-screen bg-black text-white px-6 sm:px-10 lg:px-16 py-28 overflow-hidden"
      id="opportunities"
      aria-label="Opportunities & Pathways"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
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

        {/* 2-Column Split: 01-08 Editorial List (7 cols) + Tall Portrait Image (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Clean 01-08 Editorial List with Thin Separators */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-white/[0.08]">
            {tracks.map((t, idx) => {
              const isHovered = hoveredIdx === idx;
              return (
                <div
                  key={t.num}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  onClick={() => onOpenModal('join')}
                  className={`rv rv-delay-${Math.min(idx + 1, 5)} py-3 sm:py-3.5 flex items-center justify-between cursor-pointer transition-all duration-200 group ${
                    isHovered ? 'pl-3 bg-white/[0.03]' : 'hover:pl-2'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs text-zinc-500 font-medium w-5 pt-0.5">
                      {t.num}
                    </span>
                    <div>
                      <h3 className={`font-display font-medium text-sm sm:text-base transition-colors ${
                        isHovered ? 'text-white' : 'text-zinc-200 group-hover:text-white'
                      }`}>
                        {t.title}
                      </h3>
                      <p className="font-body text-[11px] sm:text-xs text-zinc-400 mt-0.5 line-clamp-1">
                        {t.desc}
                      </p>
                    </div>
                  </div>

                  <div className={`w-5 h-5 flex items-center justify-center transition-colors shrink-0 ${
                    isHovered ? 'text-gentricks-yellow' : 'text-zinc-500 group-hover:text-gentricks-yellow'
                  }`}>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: ONE Tall Portrait Editorial Visual (opportunities_hub.jpg) */}
          <div className="lg:col-span-5 rv-scale">
            <div className="relative rounded-xl overflow-hidden border border-white/[0.1] bg-zinc-950 shadow-2xl aspect-[3/4] group">
              <img
                src={editorialImages.opportunities}
                alt="Young builders in innovation build sprint"
                className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-zinc-400 font-mono text-[10px] uppercase tracking-wider z-10">
                <span>07 / Build Sprints</span>
                <span className="text-gentricks-yellow uppercase font-semibold">Active & Upcoming</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

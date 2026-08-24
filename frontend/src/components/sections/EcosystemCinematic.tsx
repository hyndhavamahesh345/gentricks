import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { editorialImages } from '../../config/editorialImages';

interface EcosystemCinematicProps {
  onOpenModal: (type: string) => void;
}

interface EcosystemRow {
  num: string;
  key: keyof typeof editorialImages.ecosystem;
  name: string;
  category: string;
  description: string;
}

const ecosystemRows: EcosystemRow[] = [
  { num: '01', key: 'community', name: 'Community', category: 'Network', description: 'Autonomous cohorts, campus hubs, and peer circles of young builders.' },
  { num: '02', key: 'technology', name: 'Technology & Innovation', category: 'Engineering', description: 'Applied machine intelligence, distributed systems, and modern software architectures.' },
  { num: '03', key: 'build', name: 'Build', category: 'Execution', description: 'Hands-on sprints turning complex ideas into functional prototypes and deployed products.' },
  { num: '04', key: 'creators', name: 'Creators', category: 'Media & Design', description: 'Designers, filmmakers, and digital storytellers defining modern product culture.' },
  { num: '05', key: 'startups', name: 'Startups', category: 'Venture', description: 'Early-stage validation, technical architecture, and venture formation for youth founders.' },
  { num: '06', key: 'opportunities', name: 'Opportunities', category: 'Talent', description: 'Curated internships, builder fellowships, hackathons, and high-impact talent pathways.' },
  { num: '07', key: 'partnerships', name: 'Partnerships', category: 'Alliances', description: 'Institutional collaboration with universities, tech enterprises, and incubators.' },
];

export const EcosystemCinematic: React.FC<EcosystemCinematicProps> = ({ onOpenModal }) => {
  const [activeKey, setActiveKey] = useState<keyof typeof editorialImages.ecosystem>('community');

  return (
    <section
      className="stack-sheet sheet-3 relative flex items-center min-h-screen bg-black text-white px-6 sm:px-10 lg:px-16 py-28 overflow-hidden"
      id="ecosystem"
      aria-label="The Ecosystem"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <div className="rv inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gentricks-yellow" />
              03 // Ecosystem
            </div>
            <h2 className="rv rv-delay-1 font-display font-medium text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
              Seven interconnected pillars.
            </h2>
          </div>
          <p className="rv rv-delay-2 font-body text-xs sm:text-sm text-zinc-400 max-w-sm font-normal">
            A comprehensive infrastructure engineered to support builders across technical, creative, and entrepreneurial dimensions.
          </p>
        </div>

        {/* 2-Column Split: Editorial List on Left (7 cols) + Interactive Visual on Right (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Editorial Numbered Rows */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-white/[0.08]">
            {ecosystemRows.map((row, idx) => {
              const isActive = activeKey === row.key;
              return (
                <div
                  key={row.num}
                  onMouseEnter={() => setActiveKey(row.key)}
                  onClick={() => onOpenModal('join')}
                  className={`rv rv-delay-${Math.min(idx + 1, 5)} py-3.5 sm:py-4 flex items-center justify-between cursor-pointer transition-all duration-200 group ${
                    isActive ? 'pl-3 bg-white/[0.03]' : 'hover:pl-2'
                  }`}
                >
                  {/* Number & Title */}
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="font-mono text-xs text-zinc-500 font-medium w-5">
                      {row.num}
                    </span>
                    <h3 className={`font-display font-medium text-base sm:text-xl transition-colors ${
                      isActive ? 'text-white' : 'text-zinc-300 group-hover:text-white'
                    }`}>
                      {row.name}
                    </h3>
                  </div>

                  {/* Category & Arrow */}
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 hidden sm:inline-block">
                      {row.category}
                    </span>
                    <div className={`w-6 h-6 flex items-center justify-center transition-colors shrink-0 ${
                      isActive ? 'text-gentricks-yellow' : 'text-zinc-500 group-hover:text-gentricks-yellow'
                    }`}>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Interactive Editorial Hover Visual (4:3 / 1:1 Framed Stage) */}
          <div className="lg:col-span-5 rv-scale">
            <div className="relative rounded-xl overflow-hidden border border-white/[0.1] bg-zinc-950 shadow-2xl aspect-[4/3] group">
              {ecosystemRows.map((row) => (
                <img
                  key={row.key}
                  src={editorialImages.ecosystem[row.key]}
                  alt={row.name}
                  className={`absolute inset-0 w-full h-full object-cover grayscale-[15%] transition-all duration-500 ease-out ${
                    activeKey === row.key
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-[0.97] pointer-events-none'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-zinc-400 font-mono text-[10px] uppercase tracking-wider z-10">
                <span className="text-zinc-300">03 // Pillar Active</span>
                <span className="text-gentricks-yellow uppercase font-semibold">
                  {ecosystemRows.find((r) => r.key === activeKey)?.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

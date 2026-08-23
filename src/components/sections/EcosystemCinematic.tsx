import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface EcosystemCinematicProps {
  onOpenModal: (type: string) => void;
}

interface EcosystemRow {
  num: string;
  name: string;
  category: string;
  description: string;
}

const ecosystemRows: EcosystemRow[] = [
  { num: '01', name: 'Community', category: 'Network', description: 'Autonomous cohorts, campus hubs, and peer circles of young builders.' },
  { num: '02', name: 'Technology & Innovation', category: 'Engineering', description: 'Applied machine intelligence, distributed systems, and modern software architectures.' },
  { num: '03', name: 'Build', category: 'Execution', description: 'Hands-on sprints turning complex ideas into functional prototypes and deployed products.' },
  { num: '04', name: 'Creators', category: 'Media & Design', description: 'Designers, filmmakers, and digital storytellers defining modern product culture.' },
  { num: '05', name: 'Startups', category: 'Venture', description: 'Early-stage validation, technical architecture, and venture formation for youth founders.' },
  { num: '06', name: 'Opportunities', category: 'Talent', description: 'Curated internships, builder fellowships, hackathons, and high-impact talent pathways.' },
  { num: '07', name: 'Partnerships', category: 'Alliances', description: 'Institutional collaboration with universities, tech enterprises, and incubators.' },
];

export const EcosystemCinematic: React.FC<EcosystemCinematicProps> = ({ onOpenModal }) => {
  const [activeRow, setActiveRow] = useState<string | null>(null);

  return (
    <section
      className="stack-sheet sheet-3 relative flex items-center min-h-screen bg-black text-white px-6 sm:px-10 lg:px-16 py-28 overflow-hidden"
      id="ecosystem"
      aria-label="The Ecosystem"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
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

        {/* Editorial Numbered Rows */}
        <div className="flex flex-col divide-y divide-white/[0.08]">
          {ecosystemRows.map((row, idx) => {
            const isHovered = activeRow === row.num;
            return (
              <div
                key={row.num}
                onMouseEnter={() => setActiveRow(row.num)}
                onMouseLeave={() => setActiveRow(null)}
                onClick={() => onOpenModal('join')}
                className={`rv rv-delay-${Math.min(idx + 1, 5)} py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between cursor-pointer transition-all duration-200 group ${
                  isHovered ? 'pl-3 sm:pl-4 bg-white/[0.02]' : ''
                }`}
              >
                {/* Left: Number & Title */}
                <div className="flex items-center gap-4 sm:gap-8">
                  <span className="font-mono text-xs text-zinc-500 font-medium w-6">
                    {row.num}
                  </span>
                  <h3 className="font-display font-medium text-lg sm:text-2xl text-zinc-200 group-hover:text-white transition-colors">
                    {row.name}
                  </h3>
                </div>

                {/* Right: Description & Subtle Arrow */}
                <div className="flex items-center gap-6 mt-2 sm:mt-0">
                  <span className="font-body text-xs text-zinc-400 max-w-md hidden md:block group-hover:text-zinc-300 transition-colors">
                    {row.description}
                  </span>
                  <div className="w-6 h-6 flex items-center justify-center text-zinc-500 group-hover:text-gentricks-yellow transition-colors shrink-0">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

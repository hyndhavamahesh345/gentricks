import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CommunitySectionProps {
  onOpenModal: (type: string) => void;
}

const cohorts = [
  { name: 'Students', desc: 'Learners & Aspiring Builders', tag: 'Curiosity' },
  { name: 'Developers', desc: 'Software & Systems Engineers', tag: 'Code' },
  { name: 'Designers', desc: 'UI/UX & Product Craftsmen', tag: 'Craft' },
  { name: 'Creators', desc: 'Media, Video & Brand Architects', tag: 'Culture' },
  { name: 'Founders', desc: 'Early Stage Project Leads', tag: 'Venture' },
  { name: 'Entrepreneurs', desc: 'Operators & Problem Solvers', tag: 'Strategy' },
  { name: 'Mentors', desc: 'Industry Veterans & Guides', tag: 'Insight' },
  { name: 'Startups', desc: 'Scaling High-Velocity Teams', tag: 'Growth' },
  { name: 'Communities', desc: 'Campus & Regional Hubs', tag: 'Network' },
];

export const CommunitySection: React.FC<CommunitySectionProps> = ({ onOpenModal }) => {
  return (
    <section className="relative py-28 px-6 bg-gentricks-deep border-t border-white/5" id="community">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gentricks-yellow bg-gentricks-yellow/10 border border-gentricks-yellow/20 px-3.5 py-1.5 rounded-full mb-4">
            Our People
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white mb-4">
            PEOPLE BUILD <span className="text-gentricks-yellow">ECOSYSTEMS.</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-zinc-400">
            Gentricks is bringing together curious minds, skilled builders, and relentless innovators across multiple disciplines.
          </p>
        </div>

        {/* Dynamic Kinetic Cohorts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {cohorts.map((c) => (
            <div
              key={c.name}
              className="p-6 rounded-xl bg-gentricks-card border border-white/5 hover:border-gentricks-yellow/40 hover:bg-gentricks-cardHover transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-gentricks-yellow bg-gentricks-yellow/10 px-2 py-0.5 rounded border border-gentricks-yellow/20">
                  {c.tag}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-gentricks-yellow transition-colors" />
              </div>
              <h3 className="font-display font-black text-2xl uppercase tracking-tight text-white group-hover:text-gentricks-yellow transition-colors mb-1">
                {c.name}
              </h3>
              <p className="font-body text-sm text-zinc-400">
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => onOpenModal('join')}
            className="px-8 py-4 rounded-md bg-gentricks-yellow text-black font-display font-bold text-xs uppercase tracking-wider shadow-yellow-glow hover:bg-gentricks-yellowHover transition-all inline-flex items-center gap-2"
          >
            JOIN GENTRICKS
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

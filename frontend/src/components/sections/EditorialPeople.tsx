import React from 'react';
import { editorialImages } from '../../config/editorialImages';

interface Cohort {
  name: string;
  role: string;
}

const cohorts: Cohort[] = [
  { name: 'Builders', role: 'Software engineers, systems architects, and hardware tinkerers.' },
  { name: 'Creators', role: 'Designers, digital filmmakers, 3D artists, and visual storytellers.' },
  { name: 'Students', role: 'Ambitious undergraduate and high school innovators breaking boundaries.' },
  { name: 'Founders', role: 'Early-stage entrepreneurs building products for the next generation.' },
  { name: 'Mentors', role: 'Experienced operators and domain specialists guiding young squads.' },
  { name: 'Partners', role: 'Forward-looking institutions, universities, and venture ecosystems.' },
];

export const EditorialPeople: React.FC = () => {
  return (
    <section
      className="stack-sheet sheet-5 relative flex items-center min-h-screen bg-black text-white px-6 sm:px-10 lg:px-16 py-28 overflow-hidden"
      id="people"
      aria-label="People & Community"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Framed Editorial Photo (4:5 Crop, Authentic Collaboration) */}
        <div className="lg:col-span-5 order-2 lg:order-1 rv-scale">
          <div className="relative rounded-xl overflow-hidden border border-white/[0.1] bg-zinc-950 shadow-2xl group">
            <img
              src={editorialImages.people}
              alt="Young builders and creators collaborating"
              className="w-full h-full object-cover aspect-[4/5] grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-zinc-400 font-mono text-[10px] uppercase tracking-wider">
              <span>05 / The Collective</span>
              <span className="text-zinc-500">Autonomous Squads</span>
            </div>
          </div>
        </div>

        {/* Right Column: People & Cohorts */}
        <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start text-left">
          <div className="rv inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gentricks-yellow" />
            05 // The Community
          </div>

          <h2 className="rv rv-delay-1 font-display font-medium text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight text-white mb-6">
            A collective of future leaders.
          </h2>

          <p className="rv rv-delay-2 font-body text-base text-zinc-400 max-w-xl leading-relaxed mb-8">
            Gentricks brings together curious and ambitious talent across technical, design, and entrepreneurial fields to collaborate on meaningful problems.
          </p>

          {/* Cohorts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 w-full pt-4 border-t border-white/[0.08]">
            {cohorts.map((c, idx) => (
              <div key={c.name} className={`rv rv-delay-${Math.min(idx + 1, 4)} flex flex-col`}>
                <h4 className="font-display font-medium text-base sm:text-lg text-zinc-200 mb-1">
                  {c.name}
                </h4>
                <p className="font-body text-xs text-zinc-400 leading-relaxed">
                  {c.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

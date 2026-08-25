import React from 'react';
import { ArrowRight } from 'lucide-react';
import { editorialImages } from '../../config/editorialImages';

interface CinematicHeroProps {
  onOpenModal: (type: string) => void;
  onIntroComplete?: () => void;
}

export const CinematicHero: React.FC<CinematicHeroProps> = ({ onOpenModal }) => {
  return (
    <section
      className="stack-sheet sheet-1 relative flex items-center min-h-screen bg-black text-white px-6 sm:px-10 lg:px-16 py-28 overflow-hidden"
      id="hero"
      aria-label="Gentricks Hero"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Editorial Typography & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Eyebrow */}
          <div className="rv inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gentricks-yellow" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 font-medium">
              Youth-Driven Technology Ecosystem
            </span>
          </div>

          {/* Sophisticated Editorial Headline */}
          <h1 className="rv rv-delay-1 font-display font-medium text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.12] text-white mb-6 max-w-2xl">
            GenTricks — Where Young Builders Launch Their Startup Ideas.
          </h1>

          {/* Supporting Copy */}
          <p className="rv rv-delay-2 font-body text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed mb-8 font-normal">
            <strong className="text-white font-medium">GenTricks</strong> is a premier youth-driven startup ecosystem in India where engineers, designers, creators, and founders connect, build, launch, and lead. Discover internships, hackathons, incubation programs, and creator residencies.
          </p>

          {/* Buttons */}
          <div className="rv rv-delay-3 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenModal('join')}
              className="px-6 py-3 rounded-md bg-gentricks-yellow text-black font-display font-semibold text-xs tracking-wide hover:bg-gentricks-yellowHover transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2 shadow-sm"
            >
              Join Gentricks
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href="#idea"
              className="px-6 py-3 rounded-md bg-transparent border border-white/[0.15] text-white font-display font-medium text-xs tracking-wide hover:border-white/40 hover:text-white transition-all duration-200"
            >
              Explore
            </a>
          </div>
        </div>

        {/* Right Column: Editorial Framed Photograph (4:5 Crop) */}
        <div className="lg:col-span-5 rv-scale">
          <div className="relative rounded-xl overflow-hidden border border-white/[0.1] bg-zinc-950 shadow-2xl group">
            <img
              src={editorialImages.hero}
              alt="Gentricks young builders collaborating in a technology workshop"
              width="600"
              height="750"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover aspect-[4/5] grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-zinc-400 font-mono text-[10px] uppercase tracking-wider">
              <span>01 / The Movement</span>
              <span className="text-zinc-500">Autonomous Squads</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

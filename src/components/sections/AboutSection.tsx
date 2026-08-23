import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="relative py-28 px-6 bg-gentricks-deep border-t border-white/5" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gentricks-yellow bg-gentricks-yellow/10 border border-gentricks-yellow/20 px-3.5 py-1.5 rounded-full mb-4">
            About Gentricks
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white mb-4">
            ENGINEERED FOR <span className="text-gentricks-yellow">THE FUTURE.</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-zinc-400">
            Founded on the conviction that youth are not just users of technology — they are its rightful creators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-gentricks-card border border-white/5 hover:border-gentricks-yellow/30 transition-all duration-300">
            <span className="font-mono text-xs font-bold text-gentricks-yellow uppercase tracking-widest block mb-4">
              OUR VISION
            </span>
            <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight mb-4">
              Creators, Not Just Consumers
            </h3>
            <p className="font-body text-zinc-400 leading-relaxed">
              To build a strong ecosystem where the next generation doesn't just consume technology and opportunities — <strong className="text-gentricks-yellow font-semibold">they create them.</strong>
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gentricks-card border border-white/5 hover:border-gentricks-yellow/30 transition-all duration-300">
            <span className="font-mono text-xs font-bold text-gentricks-yellow uppercase tracking-widest block mb-4">
              OUR MISSION
            </span>
            <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight mb-4">
              The Four Pillars
            </h3>
            <p className="font-body text-zinc-400 leading-relaxed">
              <strong className="text-gentricks-yellow font-semibold">Connect people. Create opportunities. Build ideas. Launch startups.</strong> Providing the operational scaffolding for youth ambition.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gentricks-card border border-white/5 hover:border-gentricks-yellow/30 transition-all duration-300">
            <span className="font-mono text-xs font-bold text-gentricks-yellow uppercase tracking-widest block mb-4">
              OUR PHILOSOPHY
            </span>
            <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight mb-4">
              End-to-End Progression
            </h3>
            <p className="font-body text-zinc-400 leading-relaxed">
              <strong className="text-gentricks-yellow font-semibold">Learn → Connect → Build → Create → Launch → Lead.</strong> A rigorous, merit-driven journey from first line of code to founder status.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

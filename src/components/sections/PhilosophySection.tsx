import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stages = [
  {
    step: '01',
    name: 'LEARN',
    tag: 'FOUNDATION',
    desc: 'Explore knowledge, technology, skills, and new ideas. Deep-dive into technical masterclasses, emerging systems design, and modern problem solving.',
  },
  {
    step: '02',
    name: 'CONNECT',
    tag: 'NETWORK',
    desc: 'Meet people who share the ambition to create something meaningful. Find co-founders, collaborators, designers, and mentors who elevate your vision.',
  },
  {
    step: '03',
    name: 'BUILD',
    tag: 'EXECUTION',
    desc: 'Transform ideas and problems into projects, prototypes, and products. Get hands-on with engineering sprints, hackathons, and product architecture.',
  },
  {
    step: '04',
    name: 'CREATE',
    tag: 'EXPRESSION',
    desc: 'Create technology, content, experiences, brands, and opportunities. Fuse technical engineering with compelling design, storytelling, and visual identity.',
  },
  {
    step: '05',
    name: 'LAUNCH',
    tag: 'IMPACT',
    desc: 'Take ideas from concept to real-world execution. Ship to real users, gather early validation, deploy MVPs, and establish product-market feedback loops.',
  },
  {
    step: '06',
    name: 'LEAD',
    tag: 'EXPANSION',
    desc: 'Create opportunities and help shape what comes next. Mentor the next wave of builders, steer ecosystem initiatives, and launch scalable ventures.',
  },
];

export const PhilosophySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinWrapRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ScrollTrigger timeline for 6-stage morphing
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: pinWrapRef.current,
        scrub: 0.8,
        onUpdate: (self) => {
          const rawIdx = Math.floor(self.progress * stages.length);
          const stageIdx = Math.min(rawIdx, stages.length - 1);
          setActiveStage(stageIdx);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[320vh] bg-gentricks-black"
      id="philosophy"
    >
      <div
        ref={pinWrapRef}
        className="w-full h-screen relative flex flex-col justify-between py-24 px-6 overflow-hidden max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gentricks-yellow bg-gentricks-yellow/10 border border-gentricks-yellow/20 px-3.5 py-1.5 rounded-full mb-3">
            The Journey of a Builder
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            THE GENTRICKS <span className="text-gentricks-yellow">PHILOSOPHY</span>
          </h2>
        </div>

        {/* Dynamic Center Stage Morphing Viewport */}
        <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center min-h-[280px]">
          {stages.map((stage, idx) => {
            const isActive = idx === activeStage;
            const isPrev = idx < activeStage;

            return (
              <div
                key={stage.name}
                className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-700 ease-out pointer-events-none ${
                  isActive
                    ? 'opacity-100 scale-100 translate-y-0 blur-0'
                    : isPrev
                    ? 'opacity-0 scale-90 -translate-y-16 blur-sm'
                    : 'opacity-0 scale-110 translate-y-16 blur-sm'
                }`}
              >
                {/* Stage Number & Tag */}
                <div className="inline-flex items-center gap-3 mb-3">
                  <span className="font-mono text-sm font-bold text-gentricks-yellow">
                    STAGE {stage.step}
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase bg-white/10 text-zinc-300 border border-white/15">
                    {stage.tag}
                  </span>
                </div>

                {/* Massive Kinetic Stage Heading */}
                <h3 className="font-display font-black text-6xl sm:text-8xl md:text-9xl uppercase tracking-tight text-white mb-6">
                  {stage.name}
                </h3>

                {/* Stage Narrative Description */}
                <p className="font-body text-lg sm:text-xl text-zinc-300 max-w-2xl leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Horizontal Stepper Progress Indicator */}
        <div className="w-full max-w-3xl mx-auto">
          <div className="relative flex items-center justify-between">
            {/* Background Line */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 z-0" />
            
            {/* Active Filled Progress Line */}
            <div
              className="absolute top-1/2 left-0 h-[2px] bg-gentricks-yellow -translate-y-1/2 z-1 transition-all duration-500 shadow-yellow-glow"
              style={{
                width: `${(activeStage / (stages.length - 1)) * 100}%`,
              }}
            />

            {/* Stage Nodes */}
            {stages.map((stage, idx) => {
              const isPastOrActive = idx <= activeStage;
              const isCurrent = idx === activeStage;

              return (
                <div
                  key={stage.name}
                  className="relative z-10 flex flex-col items-center gap-2 group cursor-pointer"
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-500 ${
                      isCurrent
                        ? 'bg-gentricks-yellow text-black scale-125 shadow-yellow-glow ring-4 ring-gentricks-yellow/30'
                        : isPastOrActive
                        ? 'bg-gentricks-yellow/80 text-black'
                        : 'bg-zinc-900 border border-white/20 text-zinc-500'
                    }`}
                  >
                    {stage.step}
                  </div>
                  <span
                    className={`font-display text-xs font-black tracking-wider uppercase transition-colors hidden sm:block ${
                      isCurrent ? 'text-gentricks-yellow' : 'text-zinc-500'
                    }`}
                  >
                    {stage.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

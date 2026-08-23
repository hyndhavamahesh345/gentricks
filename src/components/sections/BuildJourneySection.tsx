import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface BuildJourneyProps {
  onOpenModal: (type: string) => void;
}

const buildStages = [
  {
    num: '01',
    name: 'IDEA',
    subtitle: 'Brainstorming & Scoping',
    points: [
      'Deep-dive into problem spaces and emerging market inefficiencies',
      'Peer feedback & cross-disciplinary brainstorm cohorts',
      'Initial feasibility and technical scoping review',
    ],
  },
  {
    num: '02',
    name: 'PROBLEM',
    subtitle: 'Pain Point Validation',
    points: [
      'Engage directly with end-users and enterprise stakeholders',
      'Analyze user friction, behavioral bottlenecks, and urgency',
      'Define core Value Proposition and quantifiable success metrics',
    ],
  },
  {
    num: '03',
    name: 'BUILD',
    subtitle: 'Rapid Prototyping',
    points: [
      'Full-stack architecture, database design, and UI wireframing',
      'Access to engineering templates, cloud credits, and technical mentors',
      'Intensive sprint cycles to develop functional core features',
    ],
  },
  {
    num: '04',
    name: 'VALIDATE',
    subtitle: 'Telemetry & Feedback',
    points: [
      'Deploy MVP to select cohort within the Gentricks community',
      'Measure retention, user engagement, and friction points',
      'Continuous sprint iterations based on real telemetry',
    ],
  },
  {
    num: '05',
    name: 'PRODUCT',
    subtitle: 'Polished Release',
    points: [
      'Production hardening: security, speed, and cross-platform polish',
      'Brand identity, landing page, and documentation creation',
      'Community demo day and ecosystem launch spotlight',
    ],
  },
  {
    num: '06',
    name: 'STARTUP',
    subtitle: 'Venture Formation',
    points: [
      'Legal incorporation, founder equity structuring, and IP assignment',
      'Introduction to early-stage angel syndicates and venture partners',
      'Go-To-Market execution, hiring co-founders, and initial scale',
    ],
  },
];

export const BuildJourneySection: React.FC<BuildJourneyProps> = ({ onOpenModal }) => {
  const [activeStage, setActiveStage] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        onUpdate: (self) => {
          const idx = Math.min(Math.floor(self.progress * buildStages.length), buildStages.length - 1);
          setActiveStage(idx);
          if (progressLineRef.current) {
            progressLineRef.current.style.width = `${self.progress * 100}%`;
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const currentData = buildStages[activeStage];

  return (
    <section ref={sectionRef} className="relative py-28 px-6 bg-gentricks-black border-t border-white/5" id="build">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gentricks-yellow bg-gentricks-yellow/10 border border-gentricks-yellow/20 px-3.5 py-1.5 rounded-full mb-4">
            From Concept to Scale
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white mb-4">
            HAVE AN IDEA? <br />
            <span className="text-gentricks-yellow">BUILD IT.</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-zinc-400">
            Gentricks provides the framework and resources to guide ambitious creators and engineers from raw concepts to validated, scalable startups.
          </p>
        </div>

        {/* Dynamic 6-Stage Progression Bar */}
        <div className="relative mb-12">
          {/* Background Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 z-0" />
          
          {/* Animated Glowing Yellow Laser Progress */}
          <div
            ref={progressLineRef}
            className="absolute top-1/2 left-0 h-[2px] bg-gentricks-yellow -translate-y-1/2 z-1 shadow-yellow-glow transition-all duration-300"
            style={{ width: `${((activeStage + 1) / buildStages.length) * 100}%` }}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
            {buildStages.map((st, idx) => {
              const isSelected = idx === activeStage;
              const isPassed = idx <= activeStage;

              return (
                <button
                  key={st.name}
                  onClick={() => setActiveStage(idx)}
                  className={`p-5 rounded-xl text-center border transition-all duration-300 ${
                    isSelected
                      ? 'bg-gentricks-cardHover border-gentricks-yellow shadow-yellow-glow -translate-y-1'
                      : isPassed
                      ? 'bg-gentricks-card border-gentricks-yellow/40 text-zinc-300'
                      : 'bg-zinc-950/80 border-white/10 text-zinc-500 hover:border-white/20'
                  }`}
                >
                  <div
                    className={`font-mono text-xs font-bold mb-1 ${
                      isSelected ? 'text-gentricks-yellow' : 'text-zinc-500'
                    }`}
                  >
                    {st.num}
                  </div>
                  <div
                    className={`font-display font-black text-base uppercase tracking-tight ${
                      isSelected ? 'text-white' : 'text-zinc-400'
                    }`}
                  >
                    {st.name}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Stage Inspector Box */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-gentricks-card border border-gentricks-yellow/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden mb-12">
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-gentricks-yellow/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
              <span className="font-mono text-xs font-bold text-gentricks-yellow uppercase tracking-wider">
                STAGE {currentData.num} OF 06
              </span>
              <h3 className="font-display font-black text-3xl text-white uppercase mt-1 mb-2">
                {currentData.name}
              </h3>
              <p className="font-body text-sm text-zinc-400">
                {currentData.subtitle}
              </p>
            </div>

            <div className="md:col-span-2">
              <ul className="space-y-3.5">
                {currentData.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-200">
                    <div className="w-5 h-5 rounded-full bg-gentricks-yellow/20 text-gentricks-yellow flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stage Climax Banner */}
        <div className="text-center">
          <button
            onClick={() => onOpenModal('builder')}
            className="px-8 py-4 rounded-md bg-gentricks-yellow text-black font-display font-bold text-sm uppercase tracking-wider shadow-yellow-glow hover:bg-gentricks-yellowHover hover:shadow-yellow-glow-lg transition-all duration-300 transform hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            START BUILDING — APPLY FOR EARLY ACCESS
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

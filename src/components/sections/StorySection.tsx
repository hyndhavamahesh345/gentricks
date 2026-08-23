import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const StorySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinWrapRef = useRef<HTMLDivElement>(null);
  const leadTitleRef = useRef<HTMLHeadingElement>(null);
  const sentenceOneRef = useRef<HTMLParagraphElement>(null);
  const sentenceTwoRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2,
          pin: pinWrapRef.current,
          anticipatePin: 1,
        },
      });

      // 1. Initial State -> Title & Sentence 1 emerge
      tl.fromTo(
        leadTitleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.25 }
      )
      .fromTo(
        sentenceOneRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.35 },
        '-=0.1'
      )
      
      // 2. Yellow keyword illumination
      .to(
        '.story-highlight',
        {
          color: '#FFDE00',
          textShadow: '0 0 20px rgba(255, 222, 0, 0.4)',
          stagger: 0.08,
          duration: 0.3,
        },
        '-=0.15'
      )

      // 3. Sentence 2 and ecosystem focus indicators fade in
      .fromTo(
        sentenceTwoRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.35 },
        '+=0.1'
      )
      .fromTo(
        statsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.25 },
        '-=0.1'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-[220vh] bg-black" id="about-intro">
      <div
        ref={pinWrapRef}
        className="w-full h-screen relative flex items-center justify-center px-6 overflow-hidden"
      >
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gentricks-yellow/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gentricks-yellow bg-gentricks-yellow/10 border border-gentricks-yellow/20 px-3.5 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gentricks-yellow animate-ping" />
            The Genesis Manifesto
          </div>

          <h2
            ref={leadTitleRef}
            className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white mb-8 leading-tight"
          >
            MORE THAN A <span className="text-gentricks-yellow">COMMUNITY.</span>
          </h2>

          <p
            ref={sentenceOneRef}
            className="font-body text-xl sm:text-2xl md:text-3xl text-zinc-300 font-normal leading-relaxed mb-8"
          >
            Gentricks is being built as an ecosystem where people can{' '}
            <span className="story-highlight text-white font-bold">learn</span>,{' '}
            <span className="story-highlight text-white font-bold">connect</span>,{' '}
            <span className="story-highlight text-white font-bold">build</span>,{' '}
            <span className="story-highlight text-white font-bold">collaborate</span>, discover{' '}
            <span className="story-highlight text-white font-bold">opportunities</span>, and turn ideas into real products and{' '}
            <span className="story-highlight text-white font-bold">startups</span>.
          </p>

          <p
            ref={sentenceTwoRef}
            className="font-body text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            From technology and innovation to creators, startups, communities, and partnerships, Gentricks brings people and possibilities together.
          </p>

          {/* Pillars Strip */}
          <div
            ref={statsRef}
            className="grid grid-cols-3 gap-4 max-w-lg mx-auto pt-6 border-t border-white/10"
          >
            <div className="p-3 rounded-lg bg-zinc-900/60 border border-white/5">
              <div className="font-mono text-[10px] uppercase text-zinc-500 tracking-wider">Demographic</div>
              <div className="font-display font-bold text-base text-gentricks-yellow mt-0.5">Next-Gen</div>
            </div>
            <div className="p-3 rounded-lg bg-zinc-900/60 border border-white/5">
              <div className="font-mono text-[10px] uppercase text-zinc-500 tracking-wider">Architecture</div>
              <div className="font-display font-bold text-base text-white mt-0.5">Ecosystem</div>
            </div>
            <div className="p-3 rounded-lg bg-zinc-900/60 border border-white/5">
              <div className="font-mono text-[10px] uppercase text-zinc-500 tracking-wider">Status</div>
              <div className="font-display font-bold text-base text-gentricks-yellow mt-0.5">Building</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

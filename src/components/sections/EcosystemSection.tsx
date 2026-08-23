import React, { useState } from 'react';
import { Users, Cpu, Wrench, Rocket, Video, Radio, Briefcase, Handshake, ArrowRight } from 'lucide-react';

interface EcosystemSectionProps {
  onOpenModal: (type: string) => void;
}

const pillars = [
  {
    id: 'community',
    title: 'COMMUNITY',
    category: 'network',
    icon: Users,
    desc: 'Build a network of ambitious students, builders, creators, and entrepreneurs collaborating without geographical or institutional barriers.',
    status: 'BEING BUILT',
    action: 'join',
    actionText: 'Join Waitlist',
  },
  {
    id: 'tech',
    title: 'TECHNOLOGY & INNOVATION',
    category: 'tech',
    icon: Cpu,
    desc: 'Explore AI, software engineering, systems design, emerging hardware, and cutting-edge digital architectures.',
    status: 'BEING BUILT',
    action: 'builder',
    actionText: 'Early Access',
  },
  {
    id: 'build',
    title: 'BUILD',
    category: 'tech',
    icon: Wrench,
    desc: 'Transform ideas into working projects, functional prototypes, and real scalable products through guided incubation tracks.',
    status: 'FOUNDATION READY',
    action: 'scroll-build',
    actionText: 'View Pathway',
  },
  {
    id: 'startups',
    title: 'STARTUPS',
    category: 'tech',
    icon: Rocket,
    desc: 'Support the journey from problem discovery and validation to MVP development, customer traction, and venture formation.',
    status: 'BEING BUILT',
    action: 'builder',
    actionText: 'Submit Idea',
  },
  {
    id: 'creator',
    title: 'CREATOR ECOSYSTEM',
    category: 'creators',
    icon: Video,
    desc: 'Bring together designers, artists, filmmakers, writers, audio engineers, and content creators driving culture and digital media.',
    status: 'BEING BUILT',
    action: 'join',
    actionText: 'Creator Track',
  },
  {
    id: 'media',
    title: 'MEDIA & CONTENT',
    category: 'creators',
    icon: Radio,
    desc: 'Document and share technology breakdowns, startup case studies, creator journeys, and youth innovation spotlights across original formats.',
    status: 'COMING SOON',
    action: 'video',
    actionText: 'Brand Reveal',
  },
  {
    id: 'opportunities',
    title: 'OPPORTUNITIES',
    category: 'network',
    icon: Briefcase,
    desc: 'Connect members with high-impact internships, jobs, hackathons, fellowships, grants, competitions, and incubator cohorts.',
    status: 'BEING BUILT',
    action: 'scroll-opp',
    actionText: 'Explore Hub',
  },
  {
    id: 'partnerships',
    title: 'PARTNERSHIPS',
    category: 'network',
    icon: Handshake,
    desc: 'Collaborate with visionary companies, universities, venture funds, incubators, and student organizations to build sustainable pipelines.',
    status: 'INQUIRIES OPEN',
    action: 'partner',
    actionText: 'Partner Inquiry',
  },
];

export const EcosystemSection: React.FC<EcosystemSectionProps> = ({ onOpenModal }) => {
  const [filter, setFilter] = useState<'all' | 'tech' | 'creators' | 'network'>('all');

  const filteredPillars = filter === 'all' ? pillars : pillars.filter((p) => p.category === filter);

  const handleAction = (action: string) => {
    if (action === 'scroll-build') {
      const el = document.getElementById('build');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'scroll-opp') {
      const el = document.getElementById('opportunities');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenModal(action);
    }
  };

  return (
    <section className="relative py-28 px-6 bg-gentricks-deep border-t border-white/5" id="ecosystem">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gentricks-yellow bg-gentricks-yellow/10 border border-gentricks-yellow/20 px-3.5 py-1.5 rounded-full mb-4">
            Pillars of Gentricks
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white mb-6">
            ONE ECOSYSTEM. <br />
            <span className="text-gentricks-yellow">MANY POSSIBILITIES.</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-zinc-400">
            An interconnected infrastructure engineered to support builders across every dimension of technology, creativity, and entrepreneurship.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
            {[
              { label: 'All Pillars', val: 'all' },
              { label: 'Technology & Startups', val: 'tech' },
              { label: 'Creators & Media', val: 'creators' },
              { label: 'Community & Partners', val: 'network' },
            ].map((tab) => (
              <button
                key={tab.val}
                onClick={() => setFilter(tab.val as any)}
                className={`px-5 py-2 rounded-full font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  filter === tab.val
                    ? 'bg-gentricks-yellow text-black shadow-yellow-glow'
                    : 'bg-zinc-900/80 text-zinc-400 border border-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Interactive Pillar Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="group relative rounded-xl bg-gentricks-card p-7 border border-white/5 hover:border-gentricks-yellow/30 hover:bg-gentricks-cardHover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-card-dark"
              >
                <div>
                  {/* Icon Frame */}
                  <div className="w-12 h-12 rounded-lg bg-gentricks-yellow/10 border border-gentricks-yellow/20 flex items-center justify-center text-gentricks-yellow mb-6 group-hover:scale-110 group-hover:bg-gentricks-yellow group-hover:text-black transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-black text-xl uppercase tracking-tight text-white mb-3 group-hover:text-gentricks-yellow transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm text-zinc-400 leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                </div>

                {/* Footer Strip */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold tracking-wider uppercase text-gentricks-yellow bg-gentricks-yellow/10 px-2 py-0.5 rounded border border-gentricks-yellow/20">
                    {pillar.status}
                  </span>

                  <button
                    onClick={() => handleAction(pillar.action)}
                    className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-white hover:text-gentricks-yellow transition-colors uppercase tracking-wider"
                  >
                    {pillar.actionText}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

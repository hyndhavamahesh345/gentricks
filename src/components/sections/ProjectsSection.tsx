import React from 'react';
import { Layers, ArrowRight } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenModal: (type: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenModal }) => {
  return (
    <section className="relative py-28 px-6 bg-gentricks-deep border-t border-white/5" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gentricks-yellow bg-gentricks-yellow/10 border border-gentricks-yellow/20 px-3.5 py-1.5 rounded-full mb-4">
            Ecosystem Showcase
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white mb-4">
            IDEAS SHOULD <span className="text-gentricks-yellow">BECOME REAL.</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-zinc-400">
            Gentricks will provide a dedicated space to discover projects, products, prototypes, and ideas being built across the ecosystem.
          </p>
        </div>

        {/* Intentional Architectural Empty State Card */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-b from-zinc-900/60 to-black border border-dashed border-gentricks-yellow/40 p-12 sm:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-gentricks-yellow/10 border border-gentricks-yellow/30 flex items-center justify-center text-gentricks-yellow mx-auto mb-6">
            <Layers className="w-8 h-8" />
          </div>

          <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white mb-3">
            PROJECTS ARE COMING.
          </h3>

          <p className="font-body text-base sm:text-lg text-zinc-400 max-w-lg mx-auto mb-8 leading-relaxed">
            The next project you see here could be yours. We are currently architecting the ecosystem project directory, launchpad, and peer-review system.
          </p>

          <button
            onClick={() => onOpenModal('builder')}
            className="px-8 py-4 rounded-md bg-gentricks-yellow text-black font-display font-bold text-xs uppercase tracking-wider shadow-yellow-glow hover:bg-gentricks-yellowHover transition-all inline-flex items-center gap-2"
          >
            BUILD WITH GENTRICKS
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

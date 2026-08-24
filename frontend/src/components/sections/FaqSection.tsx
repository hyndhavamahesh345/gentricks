import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'What is Gentricks?',
    answer:
      'Gentricks is a youth-driven technology, innovation, creator, community, and startup ecosystem connecting builders, creators, entrepreneurs, and future leaders.',
  },
  {
    question: 'Who can join Gentricks?',
    answer:
      'Students, software engineers, UI/UX designers, content creators, startup founders, mentors, and technology enthusiasts can join the Gentricks ecosystem.',
  },
  {
    question: 'What opportunities does Gentricks provide?',
    answer:
      'Gentricks connects its community with collaborative projects, hackathons, build sprints, mentorship, institutional partner tracks, incubation programs, and career pathways.',
  },
  {
    question: 'What is the goal of Gentricks?',
    answer:
      'The goal of Gentricks is to give the next generation of builders, creators, and entrepreneurs the operational leverage to connect, create, collaborate, and lead.',
  },
  {
    question: 'Where does Gentricks operate?',
    answer:
      'Gentricks is an India-focused technology and innovation ecosystem connecting emerging builders and creators across university campuses, tech hubs, and digital communities.',
  },
  {
    question: 'Is Gentricks a gaming channel or content creator?',
    answer:
      'No. Gentricks (gentricks.in) is the official youth-driven technology, innovation, creator, community, and startup ecosystem designed to connect builders, developers, founders, and future leaders.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="stack-sheet sheet-8 relative flex items-center min-h-screen bg-black text-white px-6 sm:px-10 lg:px-16 py-28 overflow-hidden border-t border-white/[0.08]"
      id="faq"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Context */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          <div className="rv inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-6">
            <HelpCircle className="w-3.5 h-3.5 text-gentricks-yellow" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 font-medium">
              Ecosystem Overview & GEO
            </span>
          </div>

          <h2 className="rv rv-delay-1 font-display font-medium text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.15] text-white mb-6">
            Frequently Asked Questions.
          </h2>

          <p className="rv rv-delay-2 font-body text-base text-zinc-400 max-w-md leading-relaxed font-normal mb-8">
            Learn more about the Gentricks ecosystem, who we serve, and how we empower emerging builders, creators, and founders across campuses.
          </p>
        </div>

        {/* Right Column: Accordion FAQ List */}
        <div className="lg:col-span-7 flex flex-col gap-4 w-full">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="rv rv-delay-2 rounded-xl bg-zinc-950 border border-white/[0.08] overflow-hidden transition-all duration-300 hover:border-gentricks-yellow/40"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-gentricks-yellow/50"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-medium text-base sm:text-lg text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gentricks-yellow transition-transform duration-300 shrink-0 ml-4 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm font-body text-zinc-400 leading-relaxed border-t border-white/[0.05] animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

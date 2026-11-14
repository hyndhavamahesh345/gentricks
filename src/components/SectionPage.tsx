import { ArrowUpRight, Building2, ChevronLeft, ChevronRight, Code2, Layers3, Lightbulb, PenTool, Rocket, Trophy, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { ecosystemData, ecosystemPeople } from '../data/ecosystem';
import { EcosystemVisual } from './EcosystemVisual';

export type SectionPageName = 'ecosystem' | 'programs' | 'opportunities';

const opportunityTypes = ['Internships', 'Collaborations', 'Hackathons'];

const whoWeBringTogether = [
  {
    icon: Lightbulb,
    title: 'STUDENTS & INNOVATORS',
    description: 'Learn, participate in events, build projects, and discover opportunities.',
  },
  {
    icon: Code2,
    title: 'BUILDERS & DEVELOPERS',
    description: 'Build with technology, join challenges, collaborate, and showcase your work.',
  },
  {
    icon: Rocket,
    title: 'FOUNDERS & ENTREPRENEURS',
    description: 'Connect with talent, mentors, partners, and opportunities to grow.',
  },
  {
    icon: PenTool,
    title: 'CREATORS & EXPERTS',
    description: 'Share knowledge, create experiences, and collaborate with the next generation.',
  },
];

const whatWeDoOfferings = [
  {
    icon: Lightbulb,
    title: 'Learning & Innovation',
    description: 'Workshops, challenges, projects and hands-on technology experiences.',
  },
  {
    icon: Building2,
    title: 'Campus & Community',
    description: 'Campus chapters, student communities and institutional collaborations.',
  },
  {
    icon: Trophy,
    title: 'Opportunities',
    description: 'Internships, careers, competitions, mentorship and networking.',
  },
];

function PageHero({ label, title, copy }: { label: string; title: string; copy: string }) {
  return <section className="page-hero"><div className="site-container"><p className="eyebrow hero-eyebrow"><span aria-hidden="true" /> {label}</p><h1>{title}</h1><p>{copy}</p></div></section>;
}

function SectionLead({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="section-lead"><p className="eyebrow"><span aria-hidden="true" /> {eyebrow}</p><h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div>;
}

export function SectionPage({ page }: { page: SectionPageName }) {
  if (page === 'ecosystem') return <EcosystemPage />;
  if (page === 'programs') return <ProgramsPage />;
  if (page === 'opportunities') return <OpportunitiesPage />;
  return <EcosystemPage />;
}

function EcosystemPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeName, activeDescription] = ecosystemPeople[activeIndex];

  return <><PageHero label="The GENTRICKS ecosystem" title="One Ecosystem. Many Paths." copy="There is no single way to participate. Find people, ideas, and directions that make sense for you." /><section className="ecosystem section-space"><div className="site-container ecosystem-layout"><div className="people-list">{ecosystemPeople.map(([name, description], index) => <button className={'person-row person-' + index + (index === activeIndex ? ' is-active' : '')} key={name} type="button" onMouseEnter={() => setActiveIndex(index)} onFocus={() => setActiveIndex(index)} onClick={() => setActiveIndex(index)}><span className="person-number">0{index + 1}</span><span className="person-copy"><strong>{name}</strong><small>{description}</small></span><ArrowUpRight size={18} aria-hidden="true" /></button>)}</div><div className="ecosystem-feature"><EcosystemVisual kind={activeName} /><p className="ecosystem-feature-copy">{activeDescription}</p></div></div></section></>;
}

function ProgramsPage() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = sliderRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    const el = sliderRef.current;
    if (!el) return;
    const card = el.querySelector('.discovery-card') as HTMLElement | null;
    const scrollAmount = card ? card.offsetWidth + 20 : 310;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="programs-view">
      {/* 1. Who We Bring Together (Competitor-Style High Impact Carousel) */}
      <section className="discovery-section" aria-labelledby="discovery-title">
        <div className="site-container">
          <div className="discovery-header">
            <h1 id="discovery-title" className="discovery-title">
              <span className="discovery-title-main">WHO WE</span>
              <span className="discovery-title-accent theme-yellow">BRING TOGETHER.</span>
            </h1>
          </div>

          <div className="discovery-carousel-wrapper">
            <button
              type="button"
              className="discovery-nav-btn discovery-nav-left theme-yellow"
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              <ChevronLeft size={44} strokeWidth={2.4} aria-hidden="true" />
            </button>

            <div className="discovery-track theme-yellow" ref={sliderRef}>
              {whoWeBringTogether.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <article key={idx} className="discovery-card theme-yellow">
                    <div className="discovery-card-icon">
                      <Icon size={38} strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    <h2 className="discovery-card-title">{card.title}</h2>
                    <p className="discovery-card-desc">{card.description}</p>
                  </article>
                );
              })}
            </div>

            <button
              type="button"
              className="discovery-nav-btn discovery-nav-right theme-yellow"
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              <ChevronRight size={44} strokeWidth={2.5} aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. What We Do (What GENTRICKS Actually Provides) */}
      <section className="what-we-do-section section-space" aria-labelledby="what-we-do-title">
        <div className="site-container">
          <div className="section-lead">
            <p className="eyebrow"><span aria-hidden="true" /> What GENTRICKS Provides</p>
            <h2 id="what-we-do-title">What We <em>Do.</em></h2>
            <p className="section-copy">
              Focused experiences, infrastructure, and access at the intersection of technology, community, and momentum.
            </p>
          </div>

          <div className="what-we-do-grid">
            {whatWeDoOfferings.map((item, idx) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="what-we-do-card">
                  <div className="what-we-do-card-top">
                    <Icon size={22} strokeWidth={1.8} className="what-we-do-icon" aria-hidden="true" />
                    <span className="what-we-do-number">0{idx + 1}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>

          <div className="what-we-do-actions">
            <a href="#join" className="button button-primary">
              Join GENTRICKS <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a href="mailto:collab@gentricks.in" className="button button-ghost">
              Partner or Sponsor <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function OpportunitiesPage() {
  const hasOpportunities = ecosystemData.opportunities.length > 0;
  return (
    <>
      <PageHero
        label="Opportunities"
        title="Find internships, hackathons, and collaborations to build with."
        copy="This space is designed to connect people with ways to contribute, learn, collaborate, and move forward."
      />
      <section className="opportunities section-space">
        <div className="site-container opportunities-layout">
          <div className="opportunities-board">
            <div className="board-label"><Layers3 size={17} aria-hidden="true" /> Opportunity board</div>
            <div className="opportunity-types">
              {opportunityTypes.map((type, index) => {
                if (type === 'Hackathons') {
                  return (
                    <a
                      key={type}
                      href="https://fts.aircwou.in/hackathon"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        minHeight: '58px',
                        padding: '13px',
                        borderRight: '1px solid var(--line-dark)',
                        borderBottom: '1px solid var(--line-dark)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        color: 'inherit',
                        textDecoration: 'none',
                        background: 'rgba(242, 214, 10, 0.08)',
                      }}
                      title="Register for AGENTIC X 2.0 Hackathon"
                    >
                      0{index + 1} / {type}
                      <ArrowUpRight size={15} style={{ color: '#706200', flexShrink: 0 }} aria-hidden="true" />
                    </a>
                  );
                }
                return <span key={type}>0{index + 1} / {type}</span>;
              })}
            </div>

            {hasOpportunities && (
              <div className="opportunity-listings" style={{ marginTop: '28px', borderTop: '1px solid var(--line-dark)', paddingTop: '22px' }}>
                {ecosystemData.opportunities.map((opp) => (
                  <article key={opp.id} className="opportunity-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', padding: '18px 20px', background: 'rgba(0, 0, 0, 0.04)', border: '1px solid var(--line-dark)', marginBottom: '14px' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', padding: '3px 8px', background: 'var(--ink)', color: 'var(--yellow)', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.05em' }}>
                          {opp.type}
                        </span>
                        <span style={{ fontSize: '0.82rem', color: '#555', fontFamily: 'var(--mono)' }}>
                          {opp.dates ? `${opp.dates} · ${opp.organization}` : opp.organization}
                        </span>
                      </div>
                      <h3 style={{ margin: '0 0 4px', fontSize: '1.25rem', fontWeight: 700, color: 'var(--ink)' }}>{opp.title}</h3>
                      {opp.deadline && <p style={{ margin: 0, fontSize: '0.85rem', color: '#555' }}>{opp.deadline}</p>}
                    </div>
                    <a
                      href={opp.link || 'https://fts.aircwou.in/hackathon'}
                      target="_blank"
                      rel="noreferrer"
                      className="button button-dark"
                      style={{ minHeight: '38px', padding: '0 18px', fontSize: '0.85rem' }}
                    >
                      Apply / Register <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

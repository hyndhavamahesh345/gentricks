import { ChevronDown, Zap, Hammer, Users, Trophy, Rocket, Flag, PenTool, Lightbulb } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { submitCommunityMember } from '../services/firebase';

const ecosystemSteps = [
  { id: 'learn', label: 'LEARN', icon: Zap, description: 'Workshops, challenges, and hands-on technology experiences to build useful skills.' },
  { id: 'build', label: 'BUILD', icon: Hammer, description: 'Turn ideas into shipped projects through hackathons and collaborative building.' },
  { id: 'collaborate', label: 'COLLABORATE', icon: Users, description: 'Connect with builders, creators, and mentors across the ecosystem.' },
  { id: 'showcase', label: 'SHOWCASE', icon: Trophy, description: 'Present your work, get feedback, and gain visibility in the community.' },
  { id: 'opportunities', label: 'GET OPPORTUNITIES', icon: Rocket, description: 'Access internships, careers, and startup opportunities from partners.' },
  { id: 'launch', label: 'LAUNCH', icon: Flag, description: 'Take your projects from prototype to product with ecosystem support.' },
  { id: 'lead', label: 'LEAD', icon: Users, description: 'Build communities, mentor others, and shape the next generation.' },
] as const;

const profileCards = [
  {
    name: 'Builders',
    icon: Hammer,
    who: 'Developers and makers who turn curiosity into things that work.',
    what: 'Build real products, ship projects, and get feedback from the community.',
    get: 'Access to hackathons, collaborative projects, real-world challenges, and hands-on experiences.',
    cta: 'Start Building',
    flow: ['LEARN', 'BUILD', 'COLLABORATE', 'SHOWCASE'],
  },
  {
    name: 'Creators',
    icon: PenTool,
    who: 'Content creators, designers, and storytellers.',
    what: 'Create content, share your work, and grow your audience within the ecosystem.',
    get: 'Creator initiatives, collaborative projects, and a platform to showcase your voice.',
    cta: 'Start Creating',
    flow: ['LEARN', 'CREATE', 'COLLABORATE', 'SHOWCASE'],
  },
  {
    name: 'Students',
    icon: Lightbulb,
    who: 'Students and curious minds looking for practical ways to grow.',
    what: 'Learn, practice, join hackathons, and build a portfolio that matters.',
    get: 'Workshops, challenges, projects, campus chapters, and access to internships and careers.',
    cta: 'Start Learning',
    flow: ['LEARN', 'BUILD', 'GET OPPORTUNITIES', 'LEAD'],
  },
  {
    name: 'Entrepreneurs',
    icon: Rocket,
    who: 'Founders and aspiring entrepreneurs moving ideas toward momentum.',
    what: 'Launch your ideas, find your team, and get opportunities to grow.',
    get: 'Connect with talent, mentors, partners, and startup ecosystem support.',
    cta: 'Start Launching',
    flow: ['GET OPPORTUNITIES', 'LAUNCH', 'LEAD', 'COLLABORATE'],
  },
] as const;

const faqItems = [
  {
    question: 'What is GENTRICKS?',
    answer: 'GENTRICKS is a technology-driven ecosystem for builders, creators, students, and entrepreneurs. We bring people, technology, and ideas into the same conversation so the next generation can learn, make, collaborate, and lead with intent.',
  },
  {
    question: 'Who can join GENTRICKS?',
    answer: 'Anyone building with technology—developers, designers, creators, students, and aspiring founders. There are pathways for Builders, Creators, Students, and Entrepreneurs.',
  },
  {
    question: 'How do I participate in the ecosystem?',
    answer: 'Start by joining the community. Then explore pathways: Learn through workshops, Build at hackathons, Collaborate with peers, Showcase your work, Get Opportunities, Launch projects, and Lead communities.',
  },
  {
    question: 'What programs does GENTRICKS offer?',
    answer: 'We provide Learning & Innovation (workshops, challenges, projects), Campus & Community (chapters, student communities, institutional collaborations), and Opportunities (internships, careers, competitions, mentorship, networking).',
  },
  {
    question: 'Are there costs to join or participate?',
    answer: 'Joining the community is free. Individual programs, workshops, or events may have their own terms—details are shared when you register.',
  },
  {
    question: 'How does the Join form work?',
    answer: 'Submit your details through the form below. We\'ll keep you updated on programs, events, hackathons, and opportunities. Your data is handled per our Privacy Policy.',
  },
  {
    question: 'Where is GENTRICKS based?',
    answer: 'Built to grow with people across India.',
  },
  {
    question: 'How can I partner or sponsor?',
    answer: 'Email collab@gentricks.in to discuss partnerships, sponsorships, or institutional collaborations.',
  },
] as const;

export function Homepage() {
  const [joinForm, setJoinForm] = useState({ full_name: '', email: '', phone: '', city: '', role: '', interests: '', consent: false });
  const [joinStatus, setJoinStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const setSectionRef = (index: number) => (el: HTMLElement | null): void => {
    sectionRefs.current[index] = el;
  };

  const handleJoinSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setJoinStatus('submitting');
    try {
      await submitCommunityMember({ ...joinForm });
      setJoinStatus('success');
    } catch {
      setJoinStatus('error');
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <section className="hero" aria-labelledby="hero-title" ref={setSectionRef(0)}>
        <div className="site-container hero-grid">
          <div className="hero-copy reveal reveal-fade-up">
            <p className="eyebrow hero-eyebrow"><span aria-hidden="true" /> A technology and innovation ecosystem</p>
            <h1 id="hero-title">Where the Next Generation <em>Connects, Creates,</em> and Leads.</h1>
            <p className="hero-description reveal reveal-fade-up reveal-delay-1">GENTRICKS is a technology-driven ecosystem for builders, creators, students, and entrepreneurs.</p>
            <div className="hero-actions reveal reveal-fade-up reveal-delay-2">
              <a href="#join" className="button button-primary button-interactive">Join GENTRICKS</a>
              <a href="#events" className="button button-secondary button-interactive">Explore Events & AGENTIC X 2.0</a>
            </div>
            <p className="hero-note reveal reveal-fade reveal-delay-3">Built to grow with people across India.</p>
          </div>
          <figure className="hero-visual hero-image-visual reveal reveal-slide-right reveal-delay-2">
            <img src="/gentricks-signal-v1.png" alt="GENTRICKS community and builders collaborating." width="1600" height="1067" fetchPriority="high" />
          </figure>
        </div>
        <div className="site-container hero-manifesto reveal reveal-fade reveal-delay-4" aria-label="GENTRICKS values"><span>People before profiles.</span><span>Ideas into action.</span><span>Ambition with community.</span></div>
      </section>

      {/* Featured Flagship Event Spotlight Bar */}
      <div className="site-container" style={{ marginTop: '-20px', marginBottom: '36px', position: 'relative', zIndex: 5 }}>
        <a
          href="#events"
          className="reveal reveal-fade-up"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            padding: '14px 22px',
            background: 'rgba(255, 222, 0, 0.07)',
            border: '1px solid rgba(255, 222, 0, 0.3)',
            borderRadius: '8px',
            color: 'var(--paper)',
            textDecoration: 'none',
            backdropFilter: 'blur(8px)',
            transition: 'border-color 180ms ease, background 180ms ease',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.68rem',
                padding: '3px 8px',
                background: 'var(--yellow)',
                color: '#000',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                borderRadius: '3px',
              }}
            >
              Flagship Event
            </span>
            <strong style={{ fontSize: '0.96rem', letterSpacing: '-0.01em' }}>AGENTIC X 2.0 Hackathon</strong>
            <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>8–9 Dec · Woxsen University · Round 1 Closes 27 Nov</span>
          </div>
          <span style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--yellow)', fontWeight: 600, fontSize: '0.86rem', flexShrink: 0 }}>
            View Details
          </span>
        </a>
      </div>

      <section className="intro section-space" aria-labelledby="intro-title" ref={setSectionRef(1)}>
        <div className="site-container intro-grid">
          <p className="intro-marker reveal reveal-fade-up">01 <span>INTRODUCTION</span></p>
          <div><h2 id="intro-title" className="reveal reveal-fade-up reveal-delay-1">A place to move from potential to <em>possibility.</em></h2></div>
          <p className="intro-copy reveal reveal-fade-up reveal-delay-2">GENTRICKS brings people, technology, and ideas into the same conversation—so the next generation can learn, make, collaborate, and lead with intent.</p>
        </div>
      </section>

      {/* 02 / OUR STORY - Keep exactly as-is */}
      <section id="our-story" className="our-story-section section-space" aria-labelledby="story-title" ref={setSectionRef(2)}>
        <div className="site-container">
          <div className="our-story-grid">
            <div className="our-story-lead reveal reveal-slide-left">
              <p className="eyebrow"><span aria-hidden="true" /> 02 / OUR STORY</p>
              <h2 id="story-title">
                Born From Grassroots Ambition. <br />
                <em>Built For The Next Generation.</em>
              </h2>
              <p className="story-intro-text">
                <strong>GENTRICKS</strong> started with a simple, stubborn observation: raw talent, curious minds, and ambitious builders are everywhere — but the opportunities, communities, and infrastructure to turn that potential into real-world impact are not.
              </p>
              <p className="story-detail-text">
                Too many young developers, designers, creators, and future founders were building in isolation — separated by academic silos, limited access, or opportunities concentrated in distant metros. We created <strong>GENTRICKS</strong> as open ground where people come before profiles, ideas turn into shipped reality, and ambition finds a genuine community.
              </p>
            </div>

            <div className="story-cards-col" aria-label="Our core story principles">
              <article className="story-timeline-card interactive-card reveal reveal-slide-right reveal-delay-1">
                <div className="story-card-header">
                  <span className="story-card-tag"><span aria-hidden="true" /> The Culture</span>
                  <span className="story-card-step">01</span>
                </div>
                <h3>Action Over Speculation</h3>
                <p>
                  We prioritize building over passive learning — through hackathons, collaborative projects, real-world challenges, creator initiatives, and hands-on experiences. If you have an idea, you build it here.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Step Flow - Interactive tabs */}
      <section id="ecosystem-flow" className="section-space" aria-labelledby="flow-title" ref={setSectionRef(3)}>
        <div className="site-container">
          <div className="section-lead reveal reveal-fade-up">
            <p className="eyebrow"><span aria-hidden="true" /> 03 / ECOSYSTEM FLOW</p>
            <h2 id="flow-title">How You Move <em>Through GENTRICKS.</em></h2>
            <p className="section-copy">Seven steps. One continuous journey. Click any step to explore.</p>
          </div>

          <div className="ecosystem-flow-wrapper reveal reveal-fade-up reveal-delay-1">
            <div className="flow-steps" role="tablist" aria-label="Ecosystem journey steps">
              {ecosystemSteps.map((step, index) => (
                <button
                  key={step.id}
                  role="tab"
                  aria-selected={activeStep === index}
                  aria-controls={`flow-panel-${step.id}`}
                  id={`flow-tab-${step.id}`}
                  className={`flow-step ${activeStep === index ? 'is-active' : ''}`}
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <span className="flow-step-icon">
                    <step.icon size={20} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span className="flow-step-label">{step.label}</span>
                  {index < ecosystemSteps.length - 1 && <span className="flow-step-connector" aria-hidden="true" />}
                </button>
              ))}
            </div>

            <div className="flow-panels" role="tabpanel" aria-labelledby={`flow-tab-${ecosystemSteps[activeStep].id}`}>
              <div id={`flow-panel-${ecosystemSteps[activeStep].id}`} className="flow-panel reveal reveal-fade-up">
                <h3>{ecosystemSteps[activeStep].label}</h3>
                <p>{ecosystemSteps[activeStep].description}</p>
                <a href="#join" className="button button-primary button-interactive">Start Your Journey</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="faq-section section-space" aria-labelledby="faq-title" ref={setSectionRef(4)}>
        <div className="site-container">
          <div className="section-lead reveal reveal-fade-up">
            <p className="eyebrow"><span aria-hidden="true" /> FAQ</p>
            <h2 id="faq-title">Questions <em>Answered.</em></h2>
          </div>

          <div className="faq-grid reveal reveal-fade-up reveal-delay-1">
            {faqItems.map((item, index) => (
              <article key={index} className="faq-item interactive-card-light">
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  onClick={() => toggleFaq(index)}
                >
                  <span>{item.question}</span>
                  <ChevronDown size={18} aria-hidden="true" className={`faq-icon ${openFaq === index ? 'rotated' : ''}`} />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`faq-answer ${openFaq === index ? 'expanded' : 'collapsed'}`}
                >
                  <p>{item.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="join-section" aria-labelledby="join-title" ref={setSectionRef(5)}>
        <div className="site-container join-card">
          <div className="join-card-copy reveal reveal-slide-left">
            <p className="eyebrow eyebrow-dark"><span aria-hidden="true" /> The next generation is already in motion</p>
            <h2 id="join-title">Bring your curiosity. <br />Bring your <em>next idea.</em></h2>
            <div style={{ marginTop: '24px' }}>
              <p style={{ fontSize: '0.88rem', color: '#3a3a34', margin: '0 0 10px', fontWeight: 500 }}>
                Want to connect with builders right away?
              </p>
              <a
                href="https://chat.whatsapp.com/F6F4Z2NukhG52S7xP9on9J"
                target="_blank"
                rel="noreferrer"
                className="button button-dark button-interactive"
                style={{ display: 'inline-flex', alignItems: 'center', fontSize: '0.86rem' }}
              >
                Join WhatsApp Community
              </a>
            </div>
          </div>
          {joinStatus === 'success' ? (
            <div className="join-success reveal reveal-fade-up" role="status">
              <strong>You're on the list.</strong>
              <span>We'll keep you close to what comes next.</span>
              <div style={{ marginTop: '20px' }}>
                <a
                  href="https://chat.whatsapp.com/F6F4Z2NukhG52S7xP9on9J"
                  target="_blank"
                  rel="noreferrer"
                  className="button button-dark"
                  style={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  Join WhatsApp Community
                </a>
              </div>
            </div>
          ) : (
            <form className="join-form reveal reveal-slide-right" onSubmit={handleJoinSubmit}>
              <div className="join-form-grid">
                <label><span>Full name</span><input required value={joinForm.full_name} onChange={(event) => setJoinForm({ ...joinForm, full_name: event.target.value })} /></label>
                <label><span>Email</span><input required type="email" value={joinForm.email} onChange={(event) => setJoinForm({ ...joinForm, email: event.target.value })} /></label>
                <label><span>Phone number</span><input required type="tel" placeholder="+91 ..." value={joinForm.phone} onChange={(event) => setJoinForm({ ...joinForm, phone: event.target.value })} /></label>
                <label><span>City</span><input required value={joinForm.city} onChange={(event) => setJoinForm({ ...joinForm, city: event.target.value })} /></label>
                <label><span>I am a</span><select required value={joinForm.role} onChange={(event) => setJoinForm({ ...joinForm, role: event.target.value })}><option value="">Choose one</option><option>Builder</option><option>Creator</option><option>Student</option><option>Entrepreneur</option></select></label>
                <label><span>Interested in</span><select required value={joinForm.interests} onChange={(event) => setJoinForm({ ...joinForm, interests: event.target.value })}><option value="">Choose an area</option><option>Events and workshops</option><option>Hackathons and projects</option><option>Opportunities</option><option>Startup ecosystem</option></select></label>
              </div>
              <label className="join-consent">
                <input
                  required
                  type="checkbox"
                  checked={joinForm.consent}
                  onChange={(event) => setJoinForm({ ...joinForm, consent: event.target.checked })}
                />
                <span>
                  I consent to GENTRICKS processing my personal data in accordance with the{' '}
                  <a href="#privacy-policy" className="consent-link">
                    Privacy Policy
                  </a>{' '}
                  for community updates, programs, and opportunities.
                </span>
              </label>
              <button type="submit" className="button button-dark button-interactive" disabled={joinStatus === 'submitting'}>{joinStatus === 'submitting' ? 'Saving...' : 'Join GENTRICKS'}</button>
              {joinStatus === 'error' && <small className="join-error">We couldn't save your response yet. Please try again.</small>}
            </form>
          )}
        </div>
      </section>
    </>
  );
}
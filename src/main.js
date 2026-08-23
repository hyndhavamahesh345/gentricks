/**
 * GENTRICKS Official Website
 * Interactive Logic & Architecture
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNavigation();
  initScrollSpy();
  initPhilosophyJourney();
  initEcosystemFilters();
  initBuildPathway();
  initModalSystem();
  initFormHandlers();
  initScrollReveal();
});

/* ==========================================================================
   1. Sticky Header & Scroll Effects
   ========================================================================== */
function initStickyHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   2. Mobile Navigation Drawer
   ========================================================================== */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-nav-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer) return;

  const toggleMenu = (forceState) => {
    const isOpen = typeof forceState === 'boolean' ? forceState : !drawer.classList.contains('open');
    drawer.classList.toggle('open', isOpen);
    toggleBtn.classList.toggle('active', isOpen);
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  toggleBtn.addEventListener('click', () => toggleMenu());

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });
}

/* ==========================================================================
   3. Active Section Scroll Spy
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}

/* ==========================================================================
   4. The Gentricks Philosophy Journey
   ========================================================================== */
function initPhilosophyJourney() {
  const nodes = document.querySelectorAll('.philosophy-node');
  const cards = document.querySelectorAll('.philosophy-card');
  const progressBar = document.getElementById('philosophy-progress');

  if (!nodes.length || !cards.length) return;

  const setStage = (index) => {
    nodes.forEach((node, idx) => {
      node.classList.toggle('active', idx === index);
    });

    cards.forEach((card, idx) => {
      card.classList.toggle('active', idx === index);
    });

    if (progressBar) {
      const percentage = ((index + 1) / nodes.length) * 100;
      progressBar.style.width = `${percentage}%`;
    }
  };

  nodes.forEach((node, idx) => {
    node.addEventListener('click', () => setStage(idx));
  });

  cards.forEach((card, idx) => {
    card.addEventListener('click', () => setStage(idx));
  });
}

/* ==========================================================================
   5. Ecosystem Filters
   ========================================================================== */
function initEcosystemFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.ecosystem-card');

  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });
}

/* ==========================================================================
   6. Build with Gentricks Pathway Inspector
   ========================================================================== */
function initBuildPathway() {
  const stageBoxes = document.querySelectorAll('.build-stage-box');
  const titleElem = document.getElementById('inspector-title');
  const subtitleElem = document.getElementById('inspector-subtitle');
  const pointsElem = document.getElementById('inspector-points');

  if (!stageBoxes.length || !titleElem || !subtitleElem || !pointsElem) return;

  const stageData = [
    {
      title: '01 / IDEA PHASE',
      subtitle: 'Brainstorming & Hypothesis Formation',
      points: [
        'Deep-dive into problem spaces and emerging market inefficiencies',
        'Peer feedback & cross-disciplinary brainstorm cohorts',
        'Initial feasibility and technical scoping review'
      ]
    },
    {
      title: '02 / PROBLEM DISCOVERY',
      subtitle: 'Customer Interviews & Pain Point Validation',
      points: [
        'Engage directly with end-users and enterprise stakeholders',
        'Analyze user friction, behavioral bottlenecks, and urgency',
        'Define core Value Proposition and quantifiable success metrics'
      ]
    },
    {
      title: '03 / BUILD PHASE',
      subtitle: 'Rapid Prototyping & Technical Architecture',
      points: [
        'Full-stack architecture, database design, and UI wireframing',
        'Access to engineering templates, cloud credits, and technical mentors',
        'Intensive sprint cycles to develop functional core features'
      ]
    },
    {
      title: '04 / VALIDATION',
      subtitle: 'User Testing & Iterative Feedback Loops',
      points: [
        'Deploy MVP to select cohort within the Gentricks community',
        'Measure retention, user engagement, and friction points',
        'Continuous sprint iterations based on real telemetry'
      ]
    },
    {
      title: '05 / PRODUCT',
      subtitle: 'Refined UI/UX, Performance & Polished Release',
      points: [
        'Production hardening: security, speed, and cross-platform polish',
        'Brand identity, landing page, and documentation creation',
        'Community demo day and ecosystem launch spotlight'
      ]
    },
    {
      title: '06 / STARTUP',
      subtitle: 'Venture Formation, Traction & Expansion',
      points: [
        'Legal incorporation, founder equity structuring, and IP assignment',
        'Introduction to early-stage angel syndicates and venture partners',
        'Go-To-Market execution, hiring co-founders, and initial scale'
      ]
    }
  ];

  stageBoxes.forEach((box, idx) => {
    box.addEventListener('click', () => {
      stageBoxes.forEach(b => b.classList.remove('active'));
      box.classList.add('active');

      const data = stageData[idx];
      if (data) {
        titleElem.textContent = data.title;
        subtitleElem.textContent = data.subtitle;
        pointsElem.innerHTML = data.points
          .map(pt => `<li><span class="check">✓</span> ${pt}</li>`)
          .join('');
      }
    });
  });
}

/* ==========================================================================
   7. Modal System
   ========================================================================== */
function initModalSystem() {
  const modalTriggers = document.querySelectorAll('[data-modal]');
  const closeBtns = document.querySelectorAll('[data-close-modal]');
  const backdrops = document.querySelectorAll('.modal-backdrop');
  const videoElem = document.getElementById('brand-reveal-video');

  const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Auto play video if video modal
    if (modalId === 'modal-video' && videoElem) {
      videoElem.currentTime = 0;
      videoElem.play().catch(() => {
        // Autoplay may be restricted by browser policy; user can click play
      });
    }
  };

  const closeModal = (modal) => {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';

    // Pause video on close
    if (modal.id === 'modal-video' && videoElem) {
      videoElem.pause();
    }
  };

  modalTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = btn.getAttribute('data-modal');
      if (modalId) openModal(modalId);
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modal = btn.closest('.modal-backdrop');
      closeModal(modal);
    });
  });

  backdrops.forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeModal(backdrop);
      }
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openModalElem = document.querySelector('.modal-backdrop.open');
      if (openModalElem) closeModal(openModalElem);
    }
  });
}

/* ==========================================================================
   8. Form Handlers & Feedback States
   ========================================================================== */
function initFormHandlers() {
  // Main Contact Form
  const contactForm = document.getElementById('contact-form');
  const contactFeedback = document.getElementById('contact-feedback');

  if (contactForm && contactFeedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'SENDING...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        contactFeedback.classList.add('success');
        contactForm.reset();

        setTimeout(() => {
          contactFeedback.classList.remove('success');
        }, 8000);
      }, 700);
    });
  }

  // Opportunities Alert Subscription
  const oppForm = document.getElementById('opp-subscribe-form');
  if (oppForm) {
    oppForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = oppForm.querySelector('button');
      btn.textContent = '✓ SUBSCRIBED';
      btn.style.backgroundColor = '#22c55e';
      btn.style.color = '#000';
      oppForm.querySelector('input').disabled = true;
    });
  }

  // Join Modal Form
  const joinForm = document.getElementById('join-modal-form');
  const joinFeedback = document.getElementById('join-feedback');
  if (joinForm && joinFeedback) {
    joinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      joinFeedback.classList.add('success');
      joinForm.reset();
    });
  }

  // Builder Modal Form
  const builderForm = document.getElementById('builder-modal-form');
  const builderFeedback = document.getElementById('builder-feedback');
  if (builderForm && builderFeedback) {
    builderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      builderFeedback.classList.add('success');
      builderForm.reset();
    });
  }

  // Partner Modal Form
  const partnerForm = document.getElementById('partner-modal-form');
  const partnerFeedback = document.getElementById('partner-feedback');
  if (partnerForm && partnerFeedback) {
    partnerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      partnerFeedback.classList.add('success');
      partnerForm.reset();
    });
  }
}

/* ==========================================================================
   9. Scroll Reveal Animations
   ========================================================================== */
function initScrollReveal() {
  const elements = document.querySelectorAll('.g-card, .ecosystem-card, .philosophy-card, .cohort-card, .partner-track-card, .manifesto-box');
  
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => {
    el.classList.add('reveal-on-scroll');
    observer.observe(el);
  });
}

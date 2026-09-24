import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { SITE, STATS } from '../theme';
import { events } from '../data/events';

const nextEvent = events
  .filter(e => e.status === 'upcoming')
  .sort((a, b) => new Date(a.date) - new Date(b.date))[0];

// Animated counter hook — counts from 0 to end when element scrolls into view
function useCountUp(end, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

function StatCounter({ stat }) {
  const { count, ref } = useCountUp(stat.numericEnd);
  const suffix = stat.value.replace(/\d+/, '');

  return (
    <div ref={ref} style={{ padding: '1rem 0' }}>
      <p
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.75rem, 5vw, 4rem)',
          fontWeight: 500,
          letterSpacing: '-0.04em',
          color: '#FCFCFA',
          lineHeight: 1,
          margin: '0 0 0.5rem 0',
        }}
      >
        {count}{suffix}
      </p>
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.8125rem',
          color: 'rgba(252,252,250,0.5)',
          margin: 0,
          fontWeight: 500,
          letterSpacing: '0.02em',
        }}
      >
        {stat.label}
      </p>
    </div>
  );
}

// Debate chamber line-art SVG elements for parallax hero background
function HeroIllustration() {
  return (
    <>
      {/* Layer 1 — slower parallax: faint order-paper silhouettes */}
      <div
        className="parallax-layer hero-drift"
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.06,
          pointerEvents: 'none',
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          {/* Document silhouettes */}
          <rect x="80" y="60" width="120" height="160" rx="2" stroke="#D8D2C4" strokeWidth="0.8" transform="rotate(-8 140 140)" />
          <line x1="100" y1="100" x2="180" y2="100" stroke="#D8D2C4" strokeWidth="0.5" transform="rotate(-8 140 140)" />
          <line x1="100" y1="115" x2="170" y2="115" stroke="#D8D2C4" strokeWidth="0.5" transform="rotate(-8 140 140)" />
          <line x1="100" y1="130" x2="160" y2="130" stroke="#D8D2C4" strokeWidth="0.5" transform="rotate(-8 140 140)" />

          <rect x="600" y="100" width="110" height="150" rx="2" stroke="#D8D2C4" strokeWidth="0.8" transform="rotate(6 655 175)" />
          <line x1="618" y1="135" x2="693" y2="135" stroke="#D8D2C4" strokeWidth="0.5" transform="rotate(6 655 175)" />
          <line x1="618" y1="150" x2="685" y2="150" stroke="#D8D2C4" strokeWidth="0.5" transform="rotate(6 655 175)" />

          <rect x="350" y="380" width="100" height="140" rx="2" stroke="#D8D2C4" strokeWidth="0.8" transform="rotate(-3 400 450)" />
        </svg>
      </div>

      {/* Layer 2 — slightly faster: gavel + quill shapes */}
      <div
        className="parallax-layer"
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.045,
          pointerEvents: 'none',
          animation: 'driftSlow 30s ease-in-out infinite alternate',
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          {/* Gavel shape */}
          <g transform="translate(180, 350) rotate(-25)">
            <rect x="0" y="0" width="60" height="18" rx="3" stroke="#D8D2C4" strokeWidth="0.8" />
            <line x1="30" y1="18" x2="30" y2="80" stroke="#D8D2C4" strokeWidth="0.8" />
            <ellipse cx="30" cy="85" rx="8" ry="5" stroke="#D8D2C4" strokeWidth="0.6" />
          </g>

          {/* Quill shape */}
          <g transform="translate(620, 380) rotate(15)">
            <path d="M0 60 Q5 30 2 0 Q8 25 15 55 Z" stroke="#D8D2C4" strokeWidth="0.6" fill="none" />
            <line x1="7" y1="55" x2="7" y2="90" stroke="#D8D2C4" strokeWidth="0.5" />
          </g>

          {/* Scales of justice hint */}
          <g transform="translate(420, 80)">
            <line x1="0" y1="0" x2="0" y2="50" stroke="#D8D2C4" strokeWidth="0.7" />
            <line x1="-30" y1="10" x2="30" y2="10" stroke="#D8D2C4" strokeWidth="0.7" />
            <path d="M-30 10 L-25 30 L-35 30 Z" stroke="#D8D2C4" strokeWidth="0.5" fill="none" />
            <path d="M30 10 L35 30 L25 30 Z" stroke="#D8D2C4" strokeWidth="0.5" fill="none" />
          </g>
        </svg>
      </div>

      <style>{`
        @keyframes driftSlow {
          from { transform: translate(0, 0); }
          to   { transform: translate(8px, -6px); }
        }
        @media (max-width: 768px) {
          .parallax-layer { display: none !important; }
        }
      `}</style>
    </>
  );
}

export default function Home() {
  document.title = 'Somaiya Debating Society';

  return (
    <>
      {/* =====================================================
          HERO — Dark, centered, logo-forward, with chamber illustration
          ===================================================== */}
      <section
        className="section-dark"
        style={{
          paddingTop: '6rem',
          paddingBottom: '6.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
        aria-label="Hero"
      >
        {/* Subtle radial glow behind logo */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -60%)',
            width: 'min(600px, 150vw)',
            height: 'min(600px, 150vw)',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(158,27,50,0.18) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Decorative hairline grid lines */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(rgba(216,210,196,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(216,210,196,0.06) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            pointerEvents: 'none',
          }}
        />

        {/* Chamber illustration layers */}
        <HeroIllustration />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            {/* Logo */}
            <div
              className="op-rail--animate"
              style={{
                marginBottom: '2.5rem',
                position: 'relative',
              }}
            >
              {/* Glow ring behind logo */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: '-12px',
                  borderRadius: '50%',
                  border: '1px solid rgba(158,27,50,0.4)',
                  animation: 'pulseRing 3s ease-in-out infinite',
                }}
              />
              <img
                src="/logo.png"
                alt="Somaiya Debating Society logo"
                style={{
                  width: '110px',
                  height: '110px',
                  objectFit: 'cover',
                  display: 'block',
                  position: 'relative',
                  borderRadius: '50%',
                  boxShadow: '0 0 0 3px rgba(158,27,50,0.5), 0 0 32px rgba(158,27,50,0.3)',
                }}
              />
            </div>

            {/* Session label */}
            <p
              className="rail-label"
              style={{
                color: 'var(--color-red)',
                marginBottom: '1.5rem',
                letterSpacing: '0.08em',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              Session {SITE.session} &nbsp;&bull;&nbsp; Est. {SITE.established}
            </p>

            {/* Heading — pushed larger, tight leading */}
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 9vw, 6.5rem)',
                letterSpacing: '-0.045em',
                marginBottom: '1.5rem',
                lineHeight: 1.0,
                maxWidth: '14ch',
              }}
            >
              Somaiya{' '}
              <span style={{ color: 'var(--color-red)' }}>Debating</span>{' '}
              Society
            </h1>

            {/* Red rule */}
            <div
              aria-hidden="true"
              style={{
                width: '48px',
                height: '3px',
                backgroundColor: 'var(--color-red)',
                margin: '0 auto 1.75rem',
              }}
            />

            {/* Tagline */}
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                color: 'rgba(252,252,250,0.68)',
                maxWidth: '52ch',
                lineHeight: 1.7,
                marginBottom: '3rem',
              }}
            >
              {SITE.tagline}
            </p>

            {/* CTAs — pill shape */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link to="/events" className="btn-pill-light" id="hero-events-btn">
                Upcoming Events
              </Link>
              <Link to="/about" className="btn-ghost-light" id="hero-about-btn">
                About the Society
              </Link>
            </div>

            {/* Institution tag */}
            <p
              className="rail-label"
              style={{
                color: 'rgba(107,101,88,0.7)',
                marginTop: '3rem',
                fontSize: '0.75rem',
                letterSpacing: '0.04em',
              }}
            >
              K.J. Somaiya College of Engineering &bull; Vidyavihar, Mumbai
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK STATS — Dark Ink band, animated counters
          ===================================================== */}
      <section
        className="section-dark"
        style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem', borderTop: '1px solid rgba(252,252,250,0.06)' }}
        aria-label="Society statistics"
      >
        <div className="container">
          <div className="section-marker" style={{ justifyContent: 'center' }}>
            <span style={{ color: 'rgba(252,252,250,0.45)' }}>By the numbers</span>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.5rem',
              textAlign: 'center',
            }}
            className="stats-grid"
          >
            {STATS.map((stat) => (
              <StatCounter key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          UPCOMING EVENT HIGHLIGHT — glass card on warm bg
          ===================================================== */}
      {nextEvent && (
        <section
          className="section-warm"
          style={{ paddingTop: '4.5rem', paddingBottom: '4.5rem' }}
          aria-label="Next upcoming event"
        >
          <div className="container">
            {/* Section marker */}
            <div className="section-marker" style={{ justifyContent: 'center' }}>
              <span>Upcoming event</span>
            </div>

            {/* Event card — glass treatment */}
            <div
              className="glass"
              style={{
                maxWidth: '680px',
                margin: '0 auto',
                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                position: 'relative',
                borderRadius: '2px',
              }}
            >
              {/* Left red accent bar */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '4px',
                  backgroundColor: 'var(--color-red)',
                  borderRadius: '2px 0 0 2px',
                }}
              />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                <div>
                  <p className="motion-num" style={{ marginBottom: '0.4rem' }}>{nextEvent.id}</p>
                  <h2
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.35rem, 3vw, 1.9rem)',
                      letterSpacing: '-0.03em',
                      margin: 0,
                      lineHeight: 1.15,
                    }}
                  >
                    {nextEvent.name}
                  </h2>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--color-red)',
                    backgroundColor: 'var(--color-red-muted)',
                    padding: '0.3rem 0.7rem',
                    border: '1px solid rgba(158,27,50,0.2)',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  {nextEvent.format}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                <p className="rail-label" style={{ color: 'var(--color-chalk)' }}>{nextEvent.dateLabel}</p>
                <p className="rail-label" style={{ color: 'var(--color-chalk)' }}>{nextEvent.venue}</p>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--color-chalk)',
                  fontSize: '0.9375rem',
                  lineHeight: 1.65,
                  marginBottom: '1.75rem',
                }}
              >
                {nextEvent.description}
              </p>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <a
                  href={nextEvent.registerUrl}
                  className="btn-pill"
                  id={`register-${nextEvent.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register
                </a>
                <Link
                  to="/events"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.875rem',
                    color: 'var(--color-chalk)',
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px',
                  }}
                >
                  All events
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          EXPLORE LINKS — white bg, centered, divider-separated
          ===================================================== */}
      <section
        style={{ paddingTop: '4rem', paddingBottom: '4rem', borderBottom: '1px solid var(--color-rule)' }}
        aria-label="Site navigation"
      >
        <div className="container">
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <div className="section-marker" style={{ justifyContent: 'center' }}>
              <span>Explore</span>
            </div>
            <nav aria-label="Explore the site">
              {[
                { to: '/about',     label: 'About the Society',      sub: 'History, mission, and values' },
                { to: '/events',    label: 'Events and Tournaments',  sub: 'Upcoming competitions and past results' },
                { to: '/resources', label: 'Motions Archive',         sub: 'BP, Asian, and WSDC motion database' },
                { to: '/join',      label: 'Join the Society',        sub: 'Tryout process and registration' },
              ].map(({ to, label, sub }, i, arr) => (
                <div key={to}>
                  <Link
                    to={to}
                    id={`explore-${to.replace('/', '')}`}
                    className="explore-link"
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '1.2rem 0',
                      textDecoration: 'none',
                      color: 'var(--color-ink)',
                      gap: '1rem',
                      transition: 'color 0.15s ease',
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                          letterSpacing: '-0.02em',
                          margin: '0 0 0.15rem 0',
                        }}
                      >
                        {label}
                      </p>
                      <p className="rail-label" style={{ color: 'var(--color-chalk)' }}>{sub}</p>
                    </div>
                    <span
                      style={{
                        fontSize: '1.1rem',
                        color: 'var(--color-rule)',
                        flexShrink: 0,
                        fontFamily: 'var(--font-sans)',
                        transition: 'color 0.15s ease',
                      }}
                      aria-hidden="true"
                    >
                      /
                    </span>
                  </Link>
                  {i < arr.length - 1 && <hr className="rule" style={{ margin: 0 }} />}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER CTA — dark band
          ===================================================== */}
      <section
        className="section-dark"
        style={{ paddingTop: '4.5rem', paddingBottom: '5rem', textAlign: 'center' }}
        aria-label="Call to action"
      >
        <div className="container">
          <img
            src="/logo.png"
            alt=""
            aria-hidden="true"
            style={{ width: '52px', height: '52px', objectFit: 'cover', borderRadius: '50%', margin: '0 auto 1.5rem', display: 'block', opacity: 0.9, boxShadow: '0 0 0 2px rgba(158,27,50,0.5)' }}
          />
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 4.5vw, 3rem)',
              letterSpacing: '-0.03em',
              margin: '0 auto 0.875rem',
              maxWidth: '20ch',
              lineHeight: 1.1,
            }}
          >
            Ready to find your voice in the chamber?
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'rgba(252,252,250,0.6)',
              fontSize: '1rem',
              marginBottom: '2.5rem',
              maxWidth: '40ch',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Applications open at the start of every semester. Experience not required.
          </p>
          <Link to="/join" className="btn-pill" id="footer-cta-btn">
            Apply to Join
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes pulseRing {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50%       { transform: scale(1.08); opacity: 1; }
        }

        @media (max-width: 639px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.25rem !important;
          }
        }

        @media (hover: hover) {
          .explore-link:hover {
            color: var(--color-red) !important;
          }
          .explore-link:hover span {
            color: var(--color-red) !important;
          }
        }
      `}</style>
    </>
  );
}

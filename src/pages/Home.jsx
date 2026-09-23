import { Link } from 'react-router-dom';
import { SITE, STATS } from '../theme';
import { events } from '../data/events';

const nextEvent = events
  .filter(e => e.status === 'upcoming')
  .sort((a, b) => new Date(a.date) - new Date(b.date))[0];

export default function Home() {
  document.title = 'Somaiya Debating Society';

  return (
    <>
      {/* =====================================================
          HERO — Dark, centered, logo-forward
          ===================================================== */}
      <section
        className="section-dark"
        style={{
          paddingTop: '5rem',
          paddingBottom: '5.5rem',
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
            width: '600px',
            height: '600px',
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
                marginBottom: '2.25rem',
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
                marginBottom: '1.25rem',
                letterSpacing: '0.08em',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              Session {SITE.session} &nbsp;&bull;&nbsp; Est. {SITE.established}
            </p>

            {/* Heading */}
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.75rem, 7vw, 5.5rem)',
                letterSpacing: '-0.04em',
                marginBottom: '1.25rem',
                lineHeight: 1.05,
                maxWidth: '16ch',
              }}
            >
              Somaiya Debating Society
            </h1>

            {/* Red rule */}
            <div
              aria-hidden="true"
              style={{
                width: '48px',
                height: '3px',
                backgroundColor: 'var(--color-red)',
                margin: '0 auto 1.5rem',
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
                marginBottom: '2.75rem',
              }}
            >
              {SITE.tagline}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link to="/events" className="btn-primary-light" id="hero-events-btn">
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
                marginTop: '2.75rem',
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
          QUICK STATS — Red-tinted band, centered
          ===================================================== */}
      <section
        className="section-red-tint"
        style={{ paddingTop: '2.75rem', paddingBottom: '2.75rem' }}
        aria-label="Society statistics"
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.5rem',
              textAlign: 'center',
            }}
            className="stats-grid"
          >
            {STATS.map(({ value, label }) => (
              <div key={label} style={{ padding: '0.5rem 0' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)',
                    fontWeight: 500,
                    letterSpacing: '-0.04em',
                    color: 'var(--color-red)',
                    lineHeight: 1,
                    margin: '0 0 0.4rem 0',
                  }}
                >
                  {value}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8125rem',
                    color: 'var(--color-chalk)',
                    margin: 0,
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          UPCOMING EVENT HIGHLIGHT — warm section
          ===================================================== */}
      {nextEvent && (
        <section
          className="section-warm"
          style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
          aria-label="Next upcoming event"
        >
          <div className="container">
            {/* Section label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem', justifyContent: 'center' }}>
              <div style={{ height: '1px', flex: 1, backgroundColor: 'var(--color-rule)', maxWidth: '120px' }} aria-hidden="true" />
              <p
                className="rail-label rail-label--red"
                style={{ textAlign: 'center', letterSpacing: '0.06em', fontSize: '0.75rem', fontWeight: 600 }}
              >
                Next Event
              </p>
              <div style={{ height: '1px', flex: 1, backgroundColor: 'var(--color-rule)', maxWidth: '120px' }} aria-hidden="true" />
            </div>

            {/* Event card */}
            <div
              style={{
                maxWidth: '680px',
                margin: '0 auto',
                border: '1px solid var(--color-rule)',
                backgroundColor: 'var(--color-paper)',
                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                position: 'relative',
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
                  className="btn-primary"
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
            <p
              className="rail-label"
              style={{ textAlign: 'center', color: 'var(--color-chalk)', marginBottom: '2rem', letterSpacing: '0.04em' }}
            >
              Explore
            </p>
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
        style={{ paddingTop: '4rem', paddingBottom: '4.5rem', textAlign: 'center' }}
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
              fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
              letterSpacing: '-0.03em',
              margin: '0 auto 0.875rem',
              maxWidth: '22ch',
              lineHeight: 1.15,
            }}
          >
            Ready to find your voice in the chamber?
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'rgba(252,252,250,0.6)',
              fontSize: '1rem',
              marginBottom: '2.25rem',
              maxWidth: '40ch',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Applications open at the start of every semester. Experience not required.
          </p>
          <Link to="/join" className="btn-primary" id="footer-cta-btn">
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

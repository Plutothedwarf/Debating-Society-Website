import { Link } from 'react-router-dom';
import { SITE } from '../theme';

// Social icon SVGs — inline to avoid asset dependency
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

const FOOTER_LINKS = [
  { to: '/about',     label: 'About' },
  { to: '/team',      label: 'Team' },
  { to: '/events',    label: 'Events' },
  { to: '/resources', label: 'Resources' },
  { to: '/gallery',   label: 'Gallery' },
  { to: '/join',      label: 'Join Us' },
  { to: '/contact',   label: 'Contact' },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="section-dark"
      style={{
        marginTop: '0',
      }}
      role="contentinfo"
    >
      <div className="container" style={{ paddingTop: '4.5rem', paddingBottom: '3rem' }}>
        {/* Large wordmark */}
        <div style={{ marginBottom: '3rem' }}>
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <img
              src="/logo.png"
              alt="Somaiya Debating Society logo"
              style={{
                width: '56px',
                height: '56px',
                objectFit: 'cover',
                borderRadius: '50%',
                flexShrink: 0,
                boxShadow: '0 0 0 2px rgba(158,27,50,0.5)',
              }}
            />
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontWeight: 500,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}>
              <span style={{ display: 'block', color: '#FCFCFA' }}>Somaiya</span>
              <span style={{ display: 'block', color: 'var(--color-red)', fontSize: '0.75em' }}>
                Debating Society
              </span>
            </span>
          </Link>
        </div>

        {/* Main grid: links + social */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '3rem',
            alignItems: 'start',
            marginBottom: '3rem',
          }}
          className="footer-grid"
        >
          {/* Navigation links */}
          <nav aria-label="Footer navigation">
            <ul
              style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem 2.5rem',
              }}
            >
              {FOOTER_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.95rem',
                      color: 'rgba(252,252,250,0.6)',
                      textDecoration: 'none',
                      display: 'block',
                      padding: '0.25rem 0',
                      transition: 'color 0.15s ease',
                    }}
                    onMouseEnter={e => e.target.style.color = '#FCFCFA'}
                    onMouseLeave={e => e.target.style.color = 'rgba(252,252,250,0.6)'}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-end' }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'rgba(252,252,250,0.4)', marginBottom: '0.25rem' }}>Follow us</p>
            <div style={{ display: 'flex', gap: '1.25rem' }}>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Somaiya Debating Society on Instagram"
                style={{ color: 'rgba(252,252,250,0.5)', transition: 'color 0.15s ease' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-red)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(252,252,250,0.5)'}
              >
                <InstagramIcon />
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Somaiya Debating Society on LinkedIn"
                style={{ color: 'rgba(252,252,250,0.5)', transition: 'color 0.15s ease' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-cobalt)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(252,252,250,0.5)'}
              >
                <LinkedInIcon />
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join Somaiya Debating Society WhatsApp community"
                style={{ color: 'rgba(252,252,250,0.5)', transition: 'color 0.15s ease' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-teal)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(252,252,250,0.5)'}
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Address */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.8125rem',
          color: 'rgba(252,252,250,0.35)',
          lineHeight: 1.6,
          margin: '0 0 2.5rem 0',
        }}>
          K.J. Somaiya College of Engineering, Vidyavihar, Mumbai 400077
        </p>

        {/* Hairline divider */}
        <div style={{ borderTop: '1px solid rgba(252,252,250,0.1)', marginBottom: '1.5rem' }} />

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'rgba(252,252,250,0.3)', margin: 0 }}>
            &copy; {year} Somaiya Debating Society. Est. {SITE.established}.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <a
              href={`mailto:${SITE.email}`}
              style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'rgba(252,252,250,0.3)', textDecoration: 'none', transition: 'color 0.15s ease' }}
              onMouseEnter={e => e.target.style.color = '#FCFCFA'}
              onMouseLeave={e => e.target.style.color = 'rgba(252,252,250,0.3)'}
            >
              {SITE.email}
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              style={{
                background: 'none',
                border: '1px solid rgba(252,252,250,0.15)',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'rgba(252,252,250,0.4)',
                transition: 'color 0.15s ease, border-color 0.15s ease',
                flexShrink: 0,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#FCFCFA';
                e.currentTarget.style.borderColor = 'rgba(252,252,250,0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'rgba(252,252,250,0.4)';
                e.currentTarget.style.borderColor = 'rgba(252,252,250,0.15)';
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .footer-grid > div:last-child {
            align-items: flex-start !important;
          }
        }
      `}</style>
    </footer>
  );
}

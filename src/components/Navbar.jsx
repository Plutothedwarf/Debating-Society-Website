import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { SITE } from '../theme';
import ThemeToggle from './ThemeToggle';

const NAV_LINKS = [
  { to: '/',          label: 'Home' },
  { to: '/about',     label: 'About' },
  { to: '/team',      label: 'Team' },
  { to: '/events',    label: 'Events' },
  { to: '/resources', label: 'Resources' },
  { to: '/gallery',   label: 'Gallery' },
  { to: '/join',      label: 'Join Us' },
  { to: '/contact',   label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={scrolled ? 'glass' : ''}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: scrolled ? undefined : 'var(--color-paper)',
        borderBottom: scrolled ? 'none' : '1px solid transparent',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
        boxShadow: scrolled ? '0 2px 16px rgba(23,21,18,0.06)' : 'none',
      }}
      role="banner"
    >
      <div className="container">
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '68px',
          }}
          aria-label="Main navigation"
        >
          {/* ── Logo ── */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              textDecoration: 'none',
              flexShrink: 0,
            }}
            aria-label={`${SITE.name} home`}
          >
            <img
              src="/logo.png"
              alt="Somaiya Debating Society logo"
              style={{
                width: '40px',
                height: '40px',
                objectFit: 'cover',
                display: 'block',
                borderRadius: '50%',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                fontWeight: 500,
                color: 'var(--color-ink)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
              }}
            >
              <span style={{ display: 'block' }}>Somaiya</span>
              <span style={{ display: 'block', color: 'var(--color-red)', fontSize: '0.875rem' }}>
                Debating Society
              </span>
            </span>
          </Link>

          {/* ── Desktop nav links ── */}
          <ul
            style={{
              gap: 0,
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
            className="nav-desktop lg:flex"
          >
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  style={({ isActive }) => ({
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.875rem',
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? 'var(--color-red)' : 'var(--color-chalk)',
                    padding: '0.5rem 0.875rem',
                    display: 'block',
                    borderBottom: isActive ? '2px solid var(--color-red)' : '2px solid transparent',
                    textDecoration: 'none',
                    transition: 'color 0.15s ease, border-color 0.15s ease',
                  })}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* ── Desktop: theme toggle + hamburger ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* Theme toggle — visible on desktop header, moved to menu on mobile */}
            <div className="nav-desktop">
              <ThemeToggle />
            </div>

            {/* Hamburger — mobile only */}
            <button
              id="nav-hamburger"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '5px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                minWidth: '44px',
                minHeight: '44px',
                alignItems: 'center',
              }}
              className="nav-mobile lg:hidden"
            >
              <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: 'var(--color-ink)', transformOrigin: 'center', transition: 'transform 0.2s ease, opacity 0.2s ease', transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }} />
              <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: 'var(--color-ink)', transition: 'opacity 0.2s ease', opacity: open ? 0 : 1 }} />
              <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: 'var(--color-ink)', transformOrigin: 'center', transition: 'transform 0.2s ease, opacity 0.2s ease', transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
            </button>
          </div>
        </nav>
      </div>

      {/* ── Mobile menu overlay ── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position: 'fixed',
          inset: 0,
          top: '68px',
          backgroundColor: 'var(--color-paper)',
          zIndex: 99,
          padding: '2rem 1.5rem',
          overflowY: 'auto',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          borderTop: '1px solid var(--color-rule)',
          flexDirection: 'column',
        }}
        className="nav-mobile lg:hidden"
      >
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to} style={{ borderBottom: '1px solid var(--color-rule)' }}>
              <NavLink
                to={to}
                end={to === '/'}
                onClick={() => setOpen(false)}
                style={({ isActive }) => ({
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.75rem',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  color: isActive ? 'var(--color-red)' : 'var(--color-ink)',
                  display: 'block',
                  padding: '1rem 0',
                  textDecoration: 'none',
                })}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile menu footer */}
        <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--color-rule)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <p className="rail-label">Appearance</p>
            <ThemeToggle />
          </div>
          <p className="rail-label">{SITE.email}</p>
          <p className="rail-label" style={{ marginTop: '0.25rem' }}>{SITE.location}</p>
        </div>
      </div>
    </header>
  );
}

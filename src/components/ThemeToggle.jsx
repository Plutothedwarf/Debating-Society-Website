import { useTheme } from '../context/ThemeContext';

const SunIcon = () => (
  <svg
    width="18" height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1"  x2="12" y2="3"  />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22"  x2="5.64" y2="5.64"  />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1"  y1="12" x2="3"  y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg
    width="17" height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export default function ThemeToggle() {
  const { isDark, toggle } = useTheme();

  return (
    <button
      id="theme-toggle"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '36px',
        height: '36px',
        minWidth: '44px',
        minHeight: '44px',
        background: 'none',
        border: '1.5px solid var(--color-rule)',
        borderRadius: '50%',
        cursor: 'pointer',
        color: 'var(--color-chalk)',
        padding: 0,
        flexShrink: 0,
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--color-red)';
        e.currentTarget.style.color = 'var(--color-red)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--color-rule)';
        e.currentTarget.style.color = 'var(--color-chalk)';
      }}
    >
      {/* Sun / Moon slide animation */}
      <span
        style={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          transform: isDark ? 'translateY(0) rotate(0deg)' : 'translateY(-100%) rotate(-90deg)',
          opacity: isDark ? 1 : 0,
          transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s ease',
        }}
        aria-hidden="true"
      >
        <SunIcon />
      </span>
      <span
        style={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          transform: isDark ? 'translateY(100%) rotate(90deg)' : 'translateY(0) rotate(0deg)',
          opacity: isDark ? 0 : 1,
          transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s ease',
        }}
        aria-hidden="true"
      >
        <MoonIcon />
      </span>
    </button>
  );
}

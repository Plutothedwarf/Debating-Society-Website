import { useState, useRef, useEffect } from 'react';

const ChevronIcon = ({ open }) => (
  <svg
    width="16" height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{
      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    }}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function Accordion({ title, description, details, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(defaultOpen ? 'auto' : 0);

  useEffect(() => {
    if (open) {
      const bounds = contentRef.current?.getBoundingClientRect();
      setHeight(bounds?.height || 'auto');
    } else {
      setHeight(0);
    }
  }, [open]);

  // Recalculate height on resize if open
  useEffect(() => {
    if (!open) return;
    const handleResize = () => {
      const bounds = contentRef.current?.getBoundingClientRect();
      setHeight(bounds?.height || 'auto');
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [open]);

  return (
    <div
      style={{
        borderTop: '1px solid var(--color-rule)',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.25rem 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          color: 'var(--color-ink)',
        }}
      >
        <div style={{ paddingRight: '1rem' }}>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.25rem',
              margin: '0 0 0.25rem 0',
              lineHeight: 1.2,
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9375rem',
              color: 'var(--color-chalk)',
              margin: 0,
            }}
          >
            {description}
          </p>
        </div>
        <div style={{ color: 'var(--color-chalk)', flexShrink: 0 }}>
          <ChevronIcon open={open} />
        </div>
      </button>
      
      <div
        style={{
          height: open ? height : 0,
          transition: 'height 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          overflow: 'hidden',
        }}
      >
        <div ref={contentRef} style={{ paddingBottom: '1.5rem' }}>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {details.map((detail, idx) => (
              <li key={idx}>
                <strong
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9375rem',
                    color: 'var(--color-red)',
                    display: 'block',
                    marginBottom: '0.15rem',
                  }}
                >
                  {detail.subtitle}
                </strong>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9375rem',
                    color: 'var(--color-ink)',
                    lineHeight: 1.6,
                    display: 'block',
                  }}
                >
                  {detail.content}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

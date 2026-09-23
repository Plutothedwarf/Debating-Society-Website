import { useEffect, useState, useCallback } from 'react';

// Placeholder gallery images using picsum.photos with deterministic seeds
const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/seed/sds${i + 1}/800/600`,
  thumb: `https://picsum.photos/seed/sds${i + 1}/400/300`,
  alt: `Somaiya Debating Society event photograph ${i + 1}`,
  caption: [
    'Somaiya Invitational 2025 — Grand Finals',
    'Training workshop — Rebuttal techniques',
    'Mumbai Open 2025 — Team SDS',
    'Awards Night 2024 — Best Speaker presentation',
    'Freshers Open 2025 — Adjudication panel',
    'Weekly practice session',
    'Pre-tournament briefing',
    'Inter-Department Championship 2025',
    'Society orientation — September 2025',
    'Guest lecture — Senior adjudicator talk',
    'Team photo — Maharashtra State Championship',
    'End-of-year celebration 2024',
  ][i],
}));

function LightboxModal({ image, onClose, onPrev, onNext, hasPrev, hasNext }) {
  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  // Trap scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Gallery image: ${image.alt}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        backgroundColor: 'rgba(23, 21, 18, 0.92)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      {/* Inner container */}
      <div
        style={{ position: 'relative', maxWidth: '90vw', maxHeight: '85vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close image"
          style={{
            position: 'absolute',
            top: '-2.5rem',
            right: 0,
            background: 'none',
            border: 'none',
            color: '#FCFCFA',
            cursor: 'pointer',
            fontSize: '1.5rem',
            lineHeight: 1,
            padding: '0.5rem',
            minWidth: '44px',
            minHeight: '44px',
          }}
        >
          &times;
        </button>

        {/* Image */}
        <img
          src={image.src}
          alt={image.alt}
          style={{
            maxWidth: '100%',
            maxHeight: '75vh',
            objectFit: 'contain',
            display: 'block',
          }}
          loading="lazy"
        />

        {/* Caption */}
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.875rem',
            color: 'rgba(252, 252, 250, 0.7)',
            marginTop: '1rem',
            textAlign: 'center',
          }}
        >
          {image.caption}
        </p>

        {/* Prev / Next */}
        <div style={{ position: 'absolute', inset: '0 -3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', pointerEvents: 'none' }}>
          <button
            onClick={onPrev}
            disabled={!hasPrev}
            aria-label="Previous image"
            style={{
              background: 'none',
              border: 'none',
              color: '#FCFCFA',
              cursor: hasPrev ? 'pointer' : 'default',
              opacity: hasPrev ? 1 : 0.2,
              fontSize: '2rem',
              padding: '0.75rem',
              minWidth: '44px',
              minHeight: '44px',
              pointerEvents: 'all',
            }}
          >
            &#8249;
          </button>
          <button
            onClick={onNext}
            disabled={!hasNext}
            aria-label="Next image"
            style={{
              background: 'none',
              border: 'none',
              color: '#FCFCFA',
              cursor: hasNext ? 'pointer' : 'default',
              opacity: hasNext ? 1 : 0.2,
              fontSize: '2rem',
              padding: '0.75rem',
              minWidth: '44px',
              minHeight: '44px',
              pointerEvents: 'all',
            }}
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  useEffect(() => { document.title = 'Gallery — Somaiya Debating Society'; }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const openImage = useCallback((i) => setActiveIndex(i), []);
  const closeImage = useCallback(() => setActiveIndex(null), []);
  const prevImage = useCallback(() => setActiveIndex(i => Math.max(0, i - 1)), []);
  const nextImage = useCallback(() => setActiveIndex(i => Math.min(galleryImages.length - 1, i + 1)), []);

  return (
    <>
      {/* Page header */}
      <section style={{ paddingTop: '3.5rem', paddingBottom: '3rem', borderBottom: '1px solid var(--color-rule)' }}>
        <div className="container">
          <div className="op-layout">
            <aside className="op-rail">
              <p className="rail-label">Page</p>
              <p className="rail-label" style={{ color: 'var(--color-ink)', marginTop: '0.25rem' }}>Gallery</p>
              <p className="rail-label" style={{ color: 'var(--color-chalk)', marginTop: '0.5rem' }}>
                {galleryImages.length} photographs
              </p>
            </aside>
            <div className="op-main">
              <h1>Gallery</h1>
              <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-chalk)', marginTop: '0.75rem', margin: '0.75rem 0 0 0' }}>
                Moments from tournaments, workshops, and society events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image grid */}
      <section style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
        <div className="container">
          <div
            className="gallery-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1px',
              backgroundColor: 'var(--color-rule)',
            }}
          >
            {galleryImages.map((img, i) => (
              <button
                key={img.id}
                id={`gallery-img-${img.id}`}
                onClick={() => openImage(i)}
                aria-label={`Open: ${img.alt}`}
                style={{
                  padding: 0,
                  border: 'none',
                  cursor: 'pointer',
                  display: 'block',
                  position: 'relative',
                  aspectRatio: '4 / 3',
                  overflow: 'hidden',
                  backgroundColor: 'var(--color-rule)',
                }}
                className="gallery-item"
              >
                <img
                  src={img.thumb}
                  alt={img.alt}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.2s ease',
                  }}
                  className="gallery-img"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {activeIndex !== null && (
        <LightboxModal
          image={galleryImages[activeIndex]}
          onClose={closeImage}
          onPrev={prevImage}
          onNext={nextImage}
          hasPrev={activeIndex > 0}
          hasNext={activeIndex < galleryImages.length - 1}
        />
      )}

      <style>{`
        @media (hover: hover) {
          .gallery-item:hover .gallery-img {
            transform: scale(1.04);
          }
        }

        @media (max-width: 639px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }

        @media (min-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </>
  );
}

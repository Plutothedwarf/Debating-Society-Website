import { useEffect } from 'react';
import { events } from '../data/events';

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function EventCard({ event, muted }) {
  return (
    <article
      style={{
        borderTop: '1px solid var(--color-rule)',
        paddingTop: '1.75rem',
        paddingBottom: '1.75rem',
        opacity: muted ? 0.72 : 1,
      }}
      aria-label={`${event.name}, ${event.dateLabel}`}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '5rem 1fr', gap: '1.5rem', alignItems: 'start' }}>
        {/* Event ID in rail position */}
        <div>
          <p className="motion-num">{event.id}</p>
          <p className="rail-label" style={{ color: 'var(--color-chalk)', marginTop: '0.5rem', lineHeight: 1.4 }}>
            {event.format}
          </p>
        </div>

        {/* Main content */}
        <div>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              letterSpacing: '-0.02em',
              marginBottom: '0.35rem',
              color: muted ? 'var(--color-chalk)' : 'var(--color-ink)',
            }}
          >
            {event.name}
          </h3>

          {/* Date + venue */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
            <p className="rail-label" style={{ color: 'var(--color-chalk)' }}>
              {event.dateLabel}
            </p>
            <p className="rail-label" style={{ color: 'var(--color-chalk)' }}>
              {event.venue}
            </p>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--color-chalk)',
              fontSize: '0.9375rem',
              lineHeight: 1.65,
              marginBottom: '1.25rem',
              maxWidth: '55ch',
            }}
          >
            {event.description}
          </p>

          {/* Action */}
          {event.status === 'upcoming' && (
            <a
              href={event.registerUrl}
              className="btn-primary"
              id={`register-${event.id}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.875rem', padding: '0.6rem 1.25rem' }}
            >
              Register
            </a>
          )}
          {event.status === 'past' && event.resultsUrl && (
            <a
              href={event.resultsUrl}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                color: 'var(--color-chalk)',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
              id={`results-${event.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View results
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Events() {
  useEffect(() => { document.title = 'Events — Somaiya Debating Society'; }, []);

  const upcoming = events
    .filter(e => e.status === 'upcoming')
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const past = events
    .filter(e => e.status === 'past')
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      {/* Page header */}
      <section style={{ paddingTop: '3.5rem', paddingBottom: '3rem', borderBottom: '1px solid var(--color-rule)' }}>
        <div className="container">
          <div className="op-layout">
            <aside className="op-rail">
              <p className="rail-label">Page</p>
              <p className="rail-label" style={{ color: 'var(--color-ink)', marginTop: '0.25rem' }}>Events</p>
            </aside>
            <div className="op-main">
              <h1>Events</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming events */}
      <section style={{ paddingTop: '3rem', paddingBottom: '3rem', borderBottom: '1px solid var(--color-rule)' }}>
        <div className="container">
          <div className="op-layout">
            <aside className="op-rail">
              <p className="rail-label">Upcoming</p>
              <p className="rail-label" style={{ color: 'var(--color-chalk)', marginTop: '0.25rem' }}>
                {upcoming.length} {upcoming.length === 1 ? 'event' : 'events'}
              </p>
            </aside>
            <div className="op-main">
              <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', marginBottom: '0.5rem' }}>
                Upcoming events
              </h2>

              {upcoming.length === 0 ? (
                <div
                  style={{
                    border: '1px solid var(--color-rule)',
                    padding: '2.5rem',
                    marginTop: '1.5rem',
                    textAlign: 'center',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      color: 'var(--color-chalk)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    No upcoming events scheduled
                  </p>
                  <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-chalk)', fontSize: '0.9rem', margin: 0 }}>
                    Check back soon, or follow us on social media for announcements.
                  </p>
                </div>
              ) : (
                <div>
                  {upcoming.map(e => <EventCard key={e.id} event={e} muted={false} />)}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Past events */}
      {past.length > 0 && (
        <section style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
          <div className="container">
            <div className="op-layout">
              <aside className="op-rail">
                <p className="rail-label">Past</p>
                <p className="rail-label" style={{ color: 'var(--color-chalk)', marginTop: '0.25rem' }}>
                  {past.length} events
                </p>
              </aside>
              <div className="op-main">
                <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', marginBottom: '0.5rem' }}>
                  Past events
                </h2>
                <div>
                  {past.map(e => <EventCard key={e.id} event={e} muted={true} />)}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

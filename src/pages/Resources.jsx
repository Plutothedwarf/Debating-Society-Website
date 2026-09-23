import { useEffect, useState, useMemo } from 'react';
import { motions, resources, externalLinks, FORMATS, TOPICS } from '../data/motions';
import { debateFormats } from '../data/debateFormats';
import { munRules } from '../data/munRules';
import Accordion from '../components/Accordion';

// Download icon
const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

// External link icon
const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

export default function Resources() {
  useEffect(() => { document.title = 'Resources — Somaiya Debating Society'; }, []);

  const [query, setQuery]       = useState('');
  const [format, setFormat]     = useState('');
  const [topic, setTopic]       = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    return motions.filter(m => {
      const q = query.toLowerCase();
      const matchesQuery  = !q || m.text.toLowerCase().includes(q) || m.id.toLowerCase().includes(q);
      const matchesFormat = !format || m.format === format;
      const matchesTopic  = !topic  || m.topic === topic;
      return matchesQuery && matchesFormat && matchesTopic;
    });
  }, [query, format, topic]);

  const clearFilters = () => { setQuery(''); setFormat(''); setTopic(''); };
  const hasFilters = query || format || topic;

  return (
    <>
      {/* Page header */}
      <section style={{ paddingTop: '3.5rem', paddingBottom: '2rem', borderBottom: '1px solid var(--color-rule)' }}>
        <div className="container">
          <div className="op-layout">
            <aside className="op-rail">
              <p className="rail-label">Page</p>
              <p className="rail-label" style={{ color: 'var(--color-ink)', marginTop: '0.25rem' }}>Resources</p>
            </aside>
            <div className="op-main">
              <h1 style={{ marginBottom: '1.5rem' }}>Resources</h1>
              <p style={{ color: 'var(--color-chalk)', maxWidth: '60ch', marginBottom: '2rem' }}>
                Everything you need to master formal debate and Model United Nations, from format guides to historical motion archives.
              </p>

              {/* Sub-navigation */}
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <a href="#formats" className="btn-secondary" style={{ minHeight: '38px', padding: '0.5rem 1.25rem' }}>Debate Formats</a>
                <a href="#mun" className="btn-secondary" style={{ minHeight: '38px', padding: '0.5rem 1.25rem' }}>Model UN Guide</a>
                <a href="#motions" className="btn-secondary" style={{ minHeight: '38px', padding: '0.5rem 1.25rem' }}>Motions Archive</a>
                <a href="#downloads" className="btn-secondary" style={{ minHeight: '38px', padding: '0.5rem 1.25rem' }}>Downloads</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Debate Formats Section */}
      <section id="formats" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem', borderBottom: '1px solid var(--color-rule)' }}>
        <div className="container">
          <div className="op-layout">
            <aside className="op-rail">
              <p className="rail-label">Section 1</p>
              <p className="rail-label" style={{ color: 'var(--color-ink)', marginTop: '0.25rem' }}>Debate Formats</p>
            </aside>
            <div className="op-main">
              <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', marginBottom: '1.5rem' }}>
                Debate Formats
              </h2>
              <div style={{ borderBottom: '1px solid var(--color-rule)' }}>
                {debateFormats.map((format, idx) => (
                  <Accordion
                    key={format.id}
                    title={format.title}
                    description={format.description}
                    details={format.details}
                    defaultOpen={idx === 0}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MUN Guide Section */}
      <section id="mun" className="section-warm" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem', borderBottom: '1px solid var(--color-rule)' }}>
        <div className="container">
          <div className="op-layout">
            <aside className="op-rail">
              <p className="rail-label">Section 2</p>
              <p className="rail-label" style={{ color: 'var(--color-ink)', marginTop: '0.25rem' }}>Model UN Guide</p>
              <p className="rail-label" style={{ color: 'var(--color-chalk)', marginTop: '0.5rem' }}>UNA-USA Procedures</p>
            </aside>
            <div className="op-main">
              <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', marginBottom: '1.5rem' }}>
                Model UN Guide (UNA-USA)
              </h2>
              <div style={{ borderBottom: '1px solid var(--color-rule)' }}>
                {munRules.map((rule, idx) => (
                  <Accordion
                    key={rule.id}
                    title={rule.title}
                    description={rule.description}
                    details={rule.details}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Motions archive */}
      <section id="motions" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem', borderBottom: '1px solid var(--color-rule)' }}>
        <div className="container">
          <div className="op-layout">
            <aside className="op-rail">
              <p className="rail-label">Section 3</p>
              <p className="rail-label" style={{ color: 'var(--color-ink)', marginTop: '0.25rem' }}>Motions Archive</p>
              <p className="rail-label" style={{ color: 'var(--color-chalk)', marginTop: '0.5rem' }}>
                {filtered.length} of {motions.length}
              </p>
            </aside>
            <div className="op-main">
              <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', marginBottom: '1.5rem' }}>
                Motions archive
              </h2>

              {/* Search + filters */}
              <div style={{ marginBottom: '1.5rem' }}>
                {/* Search input */}
                <div style={{ marginBottom: '0.75rem' }}>
                  <label
                    htmlFor="motion-search"
                    className="rail-label"
                    style={{ display: 'block', marginBottom: '0.4rem' }}
                  >
                    Search motions
                  </label>
                  <input
                    id="motion-search"
                    type="search"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Search by keyword or motion number..."
                    style={{
                      width: '100%',
                      maxWidth: '500px',
                      border: '1px solid var(--color-rule)',
                      backgroundColor: 'var(--color-paper)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9375rem',
                      color: 'var(--color-ink)',
                      padding: '0.625rem 0.875rem',
                      outline: 'none',
                      borderRadius: 0,
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--color-ink)'}
                    onBlur={e => e.target.style.borderColor = 'var(--color-rule)'}
                  />
                </div>

                {/* Mobile: toggle filters */}
                <button
                  id="toggle-filters"
                  onClick={() => setFiltersOpen(!filtersOpen)}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.875rem',
                    color: 'var(--color-chalk)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0.25rem 0',
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px',
                    minHeight: '44px',
                  }}
                  aria-expanded={filtersOpen}
                  aria-controls="filter-panel"
                >
                  {filtersOpen ? 'Hide filters' : 'Show filters'}{hasFilters ? ' (active)' : ''}
                </button>

                {/* Filter dropdowns */}
                <div
                  id="filter-panel"
                  style={{
                    display: filtersOpen ? 'flex' : 'none',
                    gap: '1rem',
                    flexWrap: 'wrap',
                    marginTop: '0.75rem',
                    alignItems: 'flex-end',
                  }}
                >
                  {/* Format */}
                  <div>
                    <label htmlFor="format-filter" className="rail-label" style={{ display: 'block', marginBottom: '0.35rem' }}>
                      Format
                    </label>
                    <select
                      id="format-filter"
                      value={format}
                      onChange={e => setFormat(e.target.value)}
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.875rem',
                        color: 'var(--color-ink)',
                        border: '1px solid var(--color-rule)',
                        backgroundColor: 'var(--color-paper)',
                        padding: '0.5rem 0.75rem',
                        borderRadius: 0,
                        cursor: 'pointer',
                        minHeight: '44px',
                      }}
                    >
                      <option value="">All formats</option>
                      {FORMATS.map(f => <option key={f} value={f}>{f}</option>)}
                    </select>
                  </div>

                  {/* Topic */}
                  <div>
                    <label htmlFor="topic-filter" className="rail-label" style={{ display: 'block', marginBottom: '0.35rem' }}>
                      Topic
                    </label>
                    <select
                      id="topic-filter"
                      value={topic}
                      onChange={e => setTopic(e.target.value)}
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.875rem',
                        color: 'var(--color-ink)',
                        border: '1px solid var(--color-rule)',
                        backgroundColor: 'var(--color-paper)',
                        padding: '0.5rem 0.75rem',
                        borderRadius: 0,
                        cursor: 'pointer',
                        minHeight: '44px',
                      }}
                    >
                      <option value="">All topics</option>
                      {TOPICS.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  {hasFilters && (
                    <button
                      onClick={clearFilters}
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.875rem',
                        color: 'var(--color-chalk)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '0.5rem 0',
                        textDecoration: 'underline',
                        textUnderlineOffset: '3px',
                        minHeight: '44px',
                      }}
                    >
                      Clear all
                    </button>
                  )}
                </div>
              </div>

              {/* Motion list — order paper format */}
              <div role="list" aria-label="Motions archive">
                {filtered.length === 0 ? (
                  <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-chalk)', padding: '1.5rem 0' }}>
                    No motions match your filters.
                  </p>
                ) : (
                  filtered.map((m, i) => (
                    <div
                      key={m.id}
                      role="listitem"
                      style={{
                        borderTop: i === 0 ? '1px solid var(--color-rule)' : 'none',
                        borderBottom: '1px solid var(--color-rule)',
                        padding: '1.25rem 0',
                        display: 'grid',
                        gridTemplateColumns: '4.5rem 1fr',
                        gap: '1.25rem',
                        alignItems: 'start',
                      }}
                    >
                      {/* Motion number */}
                      <div style={{ paddingTop: '0.2rem' }}>
                        <span className="motion-num">{m.id}</span>
                      </div>

                      {/* Motion text + metadata */}
                      <div>
                        <p
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                            letterSpacing: '-0.01em',
                            color: 'var(--color-ink)',
                            lineHeight: 1.45,
                            margin: '0 0 0.6rem 0',
                          }}
                        >
                          {m.text}
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                          <span className="rail-label" style={{ color: 'var(--color-chalk)' }}>
                            {m.format}
                          </span>
                          <span className="rail-label" style={{ color: 'var(--color-chalk)' }}>
                            {m.topic}
                          </span>
                          <span className="rail-label" style={{ color: 'var(--color-chalk)' }}>
                            {m.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable materials & External Links */}
      <section id="downloads" style={{ paddingTop: '3.5rem', paddingBottom: '5rem' }}>
        <div className="container">
          <div className="op-layout">
            <aside className="op-rail">
              <p className="rail-label">Section 4</p>
              <p className="rail-label" style={{ color: 'var(--color-ink)', marginTop: '0.25rem' }}>External</p>
            </aside>
            <div className="op-main">
              <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', marginBottom: '1.5rem' }}>
                Downloadable materials
              </h2>
              <div style={{ marginBottom: '3.5rem' }}>
                {resources.map((r, i) => (
                  <div key={r.name}>
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '1rem 0',
                        textDecoration: 'none',
                        color: 'var(--color-ink)',
                        gap: '1rem',
                        transition: 'color 0.15s ease',
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--color-red)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--color-ink)'}
                    >
                      <div>
                        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', margin: '0 0 0.2rem 0' }}>
                          {r.name}
                        </p>
                        <p className="rail-label" style={{ color: 'var(--color-chalk)' }}>
                          {r.type} — {r.size}
                        </p>
                      </div>
                      <span style={{ color: 'var(--color-chalk)', flexShrink: 0 }}>
                        <DownloadIcon />
                      </span>
                    </a>
                    {i < resources.length - 1 && <hr className="rule" style={{ margin: 0 }} />}
                  </div>
                ))}
              </div>

              <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', marginBottom: '1.5rem' }}>
                External resources
              </h2>
              <div>
                {externalLinks.map((l, i) => (
                  <div key={l.label}>
                    <a
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '1rem 0',
                        textDecoration: 'none',
                        color: 'var(--color-ink)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9375rem',
                        gap: '1rem',
                        transition: 'color 0.15s ease',
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--color-red)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--color-ink)'}
                    >
                      {l.label}
                      <span style={{ color: 'var(--color-chalk)', flexShrink: 0 }}>
                        <ExternalIcon />
                      </span>
                    </a>
                    {i < externalLinks.length - 1 && <hr className="rule" style={{ margin: 0 }} />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

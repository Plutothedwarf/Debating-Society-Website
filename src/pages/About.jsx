import { useEffect } from 'react';

const milestones = [
  { year: 2020, text: 'Somaiya Debating Society founded by a group of eight students passionate about competitive debate.' },
  { year: 2021, text: 'First edition of Somaiya Invitational held, with 12 teams participating from colleges across Mumbai.' },
  { year: 2022, text: 'SDS members qualify for the Maharashtra State Debate Championship for the first time.' },
  { year: 2023, text: 'Membership grows to over 80 active members. Society introduces dedicated training workshops for new members.' },
  { year: 2024, text: 'SDS wins Best New Society at the Mumbai Inter-Collegiate Debate Council awards. Invitational expands to 30 teams.' },
  { year: 2025, text: 'Society affiliates with the All India Debate Association. First members selected for national-level representation.' },
];

const values = [
  {
    label: 'Rigorous argument',
    text: 'We believe in the discipline of building and testing ideas through structured, evidence-based reasoning.',
  },
  {
    label: 'Inclusive participation',
    text: 'Every member is given space to develop, regardless of background or prior experience in debate.',
  },
  {
    label: 'Intellectual honesty',
    text: 'We hold ourselves to speaking truthfully, crediting sources, and engaging opponents\' arguments on their merits.',
  },
  {
    label: 'Community over competition',
    text: 'Debate is a competitive discipline, but our strongest priority is building lasting friendships and a culture of mutual growth.',
  },
];

export default function About() {
  useEffect(() => { document.title = 'About \u2014 Somaiya Debating Society'; }, []);

  return (
    <>
      {/* Page header */}
      <section
        style={{ paddingTop: '3.5rem', paddingBottom: '3rem', borderBottom: '1px solid var(--color-rule)' }}
      >
        <div className="container">
          <div className="op-layout">
            <aside className="op-rail">
              <p className="rail-label">Page</p>
              <p className="rail-label" style={{ color: 'var(--color-ink)', marginTop: '0.25rem' }}>About</p>
            </aside>
            <div className="op-main">
              <h1>About the Society</h1>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem', borderBottom: '1px solid var(--color-rule)' }}>
        <div className="container">
          <div className="op-layout">
            <aside className="op-rail">
              <p className="rail-label">Section 1</p>
              <p className="rail-label" style={{ color: 'var(--color-ink)', marginTop: '0.25rem' }}>Our History</p>
            </aside>
            <div className="op-main">
              <div className="section-marker">
                <span>Our history</span>
              </div>
              <h2 style={{ marginBottom: '1.5rem' }}>Where we began</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p style={{ fontFamily: 'var(--font-sans)', lineHeight: 1.75, color: 'var(--color-chalk)' }}>
                  Somaiya Debating Society was founded in 2020 by eight students who shared a conviction that competitive debate had transformative power — not just as a co-curricular activity, but as a discipline for life. What began as informal practice sessions in a college seminar room grew quickly into a structured society with a training programme, a dedicated membership, and an annual flagship tournament.
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', lineHeight: 1.75, color: 'var(--color-chalk)' }}>
                  In our first full academic year, we fielded teams at regional tournaments, introduced three debate formats — British Parliamentary, Asian Parliamentary, and WSDC — and ran our first internal training workshop series. The response from students across departments exceeded our expectations.
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', lineHeight: 1.75, color: 'var(--color-chalk)' }}>
                  Today, Somaiya Debating Society counts over 150 active members, has sent teams to tournaments across Maharashtra, and hosts one of Mumbai's most competitive open invitational tournaments each October. We remain committed to the same principle that started it all: that a good argument, clearly made, changes minds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PULL-QUOTE — dark Ink section, Fraunces italic, Brass
          ===================================================== */}
      <section
        className="section-dark"
        style={{ paddingTop: '4.5rem', paddingBottom: '4.5rem' }}
        aria-label="Pull quote"
      >
        <div className="container">
          <div style={{ maxWidth: '48ch', margin: '0 auto', textAlign: 'center' }}>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                lineHeight: 1.35,
                letterSpacing: '-0.02em',
                color: 'var(--color-brass)',
                margin: 0,
                fontWeight: 300,
              }}
            >
              A good argument, clearly made, changes minds. That is the conviction this society was built on.
            </p>
            <div
              aria-hidden="true"
              style={{
                width: '32px',
                height: '2.5px',
                backgroundColor: 'var(--color-brass)',
                margin: '2rem auto 0',
                opacity: 0.5,
              }}
            />
          </div>
        </div>
      </section>

      {/* Mission and values */}
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem', borderBottom: '1px solid var(--color-rule)' }}>
        <div className="container">
          <div className="op-layout">
            <aside className="op-rail">
              <p className="rail-label">Section 2</p>
              <p className="rail-label" style={{ color: 'var(--color-ink)', marginTop: '0.25rem' }}>Mission</p>
            </aside>
            <div className="op-main">
              <div className="section-marker--gold section-marker">
                <span>Mission and values</span>
              </div>
              <h2 style={{ marginBottom: '0.75rem' }}>Mission and values</h2>
              <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-chalk)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                Our mission is to create a space where students develop the skills and habits of mind that formal debate demands — critical thinking, clear communication, and the confidence to stand and be challenged.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {values.map(({ label, text }, i, arr) => (
                  <div key={label}>
                    <div style={{ padding: '1.4rem 0', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                      <div
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--color-red)',
                          marginTop: '0.55rem',
                          flexShrink: 0,
                        }}
                        aria-hidden="true"
                      />
                      <div>
                        <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', letterSpacing: '-0.02em', marginBottom: '0.35rem', color: 'var(--color-ink)' }}>
                          {label}
                        </p>
                        <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-chalk)', margin: 0, lineHeight: 1.65 }}>
                          {text}
                        </p>
                      </div>
                    </div>
                    {i < arr.length - 1 && <hr className="rule" style={{ margin: 0 }} />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem', borderBottom: '1px solid var(--color-rule)' }}>
        <div className="container">
          <div className="op-layout">
            <aside className="op-rail">
              <p className="rail-label">Section 3</p>
              <p className="rail-label" style={{ color: 'var(--color-ink)', marginTop: '0.25rem' }}>Affiliations</p>
            </aside>
            <div className="op-main">
              <div className="section-marker--brass section-marker">
                <span>Affiliations</span>
              </div>
              <h2 style={{ marginBottom: '1.75rem' }}>Affiliations</h2>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                {[
                  { name: 'K.J. Somaiya College of Engineering', sub: 'Parent institution' },
                  { name: 'Somaiya Vidyavihar University', sub: 'University body' },
                  { name: 'All India Debate Association', sub: 'National body' },
                  { name: 'Mumbai Inter-Collegiate Debate Council', sub: 'City body' },
                ].map(({ name, sub }) => (
                  <div
                    key={name}
                    style={{
                      border: '1px solid var(--color-rule)',
                      padding: '1.25rem 1.5rem',
                      minWidth: '200px',
                      flex: '1 1 200px',
                      maxWidth: '280px',
                    }}
                  >
                    <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '0.9rem', color: 'var(--color-ink)', margin: '0 0 0.25rem 0' }}>{name}</p>
                    <p className="rail-label" style={{ color: 'var(--color-chalk)' }}>{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ paddingTop: '4rem', paddingBottom: '5rem' }}>
        <div className="container">
          <div className="op-layout">
            <aside className="op-rail">
              <p className="rail-label">Section 4</p>
              <p className="rail-label" style={{ color: 'var(--color-ink)', marginTop: '0.25rem' }}>Timeline</p>
            </aside>
            <div className="op-main">
              <div className="section-marker--gold section-marker">
                <span>Timeline</span>
              </div>
              <h2 style={{ marginBottom: '2rem' }}>Milestones</h2>
              <div style={{ position: 'relative' }}>
                {milestones.map(({ year, text }, i) => (
                  <div
                    key={year}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '4rem 1fr',
                      gap: '1.5rem',
                      paddingBottom: i < milestones.length - 1 ? '2rem' : 0,
                      position: 'relative',
                    }}
                  >
                    {/* Year */}
                    <div style={{ paddingTop: '0.15rem' }}>
                      <p
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontVariantNumeric: 'tabular-nums',
                          fontSize: '0.875rem',
                          color: 'var(--color-red)',
                          fontWeight: 600,
                          margin: 0,
                        }}
                      >
                        {year}
                      </p>
                    </div>
                    {/* Content */}
                    <div>
                      <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-chalk)', lineHeight: 1.65, margin: 0 }}>
                        {text}
                      </p>
                      {i < milestones.length - 1 && (
                        <div
                          style={{
                            position: 'absolute',
                            left: '1.85rem',
                            top: '1.4rem',
                            bottom: 0,
                            width: '1px',
                            backgroundColor: 'var(--color-rule)',
                          }}
                          aria-hidden="true"
                        />
                      )}
                    </div>
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

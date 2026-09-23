import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE } from '../theme';

const benefits = [
  {
    label: 'Compete at top tournaments',
    text: 'We send teams to regional, state, and national-level competitions each semester — with full preparation support.',
  },
  {
    label: 'Structured skill development',
    text: 'Weekly practice sessions, monthly workshops on argument structure, rebuttal, and case-building run by experienced members.',
  },
  {
    label: 'A community of thinkers',
    text: 'Join a group of students who read widely, disagree well, and push each other to think more precisely.',
  },
  {
    label: 'Access to all three formats',
    text: 'Train and compete in British Parliamentary, Asian Parliamentary, and WSDC styles from your first semester.',
  },
];

const steps = [
  {
    n: 1,
    label: 'Submit an application',
    text: 'Fill out the registration form below. Applications are open at the start of each semester.',
  },
  {
    n: 2,
    label: 'Attend an orientation session',
    text: 'All applicants are invited to an introductory session where we walk you through the society, debate formats, and what to expect.',
  },
  {
    n: 3,
    label: 'Take part in a tryout round',
    text: 'A short, low-pressure practice debate round — not a competitive test, just a chance for us to understand your baseline.',
  },
  {
    n: 4,
    label: 'Receive your membership decision',
    text: 'Within a week of tryouts, we confirm membership. First-semester members begin in our structured training programme.',
  },
];

const faqs = [
  {
    q: 'Do I need prior debate experience to join?',
    a: 'No. Many of our strongest members had no formal debate background when they joined. We have a structured training programme specifically for new members, and you will be paired with a mentor from the senior cohort.',
  },
  {
    q: 'How much time commitment is expected?',
    a: 'At minimum, one weekly practice session (roughly 2 hours). Active members who participate in tournaments commit additional time for preparation in the weeks leading up to events.',
  },
  {
    q: 'What debate formats does the society use?',
    a: 'We train in three formats: British Parliamentary (BP), Asian Parliamentary (AP), and World Schools (WSDC). You will be introduced to all three during your first semester.',
  },
  {
    q: 'Is there a membership fee?',
    a: 'There is a nominal semester fee that covers workshop materials, internal tournament costs, and society events. Details are shared at orientation.',
  },
  {
    q: 'Can I join if I am in my final year?',
    a: 'Yes. Final-year students are welcome to apply and often bring valuable perspectives. Many go on to contribute as adjudicators even after their undergraduate studies.',
  },
];

function AccordionItem({ q, a, isOpen, onToggle, id }) {
  return (
    <div style={{ borderBottom: '1px solid var(--color-rule)' }}>
      <button
        id={id}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${id}-answer`}
        style={{
          width: '100%',
          textAlign: 'left',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '1.1rem 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          minHeight: '44px',
          color: 'var(--color-ink)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.9375rem',
            fontWeight: 500,
            lineHeight: 1.4,
          }}
        >
          {q}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.2rem',
            color: 'var(--color-chalk)',
            flexShrink: 0,
            transition: 'transform 0.2s ease',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        id={`${id}-answer`}
        role="region"
        aria-labelledby={id}
        style={{
          maxHeight: isOpen ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.28s ease',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            color: 'var(--color-chalk)',
            fontSize: '0.9375rem',
            lineHeight: 1.7,
            paddingBottom: '1.25rem',
            margin: 0,
            maxWidth: '60ch',
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

export default function JoinUs() {
  useEffect(() => { document.title = 'Join Us — Somaiya Debating Society'; }, []);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* Page header */}
      <section style={{ paddingTop: '3.5rem', paddingBottom: '3rem', borderBottom: '1px solid var(--color-rule)' }}>
        <div className="container">
          <div className="op-layout">
            <aside className="op-rail">
              <p className="rail-label">Page</p>
              <p className="rail-label" style={{ color: 'var(--color-ink)', marginTop: '0.25rem' }}>Join Us</p>
            </aside>
            <div className="op-main">
              <h1>Join the Society</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Why join */}
      <section style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem', borderBottom: '1px solid var(--color-rule)' }}>
        <div className="container">
          <div className="op-layout">
            <aside className="op-rail">
              <p className="rail-label">Section 1</p>
              <p className="rail-label" style={{ color: 'var(--color-ink)', marginTop: '0.25rem' }}>Why join</p>
            </aside>
            <div className="op-main">
              <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', marginBottom: '1rem' }}>
                What you gain
              </h2>
              <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-chalk)', marginBottom: '2rem', lineHeight: 1.7 }}>
                Competitive debate is one of the most demanding co-curricular activities you can take on. It is also one of the most rewarding. Here is what membership means in practice.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {benefits.map(({ label, text }, i, arr) => (
                  <div key={label}>
                    <div style={{ padding: '1.25rem 0', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
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
                        <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '-0.02em', margin: '0 0 0.3rem 0', color: 'var(--color-ink)' }}>
                          {label}
                        </p>
                        <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-chalk)', margin: 0, lineHeight: 1.65, fontSize: '0.9375rem' }}>
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

      {/* How to join */}
      <section style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem', borderBottom: '1px solid var(--color-rule)' }}>
        <div className="container">
          <div className="op-layout">
            <aside className="op-rail">
              <p className="rail-label">Section 2</p>
              <p className="rail-label" style={{ color: 'var(--color-ink)', marginTop: '0.25rem' }}>Process</p>
            </aside>
            <div className="op-main">
              <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', marginBottom: '2rem' }}>
                How to join
              </h2>
              <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0' }}>
                {steps.map(({ n, label, text }, i, arr) => (
                  <li key={n}>
                    <div style={{ display: 'grid', gridTemplateColumns: '2.5rem 1fr', gap: '1rem', padding: '1.25rem 0', alignItems: 'flex-start' }}>
                      <p
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontVariantNumeric: 'tabular-nums',
                          fontSize: '0.8125rem',
                          color: 'var(--color-red)',
                          fontWeight: 600,
                          margin: '0.2rem 0 0 0',
                        }}
                      >
                        {n}.
                      </p>
                      <div>
                        <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '-0.02em', margin: '0 0 0.3rem 0', color: 'var(--color-ink)' }}>
                          {label}
                        </p>
                        <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-chalk)', margin: 0, lineHeight: 1.65, fontSize: '0.9375rem' }}>
                          {text}
                        </p>
                      </div>
                    </div>
                    {i < arr.length - 1 && <hr className="rule" style={{ margin: 0 }} />}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Registration */}
      <section style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem', borderBottom: '1px solid var(--color-rule)' }}>
        <div className="container">
          <div className="op-layout">
            <aside className="op-rail">
              <p className="rail-label">Section 3</p>
              <p className="rail-label" style={{ color: 'var(--color-ink)', marginTop: '0.25rem' }}>Apply</p>
            </aside>
            <div className="op-main">
              <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', marginBottom: '0.75rem' }}>
                Apply now
              </h2>
              <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-chalk)', marginBottom: '2rem', lineHeight: 1.7, maxWidth: '52ch' }}>
                Applications for the current semester are open. Fill out the form to register your interest and we will be in touch with orientation details.
              </p>
              <a
                href={SITE.joinFormUrl}
                className="btn-primary"
                id="join-form-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open registration form
              </a>
              <p className="rail-label" style={{ color: 'var(--color-chalk)', marginTop: '1rem' }}>
                Form opens in a new tab. Hosted on Google Forms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ paddingTop: '3.5rem', paddingBottom: '5rem' }}>
        <div className="container">
          <div className="op-layout">
            <aside className="op-rail">
              <p className="rail-label">Section 4</p>
              <p className="rail-label" style={{ color: 'var(--color-ink)', marginTop: '0.25rem' }}>FAQ</p>
            </aside>
            <div className="op-main">
              <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', marginBottom: '1.5rem' }}>
                Common questions
              </h2>
              <div style={{ borderTop: '1px solid var(--color-rule)' }}>
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    q={faq.q}
                    a={faq.a}
                    id={`faq-${i}`}
                    isOpen={openFaq === i}
                    onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { useEffect, useState } from 'react';
import { SITE } from '../theme';

// Social icon SVGs
const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.64 2.84h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.34a16 16 0 0 0 6.29 6.29l1.6-1.6a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

function Field({ label, htmlFor, error, children }) {
  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <label
        htmlFor={htmlFor}
        style={{
          display: 'block',
          fontFamily: 'var(--font-sans)',
          fontSize: '0.875rem',
          fontWeight: 500,
          color: 'var(--color-ink)',
          marginBottom: '0.4rem',
        }}
      >
        {label}
      </label>
      {children}
      {error && (
        <p
          role="alert"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.8rem',
            color: 'var(--color-red)',
            marginTop: '0.3rem',
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}

const inputStyle = (hasError) => ({
  width: '100%',
  border: `1px solid ${hasError ? 'var(--color-red)' : 'var(--color-rule)'}`,
  backgroundColor: 'var(--color-paper)',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.9375rem',
  color: 'var(--color-ink)',
  padding: '0.7rem 0.875rem',
  outline: 'none',
  borderRadius: 0,
  display: 'block',
  transition: 'border-color 0.15s ease',
});

export default function Contact() {
  useEffect(() => { document.title = 'Contact — Somaiya Debating Society'; }, []);

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.';
    if (!form.message.trim()) e.message = 'Message is required.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    // mailto fallback for v1
    const subject = encodeURIComponent(`Message from ${form.name} via SDS website`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:${SITE.contactFormEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      {/* Page header */}
      <section style={{ paddingTop: '3.5rem', paddingBottom: '3rem', borderBottom: '1px solid var(--color-rule)' }}>
        <div className="container">
          <div className="op-layout">
            <aside className="op-rail">
              <p className="rail-label">Page</p>
              <p className="rail-label" style={{ color: 'var(--color-ink)', marginTop: '0.25rem' }}>Contact</p>
            </aside>
            <div className="op-main">
              <h1>Contact</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form + info */}
      <section style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem', borderBottom: '1px solid var(--color-rule)' }}>
        <div className="container">
          <div className="op-layout">
            <aside className="op-rail">
              <p className="rail-label">Form</p>
            </aside>
            <div className="op-main">
              <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
                {/* Contact form */}
                <div>
                  <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', marginBottom: '1.5rem' }}>
                    Send a message
                  </h2>

                  {submitted ? (
                    <div style={{ border: '1px solid var(--color-rule)', padding: '1.75rem' }}>
                      <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--color-ink)', marginBottom: '0.4rem' }}>
                        Message prepared
                      </p>
                      <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-chalk)', fontSize: '0.9rem', margin: 0 }}>
                        Your email client should have opened with the message pre-filled. If not, email us directly at{' '}
                        <a href={`mailto:${SITE.email}`} style={{ color: 'var(--color-red)', textDecoration: 'none' }}>{SITE.email}</a>.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate>
                      <Field label="Your name" htmlFor="contact-name" error={errors.name}>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          value={form.name}
                          onChange={handleChange}
                          style={inputStyle(!!errors.name)}
                          onFocus={e => { if (!errors.name) e.target.style.borderColor = 'var(--color-ink)'; }}
                          onBlur={e => { if (!errors.name) e.target.style.borderColor = 'var(--color-rule)'; }}
                          aria-describedby={errors.name ? 'contact-name-error' : undefined}
                          aria-invalid={!!errors.name}
                        />
                      </Field>

                      <Field label="Email address" htmlFor="contact-email" error={errors.email}>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          inputMode="email"
                          value={form.email}
                          onChange={handleChange}
                          style={inputStyle(!!errors.email)}
                          onFocus={e => { if (!errors.email) e.target.style.borderColor = 'var(--color-ink)'; }}
                          onBlur={e => { if (!errors.email) e.target.style.borderColor = 'var(--color-rule)'; }}
                          aria-invalid={!!errors.email}
                        />
                      </Field>

                      <Field label="Message" htmlFor="contact-message" error={errors.message}>
                        <textarea
                          id="contact-message"
                          name="message"
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          style={{
                            ...inputStyle(!!errors.message),
                            resize: 'vertical',
                            minHeight: '120px',
                          }}
                          onFocus={e => { if (!errors.message) e.target.style.borderColor = 'var(--color-ink)'; }}
                          onBlur={e => { if (!errors.message) e.target.style.borderColor = 'var(--color-rule)'; }}
                          aria-invalid={!!errors.message}
                        />
                      </Field>

                      <button type="submit" className="btn-primary" id="contact-submit">
                        Send message
                      </button>
                    </form>
                  )}
                </div>

                {/* Contact info */}
                <div>
                  <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', marginBottom: '1.5rem' }}>
                    Get in touch
                  </h2>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                      { icon: <MailIcon />, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
                      { icon: <PhoneIcon />, label: 'Phone', value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, '')}` },
                      { icon: <PinIcon />, label: 'Location', value: SITE.location, href: null },
                    ].map(({ icon, label, value, href }) => (
                      <div key={label} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--color-chalk)', marginTop: '0.15rem', flexShrink: 0 }}>{icon}</span>
                        <div>
                          <p className="rail-label" style={{ marginBottom: '0.15rem' }}>{label}</p>
                          {href ? (
                            <a
                              href={href}
                              style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'var(--color-ink)', textDecoration: 'none', transition: 'color 0.15s ease' }}
                              onMouseEnter={e => e.target.style.color = 'var(--color-red)'}
                              onMouseLeave={e => e.target.style.color = 'var(--color-ink)'}
                            >
                              {value}
                            </a>
                          ) : (
                            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'var(--color-ink)', margin: 0, lineHeight: 1.55 }}>{value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social links */}
                  <div style={{ marginTop: '2.5rem' }}>
                    <p className="rail-label" style={{ marginBottom: '1rem' }}>Follow us</p>
                    <div style={{ display: 'flex', gap: '1.25rem' }}>
                      <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: 'var(--color-chalk)', transition: 'color 0.15s ease' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--color-red)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--color-chalk)'}><InstagramIcon /></a>
                      <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'var(--color-chalk)', transition: 'color 0.15s ease' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--color-red)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--color-chalk)'}><LinkedInIcon /></a>
                      <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Community" style={{ color: 'var(--color-chalk)', transition: 'color 0.15s ease' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--color-red)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--color-chalk)'}><WhatsAppIcon /></a>
                    </div>
                  </div>

                  {/* Map placeholder */}
                  <div style={{ marginTop: '2.5rem' }}>
                    <p className="rail-label" style={{ marginBottom: '0.75rem' }}>Campus location</p>
                    <div
                      style={{
                        width: '100%',
                        height: '180px',
                        backgroundColor: 'var(--color-rule)',
                        border: '1px solid var(--color-rule)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      aria-label="Campus map placeholder"
                    >
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'var(--color-chalk)', textAlign: 'center', padding: '1rem' }}>
                        K.J. Somaiya College of Engineering<br />Vidyavihar, Mumbai 400077
                        <br /><br />
                        <a
                          href="https://maps.google.com/?q=KJ+Somaiya+College+of+Engineering+Mumbai"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: 'var(--color-red)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                        >
                          Open in Google Maps
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 767px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </>
  );
}

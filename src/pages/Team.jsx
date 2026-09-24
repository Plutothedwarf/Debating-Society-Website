import { useEffect, useState } from 'react';
import { team, TIERS } from '../data/team';
import { TIER_ACCENTS } from '../theme';

// Deterministic avatar color from name
function avatarColor(name) {
  const colors = ['#9E1B32', '#A6813C', '#6B6558', '#171512', '#2C5FAA', '#6B4E9E'];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return colors[Math.abs(hash) % colors.length];
}

function initials(name) {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
}

// Get CSS variable value at runtime
function getAccentColor(tierKey) {
  const accent = TIER_ACCENTS[tierKey];
  if (!accent) return { var: '--color-red', label: 'Team' };
  return accent;
}

// Full detailed card for the Modal
function MemberCard({ member }) {
  const bg = avatarColor(member.name);
  const accent = getAccentColor(member.tier);

  return (
    <article
      style={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--color-paper)',
        borderRadius: '16px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="member-card-modal"
      aria-label={`${member.name}, ${member.role}`}
    >
      {/* Accent top border */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: `var(${accent.var})`,
        }}
      />

      <div
        style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          backgroundColor: bg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.25rem',
          flexShrink: 0,
          border: `2px solid var(${accent.var})`,
        }}
        aria-hidden="true"
      >
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.25rem', fontWeight: 600, color: '#FCFCFA', letterSpacing: '0.02em' }}>
          {initials(member.name)}
        </span>
      </div>
      <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', letterSpacing: '-0.02em', color: 'var(--color-ink)', margin: '0 0 0.25rem 0' }}>
        {member.name}
      </p>
      <p className="rail-label" style={{ color: `var(${accent.var})`, marginBottom: '0.5rem', fontSize: '0.85rem' }}>
        {member.role}
      </p>
      {/* Department tag */}
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.7rem',
          fontWeight: 600,
          color: `var(${accent.var})`,
          backgroundColor: `color-mix(in srgb, var(${accent.var}) 10%, transparent)`,
          padding: '0.2rem 0.6rem',
          borderRadius: '100px',
          border: `1px solid color-mix(in srgb, var(${accent.var}) 25%, transparent)`,
          display: 'inline-block',
          marginBottom: '1rem',
          width: 'fit-content',
        }}
      >
        {accent.label}
      </span>
      <div style={{ width: '100%', height: '1px', backgroundColor: 'var(--color-rule)', marginBottom: '1rem' }} />
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'var(--color-chalk)', lineHeight: 1.7, margin: 0 }}>
        {member.bio}
      </p>
    </article>
  );
}

// Compact card for the Kanban Board — glass nameplate
function KanbanCard({ member, onClick, accentVar }) {
  const isHead = member.isHead || member.tier === 'leadership';

  return (
    <button
      className={`kanban-card ${isHead ? 'kanban-card-head' : ''}`}
      onClick={onClick}
      title={`Click to view ${member.name}'s bio`}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: isHead ? '0.65rem 0.6rem' : '0.45rem 0.5rem',
        borderRadius: '8px',
        backgroundColor: isHead ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.02)',
        border: `1px solid ${isHead ? `color-mix(in srgb, var(${accentVar}) 40%, transparent)` : 'rgba(255,255,255,0.05)'}`,
        cursor: 'pointer',
        transition: 'all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1)',
        width: '100%',
        textAlign: 'left',
        marginBottom: '0.35rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Accent left bar for heads */}
      {isHead && (
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '3px', height: '100%',
          backgroundColor: `var(${accentVar})`,
          borderRadius: '3px 0 0 3px',
        }} />
      )}

      <div
        style={{
          width: isHead ? '36px' : '28px',
          height: isHead ? '36px' : '28px',
          borderRadius: '50%',
          backgroundColor: avatarColor(member.name),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '0.75rem',
          marginLeft: isHead ? '6px' : '0',
          flexShrink: 0,
          border: isHead ? `2px solid var(${accentVar})` : '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: isHead ? '0.75rem' : '0.65rem', fontWeight: 600, color: '#FCFCFA' }}>
          {initials(member.name)}
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: isHead ? '0.95rem' : '0.85rem',
          fontWeight: isHead ? 600 : 500,
          color: 'var(--color-ink)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>
          {member.name}
        </span>
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.7rem',
          color: isHead ? `var(${accentVar})` : 'var(--color-chalk)',
          fontWeight: isHead ? 500 : 400,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>
          {member.role}
        </span>
      </div>
    </button>
  );
}

// Column for the Kanban Board — accent-colored top border
function KanbanColumn({ tier, members, onMemberClick }) {
  const sortedMembers = [...members].sort((a, b) => {
    if (a.isHead && !b.isHead) return -1;
    if (!a.isHead && b.isHead) return 1;
    return 0;
  });

  const heads = sortedMembers.filter(m => m.isHead || tier.key === 'leadership');
  const regulars = sortedMembers.filter(m => !m.isHead && tier.key !== 'leadership');
  const accent = getAccentColor(tier.key);

  return (
    <div
      className="glass"
      style={{
        width: '100%',
        minWidth: '260px',
        maxWidth: '300px',
        flex: '1 1 260px',
        borderTop: `4px solid var(${accent.var})`,
        borderRadius: '12px',
        padding: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Column Header */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.25rem',
          color: 'var(--color-ink)',
          margin: '0 0 0.35rem 0',
          letterSpacing: '-0.02em',
        }}>
          {tier.label}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.7rem',
              fontWeight: 600,
              color: `var(${accent.var})`,
              background: `color-mix(in srgb, var(${accent.var}) 12%, transparent)`,
              padding: '0.15rem 0.55rem',
              borderRadius: '100px',
              border: `1px solid color-mix(in srgb, var(${accent.var}) 20%, transparent)`,
            }}
          >
            {members.length}
          </span>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--color-chalk)' }}>
            {accent.label}
          </span>
        </div>
      </div>

      {/* Heads Section */}
      {heads.length > 0 && (
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.04em', color: 'var(--color-chalk)', marginBottom: '0.5rem' }}>
            {tier.key === 'leadership' ? 'Council' : `Department head${heads.length > 1 ? 's' : ''}`}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {heads.map(member => (
              <KanbanCard
                key={member.id}
                member={member}
                accentVar={accent.var}
                onClick={() => onMemberClick(member)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Members Section */}
      {regulars.length > 0 && (
        <div>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.04em', color: 'var(--color-chalk)', marginBottom: '0.5rem' }}>
            Members
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {regulars.map(member => (
              <KanbanCard
                key={member.id}
                member={member}
                accentVar={accent.var}
                onClick={() => onMemberClick(member)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Team() {
  useEffect(() => { document.title = 'Team \u2014 Somaiya Debating Society'; }, []);

  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <>
      <section style={{ paddingTop: '3.5rem', paddingBottom: '1.5rem' }}>
        <div className="container">
          <div className="op-layout">
            <aside className="op-rail">
              <p className="rail-label">Page</p>
              <p className="rail-label" style={{ color: 'var(--color-ink)', marginTop: '0.25rem' }}>Team</p>
            </aside>
            <div className="op-main">
              <div className="section-marker--gold section-marker">
                <span>The committee</span>
              </div>
              <h1 style={{ marginBottom: '0.5rem' }}>The Committee</h1>
              <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-chalk)', fontSize: '1.1rem' }}>
                Meet the passionate individuals driving the Somaiya Debating Society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FULL KANBAN BOARD */}
      <section className="fade-in-section" style={{ paddingBottom: '5rem' }}>
        <div className="container">
          <div className="op-layout">
            <aside className="op-rail" style={{ display: 'none' }}></aside>

            <div className="op-main" style={{ width: '100%', maxWidth: '100%', gridColumn: 'span 12' }}>
              <div className="kanban-board" style={{
                display: 'flex',
                gap: '1.25rem',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}>
                {TIERS.map(tier => {
                  const membersInTier = team.filter(m => m.tier === tier.key);
                  if (membersInTier.length === 0) return null;

                  return (
                    <KanbanColumn
                      key={tier.key}
                      tier={tier}
                      members={membersInTier}
                      onMemberClick={setSelectedMember}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL FOR MEMBER DETAILS */}
      {selectedMember && (
        <div
          className="modal-overlay fade-in-section"
          style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 9999, padding: '1.5rem',
          }}
          onClick={() => setSelectedMember(null)}
          aria-modal="true"
          role="dialog"
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{ maxWidth: '440px', width: '100%', position: 'relative' }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              style={{
                position: 'absolute', top: '1rem', right: '1rem',
                background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%',
                width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--color-ink)', cursor: 'pointer', zIndex: 10,
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.target.style.background = 'rgba(220, 53, 69, 0.8)'}
              onMouseLeave={e => e.target.style.background = 'rgba(255,255,255,0.1)'}
              aria-label="Close"
            >
              &#10005;
            </button>

            <MemberCard member={selectedMember} />
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-in-section {
          animation: fadeIn 0.35s ease-out forwards;
        }

        /* Card Hover Effects — accent glow */
        .kanban-card:hover {
          background-color: rgba(255, 255, 255, 0.08) !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .kanban-card-head:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 6px 20px rgba(0,0,0,0.2) !important;
        }

        /* Force op-main to take full width when showing the board */
        .op-main {
           grid-column: span 12 / span 12 !important;
        }
      `}</style>
    </>
  );
}

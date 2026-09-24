// Central theme config — reference these values in JS where needed.
// All actual styling uses the CSS variables in index.css or Tailwind tokens.

export const SITE = {
  name: 'Somaiya Debating Society',
  shortName: 'SDS',
  established: 2020,
  session: new Date().getFullYear(),
  tagline: 'A community of thinkers, speakers, and competitors dedicated to the art and discipline of formal debate.',
  email: 'debate@somaiya.edu',
  phone: '+91 98765 43210',
  location: 'K.J. Somaiya College of Engineering, Vidyavihar, Mumbai 400077',
  instagram: 'https://instagram.com/somaiya.debate',
  linkedin: 'https://linkedin.com/company/somaiya-debating-society',
  whatsapp: 'https://chat.whatsapp.com/placeholder',
  joinFormUrl: 'https://forms.google.com/placeholder',
  contactFormEmail: 'debate@somaiya.edu',
};

export const STATS = [
  { value: '5+',   label: 'Years Active',  numericEnd: 5 },
  { value: '150+', label: 'Members',        numericEnd: 150 },
  { value: '20+',  label: 'Tournaments',    numericEnd: 20 },
  { value: '12',   label: 'Awards Won',     numericEnd: 12 },
];

// Delegate Glass — tier-to-accent CSS variable map
export const TIER_ACCENTS = {
  leadership: { var: '--color-gold',   label: 'Council' },
  debate:     { var: '--color-red',    label: 'Executive Team' },
  creatives:  { var: '--color-violet', label: 'Creatives' },
  pr:         { var: '--color-teal',   label: 'PR and Marketing' },
  logistics:  { var: '--color-cobalt', label: 'Logistics' },
  mentors:    { var: '--color-gold',   label: 'Mentors' },
};

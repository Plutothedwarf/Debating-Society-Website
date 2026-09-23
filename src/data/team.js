// Static team data — replace with real members and photos.
// tier specifies the category, isHead specifies if they are the head of a department.

export const team = [
  // Leadership
  {
    id: 1,
    name: 'Ananya Krishnan',
    role: 'Council Head',
    bio: 'Final-year Computer Engineering student and three-time Best Speaker at Mumbai regional tournaments.',
    tier: 'leadership',
    avatar: null,
  },
  {
    id: 2,
    name: 'Rohan Malhotra',
    role: 'Co-Council Head',
    bio: 'Specialises in British Parliamentary format and has adjudicated at 12 national-level tournaments.',
    tier: 'leadership',
    avatar: null,
  },

  // Executive Debate Team
  {
    id: 3,
    name: 'Arjun Nair',
    role: 'Debate Head',
    bio: 'Designs the society\'s workshop curriculum and oversees mentorship of new members.',
    tier: 'debate',
    isHead: true,
    avatar: null,
  },
  {
    id: 4,
    name: 'Siddharth Rao',
    role: 'Debate Member',
    bio: 'WSDC format specialist, reached semi-finals at the State Schools Championship 2025.',
    tier: 'debate',
    avatar: null,
  },
  {
    id: 5,
    name: 'Ishaan Gupta',
    role: 'Debate Member',
    bio: 'Focuses on Asian Parliamentary debate. Two-time finalist at Somaiya Invitational.',
    tier: 'debate',
    avatar: null,
  },

  // Creatives
  {
    id: 6,
    name: 'Divya Iyer',
    role: 'Creatives Head',
    bio: 'Manages society branding, graphic design, and video production for our campaigns.',
    tier: 'creatives',
    isHead: true,
    avatar: null,
  },
  {
    id: 7,
    name: 'Meera Joshi',
    role: 'Creative Member',
    bio: 'Specializes in illustration and creates all the promotional artwork for events.',
    tier: 'creatives',
    avatar: null,
  },

  // PR and Marketing
  {
    id: 8,
    name: 'Karan Mehta',
    role: 'PR Head',
    bio: 'Manages social media, campus publicity, and partnerships with other college societies.',
    tier: 'pr',
    isHead: true,
    avatar: null,
  },
  {
    id: 9,
    name: 'Sneha Patil',
    role: 'PR Member',
    bio: 'Handles external communications and outreach to schools for the Somaiya Invitational.',
    tier: 'pr',
    avatar: null,
  },

  // Logistics
  {
    id: 10,
    name: 'Priya Sharma',
    role: 'Logistics Head',
    bio: 'Coordinates team registrations for external tournaments and manages travel logistics.',
    tier: 'logistics',
    isHead: true,
    avatar: null,
  },
  {
    id: 11,
    name: 'Tanvir Sheikh',
    role: 'Logistics Member',
    bio: 'Responsible for venue booking and on-ground operations during home tournaments.',
    tier: 'logistics',
    avatar: null,
  },

  // Mentors
  {
    id: 12,
    name: 'Pallavi Deshmukh',
    role: 'Mentor',
    bio: 'Alumnus and former Council Head. Provides guidance on society strategy and advanced debate training.',
    tier: 'mentors',
    avatar: null,
  },
];

export const TIERS = [
  { key: 'leadership', label: 'Leadership', type: 'flat' },
  { key: 'debate', label: 'Executive Debate Team', type: 'department' },
  { key: 'creatives', label: 'Creatives', type: 'department' },
  { key: 'pr', label: 'PR and Marketing', type: 'department' },
  { key: 'logistics', label: 'Logistics', type: 'department' },
  { key: 'mentors', label: 'Mentors', type: 'flat' },
];

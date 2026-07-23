export const hero = {
  eyebrow: 'Full Stack Developer · Class of 2026',
  name: 'Ishu Singh',
  tagline: 'Turning ideas into impact — from AI platforms to civic tech, out of Varanasi.',
  cta: {
    primary: { label: 'View My Work', href: '#projects' },
    secondary: { label: 'Get In Touch', href: '#contact' },
  },
  badges: [
    { label: 'Role', value: 'Tech Lead @ Glosseo' },
    { label: 'Projects', value: '6 Projects Built' },
    { label: 'Batch', value: 'Class of 2026' },
    { label: 'Location', value: 'Varanasi, India' },
  ],
}

export const about = {
  text: [
    "I'm a BCA final-year student at SMS College, Varanasi — but I've spent these years building, not just studying.",
    'From study-partner apps to civic grievance platforms, I ship things that solve real problems. As Tech Lead at Glosseo, I take ideas from zero to deployed.',
    "I work across the full stack — MERN, React Native, Flutter, Firebase, and AI tooling — and I'm most at home when I'm turning a messy problem into a clean, shipped product.",
  ],
  quickFacts: [
    { value: '6', label: 'Projects Shipped' },
    { value: '2', label: 'Hackathons Won' },
    { value: '2+', label: 'Years Building' },
    { value: '2026', label: 'Graduating' },
  ],
}

export const whatIDo = [
  {
    icon: '🔨',
    title: 'Build',
    description:
      'Full-stack products end to end — idea → MVP → deploy. React, Flutter, Firebase, Django, Node.js.',
  },
  {
    icon: '🚀',
    title: 'Lead',
    description:
      'Tech Lead at Glosseo. Small teams, code reviews, architecture decisions, deployment pipelines.',
  },
  {
    icon: '💡',
    title: 'Solve',
    description:
      'AI/ML + civic + grassroots problems for real Indian users. Jan Setu, Agri Monitor, Studymates.',
  },
]

export const stats = [
  { value: 6, suffix: '', label: 'Projects Built' },
  { value: 2, suffix: '', label: 'Hackathons' },
  { value: 2, suffix: '+', label: 'Years as Builder' },
  { value: 2026, suffix: '', label: 'Graduating' },
]

export const skills = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Dart', 'C++'],
  },
  {
    category: 'Frontend',
    items: [
      'React.js',
      'Next.js',
      'React Native',
      'Flutter',
      'Tailwind CSS',
      'HTML/CSS',
    ],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'Flask', 'REST APIs'],
  },
  {
    category: 'Tools & Database',
    items: [
      'Firebase',
      'Firestore',
      'MySQL',
      'Git',
      'GitHub',
      'Firebase Functions',
    ],
  },
]
export type ProjectStatus = 'shipped' | 'in-progress' | 'concept'

export const projects = [
  {
    id: 1,
    name: 'Studymates',
    status: 'shipped' as ProjectStatus,
    year: '2026',
    description:
      'Study-partner matching app for competitive-exam aspirants. Real-time peer matching + session management.',
    stack: ['Flutter', 'Firebase'],
    hackathonTag: null,
  },
  {
    id: 2,
    name: 'janSetu',
    status: 'shipped' as ProjectStatus,
    year: '2026',
    description:
      'Public grievance platform connecting citizens to civic resolution. Built at SMSOTSAV 2026 Hackathon, SMS Lucknow.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    hackathonTag: '🏆 SMSOTSAV 2026',
  },
  {
    id: 3,
    name: 'College Notification Platform',
    status: 'shipped' as ProjectStatus,
    year: '2025',
    description:
      'Unified college notification system with an admin panel that pushes messages to specific courses or all courses in one click.',
    stack: ['Flutter', 'Firebase', 'React'],
    hackathonTag: null,
  },
  {
    id: 4,
    name: 'Letask',
    status: 'in-progress' as ProjectStatus,
    year: '2024',
    description:
      'Two-tier online mentorship platform: free reward-based Pre-Mentorship + paid Pro-Mentorship with chat, voice & video. Firebase Auth, real-time Firestore sync, role-based access.',
    stack: ['React', 'Firebase', 'Node.js', 'Firestore'],
    hackathonTag: null,
  },
  {
    id: 5,
    name: 'Agri Water Monitor',
    status: 'concept' as ProjectStatus,
    year: '2024',
    description:
      'Battery-powered sensor device detecting water arrival in irrigation channels, with real-time mobile alerts for smallholder farmers.',
    stack: ['Embedded Systems', 'Sensors', 'Mobile Alerts'],
    hackathonTag: null,
  },
  {
    id: 6,
    name: 'Timetable Automation App',
    status: 'concept' as ProjectStatus,
    year: '2024–25',
    description:
      'Greedy constraint-based scheduler for SMS College — auto-resolves room, subject & faculty conflicts.',
    stack: ['React', 'Scheduling Algorithm'],
    hackathonTag: null,
  },
]

export const statusMeta: Record<ProjectStatus, { label: string; color: string; dot: string }> = {
  shipped: { label: 'Shipped', color: 'text-green-500', dot: '🟢' },
  'in-progress': { label: 'In Progress', color: 'text-yellow-500', dot: '🟡' },
  concept: { label: 'Concept', color: 'text-blue-400', dot: '🔵' },
}

export const hackathons = [
  {
    prize: 'First Prize',
    event: 'Business Model Contest 9.0',
    date: 'Apr 2025',
    org: 'SMS College, Varanasi (CEISD)',
  },
  {
    prize: '2nd Position',
    event: "Vibe Coding (Abhyuday'26)",
    date: 'Feb 2026',
    org: 'Ashoka Institute of Technology & Management, Varanasi',
  },
  {
    prize: 'Second Prize',
    event: 'WebDX Brain Storming',
    date: 'Feb 2026',
    org: 'SMS College, Varanasi (LiveWire)',
  },
  {
    prize: 'Third Prize',
    event: 'Jan Samadhan 4.0 (Public Policy Hackathon)',
    date: 'Feb 2025',
    org: 'SMS College, Varanasi — Proposed civic solutions for waste management and urban drainage.',
  },
  {
    prize: 'Second Prize',
    event: 'Business Plan Contest 8.0',
    date: 'May 2024',
    org: 'SMS College, Varanasi (CEISD)',
  },
]

export const experience = [
  {
    role: 'Tech Lead',
    org: 'Glosseo',
    period: '2024 – Present',
    location: 'Glosseo, Bangalore (remote-first)',
    bullets: [
      'Sole technology owner for a live Shopify e-commerce business, managing the storefront, product catalog, order operations, third-party applications, and platform integrations end-to-end.',
      'Designed and implemented workflow automations that reduced 1–2 days of manual operational work to just 2–3 hours, improving efficiency by approximately 85%.',
      'Collaborated directly with non-technical stakeholders to understand business requirements and translate them into reliable, scalable technical solutions.',
    ],
  },
  {
    role: 'BCA Student & Independent Builder',
    org: 'SMS College',
    period: '2023 – Present',
    location: 'Varanasi, UP',
    bullets: [
      'Self-taught across React, Flutter, Firebase, and AI tooling.',
      'Shipped products alongside academics; led college tech projects and entrepreneurial ventures.',
    ],
  },
]

export const vision = {
  headline: "Let's build for India's grassroots.",
  copy: "I want to turn ideas into impact for real Indian users — and bring that builder's energy to a high-impact engineering team. Open to MNC roles & meaningful collaborations.",
  cta: {
    primary: { label: 'Email Me', href: 'mailto:ishupatel9454@gmail.com' },
    secondary: { label: 'View Resume', href: '/cv' },
  },
}

export const contact = {
  email: 'ishupatel9454@gmail.com',
  github: 'https://github.com/ishu303/',
  linkedin: 'https://linkedin.com/in/ishu-singh-26520a207',
}

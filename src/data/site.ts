// Edit this file for identity, links and contact. Commented-out lines are hidden.
export const site = {
  name: 'Basil Ugochukwu',
  url: 'https://thebasilugo.vercel.app',
  email: 'basilugo2@gmail.com',
  title: 'Basil Ugochukwu: developer, security trainee, actor',
  description: 'Basil Ugochukwu builds web software, is training in cloud security, and acts and tells stories on screen and stage.',
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT ?? '',
};

export const socials = [
  { label: 'GitHub', href: 'https://github.com/thebasilugo' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/thebasilugo' },
  { label: 'Instagram', href: 'https://instagram.com/thebasilugo' },
  { label: 'TikTok', href: 'https://tiktok.com/@thebasilug0' },
  // { label: 'X', href: 'https://x.com/thebasilugo' }, // under construction
  // Acting profiles worth creating, then add the URL and uncomment:
  // { label: 'IMDb', href: '' },              // credits, even for short films
  // { label: 'Backstage', href: '' },         // profile and casting calls
  // { label: 'Casting Networks', href: '' },
  // { label: 'Mandy', href: '' },             // screen and stage jobs
  // { label: 'Showreel', href: '' },          // Vimeo or YouTube
];

export const experience = [
  { role: 'Graduate Trainee, Cloud Security and Infrastructure', org: 'Snapnet Limited', period: 'Aug 2026 to present', note: 'Cloud computing, enterprise infrastructure and security operations.' },
  { role: 'Research and Policy Analyst', org: 'Eduteller', period: 'Sep 2025 to present', note: 'Ran 40+ interviews with students, teachers and parents on barriers to digital adoption.' },
  { role: 'Frontend-focused Full Stack Developer', org: 'Freelance', period: 'Jan 2025 to present', note: 'Websites and web apps for RivergateOnyx, NMTA, WRAHP and others, from requirements to deployment.' },
  { role: 'Creative Media Manager (volunteer)', org: 'Olivet Bible Church', period: 'Aug 2024 to present', note: 'Digital content, media campaigns and creative direction.' },
  { role: 'IT Support Specialist', org: 'Bet Sefer Schools', period: 'Sep 2025 to Jul 2026', note: 'First-line support for staff and students.' },
  { role: 'Web Developer and Programming Tutor', org: 'Bet Sefer Schools', period: 'Mar 2023 to Aug 2025', note: 'Improved the school portal; taught HTML, CSS, JavaScript and programming basics.' },
  { role: 'IT Intern', org: 'Nigerian Ports Authority', period: 'Apr 2022 to Sep 2022', note: 'Technical support, internal systems and security-focused initiatives in network operations.' },
];

// Stage and screen. Add items as they exist; the section shows an empty state until then.
// type: 'film' | 'monologue' | 'showreel' | 'headshot'
export const screen: { type: string; title: string; year?: string; role?: string; href?: string }[] = [
  // { type: 'showreel', title: 'Showreel', year: '2026', href: 'https://vimeo.com/...' },
];

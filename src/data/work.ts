// One entry per project. Commented-out entries are hidden.
// kinds: software | security | creative. outcome is optional: only add facts you can prove.
export interface Work {
  slug: string; title: string; year?: string; kinds: ('software' | 'security' | 'creative')[];
  summary: string; problem: string; role: string; decisions?: string[]; outcome?: string;
  stack: string[]; live?: string; code?: string;
}

export const work: Work[] = [
  { slug: 'cyber-attack-detection', title: 'Cyber Attack Detection', kinds: ['security'],
    summary: 'A machine-learning intrusion detection system, and the final-year research behind a co-authored IEEE paper.',
    problem: 'Spotting attacks in network traffic needs models that stay accurate without flooding analysts with false alarms.',
    role: 'Co-authored the research and built the model pipeline.',
    decisions: ['Hybrid CNN and MLP architecture to model intrusion patterns.'],
    outcome: '95% detection accuracy. Co-author of an IEEE-published paper.', // TODO: add paper title and DOI link
    stack: ['Python', 'TensorFlow', 'Keras'] },
  { slug: 'eduteller', title: 'Eduteller', year: '2025', kinds: ['software'],
    summary: 'An education platform built around personalised learning paths and curriculum tools.',
    problem: 'Students and institutions needed digital learning that holds attention and can be tracked.',
    role: 'Built the frontend and application.', stack: ['React', 'Vite', 'Node.js', 'Tailwind CSS'], live: 'https://eduteller.vercel.app/' },
  { slug: 'wrahp', title: 'WRAHP', year: '2025', kinds: ['software'],
    summary: 'A reporting and resource platform for the Women\u2019s Rights and Health Project.',
    problem: 'Community members needed a clear, mobile-friendly place to report incidents and find legal and medical support.',
    role: 'Designed and built the site.', stack: ['React', 'Vite', 'Tailwind CSS', 'Firebase'], live: 'https://wrahp.vercel.app/' },
  { slug: 'burger-shack', title: 'Burger Shack', year: '2025', kinds: ['software'],
    summary: 'A restaurant website with an interactive, filterable menu.',
    problem: 'A restaurant site has to make the food look good and the menu quick to browse on a phone.',
    role: 'Designed and built the site.', stack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'], live: 'https://burgershackbyhim.vercel.app/' },
  { slug: 'nmta', title: 'NMTA', kinds: ['software', 'creative'],
    summary: 'A site for the Nollywood Movie and Television Awards: events, categories and nominations.',
    problem: 'An awards body needed one place for event information, categories and nominee details.',
    role: 'Designed and built the site.', stack: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'], live: 'https://nmta.vercel.app/' },
  { slug: 'rivergateonyx', title: 'Rivergate Onyx', year: '2025', kinds: ['software', 'creative'],
    summary: 'A company website for a business advisory and investment firm.',
    problem: 'The firm needed a credible, professional web presence.',
    role: 'Designed and built the site.', stack: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'], live: 'https://rivergateonyx.vercel.app/' },
  { slug: 'glucose-tracker', title: 'Glucose Tracker', year: '2025', kinds: ['software'],
    summary: 'Log blood glucose readings and see trends and alerts.',
    problem: 'People managing diabetes need a simple way to record readings and see patterns.',
    role: 'Designed and built it.', stack: ['Vite', 'Supabase', 'Tailwind CSS', 'Chart.js'], live: 'https://glucosetrackerbyhim.vercel.app/' },
  { slug: 'autocv', title: 'AutoCV', year: '2025', kinds: ['software'],
    summary: 'Generates tailored resumes and cover letters from GitHub and LinkedIn data, with live editing and export.',
    problem: 'Tailoring a resume for every application is slow and the formatting drifts.',
    role: 'Designed and built it.', stack: ['Vite', 'Firebase', 'GPT API', 'Tailwind CSS'], live: 'https://autocvbyhim.vercel.app/' },
  { slug: 'savestreak', title: 'SaveStreak', year: '2025', kinds: ['software'],
    summary: 'A savings tracker that turns each day green or red.',
    problem: 'Saving consistently is hard without visible feedback.',
    role: 'Designed and built it.', decisions: ['Works offline and syncs when a connection returns.'],
    stack: ['Next.js', 'Firebase', 'Tailwind CSS'], live: 'https://savestreakbyhim.vercel.app/' },
  { slug: 'quests', title: 'Quests', kinds: ['software'],
    summary: 'Turns daily tasks into quests with rewards and progress.',
    problem: 'Plain to-do lists are easy to abandon.',
    role: 'Designed and built it.', stack: ['React', 'Tailwind CSS'], live: 'https://questsbyhim.vercel.app/' },
  // Internal company application, frontend only. Uncomment to show.
  // { slug: 'gt-field-readiness', title: 'GT Field Readiness', kinds: ['software'],
  //   summary: 'An internal company application.',
  //   problem: 'TODO: describe in your own words.',
  //   role: 'Built the frontend.', stack: [], live: 'https://gt-field-readiness-app.vercel.app/' },
];

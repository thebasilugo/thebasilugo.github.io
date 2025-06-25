import Link from "next/link"

export default function Resume() {
  return (
    <section id="resume" className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 min-h-screen print:p-0">
      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 shadow-lg rounded-lg print:shadow-none print:p-0">
        {/* Header */}
        <header className="mb-6 text-center border-b border-gray-200 pb-4 print:border-b-2 print:border-black">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Ugochukwu Basil</h1>
          <div className="flex flex-wrap justify-center gap-2 text-sm mb-2">
            <Link href="mailto:basilugo2@gmail.com" className="text-blue-600 hover:underline print:text-black">
              basilugo2@gmail.com
            </Link>
            <span className="hidden sm:inline">|</span>
            <span>Lagos, Nigeria</span>
            <span className="hidden sm:inline">|</span>
            <span>+234 904 357 6346</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <Link
              href="https://thebasilugo.vercel.app"
              target="_blank"
              className="text-blue-600 hover:underline print:text-black"
            >
              thebasilugo.vercel.app
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link
              href="https://github.com/thebasilugo"
              target="_blank"
              className="text-blue-600 hover:underline print:text-black"
            >
              GitHub
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link
              href="https://www.linkedin.com/in/thebasilugo"
              target="_blank"
              className="text-blue-600 hover:underline print:text-black"
            >
              LinkedIn
            </Link>
          </div>
        </header>

        {/* Professional Summary */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3 text-center bg-slate-100 py-2 print:bg-transparent print:border-b print:border-gray-300">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            Creative and results-driven Frontend Developer with a strong foundation in React, Next.js, and Firebase.
            Adept at transforming complex problems into sleek, performant, and responsive user experiences. Proven
            ability to lead creative media initiatives, teach programming to beginners, and collaborate on impactful
            projects from scratch. Brings a unique blend of development, design, and storytelling to tech products.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3 text-center bg-slate-100 py-2 print:bg-transparent print:border-b print:border-gray-300">
            TECHNICAL SKILLS
          </h2>
          <div className="grid grid-cols-1 gap-2 text-sm">
            <div>
              <span className="font-bold">Languages:</span> JavaScript (ES6+), TypeScript, Python, HTML5, CSS3
            </div>
            <div>
              <span className="font-bold">Frontend:</span> React.js, Next.js, TailwindCSS, Bootstrap, Material UI, Vite
            </div>
            <div>
              <span className="font-bold">Backend & Databases:</span> Firebase, Firestore, Supabase, REST APIs
            </div>
            <div>
              <span className="font-bold">Tools & Platforms:</span> VS Code, Git, GitHub, Chrome DevTools, GitHub
              Copilot, ChatGPT, v0.dev, Lovable
            </div>
            <div>
              <span className="font-bold">Design:</span> Figma, Canva, CapCut
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3 text-center bg-slate-100 py-2 print:bg-transparent print:border-b print:border-gray-300">
            EXPERIENCE
          </h2>

          {/* Experience 1 */}
          <div className="mb-4">
            <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
              <h3 className="font-bold">Frontend Developer</h3>
              <p className="text-sm">Jan 2025 – Present</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between mb-2 text-sm">
              <p className="font-semibold">Freelance</p>
              <p className="italic">Remote</p>
            </div>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>
                <span className="font-semibold">Full-stack Builds:</span> Delivered responsive, scalable web apps (e.g.,
                RivergateOnyx, NMTA) using Next.js, Firebase, and TailwindCSS.
              </li>
              <li>
                <span className="font-semibold">Performance:</span> Achieved Lighthouse performance scores of 95+ by
                optimizing images, lazy-loading components, and enabling SSR.
              </li>
              <li>
                <span className="font-semibold">Client Impact:</span> Boosted site traffic by 60% through rebranding,
                SEO, and semantic HTML improvements.
              </li>
            </ul>
          </div>

          {/* Experience 2 */}
          <div className="mb-4">
            <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
              <h3 className="font-bold">Creative Media Manager (Volunteer)</h3>
              <p className="text-sm">Aug 2024 – Present</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between mb-2 text-sm">
              <p className="font-semibold">Olivet Bible Church</p>
              <p className="italic">Lagos, Nigeria</p>
            </div>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>
                <span className="font-semibold">Media Strategy:</span> Produced 30+ videos using CapCut and Canva, while
                managing Instagram campaigns that grew reach by 70%.
              </li>
              <li>
                <span className="font-semibold">Content Leadership:</span> Led creative direction for events, weekly
                highlights, and announcements with a consistent brand voice.
              </li>
            </ul>
          </div>

          {/* Experience 3 */}
          <div className="mb-4">
            <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
              <h3 className="font-bold">Web Developer & Programming Tutor</h3>
              <p className="text-sm">Mar 2023 – Dec 2024</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between mb-2 text-sm">
              <p className="font-semibold">Bet Sefer Schools</p>
              <p className="italic">Lagos, Nigeria (Hybrid)</p>
            </div>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>
                <span className="font-semibold">Portal Optimization:</span> Revamped school portal to reduce page load
                times by 30%, enhancing UX for staff and students.
              </li>
              <li>
                <span className="font-semibold">Coding Instructor:</span> Taught 25+ students (ages 8–10) HTML, CSS, and
                JavaScript; created step-by-step lesson plans and live examples.
              </li>
            </ul>
          </div>

          {/* Experience 4 */}
          <div className="mb-4">
            <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
              <h3 className="font-bold">IT Intern</h3>
              <p className="text-sm">Apr 2022 – Sep 2022</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between mb-2 text-sm">
              <p className="font-semibold">Nigerian Ports Authority</p>
              <p className="italic">Lagos, Nigeria</p>
            </div>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>
                <span className="font-semibold">UI Revamp:</span> Redesigned intranet login with responsive design,
                increasing accessibility by 40%.
              </li>
              <li>
                <span className="font-semibold">Cybersecurity:</span> Assisted in developing internal security
                protocols, reducing unauthorized access by 15%.
              </li>
            </ul>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3 text-center bg-slate-100 py-2 print:bg-transparent print:border-b print:border-gray-300">
            PROJECTS
          </h2>

          <div className="space-y-3">
            <div>
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <h3 className="font-bold">Glucose Tracker:</h3>
                <span className="text-sm italic">(Vite, Supabase, TailwindCSS)</span>
              </div>
              <p className="text-sm pl-4">
                Tracks blood glucose levels with visualizations and alert notifications for diabetic health monitoring.
              </p>
            </div>

            <div>
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <h3 className="font-bold">AutoCV:</h3>
                <span className="text-sm italic">(Vite, Firebase, TailwindCSS, GPT API)</span>
              </div>
              <p className="text-sm pl-4">
                Developed an AI-powered resume and cover letter generator that fetches data from GitHub/LinkedIn and
                supports live editing and export.
              </p>
            </div>

            <div>
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <h3 className="font-bold">Auto-Architekt:</h3>
                <span className="text-sm italic">(Next.js, Firebase, TailwindCSS)</span>
              </div>
              <p className="text-sm pl-4">
                Dynamic project scaffold builder using AI to generate ready-to-run codebases based on project ideas.
              </p>
            </div>

            <div>
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <h3 className="font-bold">FinPilot:</h3>
                <span className="text-sm italic">(Vite, TypeScript, React, shadcn-ui, Firebase, TailwindCSS)</span>
              </div>
              <p className="text-sm pl-4">
                Personal finance advisor powered by GPT for budget planning, investment tips, and goal setting.
              </p>
            </div>

            <div>
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <h3 className="font-bold">CheckpointRide:</h3>
                <span className="text-sm italic">(Next.js, Firebase, TypeScript)</span>
              </div>
              <p className="text-sm pl-4">
                Route planning and logistics simulator with live location updates and secure Firebase Auth.
              </p>
            </div>

            <div>
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <h3 className="font-bold">TaskFlow:</h3>
                <span className="text-sm italic">(React, TypeScript, TailwindCSS)</span>
              </div>
              <p className="text-sm pl-4">
                Drag-and-drop project management tool with task assignments, team view, and dark/light mode.
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3 text-center bg-slate-100 py-2 print:bg-transparent print:border-b print:border-gray-300">
            EDUCATION
          </h2>
          <div className="mb-2">
            <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
              <h3 className="font-bold">Landmark University</h3>
              <p className="text-sm">Kwara, Nigeria</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between text-sm mb-2">
              <p className="font-semibold">B.Sc. in Computer Science</p>
              <p>GPA: 4.07 / 5.00</p>
            </div>
          </div>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>
              <span className="font-semibold">Final Project:</span> Cyber Attack Detection System using Hybrid CNN–MLP
              architecture; achieved 95% detection accuracy.
            </li>
            <li>
              <span className="font-semibold">Publication:</span> Co-authored IEEE paper on ML-based Intrusion Detection
              —{" "}
              <Link
                href="https://ieeexplore.ieee.org/document/10124506"
                className="text-blue-600 hover:underline print:text-black"
              >
                View Publication
              </Link>
            </li>
            <li>
              <span className="font-semibold">Relevant Coursework:</span> Cybersecurity, Cloud Computing, Machine
              Learning, Data Structures, Algorithms.
            </li>
            <li>
              <span className="font-semibold">Leadership:</span> Led Press Group; Media Secretary for Convocation
              Committee.
            </li>
          </ul>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-xl font-bold mb-3 text-center bg-slate-100 py-2 print:bg-transparent print:border-b print:border-gray-300">
            CERTIFICATIONS
          </h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>
              <span className="font-semibold">Meta Front-End Developer (Coursera):</span> In Progress – Covers HTML,
              CSS, JavaScript, React, Testing.
            </li>
            <li>
              <span className="font-semibold">Google Cybersecurity Certificate:</span> Expected Aug 2025 – Foundations,
              Threat Detection, Risk Mitigation.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

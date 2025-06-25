"use client"
import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"

const Projects = () => {
  const [filter, setFilter] = useState("All")

  const projects = [
    {
      name: "Glucose Tracker",
      description:
        "A comprehensive health monitoring application that tracks blood glucose levels with interactive visualizations and alert notifications for diabetic health management. Features trend analysis and personalized insights.",
      technologies: ["Vite", "Supabase", "TailwindCSS", "Chart.js"],
      category: "Health Tech",
      date: "Apr 2025",
      sourceCode: "",
      preview: "https://glucosetrackerbyhim.vercel.app/",
      featured: true,
    },
    {
      name: "AutoCV",
      description:
        "An AI-powered resume and cover letter generator that fetches data from GitHub/LinkedIn profiles and supports live editing and export. Streamlines the job application process with intelligent content generation.",
      technologies: ["Vite", "Firebase", "TailwindCSS", "GPT API"],
      category: "AI Tools",
      date: "May 2025",
      sourceCode: "",
      preview: "https://autocvbyhim.vercel.app/",
      featured: true,
    },
    {
      name: "Auto-Architekt",
      description:
        "A dynamic project scaffold builder using AI to generate ready-to-run codebases based on project ideas. Accelerates development workflow with intelligent architecture suggestions and boilerplate generation.",
      technologies: ["Next.js", "Firebase", "TailwindCSS", "OpenAI"],
      category: "Developer Tools",
      date: "Mar 2025",
      sourceCode: "",
      preview: "https://auto-architekt.vercel.app/",
      featured: true,
    },
    {
      name: "FinPilot",
      description:
        "A personal finance advisor powered by GPT for budget planning, investment tips, and goal setting. Provides intelligent financial guidance with personalized recommendations and tracking capabilities.",
      technologies: ["Vite", "TypeScript", "React", "shadcn-ui", "Firebase", "TailwindCSS"],
      category: "FinTech",
      date: "Jun 2025",
      sourceCode: "",
      preview: "https://finpilot-app.vercel.app/",
      featured: true,
    },
    {
      name: "CheckpointRide",
      description:
        "A route planning and logistics simulator with live location updates and secure Firebase Auth. Features real-time tracking, route optimization, and comprehensive fleet management capabilities.",
      technologies: ["Next.js", "Firebase", "TypeScript", "Maps API"],
      category: "Logistics",
      date: "Pending",
      sourceCode: "https://github.com/thebasilugo/checkpointride",
      preview: "https://thebasilugo.github.io/checkpointride",
      featured: true,
    },
    {
      name: "TaskFlow",
      description:
        "A drag-and-drop project management tool with task assignments, team collaboration features, and dark/light mode support. Enhances productivity with intuitive interface and real-time updates.",
      technologies: ["React", "TypeScript", "TailwindCSS", "DnD Kit"],
      category: "Productivity",
      date: "May 2024",
      sourceCode: "https://github.com/thebasilugo/task-flow",
      preview: "https://thebasilugo.github.io/taskflow",
      featured: true,
    },
    {
      name: "SaveStreak",
      description:
        "A gamified savings tracker that turns your daily saving habits green when you save and red when you don't. Supports offline usage and syncs to localStorage when back online.",
      technologies: ["Next.js", "React", "TailwindCSS", "localStorage"],
      category: "FinTech",
      date: "Jun 2025",
      sourceCode: "",
      preview: "https://savestreak.vercel.app/",
    },
    {
      name: "KicksConfetti",
      description:
        "A vibrant e-commerce platform specializing in sneakers and related apparel. Integrated secure payment gateways, advanced product filtering, and a user-friendly interface to optimize the shopping experience.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS"],
      category: "E-commerce",
      date: "Pending",
      sourceCode: "https://github.com/thebasilugo/kicks-confetti",
      preview: "https://thebasilugo.github.io/kicksconfetti",
    },
    {
      name: "Rivergate Onyx",
      description:
        "A professional website designed for Rivergate Onyx, a company focused on helping businesses improve productivity, liquidity, and profitability through various investment opportunities and channels.",
      technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
      category: "Business",
      date: "Apr 2025",
      sourceCode: "https://github.com/thebasilugo/rivergateonyx",
      preview: "https://thebasilugo.github.io/rivergateonyx",
    },
    {
      name: "NMTA",
      description:
        "A website designed for Nollywood Movie and Television Awards, a movie and entertainment focused company. Features event information, award categories, and nomination details.",
      technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
      category: "Entertainment",
      date: "Pending",
      sourceCode: "https://github.com/thebasilugo/nmta",
      preview: "https://thebasilugo.github.io/nmta",
    },
    {
      name: "Life Sync",
      description:
        "An integrated life planner and synchronization hub that lets you manage tasks, habits, and events across devices with reminders and calendar sync.",
      technologies: ["Next.js", "React", "TailwindCSS", "Firebase"],
      category: "Productivity",
      date: "Jun 2025",
      sourceCode: "",
      preview: "https://life-sync-u9.vercel.app/",
    },
  ]

  const categories = ["All", "AI Tools", "Health Tech", "FinTech", "Developer Tools", "Productivity"]

  // Filtered projects based on the selected category
  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  // Separate featured projects
  const featuredProjects = filteredProjects.filter((project) => project.featured)
  const regularProjects = filteredProjects.filter((project) => !project.featured)

  return (
    <section id="projects" className="max-w-screen-xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-gray-950 dark:text-gray-50 sm:text-5xl mb-12 text-center">Projects</h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 text-sm font-medium rounded transition-all ${
              filter === category ? "bg-gray-800 text-white shadow-md" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => setFilter(category)}
            aria-pressed={filter === category}
            aria-label={`Filter by ${category}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Featured Projects</h3>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="relative border rounded-lg p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all bg-gray-950 h-full flex flex-col"
              >
                {/* Project Details */}
                <h3 className="text-xl font-bold mb-2 text-gray-100">{project.name}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-gray-800 text-white py-1 px-2 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 mt-auto">
                  {project.sourceCode && (
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-gray-50 transition-colors group"
                      aria-label={`View source code for ${project.name}`}
                    >
                      <Github size={16} className="mr-1" aria-hidden="true" />
                      <span className="group-hover:underline">Code</span>
                    </a>
                  )}
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-gray-50 transition-colors group"
                    aria-label={`View live demo for ${project.name}`}
                  >
                    <ExternalLink size={16} className="mr-1" aria-hidden="true" />
                    <span className="group-hover:underline">Live Demo</span>
                  </a>
                </div>

                {/* Date */}
                <p className="absolute top-4 right-4 text-sm text-gray-500 italic">{project.date}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Other Projects */}
      {regularProjects.length > 0 && (
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Other Projects</h3>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {regularProjects.map((project, index) => (
              <div
                key={index}
                className="relative border rounded-lg p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all bg-gray-900 h-full flex flex-col"
              >
                {/* Project Details */}
                <h3 className="text-xl font-bold mb-2 text-gray-100">{project.name}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-gray-800 text-white py-1 px-2 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 mt-auto">
                  {project.sourceCode && (
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-gray-50 transition-colors group"
                      aria-label={`View source code for ${project.name}`}
                    >
                      <Github size={16} className="mr-1" aria-hidden="true" />
                      <span className="group-hover:underline">Code</span>
                    </a>
                  )}
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-gray-50 transition-colors group"
                    aria-label={`View live demo for ${project.name}`}
                  >
                    <ExternalLink size={16} className="mr-1" aria-hidden="true" />
                    <span className="group-hover:underline">Live Demo</span>
                  </a>
                </div>

                {/* Date */}
                <p className="absolute top-4 right-4 text-sm text-gray-500 italic">{project.date}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects

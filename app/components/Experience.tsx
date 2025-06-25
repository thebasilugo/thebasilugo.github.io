"use client"
import { useState } from "react"
import { Calendar, Briefcase, Building, MapPin, ChevronLeft, ChevronRight } from "lucide-react"

const experiences = [
  {
    title: "Frontend Developer",
    company: "Freelance",
    location: "Remote",
    type: "Remote",
    period: "Jan 2025 - Present",
    responsibilities: [
      "Full-stack Builds: Delivered responsive, scalable web apps (e.g., RivergateOnyx, NMTA) using Next.js, Firebase, and TailwindCSS.",
      "Performance: Achieved Lighthouse performance scores of 95+ by optimizing images, lazy-loading components, and enabling SSR.",
      "Client Impact: Boosted site traffic by 60% through rebranding, SEO, and semantic HTML improvements.",
    ],
  },
  {
    title: "Creative Media Manager (Volunteer)",
    company: "Olivet Bible Church",
    location: "Lagos, Nigeria",
    type: "Hybrid",
    period: "Aug 2024 - Present",
    responsibilities: [
      "Media Strategy: Produced 30+ videos using CapCut and Canva, while managing Instagram campaigns that grew reach by 70%.",
      "Content Leadership: Led creative direction for events, weekly highlights, and announcements with a consistent brand voice.",
    ],
  },
  {
    title: "Web Developer & Programming Tutor",
    company: "Bet Sefer Schools",
    location: "Lagos, Nigeria",
    type: "Hybrid",
    period: "Mar 2023 - Dec 2024",
    responsibilities: [
      "Portal Optimization: Revamped school portal to reduce page load times by 30%, enhancing UX for staff and students.",
      "Coding Instructor: Taught 25+ students (ages 8–10) HTML, CSS, and JavaScript; created step-by-step lesson plans and live examples.",
    ],
  },
  {
    title: "IT Intern",
    company: "Nigerian Ports Authority",
    location: "Lagos, Nigeria",
    type: "On-site",
    period: "Apr 2022 - Sep 2022",
    responsibilities: [
      "UI Revamp: Redesigned intranet login with responsive design, increasing accessibility by 40%.",
      "Cybersecurity: Assisted in developing internal security protocols, reducing unauthorized access by 15%.",
    ],
  },
]

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  const nextExperience = () => {
    if (activeTab < experiences.length - 1) {
      setActiveTab(activeTab + 1)
    }
  }

  const prevExperience = () => {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1)
    }
  }

  return (
    <section
      id="experience"
      className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">Experience</h2>

      <div className="max-w-5xl mx-auto">
        {/* Timeline Indicator */}
        <div className="relative mb-8">
          <div className="h-1 bg-slate-300 dark:bg-slate-700 rounded-full">
            <div
              className="h-1 bg-slate-800 dark:bg-slate-400 rounded-full transition-all duration-300"
              style={{
                width: `${((experiences.length - 1 - activeTab) / (experiences.length - 1)) * 100}%`,
              }}
              aria-hidden="true"
            ></div>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-sm text-slate-600 dark:text-slate-400">2022</span>
            <span className="text-sm text-slate-600 dark:text-slate-400">Present</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-8 gap-2" role="tablist">
          {experiences.map((exp, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-md transition-all text-sm ${
                activeTab === index
                  ? "bg-slate-800 dark:bg-slate-700 text-white shadow-md"
                  : "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700"
              }`}
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={`experience-panel-${index}`}
              id={`experience-tab-${index}`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Experience Card */}
        <div
          className="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-6 sm:p-8 transition-all duration-300"
          role="tabpanel"
          id={`experience-panel-${activeTab}`}
          aria-labelledby={`experience-tab-${activeTab}`}
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{experiences[activeTab].title}</h3>
              <div className="flex items-center text-slate-600 dark:text-slate-400 mb-1">
                <Building size={18} className="mr-2" aria-hidden="true" />
                <span className="text-base sm:text-lg">{experiences[activeTab].company}</span>
              </div>
              {experiences[activeTab].location && (
                <div className="flex items-center text-slate-600 dark:text-slate-400 mb-1">
                  <MapPin size={18} className="mr-2" aria-hidden="true" />
                  <span>
                    {experiences[activeTab].location}
                    {experiences[activeTab].type && ` (${experiences[activeTab].type})`}
                  </span>
                </div>
              )}
            </div>
            <div className="mt-4 sm:mt-0 flex items-center text-slate-600 dark:text-slate-400">
              <Calendar size={18} className="mr-2" aria-hidden="true" />
              <span>{experiences[activeTab].period}</span>
            </div>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
            <h4 className="font-semibold mb-3 flex items-center">
              <Briefcase size={18} className="mr-2" aria-hidden="true" />
              Key Achievements
            </h4>
            <ul className="space-y-3">
              {experiences[activeTab].responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-slate-400 mr-2 mt-1" aria-hidden="true">
                    •
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prevExperience}
            className={`flex items-center p-2 rounded-md transition-all ${
              activeTab === 0
                ? "text-slate-400 cursor-not-allowed"
                : "text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
            }`}
            disabled={activeTab === 0}
            aria-label="Previous experience"
          >
            <ChevronLeft size={20} className="mr-1" aria-hidden="true" />
            <span className="hidden sm:inline">Previous</span>
          </button>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2" role="tablist" aria-label="Experience navigation">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeTab === index ? "bg-slate-800 dark:bg-slate-400" : "bg-slate-300 dark:bg-slate-700"
                }`}
                aria-label={`View ${experiences[index].company} experience (${experiences[index].period})`}
                aria-selected={activeTab === index}
                role="tab"
              />
            ))}
          </div>

          <button
            onClick={nextExperience}
            className={`flex items-center p-2 rounded-md transition-all ${
              activeTab === experiences.length - 1
                ? "text-slate-400 cursor-not-allowed"
                : "text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
            }`}
            disabled={activeTab === experiences.length - 1}
            aria-label="Next experience"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight size={20} className="ml-1" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}

// "use client"
// import { useState } from "react"
// import { Code, Brain, Lightbulb, Server, Palette, PenToolIcon as Tool, ChevronDown, ChevronUp } from "lucide-react"

// export default function Skills() {
//   const [activeCategory, setActiveCategory] = useState("all")
//   const [expanded, setExpanded] = useState(false)

//   const skillCategories = [
//     { id: "all", name: "All Skills", icon: Lightbulb },
//     { id: "frontend", name: "Frontend", icon: Code },
//     { id: "backend", name: "Backend", icon: Server },
//     { id: "tools", name: "Tools", icon: Tool },
//     { id: "design", name: "Design", icon: Palette },
//     { id: "soft", name: "Soft Skills", icon: Brain },
//   ]

//   const skills = {
//     frontend: [
//       "HTML5",
//       "CSS3",
//       "JavaScript (ES6+)",
//       "TypeScript",
//       "React",
//       "Next.js",
//       "TailwindCSS",
//       "Bootstrap",
//       "MaterialUI",
//       "SASS/SCSS",
//       "Responsive Design",
//     ],
//     backend: ["Firebase", "Firestore", "GraphQL", "RESTful APIs", "Node.js (basics)"],
//     tools: ["Git/GitHub", "VS Code", "Chrome DevTools", "Webpack", "Vite", "npm/yarn"],
//     design: ["Figma", "Canva", "Wireframing", "UI/UX Principles"],
//     soft: [
//       "Problem Solving",
//       "Communication",
//       "Teamwork",
//       "Time Management",
//       "Critical Thinking",
//       "Adaptability",
//       "Attention to Detail",
//       "Creativity",
//       "Leadership",
//       "Collaboration",
//     ],
//   }

//   // Function to get skills based on active category
//   const getDisplayedSkills = () => {
//     if (activeCategory === "all") {
//       // Return all categories
//       return skills
//     }
//     // Return only the selected category
//     return {
//       [activeCategory]: skills[activeCategory as keyof typeof skills] || [],
//     }
//   }

//   const displayedSkills = getDisplayedSkills()

//   // Determine how many skills to show initially per category
//   const getVisibleSkills = (skillList: string[]) => {
//     const initialCount = 6
//     return expanded ? skillList : skillList.slice(0, initialCount)
//   }

//   // Check if any category has more skills than the initial count
//   const hasMoreSkills = () => {
//     if (!displayedSkills) return false

//     const categories = Object.keys(displayedSkills)
//     for (const category of categories) {
//       const skillList = displayedSkills[category as keyof typeof displayedSkills]
//       if (Array.isArray(skillList) && skillList.length > 6) {
//         return true
//       }
//     }
//     return false
//   }

//   return (
//     <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-slate-900 dark:text-slate-100">Skills</h2>

//         {/* Category Tabs */}
//         <div className="flex flex-wrap justify-center mb-10 gap-2 sm:gap-4">
//           {skillCategories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setActiveCategory(category.id)}
//               className={`flex items-center px-4 py-2 rounded-md transition-all ${
//                 activeCategory === category.id
//                   ? "bg-slate-800 dark:bg-slate-700 text-white shadow-md"
//                   : "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700"
//               }`}
//               aria-pressed={activeCategory === category.id}
//               aria-label={`Show ${category.name}`}
//             >
//               <category.icon size={18} className="mr-2" aria-hidden="true" />
//               {category.name}
//             </button>
//           ))}
//         </div>

//         {/* Skills Lists */}
//         <div className="space-y-8">
//           {Object.entries(displayedSkills).map(([category, skillList]) => {
//             if (!Array.isArray(skillList) || skillList.length === 0) return null

//             return (
//               <div key={category}>
//                 <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200 capitalize">{category}</h3>
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
//                   {getVisibleSkills(skillList).map((skill, index) => (
//                     <div
//                       key={index}
//                       className="py-2 px-3 bg-slate-100 dark:bg-slate-800 rounded-md text-center text-slate-800 dark:text-slate-200 text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
//                     >
//                       {skill}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )
//           })}
//         </div>

//         {/* Show More/Less Button */}
//         {hasMoreSkills() && (
//           <div className="flex justify-center mt-8">
//             <button
//               onClick={() => setExpanded(!expanded)}
//               className="flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-md hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
//               aria-expanded={expanded}
//               aria-controls="skills-list"
//             >
//               {expanded ? (
//                 <>
//                   Show Less <ChevronUp size={18} aria-hidden="true" />
//                 </>
//               ) : (
//                 <>
//                   Show More <ChevronDown size={18} aria-hidden="true" />
//                 </>
//               )}
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }

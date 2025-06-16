"use client";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
	const [filter, setFilter] = useState("All"); // Added state for managing the active filter

	const projects = [
		// {
		//   name: "StreamR",
		//   description:
		//     "A responsive movie streaming platform offering real-time viewing, user reviews, and ratings. Integrated Firebase for user authentication and data storage, ensuring a seamless and secure user experience.",
		//   technologies: ["Next.js", "TypeScript", "TailwindCSS", "Firebase"],
		//   category: "Next.js",
		//   date: "Jan 2025",
		//   sourceCode: "https://github.com/thebasilugo/streamr",
		//   preview: "https://streamr-app.vercel.app",
		//   featured: true,
		// },
		// {
		//   name: "BudgetApp",
		//   description:
		//     "An intuitive budgeting application that allows users to track income and expenses. Implemented dynamic charts for financial visualization and utilized local storage for data persistence.",
		//   technologies: ["React", "TypeScript", "TailwindCSS"],
		//   category: "React",
		//   date: "Dec 2024",
		//   sourceCode: "https://github.com/thebasilugo/budget-app",
		//   preview: "https://budget-app-react.vercel.app",
		//   featured: true,
		// },
		{
			name: "SaveStreak",
			description:
				"A gamified savings tracker that turns your daily saving habits green when you save and red when you don’t. Supports offline usage and syncs to localStorage when back online.",
			technologies: ["Next.js", "React", "TailwindCSS", "localStorage"],
			category: "Next.js",
			date: "Jun 2025",
			sourceCode: "",
			preview: "https://savestreak.vercel.app/",
			featured: true,
		},
		{
			name: "GlucoseTracker",
			description:
				"A personal blood glucose logging app that visualizes trends over time. Features include manual entry, chart summaries, and streak tracking to help maintain healthy levels.",
			technologies: ["Next.js", "React", "TailwindCSS", "Chart.js"],
			category: "Next.js",
			date: "Apr 2025",
			sourceCode: "",
			preview: "https://glucosetrackerbyhim.vercel.app/",
			featured: true,
		},
		{
			name: "AutoCV",
			description:
				"A minimalist, professional resume builder that generates clean, tailored CVs for any role or industry. Includes template selection, live preview, and easy export to PDF.",
			technologies: ["Next.js", "React", "TailwindCSS"],
			category: "Next.js",
			date: "May 2025",
			sourceCode: "",
			preview: "https://autocvbyhim.vercel.app/",
			featured: true,
		},
		// {
		// 	name: "TCSS Builder",
		// 	description:
		// 		"An AI‑powered TailwindCSS builder with live preview, responsive screen‑size toggles (desktop/tablet/mobile), a shareable link button, and a minimizable preview pane for streamlined workflow.",
		// 	technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
		// 	category: "TailwindCSS",
		// 	date: "Feb 2025",
		// 	sourceCode: "",
		// 	preview: "https://preview--tcss-builder.lovable.app/",
		// 	featured: true,
		// },
		{
			name: "KicksConfetti",
			description:
				"A vibrant e-commerce platform specializing in sneakers and related apparel. Integrated secure payment gateways, advanced product filtering, and a user-friendly interface to optimize the shopping experience.",
			technologies: ["Next.js", "TypeScript", "TailwindCSS"],
			category: "Next.js",
			date: "Pending",
			sourceCode: "https://github.com/thebasilugo/kicks-confetti",
			preview: "https://thebasilugo.github.io/kicksconfetti",
			// featured: true,
		},
		{
			name: "CheckpointRide",
			description:
				"A route planning and logistics simulator with interactive mapping and scheduling tools. Leveraged Firebase for real-time data updates and user authentication, enhancing operational efficiency.",
			technologies: ["Next.js", "TypeScript", "TailwindCSS", "Firebase"],
			category: "Next.js",
			date: "Pending",
			sourceCode: "https://github.com/thebasilugo/checkpointride",
			preview: "https://thebasilugo.github.io/checkpointride",
			featured: true,
		},
		// {
		// 	name: "TaskFlow",
		// 	description:
		// 		"A dynamic project management tool featuring drag-and-drop task organization, real-time updates, and collaborative features. Emphasized responsive design for accessibility across devices.",
		// 	technologies: ["React", "TypeScript", "TailwindCSS"],
		// 	category: "React",
		// 	date: "May 2024",
		// 	sourceCode: "https://github.com/thebasilugo/task-flow",
		// 	preview: "https://thebasilugo.github.io/taskflow",
		// featured: true,
		// },

		{
			name: "Auto‑Architekt",
			description:
				"An architectural concept generator that lets users input parameters and instantly creates and visualizes conceptual floor plans and 3D massing studies.",
			technologies: ["Next.js", "React", "TailwindCSS", "Three.js"],
			category: "Next.js",
			date: "Mar 2025",
			sourceCode: "",
			preview: "https://auto-architekt.vercel.app/",
			featured: true,
		},

		{
			name: "Life Sync",
			description:
				"An integrated life planner and synchronization hub that lets you manage tasks, habits, and events across devices with reminders and calendar sync.",
			technologies: ["Next.js", "React", "TailwindCSS", "Firebase"],
			category: "Next.js",
			date: "Jun 2025",
			sourceCode: "",
			preview: "https://life-sync-u9.vercel.app/",
		},
		// {
		//   name: "E-commerce App",
		//   description:
		//     "An online platform for buying and selling products with features like user authentication, product management, and payment integration.",
		//   technologies: ["Next.js", "React", "TailwindCSS", "Firebase"],
		//   category: "Next.js",
		//   date: "Nov 2022",
		//   sourceCode: "https://github.com/thebasilugo/ecommerce-app",
		//   preview: "https://ecommerce-app.vercel.app",
		// },
		// {
		//   name: "E-commerce App",
		//   description:
		//     "An online platform for buying and selling products with features like user authentication, product management, and payment integration.",
		//   technologies: ["Next.js", "React", "TailwindCSS", "Firebase"],
		//   category: "Next.js",
		//   date: "Nov 2022",
		//   sourceCode: "https://github.com/thebasilugo/ecommerce-app",
		//   preview: "https://ecommerce-app.vercel.app",
		// },
		// {
		//   name: "Women's Flow App (Flo)",
		//   description:
		//     "A health tracking app designed to monitor and predict menstrual cycles, including insights and reminders to ensure users stay informed and in control of their health.",
		//   technologies: ["React Native", "Firebase", "AI Integration"],
		//   category: "React Native",
		//   date: "Jan 2023",
		//   sourceCode: "https://github.com/thebasilugo/womens-flow-app",
		//   preview: "https://womens-flow-app.vercel.app",
		// },
		// {
		//   name: "Percentage (Finance & Budgeting App)",
		//   description:
		//     "A financial app to track expenses, set budgets, calculate savings goals, and generate insightful reports for better financial management.",
		//   technologies: ["React", "TailwindCSS", "Firestore"],
		//   category: "React",
		//   date: "Mar 2023",
		//   sourceCode: "https://github.com/thebasilugo/percentage-app",
		//   preview: "https://percentage-app.vercel.app",
		// },
		// {
		//   name: "Real-Time Chat App",
		//   description:
		//     "A messaging platform featuring real-time chat rooms, message notifications, and AI-powered smart replies to enhance communication.",
		//   technologies: ["Next.js", "Firebase", "TailwindCSS"],
		//   category: "Next.js",
		//   date: "Jun 2023",
		//   sourceCode: "https://github.com/thebasilugo/chat-app",
		//   preview: "https://chat-app.vercel.app",
		// },
		// {
		// 	name: "TaskMan",
		// 	description:
		// 		"A productivity app designed for tracking tasks, managing priorities, and meeting deadlines, complete with reminders and progress tracking.",
		// 	technologies: ["Next.js", "Firestore", "TailwindCSS"],
		// 	category: "Next.js",
		// 	date: "Aug 2023",
		// 	sourceCode: "https://github.com/thebasilugo/task-management-app",
		// 	preview: "https://task-management-app.vercel.app",
		// },
		{
			name: "Rivergate Onyx",
			description:
				"A website designed for Rivergate Onyx, a company focused on helping companies with building and improving on their productivity, liquidity, and profitability through a number of investment opportunities and channels.",
			technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
			// category: "Next.js",
			date: "Apr 2025",
			sourceCode: "https://github.com/thebasilugo/rivergateonyx",
			preview: "https://thebasilugo.github.io/rivergateonyx",
		},
		{
			name: "NMTA",
			description:
				"A website designed for Nollywood Movie and Television Awards, a movie and entertainment focused company.",
			technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
			// category: "Next.js",
			date: "Pending",
			sourceCode: "https://github.com/thebasilugo/nmta",
			preview: "https://thebasilugo.github.io/nmta",
		},
	];

	const categories = ["All", "Next.js", "React Native", "React"];

	// Filtered projects based on the selected category
	const filteredProjects =
		filter === "All"
			? projects
			: projects.filter((project) => project.category === filter);

	// Separate featured projects
	const featuredProjects = filteredProjects.filter(
		(project) => project.featured
	);
	const regularProjects = filteredProjects.filter(
		(project) => !project.featured
	);

	return (
		<section id="projects" className="max-w-screen-xl mx-auto px-4 py-16">
			<h2 className="text-4xl font-bold text-gray-950 dark:text-gray-50 sm:text-5xl mb-12 text-center">
				Projects
			</h2>

			{/* Filter Buttons */}
			{/* <div className="flex flex-wrap justify-center gap-4 mb-8">
				{categories.map((category) => (
					<button
						key={category}
						className={`px-4 py-2 text-sm font-medium rounded transition-all ${
							filter === category
								? "bg-gray-800 text-white shadow-md"
								: "bg-gray-200 text-gray-800 hover:bg-gray-300"
						}`}
						onClick={() => setFilter(category)}
						aria-pressed={filter === category}
						aria-label={`Filter by ${category}`}
					>
						{category}
					</button>
				))}
			</div> */}

			{/* Featured Projects Section */}
			{featuredProjects.length > 0 && (
				<div className="mb-12">
					<h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
						Featured Projects
					</h3>
					<div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
						{featuredProjects.map((project, index) => (
							<div
								key={index}
								className="relative border rounded-lg p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all bg-gray-950 h-full flex flex-col"
							>
								{/* Project Details */}
								<h3 className="text-xl font-bold mb-2 text-gray-100">
									{project.name}
								</h3>
								<p className="text-gray-400 mb-4 flex-grow">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.technologies.map((tech, idx) => (
										<span
											key={idx}
											className="text-xs bg-gray-800 text-white py-1 px-2 rounded"
										>
											{tech}
										</span>
									))}
								</div>

								{/* Action Buttons */}
								<div className="flex space-x-4 mt-auto">
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
									<a
										href={project.preview}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center text-gray-300 hover:text-gray-50 transition-colors group"
										aria-label={`View live demo for ${project.name}`}
									>
										<ExternalLink
											size={16}
											className="mr-1"
											aria-hidden="true"
										/>
										<span className="group-hover:underline">Live Demo</span>
									</a>
								</div>

								{/* Date */}
								<p className="absolute top-4 right-4 text-sm text-gray-500 italic">
									{project.date}
								</p>
							</div>
						))}
					</div>
				</div>
			)}

			{/* Other Projects */}
			{regularProjects.length > 0 && (
				<div>
					<h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
						Other Projects
					</h3>
					<div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
						{regularProjects.map((project, index) => (
							<div
								key={index}
								className="relative border rounded-lg p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all bg-gray-900 h-full flex flex-col"
							>
								{/* Project Details */}
								<h3 className="text-xl font-bold mb-2 text-gray-100">
									{project.name}
								</h3>
								<p className="text-gray-400 mb-4 flex-grow">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.technologies.map((tech, idx) => (
										<span
											key={idx}
											className="text-xs bg-gray-800 text-white py-1 px-2 rounded"
										>
											{tech}
										</span>
									))}
								</div>

								{/* Action Buttons */}
								<div className="flex space-x-4 mt-auto">
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
									<a
										href={project.preview}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center text-gray-300 hover:text-gray-50 transition-colors group"
										aria-label={`View live demo for ${project.name}`}
									>
										<ExternalLink
											size={16}
											className="mr-1"
											aria-hidden="true"
										/>
										<span className="group-hover:underline">Live Demo</span>
									</a>
								</div>

								{/* Date */}
								<p className="absolute top-4 right-4 text-sm text-gray-500 italic">
									{project.date}
								</p>
							</div>
						))}
					</div>
				</div>
			)}
		</section>
	);
};

export default Projects;

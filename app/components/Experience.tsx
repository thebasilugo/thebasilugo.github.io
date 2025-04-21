"use client";
import { useState } from "react";
import {
	Calendar,
	Briefcase,
	Building,
	MapPin,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";

const experiences = [
	{
		title: "Front-end Developer",
		company: "Freelance",
		location: "",
		type: "Remote",
		period: "Jan 2025 - Present",
		responsibilities: [
			"Engineered responsive and dynamic web applications for clients such as Rivergate Onyx, Olivet Storehouse, and NMTA, enhancing their online presence and user engagement.",
			"Utilized React and Next.js to develop high-performance front-end interfaces, ensuring seamless user experiences across devices.",
			"Integrated Firebase services for real-time data management and authentication, improving application reliability and security.",
			"Collaborated closely with clients to understand their requirements, delivering tailored solutions that align with their business objectives.",
		],
	},
	{
		title: "Volunteer Video Editor & Social Media Manager",
		company: "Olivet Bible Church",
		location: "Lagos, Nigeria",
		type: "Hybrid",
		period: "Aug 2024 - Present",
		responsibilities: [
			"Create, edit, and manage video content for church events using CapCut and Canva.",
			"Schedule and publish posts on Instagram, managing the platform to improve engagement and community outreach.",
			"Demonstrated a strong ability to self-learn and adapt to new tools and workflows to support organizational needs.",
		],
	},
	{
		title: "Web Developer & Programming Tutor",
		company: "Bet Sefer Schools",
		location: "Lagos, Nigeria",
		type: "Hybrid",
		period: "Mar 2023 - Dec 2024",
		responsibilities: [
			"Managed and optimized the school's online portal, ensuring seamless operation and user satisfaction, increasing efficiency by 30%.",
			"Delivered a successful 2023 summer coding program, tutoring students aged 10 and below to create their first webpage using HTML, CSS, and JavaScript.",
			"Provided ongoing technical support and training to staff, boosting digital literacy by 25% and resulting in effective use of the school's online tools.",
		],
	},
	{
		title: "Front-end Developer",
		company: "Freelance",
		location: "",
		type: "Remote",
		period: "Oct 2022 - Feb 2023",
		responsibilities: [
			"Developed customized web solutions that met specific client needs, resulting in a 90% client satisfaction rate.",
			"Enhanced web application functionality by integrating REST APIs, improving data retrieval efficiency by 30%.",
			"Designed and deployed websites for various clients, including schools and sales vendors, driving a 20% increase in client engagement.",
		],
	},
	{
		title: "IT Intern",
		company: "Nigerian Ports Authority",
		location: "Lagos, Nigeria",
		type: "On-site",
		period: "Apr 2022 - Sep 2022",
		responsibilities: [
			"Improved user engagement by 40% through redesigning the intranet login page using HTML, CSS, and JavaScript, enhancing accessibility and user experience.",
			"Collaborated with senior developers to implement responsive web designs, resulting in a 25% increase in internal system efficiency.",
			"Assisted in the development of security protocols for the internal portal, contributing to a 15% decrease in unauthorized access incidents.",
		],
	},
];

export default function Experience() {
	const [activeTab, setActiveTab] = useState(0);

	const nextExperience = () => {
		if (activeTab < experiences.length - 1) {
			setActiveTab(activeTab + 1);
		}
	};

	const prevExperience = () => {
		if (activeTab > 0) {
			setActiveTab(activeTab - 1);
		}
	};

	return (
		<section
			id="experience"
			className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 px-4 sm:px-6 lg:px-8"
		>
			<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
				Experience
			</h2>

			<div className="max-w-5xl mx-auto">
				{/* Timeline Indicator */}
				<div className="relative mb-8">
					<div className="h-1 bg-slate-300 dark:bg-slate-700 rounded-full">
						<div
							className="h-1 bg-slate-800 dark:bg-slate-400 rounded-full transition-all duration-300"
							style={{
								width: `${(activeTab / (experiences.length - 1)) * 100}%`,
							}}
							aria-hidden="true"
						></div>
					</div>
					<div className="flex justify-between mt-2">
						<span className="text-sm text-slate-600 dark:text-slate-400">
							2022
						</span>
						<span className="text-sm text-slate-600 dark:text-slate-400">
							Present
						</span>
					</div>
				</div>

				{/* Tabs */}
				<div
					className="flex flex-wrap justify-center mb-8 gap-2"
					role="tablist"
				>
					{experiences.map((exp, index) => (
						<button
							key={index}
							onClick={() => setActiveTab(index)}
							className={`px-4 py-2 rounded-md transition-all ${
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
							<h3 className="text-xl sm:text-2xl font-bold mb-2">
								{experiences[activeTab].title}
							</h3>
							<div className="flex items-center text-slate-600 dark:text-slate-400 mb-1">
								<Building size={18} className="mr-2" aria-hidden="true" />
								<span className="text-base sm:text-lg">
									{experiences[activeTab].company}
								</span>
							</div>
							{experiences[activeTab].location && (
								<div className="flex items-center text-slate-600 dark:text-slate-400 mb-1">
									<MapPin size={18} className="mr-2" aria-hidden="true" />
									<span>
										{experiences[activeTab].location}
										{experiences[activeTab].type &&
											` (${experiences[activeTab].type})`}
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
							Key Responsibilities
						</h4>
						<ul className="space-y-3">
							{experiences[activeTab].responsibilities.map((resp, idx) => (
								<li key={idx} className="flex items-start">
									<span className="text-slate-400 mr-2 mt-1" aria-hidden="true">
										•
									</span>
									<span className="text-slate-700 dark:text-slate-300">
										{resp}
									</span>
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
					<div
						className="flex justify-center space-x-2"
						role="tablist"
						aria-label="Experience navigation"
					>
						{experiences.map((_, index) => (
							<button
								key={index}
								onClick={() => setActiveTab(index)}
								className={`w-3 h-3 rounded-full transition-all ${
									activeTab === index
										? "bg-slate-800 dark:bg-slate-400"
										: "bg-slate-300 dark:bg-slate-700"
								}`}
								aria-label={`View ${experiences[index].company} experience`}
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
	);
}

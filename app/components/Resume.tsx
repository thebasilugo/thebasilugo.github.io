import Link from "next/link";

export default function Resume() {
	return (
		<section
			id="resume"
			className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 min-h-screen print:p-0"
		>
			<div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 shadow-lg rounded-lg print:shadow-none print:p-0">
				{/* Header */}
				<header className="mb-6 text-center">
					<h1 className="text-2xl sm:text-3xl font-bold mb-1">
						Ugochukwu Basil
					</h1>
					<p className="text-sm sm:text-base mb-2">Location: Lagos, Nigeria</p>
					<div className="flex flex-wrap justify-center gap-2 text-sm">
						<Link
							href="/"
							className="text-blue-600 hover:underline print:text-black"
						>
							Portfolio
						</Link>
						<span>|</span>
						<Link
							href="https://www.linkedin.com/in/thebasilugo"
							target="_blank"
							className="text-blue-600 hover:underline print:text-black"
						>
							LinkedIn
						</Link>
						<span>|</span>
						<Link
							href="https://github.com/thebasilugo"
							target="_blank"
							className="text-blue-600 hover:underline print:text-black"
						>
							GitHub
						</Link>
						<span>|</span>
						<Link
							href="mailto:basilugo2@gmail.com"
							className="text-blue-600 hover:underline print:text-black"
						>
							Email: basilugo2@gmail.com
						</Link>
					</div>
				</header>

				{/* Frontend Developer */}
				<div className="mb-6">
					<h2 className="text-xl font-bold mb-2 text-center bg-slate-100 py-1 print:bg-transparent print:border-b print:border-gray-300">
						FRONT-END DEVELOPER
					</h2>
					<p className="text-sm sm:text-base">
						Frontend Developer with a strong foundation in building responsive
						and performant web applications using React, Next.js, TypeScript,
						and TailwindCSS. Adept at transforming complex problems into elegant
						user experiences, collaborating with cross-functional teams, and
						delivering production-grade solutions for both startups and
						established clients. Demonstrates a passion for design systems,
						clean architecture, and modern development practices.
					</p>
				</div>

				{/* Technical Skills */}
				<div className="mb-6">
					<h2 className="text-xl font-bold mb-2 text-center bg-slate-100 py-1 print:bg-transparent print:border-b print:border-gray-300">
						TECHNICAL SKILLS
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
						<div>
							<span className="font-bold">Languages:</span> HTML5, CSS3,
							JavaScript (ES6+), TypeScript, Python
						</div>
						<div>
							<span className="font-bold">Frameworks:</span> ReactJS, Next.js,
							TailwindCSS, Bootstrap, MaterialUI
						</div>
						<div>
							<span className="font-bold">Dev Tools:</span> Visual Studio Code,
							Git/GitHub, Firebase, Firestore, REST APIs, Chrome DevTools
						</div>
						<div>
							<span className="font-bold">Other Tools:</span> Figma, CapCut,
							Canva
						</div>
					</div>
				</div>

				{/* Relevant Experience */}
				<div className="mb-6">
					<h2 className="text-xl font-bold mb-2 text-center bg-slate-100 py-1 print:bg-transparent print:border-b print:border-gray-300">
						RELEVANT EXPERIENCE
					</h2>

					{/* Experience 1 */}
					<div className="mb-4">
						<div className="flex flex-col sm:flex-row sm:justify-between mb-1">
							<h3 className="font-bold">Front-end Developer</h3>
							<p className="text-sm">Jan 2025 – Present</p>
						</div>
						<div className="flex flex-col sm:flex-row sm:justify-between mb-1 text-sm">
							<p className="font-semibold">Freelance</p>
						</div>
						<ul className="list-disc pl-5 text-sm space-y-1">
							<li>
								Engineered responsive and dynamic web applications for clients
								such as Rivergate Onyx, Olivet Storehouse, and NMTA, enhancing
								their online presence and user engagement.
							</li>
							<li>
								Utilized React and Next.js to develop high-performance front-end
								interfaces, ensuring seamless user experiences across devices.
							</li>
							<li>
								Integrated Firebase services for real-time data management and
								authentication, improving application reliability and security.
							</li>
							<li>
								Collaborated closely with clients to understand their
								requirements, delivering tailored solutions that align with
								their business objectives.
							</li>
						</ul>
					</div>

					{/* Experience 2 */}
					<div className="mb-4">
						<div className="flex flex-col sm:flex-row sm:justify-between mb-1">
							<h3 className="font-bold">
								Volunteer Video Editor & Social Media Manager
							</h3>
							<p className="text-sm">Aug 2024 – Present</p>
						</div>
						<div className="flex flex-col sm:flex-row sm:justify-between mb-1 text-sm">
							<p className="font-semibold">Olivet Bible Church</p>
							<p>Lagos, Nigeria</p>
						</div>
						<ul className="list-disc pl-5 text-sm space-y-1">
							<li>
								Create, edit, and manage video content for church events using
								CapCut and Canva.
							</li>
							<li>
								Schedule and publish posts on Instagram, managing the platform
								to improve engagement and community outreach.
							</li>
							<li>
								Demonstrated a strong ability to self-learn and adapt to new
								tools and workflows to support organizational needs.
							</li>
						</ul>
					</div>

					{/* Experience 3 */}
					<div className="mb-4">
						<div className="flex flex-col sm:flex-row sm:justify-between mb-1">
							<h3 className="font-bold">Web Developer & Programming Tutor</h3>
							<p className="text-sm">Mar 2023 – Dec 2024</p>
						</div>
						<div className="flex flex-col sm:flex-row sm:justify-between mb-1 text-sm">
							<p className="font-semibold">Bet Sefer Schools</p>
							<p>Hybrid – Lagos, Nigeria</p>
						</div>
						<ul className="list-disc pl-5 text-sm space-y-1">
							<li>
								Managed and optimized the school's online portal, ensuring
								seamless operation and user satisfaction, increasing efficiency
								by 30%.
							</li>
							<li>
								Delivered a successful 2023 summer coding program, tutoring
								students aged 10 and below to create their first webpage using
								HTML, CSS, and JavaScript.{" "}
								<Link
									href="https://thebasilugo.github.io/betsefer/"
									className="text-blue-600 hover:underline print:text-black"
								>
									Click here to view
								</Link>
								.
							</li>
							<li>
								Provided ongoing technical support and training to staff,
								boosting digital literacy by 25% and resulting in effective use
								of the school's online tools.
							</li>
						</ul>
					</div>

					{/* Experience 4 */}
					<div className="mb-4">
						<div className="flex flex-col sm:flex-row sm:justify-between mb-1">
							<h3 className="font-bold">Front-end Developer</h3>
							<p className="text-sm">Oct 2022 – Feb 2023</p>
						</div>
						<div className="flex flex-col sm:flex-row sm:justify-between mb-1 text-sm">
							<p className="font-semibold">Freelance</p>
						</div>
						<ul className="list-disc pl-5 text-sm space-y-1">
							<li>
								Developed customized web solutions that met specific client
								needs, resulting in a 90% client satisfaction rate.
							</li>
							<li>
								Enhanced web application functionality by integrating REST APIs,
								improving data retrieval efficiency by 30%
							</li>
							<li>
								Designed and deployed websites for various clients, including
								schools and sales vendors, driving a 20% increase in client
								engagement
							</li>
						</ul>
					</div>

					{/* Experience 5 */}
					<div className="mb-4">
						<div className="flex flex-col sm:flex-row sm:justify-between mb-1">
							<h3 className="font-bold">IT Intern</h3>
							<p className="text-sm">Apr 2022 – Sep 2022</p>
						</div>
						<div className="flex flex-col sm:flex-row sm:justify-between mb-1 text-sm">
							<p className="font-semibold">Nigerian Ports Authority</p>
							<p>Lagos, Nigeria</p>
						</div>
						<ul className="list-disc pl-5 text-sm space-y-1">
							<li>
								Improved user engagement by 40% through redesigning the intranet
								login page using HTML, CSS, and JavaScript, enhancing
								accessibility and user experience.
							</li>
							<li>
								Collaborated with senior developers to implement responsive web
								designs, resulting in a 25% increase in internal system
								efficiency.
							</li>
							<li>
								Assisted in the development of security protocols for the
								internal portal, contributing to a 15% decrease in unauthorized
								access incidents.
							</li>
						</ul>
					</div>
				</div>

				{/* Education */}
				<div className="mb-6">
					<h2 className="text-xl font-bold mb-2 text-center bg-slate-100 py-1 print:bg-transparent print:border-b print:border-gray-300">
						EDUCATION
					</h2>
					<div className="mb-1">
						<div className="flex flex-col sm:flex-row sm:justify-between">
							<h3 className="font-bold">Landmark University</h3>
							<p className="text-sm">Kwara, Nigeria</p>
						</div>
						<div className="flex flex-col sm:flex-row sm:justify-between text-sm">
							<p className="font-semibold">
								Bachelor of Science in Computer Science
							</p>
							<p>4.07/5.00</p>
						</div>
					</div>
					<ul className="list-disc pl-5 text-sm space-y-1">
						<li>
							<span className="font-semibold">Final Year Project:</span>{" "}
							Developed a Cyber Attack Detection System using a Hybrid CNN-MLP
							Model, achieving a 95% accuracy rate in detecting cyber threats in
							a simulated environment. The model was designed to identify
							anomalies in network traffic, with applications in cybersecurity
							and intrusion detection.
						</li>
						<li>
							<span className="font-semibold">Publication:</span> Co-authored a
							paper on Intrusion Detection Systems Based on Machine Learning
							Approaches: A Systematic Review, published in{" "}
							<Link
								href="https://ieeexplore.ieee.org/document/10124506"
								className="text-blue-600 hover:underline print:text-black"
							>
								IEEEXplore
							</Link>
						</li>
						<li>
							<span className="font-semibold">
								Director of Publication and Correspondence, Press Group
								(2022-2023):
							</span>{" "}
							Led communication strategies, conducted interviews, managed
							academic newsletters, and maintained departmental publications.
						</li>
						<li>
							<span className="font-semibold">
								Media Secretary, Student Convocation Planning Committee (2022):
							</span>{" "}
							Managed media and communication for the university's convocation,
							ensuring streamlined dissemination of information and
							coordination.
						</li>
						<li>
							<span className="font-semibold">Relevant Coursework:</span>{" "}
							Machine Learning, Cybersecurity Protocols, Advanced Algorithms,
							Data Structures, Cloud Computing, Database Systems, and AI
							Applications.
						</li>
					</ul>
				</div>

				{/* Projects */}
				<div>
					<h2 className="text-xl font-bold mb-2 text-center bg-slate-100 py-1 print:bg-transparent print:border-b print:border-gray-300">
						PROJECTS
					</h2>

					{/* Project 1 */}
					<div className="mb-3">
						<div className="flex items-baseline gap-2 mb-1">
							<h3 className="font-bold">StreamR</h3>
							<span className="text-sm">
								Next.js, TypeScript, TailwindCSS, Firebase
							</span>
							<Link
								href="#"
								className="text-blue-600 hover:underline text-sm print:text-black"
							>
								Source Code
							</Link>
						</div>
						<ul className="list-disc pl-5 text-sm">
							<li>
								Developed a responsive movie streaming platform offering
								real-time viewing, user reviews, and ratings. Integrated
								Firebase for user authentication and data storage, ensuring a
								seamless and secure user experience.
							</li>
						</ul>
					</div> */}

					{/* Project 2 */}
					<div className="mb-3">
						<div className="flex items-baseline gap-2 mb-1">
							<h3 className="font-bold">BudgetApp</h3>
							<span className="text-sm">React, TypeScript, TailwindCSS</span>
							<Link
								href="#"
								className="text-blue-600 hover:underline text-sm print:text-black"
							>
								Source Code
							</Link>
						</div>
						<ul className="list-disc pl-5 text-sm">
							<li>
								Created an intuitive budgeting application that allows users to
								track income and expenses. Implemented dynamic charts for
								financial visualization and utilized local storage for data
								persistence.
							</li>
						</ul>
					</div>

					{/* Project 3 */}
					<div className="mb-3">
						<div className="flex items-baseline gap-2 mb-1">
							<h3 className="font-bold">CheckpointRide</h3>
							<span className="text-sm">
								Next.js, TypeScript, TailwindCSS, Firebase
							</span>
							<Link
								href="#"
								className="text-blue-600 hover:underline text-sm print:text-black"
							>
								Source Code
							</Link>
						</div>
						<ul className="list-disc pl-5 text-sm">
							<li>
								Designed a route planning and logistics simulator with
								interactive mapping and scheduling tools. Leveraged Firebase for
								real-time data updates and user authentication, enhancing
								operational efficiency.
							</li>
						</ul>
					</div>

					{/* Project 4 */}
					<div className="mb-3">
						<div className="flex items-baseline gap-2 mb-1">
							<h3 className="font-bold">KicksConfetti</h3>
							<span className="text-sm">
								Next.js, TypeScript, TailwindCSS, Firebase
							</span>
							<Link
								href="#"
								className="text-blue-600 hover:underline text-sm print:text-black"
							>
								Source Code
							</Link>
						</div>
						<ul className="list-disc pl-5 text-sm">
							<li>
								Built a vibrant e-commerce platform specializing in sneakers and
								related apparel. Integrated secure payment gateways, advanced
								product filtering, and a user-friendly interface to optimize the
								shopping experience.
							</li>
						</ul>
					</div>

					{/* Project 5 */}
					<div>
						<div className="flex items-baseline gap-2 mb-1">
							<h3 className="font-bold">TaskFlow</h3>
							<span className="text-sm">React, TypeScript, TailwindCSS</span>
							<Link
								href="#"
								className="text-blue-600 hover:underline text-sm print:text-black"
							>
								Source Code
							</Link>
						</div>
						<ul className="list-disc pl-5 text-sm">
							<li>
								Developed a dynamic project management tool featuring
								drag-and-drop task organization, real-time updates, and
								collaborative features. Emphasized responsive design for
								accessibility across devices.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

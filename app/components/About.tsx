export default function About() {
	return (
		<section className="py-16 sm:py-20 bg-white dark:bg-slate-900">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl sm:text-4xl font-bold text-gray-950 dark:text-gray-50 mb-8 sm:mb-12 text-center">
					About Me
				</h2>
				<div className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl dark:text-slate-300 space-y-6">
					<p>
						I'm Ugochukwu, a Web/Frontend Developer with a Computer Science
						degree and over 3 years of experience. I specialize in building
						dynamic, responsive applications using React, Next.js, and
						TailwindCSS.
					</p>
					<p>
						My curiosity and attention to detail fuel my passion for creativity
						in design and development. I enjoy exploring innovative approaches
						to push the boundaries of frontend development.
					</p>
					<p>
						In essence, I love what I do... and I'd{" "}
						<span className="font-semibold italic">love</span> to connect with
						you and bring your ideas to life.
					</p>
					{/* <p>
            I'm Ugochukwu, a Frontend Developer with a Computer Science degree and a passion for creating exceptional
            web experiences. I specialize in building responsive and performant applications using React, Next.js,
            TypeScript, and TailwindCSS.
          </p>
          <p>
            My approach combines technical expertise with a keen eye for design, allowing me to transform complex
            problems into elegant user experiences. I'm adept at collaborating with cross-functional teams and
            delivering production-grade solutions for both startups and established clients.
          </p>
          <p>
            Beyond coding, I'm passionate about design systems, clean architecture, and modern development practices. I
            continuously explore new technologies and methodologies to enhance my skills and deliver better solutions.
          </p>
          <p>
            I'd <span className="font-semibold italic">love</span> to connect with you and bring your ideas to life
            through thoughtful, well-crafted web experiences that make a difference.
          </p> */}
				</div>
			</div>
		</section>
	);
}

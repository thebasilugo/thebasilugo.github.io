import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
// import Skills from "@/app/components/Skills"
import CallToAction from "@/app/components/CallToAction";
import Footer from "@/app/components/Footer";
import Projects from "@/app/components/Projects";
import Experience from "@/app/components/Experience";
import { Suspense } from "react";

export default function Page() {
	return (
		<div className="font-outfit bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
			<Navbar />
			<main>
				<section id="main">
					<Hero />
				</section>
				<section id="about">
					<About />
				</section>
				<section id="experience">
					<Suspense
						fallback={
							<div className="min-h-[400px] bg-slate-50 dark:bg-slate-950 animate-pulse" />
						}
					>
						<Experience />
					</Suspense>
				</section>
				<section id="skills">
					<Suspense
						fallback={
							<div className="min-h-[400px] bg-white dark:bg-slate-900 animate-pulse" />
						}
					>
						{/* <Skills /> */}
					</Suspense>
				</section>
				<section id="projects">
					<Suspense
						fallback={
							<div className="min-h-[400px] bg-white dark:bg-slate-900 animate-pulse" />
						}
					>
						<Projects />
					</Suspense>
				</section>
				<section id="contact">
					<Suspense
						fallback={
							<div className="min-h-[400px] bg-gray-900 animate-pulse" />
						}
					>
						<CallToAction />
					</Suspense>
				</section>
			</main>
			<Footer />
		</div>
	);
}

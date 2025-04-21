import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
	return (
		<section
			className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
			style={{
				backgroundImage: 'url("/images/basil.jpg")',
			}}
		>
			<div className="absolute inset-0 bg-slate-900 opacity-60"></div>
			<div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
					Basil Ugochukwu
				</h1>
				<p className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 drop-shadow-lg">
					Frontend Developer
				</p>
				<p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 drop-shadow-lg max-w-2xl mx-auto">
					Building responsive and performant web applications using React,
					Next.js, TypeScript, and TailwindCSS. Transforming complex problems
					into elegant user experiences.
				</p>
				<div className="flex flex-col sm:flex-row justify-center gap-4">
					<Link
						href="#projects"
						className="inline-flex items-center justify-center bg-white text-slate-900 py-2 px-6 sm:py-3 sm:px-8 rounded-md text-base sm:text-lg font-semibold hover:bg-slate-100 transition-colors duration-300"
					>
						View my work
						<ArrowRight size={18} className="ml-2" />
					</Link>
					<Link
						href="#contact"
						className="inline-flex items-center justify-center border border-white text-white py-2 px-6 sm:py-3 sm:px-8 rounded-md text-base sm:text-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors duration-300 mt-3 sm:mt-0"
					>
						Let's connect
					</Link>
					<Link
						href="/resume"
						className="inline-flex items-center justify-center bg-transparent border border-white text-white py-2 px-6 sm:py-3 sm:px-8 rounded-md text-base sm:text-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors duration-300 mt-3 sm:mt-0"
					>
						Resume
					</Link>
				</div>
			</div>
		</section>
	);
}

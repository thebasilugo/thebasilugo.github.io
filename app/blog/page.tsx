"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Share2, Check } from "lucide-react";

interface BlogPost {
	id: string;
	title: string;
	excerpt: string;
	content: string;
	date: string;
	readTime: string;
	tags: string[];
}

const blogPosts: BlogPost[] = [
	{
		id: "ikigai-coming-soon",
		title: "Figuring Out My Ikigai",
		excerpt: "What is an Ikigai, and why do I want to figure mine out?",
		date: "June 16, 2025",
		readTime: "3 min read",
		tags: [
			"Ikigai",
			"Self Discovery",
			"Life Design",
			"Purpose",
			"Storytelling",
		],
		content: `
    <p>What drives you to wake up in the morning, energized and focused? That’s the question I’ve been asking myself lately. It led me to the concept of <strong>ikigai</strong>—a Japanese word that roughly translates to “reason for being.”</p>

    <h2>Why I'm Searching for It</h2>
    <p>I’m at a place in my life where I want clarity. I’ve spent time learning frontend development, building apps, exploring storytelling, and even diving into cybersecurity and trading. But I keep circling back to a single question: <em>Is this really what I want to do long-term?</em></p>
    
    <p>I want more than just a career or a hustle—I want to find something that connects what I love, what I’m good at, what the world needs, and what I can be paid for. That overlap is ikigai. And right now, I’m on a mission to discover mine.</p>

    <h2>What is Ikigai, Exactly?</h2>
    <p>Ikigai sits at the intersection of four key areas:</p>
    <ul>
      <li><strong>What you love</strong> (your passion)</li>
      <li><strong>What you’re good at</strong> (your vocation)</li>
      <li><strong>What the world needs</strong> (your mission)</li>
      <li><strong>What you can be paid for</strong> (your profession)</li>
    </ul>
    <p>When all four align, you’re not just surviving—you’re thriving.</p>

    <h2>What I’m Doing to Find It</h2>
    <p>Right now, I’m experimenting. I’m coding, designing in Figma, telling stories, writing blogs (like this one), and even testing out ideas around cybersecurity and financial trading. I’m not sure yet which one is “it,” but I believe that action brings clarity.</p>
    
    <p>I’m asking myself:</p>
    <ul>
      <li>What can I talk about for hours without getting bored?</li>
      <li>What challenges make me feel alive when I solve them?</li>
      <li>What would I still do even if I wasn’t getting paid (yet)?</li>
    </ul>

    <h2>Coming Soon: Documenting My Journey</h2>
    <p>This blog will become a record of my journey to ikigai. Not just the wins, but the questions, pivots, and reflections along the way. I’ll share what I’m learning—about myself, about work, and about the things that light me up.</p>

    <p>If you’re also trying to figure out your path, maybe this will help you too. Or at least let you know you're not alone.</p>

    <p><em>This isn’t the final destination. It’s just the beginning.</em></p>
  `,
	},
	// {
	// 	id: "frontend-evolution-2025",
	// 	title: "The Evolution of Frontend Development in 2025",
	// 	excerpt:
	// 		"Exploring the latest trends, tools, and methodologies shaping modern web development.",
	// 	date: "January 15, 2025",
	// 	readTime: "8 min read",
	// 	tags: ["Frontend", "React", "Next.js", "Web Development"],
	// 	content: `
	//     <p>Frontend development has undergone remarkable transformations in recent years, and 2025 continues to push the boundaries of what's possible in web development.</p>

	//     <h2>The Rise of Server Components</h2>
	//     <p>React Server Components have revolutionized how we think about rendering and data fetching. By moving computation to the server, we're achieving better performance and user experiences while maintaining the flexibility developers love.</p>

	//     <h2>TypeScript Everywhere</h2>
	//     <p>TypeScript adoption has reached new heights, with most modern frameworks providing first-class support. The benefits of type safety, better developer experience, and improved code maintainability are undeniable.</p>

	//     <h2>The Future of Styling</h2>
	//     <p>CSS-in-JS solutions continue to evolve, while utility-first frameworks like TailwindCSS have gained massive adoption. The debate between different styling approaches reflects the diversity and innovation in our ecosystem.</p>

	//     <h2>Performance-First Mindset</h2>
	//     <p>Core Web Vitals and user experience metrics have become central to development decisions. Tools like Next.js Image optimization and automatic code splitting are now standard practices.</p>

	//     <p>As we move forward, the focus remains on creating better user experiences while maintaining developer productivity and code quality.</p>
	//   `,
	// },
	// {
	// 	id: "building-accessible-web-apps",
	// 	title: "Building Accessible Web Applications: A Developer's Guide",
	// 	excerpt:
	// 		"Practical strategies for creating inclusive web experiences that work for everyone.",
	// 	date: "January 10, 2025",
	// 	readTime: "12 min read",
	// 	tags: ["Accessibility", "UX", "Web Standards"],
	// 	content: `
	//     <p>Web accessibility isn't just a nice-to-have feature—it's a fundamental requirement for creating inclusive digital experiences.</p>

	//     <h2>Understanding WCAG Guidelines</h2>
	//     <p>The Web Content Accessibility Guidelines (WCAG) provide a comprehensive framework for making web content accessible. Understanding the four principles—Perceivable, Operable, Understandable, and Robust—is crucial.</p>

	//     <h2>Semantic HTML: The Foundation</h2>
	//     <p>Using proper HTML elements for their intended purpose is the first step toward accessibility. Screen readers and other assistive technologies rely on semantic markup to understand content structure.</p>

	//     <h2>ARIA: When HTML Isn't Enough</h2>
	//     <p>ARIA (Accessible Rich Internet Applications) attributes help bridge gaps when semantic HTML falls short, especially in complex interactive components.</p>

	//     <h2>Testing for Accessibility</h2>
	//     <p>Regular testing with screen readers, keyboard navigation, and automated tools like axe-core ensures your applications work for all users.</p>

	//     <p>Remember: accessibility benefits everyone, not just users with disabilities. Clear navigation, good contrast, and logical structure improve the experience for all users.</p>
	//   `,
	// },
	// {
	// 	id: "firebase-nextjs-integration",
	// 	title: "Mastering Firebase Integration with Next.js",
	// 	excerpt:
	// 		"A comprehensive guide to building full-stack applications with Firebase and Next.js.",
	// 	date: "January 5, 2025",
	// 	readTime: "15 min read",
	// 	tags: ["Firebase", "Next.js", "Full-stack", "Authentication"],
	// 	content: `
	//     <p>Firebase and Next.js make a powerful combination for building modern web applications. This guide covers best practices for integration.</p>

	//     <h2>Setting Up Firebase</h2>
	//     <p>Proper Firebase configuration is crucial for security and performance. Always use environment variables for sensitive configuration data.</p>

	//     <h2>Authentication Patterns</h2>
	//     <p>Firebase Auth provides multiple authentication methods. Implementing proper session management and route protection is essential for secure applications.</p>

	//     <h2>Firestore Best Practices</h2>
	//     <p>Understanding Firestore's document-based structure and security rules is key to building scalable applications. Proper data modeling can significantly impact performance.</p>

	//     <h2>Real-time Features</h2>
	//     <p>Firebase's real-time capabilities shine in collaborative applications. Implementing efficient listeners and managing subscriptions prevents memory leaks.</p>

	//     <h2>Deployment Considerations</h2>
	//     <p>Deploying Firebase-powered Next.js applications requires attention to build optimization and environment configuration.</p>

	//     <p>The combination of Firebase's backend services and Next.js's frontend capabilities enables rapid development of production-ready applications.</p>
	//   `,
	// },
];

export default function BlogPage() {
	const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
	const [copied, setCopied] = useState(false);

	const handleShare = async (postId: string) => {
		const url = `${window.location.origin}/blog#${postId}`;
		try {
			await navigator.clipboard.writeText(url);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy URL:", err);
		}
	};

	const handlePostClick = (post: BlogPost) => {
		setSelectedPost(post);
		window.history.pushState({}, "", `/blog#${post.id}`);
	};

	const handleBackToList = () => {
		setSelectedPost(null);
		window.history.pushState({}, "", "/blog");
	};

	return (
		<div
			className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-outfit"
			style={{
				userSelect: selectedPost ? "none" : "auto",
				WebkitUserSelect: selectedPost ? "none" : "auto",
				MozUserSelect: selectedPost ? "none" : "auto",
				// msUserSelect: selectedPost ? "none" : "auto",
			}}
			onContextMenu={selectedPost ? (e) => e.preventDefault() : undefined}
		>
			{/* Header */}
			<div className="fixed top-6 left-6 z-50">
				<Link
					href="/"
					className="flex items-center gap-1 bg-slate-800 text-white px-3 py-2 rounded-md hover:bg-slate-700 transition-colors"
				>
					<ArrowLeft size={16} />
					<span>Back to Portfolio</span>
				</Link>
			</div>

			<div className="pt-20 px-4 sm:px-6 lg:px-8">
				{!selectedPost ? (
					// Blog List View
					<div className="max-w-4xl mx-auto">
						<header className="text-center mb-12">
							<h1 className="text-4xl sm:text-5xl font-bold mb-4">Blog</h1>
							<p className="text-lg text-slate-600 dark:text-slate-400">
								Thoughts on web development, technology, and design
							</p>
						</header>

						<div className="space-y-8">
							{blogPosts.map((post) => (
								<article
									key={post.id}
									className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 hover:shadow-lg transition-all cursor-pointer"
									onClick={() => handlePostClick(post)}
								>
									<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
										<h2 className="text-2xl font-bold hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
											{post.title}
										</h2>
										<div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mt-2 sm:mt-0">
											<span>{post.date}</span>
											<span>{post.readTime}</span>
										</div>
									</div>

									<p className="text-slate-600 dark:text-slate-300 mb-4">
										{post.excerpt}
									</p>

									<div className="flex flex-wrap gap-2">
										{post.tags.map((tag) => (
											<span
												key={tag}
												className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm"
											>
												{tag}
											</span>
										))}
									</div>
								</article>
							))}
						</div>
					</div>
				) : (
					// Individual Post View
					<div className="max-w-4xl mx-auto">
						<div className="flex items-center justify-between mb-8">
							<button
								onClick={handleBackToList}
								className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
							>
								<ArrowLeft size={16} />
								Back to Blog
							</button>

							<button
								onClick={() => handleShare(selectedPost.id)}
								className="flex items-center gap-2 bg-slate-800 dark:bg-slate-700 text-white px-4 py-2 rounded-md hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
							>
								{copied ? <Check size={16} /> : <Share2 size={16} />}
								{copied ? "Copied!" : "Share"}
							</button>
						</div>

						<article className="prose prose-slate dark:prose-invert max-w-none">
							<header className="mb-8">
								<h1 className="text-4xl font-bold mb-4">
									{selectedPost.title}
								</h1>
								<div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 mb-4">
									<span>{selectedPost.date}</span>
									<span>{selectedPost.readTime}</span>
								</div>
								<div className="flex flex-wrap gap-2 mb-6">
									{selectedPost.tags.map((tag) => (
										<span
											key={tag}
											className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm"
										>
											{tag}
										</span>
									))}
								</div>
							</header>

							<div
								className="prose-lg"
								dangerouslySetInnerHTML={{ __html: selectedPost.content }}
							/>
						</article>
					</div>
				)}
			</div>
		</div>
	);
}

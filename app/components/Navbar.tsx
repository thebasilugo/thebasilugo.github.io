"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import HamburgerNav from "./HamburgerNav"
import { Moon, Sun } from "lucide-react"
import { useOnlineStatus } from "@/app/hooks/use-online-status"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [scrolled, setScrolled] = useState(false)
  const isOnline = useOnlineStatus()

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    } else if (prefersDark) {
      setTheme("dark")
      document.documentElement.classList.add("dark")
    }

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
		document.documentElement.classList.toggle("dark", newTheme === "dark");
	};

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
					? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-md"
					: "bg-transparent"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex items-center">
						<Link
							href="/"
							className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
						>
							thebasilugo
						</Link>
						{!isOnline && (
							<span className="ml-2 px-2 py-1 text-xs bg-yellow-600 text-white rounded-md">
								Offline
							</span>
						)}
					</div>
					<div className="hidden md:flex md:items-center md:space-x-6 text-base sm:text-lg">
						<Link
							href="#about"
							className="text-gray-800 dark:text-gray-200 opacity-75 hover:opacity-100 hover:text-gray-900 dark:hover:text-white transition-colors"
						>
							about
						</Link>
						<Link
							href="#experience"
							className="text-gray-800 dark:text-gray-200 opacity-75 hover:opacity-100 hover:text-gray-900 dark:hover:text-white transition-colors"
						>
							experience
						</Link>
						<Link
							href="#skills"
							className="text-gray-800 dark:text-gray-200 opacity-75 hover:opacity-100 hover:text-gray-900 dark:hover:text-white transition-colors"
						>
							skills
						</Link>
						<Link
							href="#projects"
							className="text-gray-800 dark:text-gray-200 opacity-75 hover:opacity-100 hover:text-gray-900 dark:hover:text-white transition-colors"
						>
							projects
						</Link>
						<Link
							href="#contact"
							className="text-gray-800 dark:text-gray-200 opacity-75 hover:opacity-100 hover:text-gray-900 dark:hover:text-white transition-colors"
						>
							contact
						</Link>
						<Link
							href="/resume"
							className="text-gray-800 dark:text-gray-200 opacity-75 hover:opacity-100 hover:text-gray-900 dark:hover:text-white transition-colors"
						>
							resume
						</Link>
						<button
							onClick={toggleTheme}
							className="p-2 rounded-full text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
							aria-label={
								theme === "light"
									? "Switch to dark mode"
									: "Switch to light mode"
							}
						>
							{theme === "light" ? (
								<Moon size={20} aria-hidden="true" />
							) : (
								<Sun size={20} aria-hidden="true" />
							)}
						</button>
					</div>
					<div className="md:hidden flex items-center">
						<button
							onClick={toggleTheme}
							className="mr-4 p-2 rounded-full text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
							aria-label={
								theme === "light"
									? "Switch to dark mode"
									: "Switch to light mode"
							}
						>
							{theme === "light" ? (
								<Moon size={20} aria-hidden="true" />
							) : (
								<Sun size={20} aria-hidden="true" />
							)}
						</button>
						<HamburgerNav isOpen={isOpen} toggleMenu={toggleMenu} />
					</div>
				</div>
			</div>
			{isOpen && (
				<div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
					<div className="px-2 pt-2 pb-3 space-y-1">
						<MobileNavLink href="#about" onClick={toggleMenu}>
							about
						</MobileNavLink>
						<MobileNavLink href="#experience" onClick={toggleMenu}>
							experience
						</MobileNavLink>
						<MobileNavLink href="#skills" onClick={toggleMenu}>
							skills
						</MobileNavLink>
						<MobileNavLink href="#projects" onClick={toggleMenu}>
							projects
						</MobileNavLink>
						<MobileNavLink href="#contact" onClick={toggleMenu}>
							contact
						</MobileNavLink>
						<MobileNavLink href="/resume" onClick={toggleMenu}>
							resume
						</MobileNavLink>
					</div>
				</div>
			)}
		</nav>
	);
}

function MobileNavLink({
	href,
	onClick,
	children,
}: {
	href: string;
	onClick: () => void;
	children: React.ReactNode;
}) {
	return (
		<Link
			href={href}
			onClick={onClick}
			className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
		>
			{children}
		</Link>
	);
}

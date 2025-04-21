"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

const currentYear = new Date().getFullYear()

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="py-8 bg-slate-900 text-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-semibold hover:text-white transition-colors">
              thebasilugo
            </Link>
            <p className="text-sm text-slate-400 mt-1">Frontend Developer</p>
          </div>

          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://github.com/thebasilugo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-slate-800 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/thebasilugo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-slate-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} aria-hidden="true" />
            </a>
            <a
              href="mailto:basilugo2@gmail.com"
              className="p-2 rounded-full hover:bg-slate-800 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} aria-hidden="true" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="border-t border-slate-800 mt-6 pt-6 text-center">
          <p className="text-sm text-slate-400">&copy; {currentYear} Ugochukwu Basil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

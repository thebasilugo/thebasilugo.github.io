"use client"

import type React from "react"
import { useState } from "react"
import { db } from "../firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { CheckCircle, AlertCircle, Loader2, Send } from "lucide-react"
import { GitHubIcon, LinkedInIcon, TwitterIcon, InstagramIcon, GmailIcon } from "./SocialIcons"

export default function CallToAction() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage("Name is required")
      return false
    }
    if (!formData.email.trim()) {
      setErrorMessage("Email is required")
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage("Please enter a valid email address")
      return false
    }
    if (!formData.message.trim()) {
      setErrorMessage("Message is required")
      return false
    }
    if (formData.message.trim().length < 10) {
      setErrorMessage("Message must be at least 10 characters long")
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      setStatus("error")
      return
    }

    setStatus("loading")
    setErrorMessage("")

    try {
      await addDoc(collection(db, "contacts"), {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        timestamp: serverTimestamp(),
        userAgent: navigator.userAgent,
        referrer: document.referrer || "direct",
      })

      setStatus("success")
      setFormData({ name: "", email: "", message: "" })

      setTimeout(() => {
        setStatus("idle")
      }, 5000)
    } catch (error) {
      console.error("Error submitting message:", error)
      setStatus("error")
      setErrorMessage("Failed to send message. Please try again or contact me directly.")
    }
  }

  const closeModal = () => {
    setStatus("idle")
    setErrorMessage("")
  }

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim().length >= 10

  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white rounded-2xl text-center relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 transform rotate-12 scale-150"></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Let's Create Something Amazing Together
        </h2>
        <p className="text-center text-lg sm:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Ready to bring your ideas to life? I'm here to help you build exceptional web experiences. Let's start a
          conversation!
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6 mb-12">
          <div className="relative group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl py-4 px-6 text-center outline-none hover:bg-white/15 focus:bg-white/15 focus:border-white/40 transition-all duration-300 placeholder-gray-400"
              disabled={status === "loading"}
              required
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </div>

          <div className="relative group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl py-4 px-6 text-center outline-none hover:bg-white/15 focus:bg-white/15 focus:border-white/40 transition-all duration-300 placeholder-gray-400"
              disabled={status === "loading"}
              required
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </div>

          <div className="relative group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell me about your project..."
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl py-4 px-6 text-center outline-none hover:bg-white/15 focus:bg-white/15 focus:border-white/40 transition-all duration-300 resize-none placeholder-gray-400"
              rows={4}
              disabled={status === "loading"}
              required
              minLength={10}
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <div className="text-right text-xs text-gray-400 mt-2">{formData.message.length}/10 minimum</div>
          </div>

          <button
            type="submit"
            className={`w-full py-4 px-8 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 ${
              status === "loading"
                ? "bg-gray-600 cursor-not-allowed"
                : status === "success"
                  ? "bg-green-600 hover:bg-green-700 shadow-lg shadow-green-500/25"
                  : isFormValid
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25"
                    : "bg-gray-700 cursor-not-allowed opacity-50"
            }`}
            disabled={status === "loading" || !isFormValid}
          >
            {status === "loading" && <Loader2 size={20} className="animate-spin" />}
            {status === "success" && <CheckCircle size={20} />}
            {status === "idle" && <Send size={20} />}
            {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
          </button>
        </form>

        {/* Status Messages */}
        {status === "success" && (
          <div className="mb-8 p-6 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-xl animate-fade-in">
            <div className="flex items-center justify-center gap-3 text-green-200 mb-2">
              <CheckCircle size={24} />
              <span className="font-semibold text-lg">Message sent successfully!</span>
            </div>
            <p className="text-green-300">Thank you for reaching out. I'll get back to you within 24 hours!</p>
          </div>
        )}

        {status === "error" && (
          <div className="mb-8 p-6 bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-xl animate-fade-in">
            <div className="flex items-center justify-center gap-3 text-red-200 mb-2">
              <AlertCircle size={24} />
              <span className="font-semibold text-lg">Oops! Something went wrong</span>
            </div>
            <p className="text-red-300 mb-4">{errorMessage}</p>
            <button onClick={closeModal} className="text-red-200 hover:text-white underline transition-colors">
              Try again
            </button>
          </div>
        )}

        {/* Social Links */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-gray-300 mb-6">Or connect with me on social media</p>
          <div className="flex justify-center gap-6">
            <SocialLink
              href="mailto:basilugo2@gmail.com"
              icon={<GmailIcon size={24} />}
              label="Email"
              hoverColor="hover:text-red-400"
            />
            <SocialLink
              href="https://www.linkedin.com/in/thebasilugo"
              icon={<LinkedInIcon size={24} />}
              label="LinkedIn"
              hoverColor="hover:text-blue-400"
            />
            <SocialLink
              href="https://github.com/thebasilugo"
              icon={<GitHubIcon size={24} />}
              label="GitHub"
              hoverColor="hover:text-gray-300"
            />
            <SocialLink
              href="https://twitter.com/thebasilugo"
              icon={<TwitterIcon size={24} />}
              label="Twitter"
              hoverColor="hover:text-blue-400"
            />
            <SocialLink
              href="https://www.instagram.com/thebasilugo"
              icon={<InstagramIcon size={24} />}
              label="Instagram"
              hoverColor="hover:text-pink-400"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  label: string
  hoverColor: string
}

function SocialLink({
	href,
	icon: Icon,
	label,
	description,
}: {
	href: string;
	icon: React.ElementType;
	label: string;
	description: string;
}) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="flex items-center group hover:bg-gray-800 p-3 rounded-lg transition-all"
			aria-label={`${description}: ${label}`}
		>
			<div className="bg-gray-800 group-hover:bg-gray-700 p-3 rounded-full mr-4">
				<Icon size={20} className="text-blue-400" aria-hidden="true" />
			</div>
			<div>
				<p className="font-medium group-hover:text-blue-400 transition-colors">
					{label}
				</p>
				<p className="text-sm text-gray-400">{description}</p>
			</div>
		</a>
	);
}

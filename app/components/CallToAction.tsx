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
                className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors cursor-pointer focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={loading || !name || !email || !message}
                aria-busy={loading}
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="mr-2 animate-spin" aria-hidden="true" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" aria-hidden="true" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>*/}
				</div>
			</div>

			{hasSubmitted && (
				<div
					className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
					role="dialog"
					aria-modal="true"
					aria-labelledby="feedback-title"
				>
					<div className="bg-gray-800 text-white rounded-lg p-6 w-full max-w-md">
						<h3
							id="feedback-title"
							className={`text-xl font-semibold mb-4 ${
								success ? "text-green-500" : "text-red-500"
							}`}
						>
							{success ? "Message Sent!" : "Message Failed"}
						</h3>
						<p className="mb-4">
							{errorMessage ||
								(success
									? "Your message has been successfully recorded. I will get back to you soon!"
									: "An error occurred while sending your message. Please try again.")}
						</p>
						<button
							onClick={closeModal}
							className="w-full border rounded py-2 px-4 bg-gray-700 hover:bg-gray-600 transition-colors"
						>
							Close
						</button>
					</div>
				</div>
			)}
		</section>
	);
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

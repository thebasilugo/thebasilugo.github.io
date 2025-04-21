"use client";

import type React from "react";
import { useState, useEffect } from "react";
// import { db, isFirebaseConfigured } from "@/app/lib/firebase-config"
import { collection, addDoc } from "firebase/firestore";
import {
	Mail,
	Linkedin,
	Github,
	Twitter,
	Instagram,
	Send,
	Loader2,
} from "lucide-react";
import { useOnlineStatus } from "@/app/hooks/use-online-status";
import {
	queueContactForm,
	getQueuedContactForms,
	clearQueuedContactForms,
} from "@/app/lib/offline-utils";

export default function CallToAction() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);
	const [hasSubmitted, setHasSubmitted] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const isOnline = useOnlineStatus();

	// Process queued forms when coming back online
	// useEffect(() => {
	//   if (isOnline && isFirebaseConfigured()) {
	//     const processQueue = async () => {
	//       const queuedForms = getQueuedContactForms()
	//       if (queuedForms.length === 0) return

	//       for (const form of queuedForms) {
	//         try {
	//           await addDoc(collection(db, "contacts"), {
	//             ...form,
	//             queuedAt: form.timestamp,
	//             submittedAt: new Date(),
	//           })
	//         } catch (error) {
	//           console.error("Error processing queued form:", error)
	//         }
	//       }

	//       clearQueuedContactForms()
	//     }

	//     processQueue()
	//   }
	// }, [isOnline])

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setHasSubmitted(false);
		setErrorMessage("");

		const formData = {
			name,
			email,
			message,
			timestamp: new Date(),
		};

		try {
			if (!isOnline) {
				// Store form data for later submission
				queueContactForm(formData);
				setSuccess(true);
				setErrorMessage(
					"You're offline. Your message will be sent when you're back online."
				);
				// } else if (isFirebaseConfigured()) {
				//   // Submit directly to Firebase
				//   await addDoc(collection(db, "contacts"), formData)
				//   setSuccess(true)
			} else {
				// Firebase not configured, simulate success
				console.log("Firebase not configured. Form data:", formData);
				setSuccess(true);
				setErrorMessage(
					"Demo mode: Firebase not configured. Your message would be sent in production."
				);
			}

			// Clear form fields on success
			setName("");
			setEmail("");
			setMessage("");
		} catch (error) {
			console.error("Error submitting message:", error);
			setSuccess(false);
			setErrorMessage(
				"An error occurred while sending your message. Please try again."
			);
		} finally {
			setLoading(false);
			setHasSubmitted(true);
		}
	};

	const closeModal = () => {
		setSuccess(false);
		setHasSubmitted(false);
		setErrorMessage("");
	};

	return (
		<section
			id="contact"
			className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white"
		>
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
					Let's Connect
				</h2>

				<div className="grid md:grid-cols-1 gap-2">
					{/* Contact Info */}
					<div>
						<h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
						<p className="text-gray-300 mb-8">
							I'm always open to discussing new projects, creative ideas, or
							opportunities to be part of your vision. Feel free to reach out
							through any of the following channels:
						</p>

						<div className="space-y-4">
							<SocialLink
								href="mailto:basilugo2@gmail.com"
								icon={Mail}
								label="basilugo2@gmail.com"
								description="Email me directly"
							/>
							<SocialLink
								href="https://www.linkedin.com/in/thebasilugo"
								icon={Linkedin}
								label="linkedin.com/in/thebasilugo"
								description="Connect on LinkedIn"
							/>
							<SocialLink
								href="https://github.com/thebasilugo"
								icon={Github}
								label="github.com/thebasilugo"
								description="Check out my code"
							/>
							<SocialLink
								href="https://twitter.com/thebasilugo"
								icon={Twitter}
								label="twitter.com/thebasilugo"
								description="Follow me on Twitter"
							/>
							<SocialLink
								href="https://www.instagram.com/thebasilugo"
								icon={Instagram}
								label="instagram.com/thebasilugo"
								description="Follow me on Instagram"
							/>
						</div>
					</div>

					{/* Contact Form */}
					{/* <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            {!isOnline && (
              <div className="mb-4 p-3 bg-yellow-800 bg-opacity-50 rounded-md text-yellow-200 text-sm">
                <p>You're currently offline. Your message will be saved and sent when you're back online.</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full bg-gray-700 border border-gray-600 rounded py-2 px-3 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full bg-gray-700 border border-gray-600 rounded py-2 px-3 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message"
                  className="w-full bg-gray-700 border border-gray-600 rounded py-2 px-3 outline-none focus:ring-2 focus:ring-blue-500 transition-all min-h-[120px]"
                  rows={4}
                  required
                  aria-required="true"
                ></textarea>
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

import type React from "react";
import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import OnlineStatusNotification from "@/app/components/OnlineStatusNotification";

// Load Outfit font
const outfit = Outfit({
	subsets: ["latin"],
	variable: "--font-outfit",
	weight: ["400", "500", "600", "700"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Basil Ugochukwu | Frontend Developer",
	description:
		"Portfolio of Basil Ugochukwu, a Frontend Developer specializing in React, Next.js, and TypeScript.",
	generator: "Next.js",
	authors: [{ name: "Basil Ugochukwu", url: "https://github.com/thebasilugo" }],
	keywords: [
		"Frontend Developer",
		"React",
		"Next.js",
		"TypeScript",
		"Portfolio",
		"Web Development",
	],
};

export const viewport: Viewport = {
	themeColor: "#000000",
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link
					href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap"
					rel="stylesheet"
				/>
				<link rel="manifest" href="/manifest.json" />
				<link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
			</head>
			<body className={`${outfit.variable} font-outfit antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					{children}
					<OnlineStatusNotification />
				</ThemeProvider>
			</body>
		</html>
	);
}

import "./globals.css";

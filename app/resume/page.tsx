"use client"

import Resume from "@/app/components/Resume"
import Link from "next/link"
import { ArrowLeft, Download, Printer } from "lucide-react"
import { useState } from "react"

export default function ResumePage() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)

    try {
      // Add print-specific styles
      const printStyles = `
        @media print {
          body * { visibility: hidden; }
          #resume, #resume * { visibility: visible; }
          #resume { position: absolute; left: 0; top: 0; width: 100%; }
          .fixed { display: none !important; }
          @page { margin: 0.5in; size: A4; }
        }
      `

      const styleSheet = document.createElement("style")
      styleSheet.textContent = printStyles
      document.head.appendChild(styleSheet)

      // Trigger print dialog
      window.print()

      // Clean up
      setTimeout(() => {
        document.head.removeChild(styleSheet)
        setIsDownloading(false)
      }, 1000)
    } catch (error) {
      console.error("Download failed:", error)
      setIsDownloading(false)
    }
  }

  return (
    <div className="font-outfit bg-white min-h-screen">
      <div className="fixed top-6 left-6 z-50 print:hidden">
        <Link
          href="/"
          className="flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-md hover:bg-slate-700 transition-colors shadow-lg"
        >
          <ArrowLeft size={16} />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      <div className="fixed top-6 right-6 z-50 flex gap-2 print:hidden">
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-md hover:bg-slate-700 transition-colors shadow-lg disabled:opacity-50"
        >
          {isDownloading ? <Printer size={16} className="animate-pulse" /> : <Download size={16} />}
          <span>{isDownloading ? "Preparing..." : "Download PDF"}</span>
        </button>
      </div>

      <Resume />
    </div>
  )
}

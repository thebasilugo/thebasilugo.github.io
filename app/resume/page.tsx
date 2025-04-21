"use client"

import Resume from "@/app/components/Resume"
import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="font-outfit bg-white min-h-screen">
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="flex items-center gap-1 bg-slate-800 text-white px-3 py-2 rounded-md hover:bg-slate-700 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-1 bg-slate-800 text-white px-3 py-2 rounded-md hover:bg-slate-700 transition-colors"
        >
          <Download size={16} />
          <span>Download PDF</span>
        </button>
      </div>

      <Resume />
    </div>
  )
}

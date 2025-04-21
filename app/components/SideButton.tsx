"use client"

import type React from "react"

interface SideButtonProps {
  onClick: () => void
  children: React.ReactNode
}

const SideButton: React.FC<SideButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="fixed right-4 bottom-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 shadow-lg"
    >
      {children}
    </button>
  )
}

export default SideButton

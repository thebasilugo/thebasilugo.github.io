"use client"

import type React from "react"
import { Menu, X } from "lucide-react"

interface HamburgerNavProps {
  isOpen: boolean
  toggleMenu: () => void
}

const HamburgerNav: React.FC<HamburgerNavProps> = ({ isOpen, toggleMenu }) => {
  return (
    <button
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className="text-gray-800 dark:text-gray-200 p-2 rounded-md focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
      onClick={toggleMenu}
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  )
}

export default HamburgerNav

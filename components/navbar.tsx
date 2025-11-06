"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Bot, Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { openAppWithToken } from "@/lib/app-links"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const CTA_LABEL = "ACCESO"
  const CTA_TOKEN = "navbar-acceso"

  const handleContactClick = () => {
    openAppWithToken(CTA_TOKEN)
  }

  const handleServicesClick = () => {
    document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })
    if (isMenuOpen) setIsMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="flex items-center justify-between px-4 md:px-6 py-4 backdrop-blur-sm border-b border-white/10 relative z-50"
    >
      <Link href="/" className="flex items-center space-x-2">
        <Bot className="w-8 h-8 text-green-500" />
        <span className="text-white font-medium text-xl">SmarterBot Chile</span>
      </Link>

      <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
        <NavLink href="#servicios">Servicios</NavLink>
        <NavLink href="#casos">Casos reales</NavLink>
        <NavLink href="#contacto">Contacto</NavLink>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <Button
          className="bg-green-600 hover:bg-green-700 text-white"
          onClick={handleContactClick}
          aria-label={CTA_LABEL}
        >
          {CTA_LABEL}
        </Button>
      </div>

      <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-white/10 md:hidden"
        >
          <div className="flex flex-col space-y-4 px-6 py-6">
            <NavLink href="#servicios" mobile onClick={() => setIsMenuOpen(false)}>
              Servicios
            </NavLink>
            <NavLink href="#casos" mobile onClick={() => setIsMenuOpen(false)}>
              Casos reales
            </NavLink>
            <NavLink href="#contacto" mobile onClick={() => setIsMenuOpen(false)}>
              Contacto
            </NavLink>
            <div className="pt-4 border-t border-white/10">
              <Button
                className="bg-green-600 hover:bg-green-700 text-white w-full"
                onClick={handleContactClick}
                aria-label={CTA_LABEL}
              >
                {CTA_LABEL}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

function NavLink({
  href,
  children,
  mobile = false,
  onClick,
}: {
  href: string
  children: React.ReactNode
  mobile?: boolean
  onClick?: () => void
}) {
  return (
    <Link
      href={href}
      className={`text-gray-300 hover:text-white transition-colors relative group ${mobile ? "text-left" : ""}`}
      onClick={onClick}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full" />
    </Link>
  )
}

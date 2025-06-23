"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getEllevenLogo } from "@/lib/brand/elleven"


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/empreendimentos", label: "Empreendimentos" },
    { href: "/#servicos", label: "Projetos" },
    { href: "/#sobre", label: "Sobre" },
    { href: "/invista", label: "Invista" },
    { href: "/#contato", label: "Contato" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src={isScrolled ? getEllevenLogo('header-dark') : getEllevenLogo('header-light')}
              alt="Elleven Engenharia"
              className="h-11 w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition-colors duration-200 group text-lg font-medium ${
                  isScrolled 
                    ? "text-foreground/80 hover:text-foreground" 
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-secondary transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              size="sm"
              className={`text-base px-6 py-3 shadow-none transition-all duration-300 ${
                isScrolled 
                  ? "text-white" 
                  : "bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white"
              }`}
              style={isScrolled ? { backgroundColor: "#1A2D54" } : {}}
              onMouseEnter={(e) => {
                if (isScrolled) e.currentTarget.style.backgroundColor = "#152444"
              }}
              onMouseLeave={(e) => {
                if (isScrolled) e.currentTarget.style.backgroundColor = "#1A2D54"
              }}
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden transition-colors duration-200 ${
              isScrolled 
                ? "text-foreground/80 hover:text-foreground hover:bg-muted" 
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border border-border/50 mt-4 rounded-lg"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground transition-colors duration-200 py-3 px-2 rounded-md hover:bg-muted text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4 mt-4 border-t border-border/50">
                <Button 
                  size="sm"
                  className="text-white text-base px-6 py-3 flex-1 shadow-none transition-all duration-200"
                  style={{ backgroundColor: "#1A2D54" }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#152444"}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#1A2D54"}
                >
                  Fale Conosco
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { title: "Products", href: "/products" },
  { title: "About", href: "/about" },
  { title: "Help", href: "/help" },
  { title: "Contact", href: "/contact" },
  { title: "Vendors Dashboard", href: "/vendors" },
]

function MenuLink({ title, href, className = "" }: { title: string; href: string; className?: string }) {
  return (
    <Link
      href={href}
      className={`text-slate-700 hover:text-blue-600 font-medium transition-colors ${className}`}
    >
      {title}
    </Link>
  )
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
            <span className="text-white font-bold text-xl">P</span>
          </div>
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
            Pranivi
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <MenuLink key={link.title} {...link} />
          ))}
        </nav>

        {/* Desktop Login */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button variant="outline" className="font-medium border-blue-500 text-blue-500 hover:bg-blue-50">
              Login
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4 flex flex-col gap-2">
          {navLinks.map(link => (
            <MenuLink
              key={link.title}
              {...link}
              className="py-2 px-4 rounded hover:bg-slate-50"
            />
          ))}
          <Link href="/login" className="mt-2">
            <Button className="w-full">Login</Button>
          </Link>
        </div>
      )}
    </header>
  )
}

"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

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
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
            <span className="text-white font-bold text-xl">P</span>
          </div>
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
            Pranivi
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/products" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
            Products
          </Link>
          <Link href="/about" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
            About
          </Link>
          <Link href="/help" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
            Help
          </Link>
          <Link href="/contact" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
            Contact
          </Link>
          <Link href="/vendors" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
            Vendors Dashboard
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button variant="outline" className="font-medium border-blue-500 text-blue-500 hover:bg-blue-50">
              Login
            </Button>
          </Link>
        </div>

        <button className="md:hidden text-slate-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4 flex flex-col gap-2">
          <Link
            href="/products"
            className="text-slate-700 hover:text-blue-600 font-medium py-2 px-4 rounded hover:bg-slate-50"
          >
            Products
          </Link>
          <Link
            href="/about"
            className="text-slate-700 hover:text-blue-600 font-medium py-2 px-4 rounded hover:bg-slate-50"
          >
            About
          </Link>
          <Link
            href="/help"
            className="text-slate-700 hover:text-blue-600 font-medium py-2 px-4 rounded hover:bg-slate-50"
          >
            Help
          </Link>
          <Link
            href="/contact"
            className="text-slate-700 hover:text-blue-600 font-medium py-2 px-4 rounded hover:bg-slate-50"
          >
            Contact
          </Link>
          <Link
            href="/vendors"
            className="text-slate-700 hover:text-blue-600 font-medium py-2 px-4 rounded hover:bg-slate-50"
          >
            Vendors Dashboard
          </Link>
          <Link href="/login" className="mt-2">
            <Button className="w-full">Login</Button>
          </Link>
        </div>
      )}
    </header>
  )
}


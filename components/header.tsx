'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-border shadow-sm">
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground py-2 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <a href="tel:+918080898048" className="flex items-center gap-2 hover:opacity-80 transition">
              <Phone className="w-4 h-4" />
              <span>+91 8080898048</span>
            </a>
            <a href="tel:+918108312228" className="flex items-center gap-2 hover:opacity-80 transition">
              <Phone className="w-4 h-4" />
              <span>+91 8108312228</span>
            </a>
          </div>
          <a href="mailto:paradoxcivilservices@gmail.com" className="flex items-center gap-2 hover:opacity-80 transition">
            <Mail className="w-4 h-4" />
            <span>paradoxcivilservices@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/cp.png"
            alt="Paradox Construction & Engineering Logo"
            width={200}
            height={60}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-foreground hover:text-secondary transition font-medium">
            Home
          </Link>
          <Link href="/about" className="text-foreground hover:text-secondary transition font-medium">
            About
          </Link>
          <Link href="/services" className="text-foreground hover:text-secondary transition font-medium">
            Services
          </Link>
          <Link href="/projects" className="text-foreground hover:text-secondary transition font-medium">
            Projects
          </Link>
          <Link href="/contact" className="text-foreground hover:text-secondary transition font-medium">
            Contact
          </Link>
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden md:flex gap-2">
          <Button asChild className="bg-secondary hover:bg-secondary/90">
            <a href="tel:+918080898048">Call Now</a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-muted/50">
          <div className="px-4 py-4 space-y-2">
            <Link href="/" className="block px-3 py-2 rounded-lg hover:bg-muted text-foreground transition">
              Home
            </Link>
            <Link href="/about" className="block px-3 py-2 rounded-lg hover:bg-muted text-foreground transition">
              About
            </Link>
            <Link href="/services" className="block px-3 py-2 rounded-lg hover:bg-muted text-foreground transition">
              Services
            </Link>
            <Link href="/projects" className="block px-3 py-2 rounded-lg hover:bg-muted text-foreground transition">
              Projects
            </Link>
            <Link href="/contact" className="block px-3 py-2 rounded-lg hover:bg-muted text-foreground transition">
              Contact
            </Link>
            <div className="pt-2 space-y-2">
              <Button asChild className="w-full bg-secondary hover:bg-secondary/90">
                <a href="tel:+918080898048">Call Now</a>
              </Button>
              <a href="mailto:paradoxcivilservices@gmail.com" className="block text-center px-3 py-2 text-sm text-secondary font-medium">
                Email Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

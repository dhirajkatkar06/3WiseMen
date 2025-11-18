'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, MessageCircle } from 'lucide-react'

export default function Header({ isScrolled }: { isScrolled: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Strategy', href: '#three-pillars' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#case-studies' },
    // { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#cta' },
  ]

  const whatsappNumber = '9769708255'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%203wise%20Men%2C%20I%27d%20like%20to%20book%20a%20strategy%20call.`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-effect-strong shadow-lg shadow-purple-500/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-[#6633CC] to-[#00D4FF] rounded-lg flex items-center justify-center neon-glow">
            <span className="text-white font-bold text-lg">3W</span>
          </div>
          <span className="hidden sm:inline font-bold text-lg text-foreground">
            3Wise Men
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-foreground/80 hover:text-accent transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#6633CC] to-[#00D4FF] text-white rounded-full font-medium text-sm hover:shadow-md hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 neon-glow"
          >
            <MessageCircle className="w-4 h-4" />
            Book Call
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-effect-strong border-t border-border shadow-lg shadow-purple-500/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-foreground/80 hover:text-accent transition-colors text-sm font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border/50">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#6633CC] to-[#00D4FF] text-white rounded-full font-medium text-sm hover:shadow-md transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MessageCircle className="w-4 h-4" />
                Book Call
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

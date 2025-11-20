'use client'

import { useEffect, useRef } from 'react'
import { ArrowDown, MessageCircle } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  const whatsappNumber = '9769708255'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%203wise%20Men%2C%20I%27d%20like%20to%20book%20a%20strategy%20call.`

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const xPercent = (x / rect.width - 0.5) * 2
      const yPercent = (y / rect.height - 0.5) * 2

      const bgElement = container.querySelector('.hero-bg')
      if (bgElement) {
        ;(bgElement as HTMLElement).style.transform = `translate(${xPercent * 5}px, ${yPercent * 5}px)`
      }
    }

    container.addEventListener('mousemove', handleMouseMove)
    return () => container.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div
        className="hero-bg absolute inset-0 bg-gradient-to-br from-[#1a0f3e] via-[#0f051e] to-[#1a0f3e] transition-transform duration-300"
        style={{ willChange: 'transform' }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
          Upliftr: Navigating the Digital Cosmos
        </h1>

        <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed max-w-2xl mx-auto text-balance">
          Expert strategists uncovering hidden opportunities in the complex digital landscape. We transform data into growth, complexity into clarity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#6633CC] to-[#00D4FF] text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 neon-glow"
          >
            <MessageCircle className="w-5 h-5" />
            Book a Call via WhatsApp
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-accent" />
        </div>
      </div>
    </section>
  )
}

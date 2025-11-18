'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/header'
import ParticleBackground from '@/components/particle-background'
import Hero from '@/components/hero'
import ThreePillars from '@/components/three-pillars'
import Services from '@/components/services'
import CaseStudies from '@/components/case-studies'
import WhyChoose from '@/components/why-choose'
import BlogTeaser from '@/components/blog-teaser'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="w-full relative">
      <ParticleBackground />
      <Header isScrolled={isScrolled} />
      <Hero />
      <ThreePillars />
      <Services />
      <CaseStudies />
      <WhyChoose />
      {/* <BlogTeaser /> */}
      <CTA />
      <Footer />
    </main>
  )
}

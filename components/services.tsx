'use client'

import { useInView } from 'react-intersection-observer'
import CalligraphyIcon from './calligraphy-icon'

const services = [
  {
    title: 'Performance Marketing',
    description: 'Data-driven campaigns that maximize ROI. We optimize every touchpoint to convert prospects into loyal customers with measurable results.',
    icon: '📊',
  },
  {
    title: 'Social Media Management',
    description: 'Strategic social presence that builds community and drives engagement. We create compelling content that resonates with your audience and accelerates brand growth.',
    icon: '💬',
  },
  {
    title: 'Production Management',
    description: 'End-to-end content creation and media production. From concept to final delivery, we produce high-quality assets that amplify your brand message.',
    icon: '🎬',
  },
  {
    title: 'Campaign Analytics',
    description: 'Real-time performance tracking and transparent reporting. We provide actionable insights so you always know what\'s driving your business growth.',
    icon: '📈',
  },
  {
    title: 'Strategy & Consulting',
    description: 'Expert guidance on market positioning and competitive advantage. We analyze your landscape to build strategies that deliver sustained growth.',
    icon: '🧭',
  },
  {
    title: 'Content Creation',
    description: 'Compelling storytelling across all formats. From video to copy to design, we craft content that positions you as an industry authority.',
    icon: '✍️',
  },
]

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="services" className="relative w-full py-20 md:py-32 px-4 md:px-6 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="text-primary">
              <CalligraphyIcon />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Core Services
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            Comprehensive digital marketing solutions designed for ambitious brands.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`p-8 bg-card rounded-xl border border-border hover:border-primary/50 hover:bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer hover:scale-105 ${
                inView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: inView ? `${index * 50}ms` : 'none',
                animationFillMode: 'both',
              }}
            >
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

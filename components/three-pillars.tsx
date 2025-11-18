'use client'

import { useInView } from 'react-intersection-observer'

const pillars = [
  {
    title: 'Strategy',
    subtitle: 'Clarity & Vision',
    description: 'We dive deep into your market, competitors, and audience to craft a crystal-clear roadmap that aligns with your business goals. No guesswork—just strategic brilliance.',
    icon: '🎯',
  },
  {
    title: 'Execution',
    subtitle: 'Precision & Impact',
    description: 'Our team executes with military precision. Every campaign, every creative asset, every interaction is optimized for maximum impact and measurable results.',
    icon: '⚡',
  },
  {
    title: 'Analysis',
    subtitle: 'Insights & Growth',
    description: 'We obsess over the data. Continuous monitoring, refinement, and optimization ensure your campaigns evolve and grow with market dynamics. Your success is our metric.',
    icon: '📊',
  },
]

export default function ThreePillars() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="three-pillars" className="relative w-full py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            The Three Pillars of Strategic Excellence
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            Our proven methodology combines strategic insight, flawless execution, and continuous optimization.
          </p>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-3 gap-8 md:gap-6"
        >
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`group relative p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 transform hover:scale-105 hover:shadow-lg ${
                inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
              style={{
                animationDelay: inView ? `${index * 100}ms` : 'none',
                animationFillMode: 'both',
              }}
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{pillar.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {pillar.title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm font-semibold text-primary mb-4">
                {pillar.subtitle}
              </p>

              {/* Description */}
              <p className="text-foreground/70 leading-relaxed">
                {pillar.description}
              </p>

              {/* Connecting arrow for desktop */}
              {index < 2 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-2xl text-primary/30 group-hover:text-primary/60 transition-colors">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

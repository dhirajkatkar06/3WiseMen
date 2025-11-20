'use client'

import { useInView } from 'react-intersection-observer'

const benefits = [
  {
    title: 'Data-Driven Decisions',
    description: 'Every strategy backed by comprehensive market research and real-time analytics.',
    icon: '📡',
  },
  {
    title: 'Proven Track Record',
    description: 'Years of success transforming brands and generating measurable business growth.',
    icon: '🏆',
  },
  {
    title: 'Expert Team',
    description: 'Industry veterans who combine creative brilliance with strategic thinking.',
    icon: '👥',
  },
  {
    title: 'Transparent Reporting',
    description: 'Full visibility into campaigns, metrics, and ROI—no black boxes, no surprises.',
    icon: '📋',
  },
  {
    title: 'Customized Solutions',
    description: 'We don\'t believe in one-size-fits-all. Every strategy is tailored to your unique goals.',
    icon: '⚙️',
  },
  {
    title: 'Long-Term Partnership',
    description: 'We invest in your success as if it\'s our own. Your growth is our mission.',
    icon: '🤝',
  },
]

export default function WhyChoose() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      id="why-choose"
      className="relative w-full py-20 md:py-32 px-4 md:px-6 bg-primary/5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Why Choose Upliftr
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            We're not just another agency. Here's what sets us apart.
          </p>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`p-8 bg-card rounded-xl border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300 group ${
                inView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: inView ? `${index * 50}ms` : 'none',
                animationFillMode: 'both',
              }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial section */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border text-center">
            <p className="text-xl md:text-2xl text-foreground mb-6 font-medium text-balance">
              "Upliftr transformed our marketing approach. Within 6 months, we saw a 3x increase in qualified leads and a complete brand repositioning."
            </p>
            <div>
              <p className="font-bold text-foreground">Pawan</p>
              <p className="text-sm text-foreground/60">CEO, Siya's Cafe</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

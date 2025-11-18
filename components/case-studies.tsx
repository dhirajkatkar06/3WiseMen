'use client'

import { useInView } from 'react-intersection-observer'
import CountUp from './count-up'

const caseStudies = [
  {
    client: 'TechScale Inc',
    industry: 'B2B SaaS',
    challenge: 'Low brand awareness and inconsistent lead generation',
    solution: 'Developed integrated digital strategy with content marketing and targeted advertising',
    results: [
      { metric: '340', label: 'ROI Increase' },
      { metric: '2.5x', label: 'Lead Growth' },
      { metric: '$2.1M', label: 'Revenue Generated' },
    ],
  },
  {
    client: 'Retail Revolution',
    industry: 'E-Commerce',
    challenge: 'High cart abandonment and customer acquisition costs',
    solution: 'Optimized customer journey, implemented retargeting, refined messaging',
    results: [
      { metric: '42', label: 'Cart Recovery %' },
      { metric: '58', label: 'CAC Reduction' },
      { metric: '185', label: 'AOV Increase' },
    ],
  },
  {
    client: 'Wellness Collective',
    industry: 'Health & Wellness',
    challenge: 'Seasonal demand fluctuation and brand positioning',
    solution: 'Built year-round engagement strategy with community building and partnerships',
    results: [
      { metric: '420', label: 'YoY Growth' },
      { metric: '89', label: 'NPS Score' },
      { metric: '3.2x', label: 'Customer LTV' },
    ],
  },
]

export default function CaseStudies() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="case-studies" className="relative w-full py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Case Studies & Proven Results
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            See how we've helped leading brands achieve extraordinary growth.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.client}
              className={`p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 group ${
                inView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: inView ? `${index * 100}ms` : 'none',
                animationFillMode: 'both',
              }}
            >
              {/* Client Header */}
              <div className="mb-6 pb-6 border-b border-border/50">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {study.client}
                </h3>
                <p className="text-sm font-semibold text-primary">
                  {study.industry}
                </p>
              </div>

              {/* Challenge & Solution */}
              <div className="mb-8 space-y-4">
                <div>
                  <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-2">
                    Challenge
                  </p>
                  <p className="text-foreground/70 text-sm">
                    {study.challenge}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-2">
                    Solution
                  </p>
                  <p className="text-foreground/70 text-sm">
                    {study.solution}
                  </p>
                </div>
              </div>

              {/* Results */}
              <div className="pt-6 border-t border-border/50">
                <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-4">
                  Results
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {study.results.map((result) => (
                    <div key={result.label} className="text-center">
                      <p className="text-2xl font-bold text-primary mb-1">
                        {inView ? (
                          <CountUp
                            end={parseFloat(result.metric.replace(/[^0-9.]/g, ''))}
                            suffix={result.metric.replace(/[0-9.]/g, '')}
                          />
                          // <CountUp
                          //   end={parseInt(result.metric)}
                          //   suffix={result.metric.replace(/[0-9]/g, '')}
                          // />
                        ) : (
                          result.metric
                        )}
                      </p>
                      <p className="text-xs text-foreground/60">
                        {result.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

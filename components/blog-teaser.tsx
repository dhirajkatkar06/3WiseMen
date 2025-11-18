'use client'

import { useInView } from 'react-intersection-observer'

const articles = [
  {
    title: 'The ROI Multiplier: How Strategic Positioning Drives 300% Revenue Growth',
    date: 'Nov 15, 2024',
    category: 'Strategy',
    excerpt: 'Discover the framework we use to identify hidden opportunities in your market and position your brand for exponential growth.',
  },
  {
    title: 'From Chaos to Clarity: Building a Marketing Stack That Actually Works',
    date: 'Nov 8, 2024',
    category: 'Operations',
    excerpt: 'Tools mean nothing without strategy. Learn how to architect a marketing ecosystem that scales with your business.',
  },
  {
    title: 'The Psychology of Conversion: How to Turn Browsers Into Buyers',
    date: 'Oct 31, 2024',
    category: 'Psychology',
    excerpt: 'Understanding buyer behavior is the key to crafting campaigns that convert. We break down the science behind every click.',
  },
]

export default function BlogTeaser() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="blog" className="relative w-full py-20 md:py-32 px-4 md:px-6">
      {/* <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Blog & Industry Insights
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            Stay ahead of the curve with insights from our team of marketing experts.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <article
              key={article.title}
              className={`group cursor-pointer ${
                inView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: inView ? `${index * 100}ms` : 'none',
                animationFillMode: 'both',
              }}
            >
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                  <span className="text-xs text-foreground/50">
                    {article.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight mb-3">
                  {article.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
              <div className="pt-4 border-t border-border group-hover:border-primary/30 transition-colors">
                <p className="text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  Read Article →
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-3 border-2 border-foreground/20 text-foreground rounded-full font-semibold hover:border-primary hover:text-primary transition-colors duration-300">
            View All Articles
          </button>
        </div>
      </div> */}
    </section>
  )
}

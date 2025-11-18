export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative w-full bg-foreground text-primary-foreground py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold">3W</span>
              </div>
              <span className="font-bold">3Wise Men</span>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Strategic digital marketing for ambitious brands.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Strategy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Campaign Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Analytics
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {/* <li>
                <a href="#blog" className="hover:text-primary-foreground transition-colors">
                  Blog
                </a>
              </li> */}
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="tel:+1234567890" className="hover:text-primary-foreground transition-colors">
                  +1 (234) 567-8900
                </a>
              </li>
              <li>
                <a href="mailto:hello@3wisemen.com" className="hover:text-primary-foreground transition-colors">
                  hello@3wisemen.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10" />

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-primary-foreground/70">
          <p>© {currentYear} 3Wise Men. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Schema markup for organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: '3Wise Men',
            url: 'https://3wisemen.com',
            description: 'Strategic digital marketing agency for enterprise clients',
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Customer Service',
              telephone: '+1-234-567-8900',
              email: 'hello@3wisemen.com',
            },
            areaServed: 'US',
            sameAs: [
              'https://linkedin.com/company/3wisemen',
              'https://twitter.com/3wisemen',
            ],
          }),
        }}
      />
    </footer>
  )
}

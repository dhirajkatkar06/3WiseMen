'use client'

import { useState } from 'react'
import { MessageCircle } from 'lucide-react'

export default function CTA() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    message: '',
    service: 'performance-marketing',
  })

  const [submitted, setSubmitted] = useState(false)

  const whatsappNumber = '9769708255'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%203wise%20Men%2C%20I%27d%20like%20to%20book%20a%20strategy%20call.`

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   console.log(formData)
  //   setSubmitted(true)
  //   setTimeout(() => {
  //     setSubmitted(false)
  //     setFormData({
  //       firstName: '',
  //       email: '',
  //       phone: '',
  //       message: '',
  //       service: 'performance-marketing',
  //     })
  //   }, 2000)
  // }
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/send-mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          firstName: "",
          email: "",
          phone: "",
          message: "",
          service: "performance-marketing",
        });
      }, 2000);
    } else {
      alert("Failed to send email. Try again.");
    }
  } catch (error) {
    console.log(error);
  }
};

  return (
    <section id="cta" className="relative w-full py-20 md:py-32 px-4 md:px-6 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-foreground/80 max-w-xl mx-auto text-balance">
            Let's discuss your growth goals and craft a strategy that delivers results.
          </p>
        </div>

        <div className="glass-effect rounded-2xl border border-border p-8 md:p-12">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 bg-card/50 border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 bg-card/50 border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="px-4 py-3 bg-card/50 border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="px-4 py-3 bg-card/50 border border-border rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                >
                  <option value="performance-marketing">Performance Marketing</option>
                  <option value="social-media">Social Media Management</option>
                  <option value="production">Production Management</option>
                  <option value="strategy">Strategy & Consulting</option>
                  <option value="content">Content Creation</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-card/50 border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
              />

              <button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-[#6633CC] to-[#00D4FF] text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Get Your Strategy Call
              </button>
            </form>
          ) : (
            <div className="text-center py-8">
              <p className="text-2xl font-bold text-accent mb-2">
                ✓ Thanks for reaching out!
              </p>
              <p className="text-foreground/80">
                We'll contact you shortly to discuss your growth strategy.
              </p>
            </div>
          )}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <div className="text-center">
            <p className="text-foreground/80 mb-3">
              Prefer a quick chat?
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#6633CC] to-[#00D4FF] text-white rounded-full font-semibold text-base hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us Now
            </a>
          </div>
          <div className="hidden sm:block w-px h-12 bg-border" />
          <div className="text-center">
            <p className="text-foreground/80 mb-3">
              Or give us a call
            </p>
            <a
              href="tel:+919769708255"
              className="inline-flex items-center gap-1 text-xl font-bold text-accent hover:text-accent/80 transition-colors"
            >
              +91 97697 08255
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Upliftr | Strategic Digital Marketing Agency',
  description: 'Unlock exponential business growth through data-driven strategy and flawless execution. Industry-leading digital marketing agency for enterprise clients.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Upliftr | Strategic Digital Marketing Agency',
    description: 'Transform your business with strategic digital marketing. Data-driven campaigns, proven results.',
    type: 'website',
    url: 'https://3wisemen.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Upliftr | Strategic Digital Marketing Agency',
    description: 'Unlock exponential business growth through data-driven strategy.',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f8f6' },
    { media: '(prefers-color-scheme: dark)', color: '#1f1f1e' },
  ],
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_geist.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

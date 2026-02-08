import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Paradox Construction & Engineering | Civil Engineering Consultancy Mumbai',
  description: 'Professional civil engineering consultancy services in Mumbai. Specializing in structural audits, estimation, tendering, AutoCAD drafting, and construction services.',
  generator: 'v0.app',
  keywords: 'civil engineering consultancy Mumbai, structural audit services, construction estimation, tendering services India, BBS fabrication',
  authors: [{ name: 'Paradox Construction & Engineering Service LLP' }],
  creator: 'Paradox Construction & Engineering',
  publisher: 'Paradox Construction & Engineering',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://paradoxconstruction.com',
    title: 'Paradox Construction & Engineering | Civil Engineering Consultancy',
    description: 'Professional civil engineering consultancy services in Mumbai',
    siteName: 'Paradox Construction & Engineering',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/images/cp.png"
              alt="Paradox Construction & Engineering"
              width={150}
              height={50}
              className="h-12 w-auto object-contain brightness-0 invert"
              priority
            />
            <p className="text-sm opacity-90">
              Professional civil engineering consultancy services in Mumbai, specializing in structural audits, estimation, and construction consulting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-accent transition">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#estimation" className="hover:text-accent transition">
                  Estimation & Billing
                </Link>
              </li>
              <li>
                <Link href="/services#tendering" className="hover:text-accent transition">
                  Tendering
                </Link>
              </li>
              <li>
                <Link href="/services#structural-audits" className="hover:text-accent transition">
                  Structural Audits
                </Link>
              </li>
              <li>
                <Link href="/services#drafting" className="hover:text-accent transition">
                  AutoCAD Drafting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+918080898048" className="hover:text-accent transition block">
                    +91 8080898048
                  </a>
                  <a href="tel:+918108312228" className="hover:text-accent transition block">
                    +91 8108312228
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:paradoxcivilservices@gmail.com" className="hover:text-accent transition">
                  paradoxcivilservices@gmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div className="text-xs">
                  Shop No. 1, Dr. Ambedkar Nagar,
                  <br />
                  Raju Badekar Marg, Near Navy Gate,
                  <br />
                  Kurla West, Mumbai – 400070
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 my-8"></div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
          <p>&copy; {currentYear} Paradox Construction & Engineering Service LLP. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            <a href="https://www.google.com/maps/search/Paradox+Construction+Mumbai" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
              View on Google Maps
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

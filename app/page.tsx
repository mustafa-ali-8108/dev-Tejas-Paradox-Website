'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Building2, Briefcase, Zap, Users, Award } from 'lucide-react'

export default function Home() {
  const services = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Estimation & Billing',
      description: 'Accurate cost estimation and transparent billing for all construction projects.'
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: 'Tendering',
      description: 'Professional tendering support and bid documentation services.'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Structural Audits',
      description: 'Comprehensive structural assessment and safety audits of existing buildings.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'AutoCAD Drafting',
      description: 'Precise 2D and 3D CAD drawings and technical documentation.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'BBS & Fabrication',
      description: 'Bar Bending Schedules and steel reconciliation services.'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Repair Works',
      description: 'Expert guidance and execution of structural repairs and restoration.'
    }
  ]

  const whyChoose = [
    {
      title: 'Industry Expertise',
      description: 'Decades of combined experience in civil engineering and construction consultancy.'
    },
    {
      title: 'Precision & Quality',
      description: 'Meticulous attention to detail ensuring the highest standards in every project.'
    },
    {
      title: 'Transparent Communication',
      description: 'Clear and honest communication throughout the entire project lifecycle.'
    },
    {
      title: 'Cost Effective',
      description: 'Optimized solutions that deliver maximum value for your investment.'
    },
    {
      title: 'Timely Delivery',
      description: 'Efficient project execution with strict adherence to schedules.'
    },
    {
      title: 'Compliance Focused',
      description: 'Full adherence to all building codes, regulations, and industry standards.'
    }
  ]

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary/5 to-white py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                  Precision in Civil Engineering & Construction Consultancy
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Paradox Construction & Engineering Service LLP delivers expert civil engineering solutions with uncompromising quality and transparency for residential, commercial, and industrial projects across Mumbai.
                </p>
                <div className="flex gap-4 flex-col sm:flex-row">
                  <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
                    <a href="tel:+918080898048">Call Now: +91 8080898048</a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contact">Get Free Consultation</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-80 md:h-96 bg-muted rounded-lg overflow-hidden">
                <Image
                  src="/images/cp.png"
                  alt="Paradox Construction & Engineering Logo"
                  width={500}
                  height={400}
                  className="w-full h-full object-contain p-8"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Comprehensive Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete civil engineering solutions tailored to your project needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="text-secondary mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 px-4 bg-primary/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Paradox?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Building trust through expertise, precision, and dedication
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChoose.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 bg-secondary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready for Expert Civil Engineering Solutions?</h2>
            <p className="text-lg opacity-90">
              Get in touch with our team today for a free consultation on your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-primary-foreground border-primary-foreground/30">
                <a href="tel:+918080898048">Call: +91 8080898048</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-primary-foreground border-primary-foreground/30">
                <Link href="/contact">Send Inquiry</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

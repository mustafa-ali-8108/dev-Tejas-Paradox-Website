'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Award, Users, Zap, Target } from 'lucide-react'

export default function About() {
  const directors = [
    {
      name: 'Jonah Naundla',
      title: 'Director',
      phone: '+91 8080898048',
      expertise: 'Structural Engineering & Project Management'
    },
    {
      name: 'Tejas Kharatmal',
      title: 'Director',
      phone: '+91 8108312228',
      expertise: 'Civil Engineering & Estimations'
    }
  ]

  const coreValues = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Excellence',
      description: 'Unwavering commitment to the highest standards in every project'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client Centric',
      description: 'Your satisfaction and success is our primary focus'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Latest technologies and modern approaches in civil engineering'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Precision',
      description: 'Meticulous attention to detail in every aspect of our work'
    }
  ]

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-12 md:py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Paradox Construction & Engineering</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              Delivering professional civil engineering solutions with integrity, expertise, and unwavering commitment to quality.
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Who We Are</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Paradox Construction & Engineering Service LLP is a professional civil engineering consultancy firm based in Mumbai, Maharashtra. We specialize in providing comprehensive engineering solutions for residential, commercial, and industrial projects.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Founded on principles of integrity, precision, and client-focused service, we have established ourselves as a trusted partner for construction companies, developers, and property owners seeking expert engineering guidance and support.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our team brings years of combined experience in structural design, project estimation, regulatory compliance, and technical documentation, ensuring every project meets the highest standards of quality and safety.
                </p>
              </div>
              <div className="bg-secondary/10 rounded-lg p-8 border-2 border-secondary/20">
                <h3 className="text-2xl font-bold text-primary mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary">Location</h4>
                    <p className="text-muted-foreground">Kurla West, Mumbai – 400070</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Specialization</h4>
                    <p className="text-muted-foreground">Civil Engineering & Construction Consultancy</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Services</h4>
                    <p className="text-muted-foreground">9+ comprehensive civil engineering solutions</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Focus</h4>
                    <p className="text-muted-foreground">Quality, Precision, Compliance & Client Success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 md:py-24 px-4 bg-primary/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the most trusted civil engineering consultancy firm in India, recognized for our technical excellence, innovative solutions, and unwavering commitment to client success and sustainable construction practices.
                </p>
              </Card>
              <Card className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                <p className="text-muted-foreground">
                  To deliver exceptional civil engineering services that enable our clients to build safely, efficiently, and sustainably. We are committed to providing transparent guidance, precise technical solutions, and professional support throughout every phase of construction projects.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground">
                Principles that guide every decision and project
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, idx) => (
                <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-secondary mx-auto mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-16 md:py-24 px-4 bg-primary/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Leadership Team</h2>
              <p className="text-lg text-muted-foreground">
                Expert directors with extensive civil engineering experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {directors.map((director, idx) => (
                <Card key={idx} className="p-8 space-y-4 hover:shadow-lg transition-shadow">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">{director.name}</h3>
                    <Badge className="mt-2 bg-secondary">{director.title}</Badge>
                  </div>
                  <p className="text-muted-foreground">{director.expertise}</p>
                  <div className="pt-4 border-t">
                    <a href={`tel:${director.phone}`} className="text-secondary font-semibold hover:underline">
                      {director.phone}
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 px-4 bg-secondary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Let's Build Something Great Together</h2>
            <p className="text-lg opacity-90">
              Connect with our team to discuss your civil engineering needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild size="lg" className="bg-white/20 hover:bg-white/30 text-primary-foreground border border-primary-foreground/30">
                <a href="tel:+918080898048">Call Now</a>
              </Button>
              <Button asChild size="lg" className="bg-white/20 hover:bg-white/30 text-primary-foreground border border-primary-foreground/30">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

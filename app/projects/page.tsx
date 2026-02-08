'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Building2, Home, Factory, CheckCircle2 } from 'lucide-react'

export default function Projects() {
  const projectTypes = [
    {
      icon: <Home className="w-10 h-10" />,
      title: 'Residential Projects',
      description: 'Expertise in multi-story residential buildings, apartments, and housing complexes',
      capabilities: [
        'Structural design verification',
        'Estimation and billing',
        'AutoCAD documentation',
        'Quality audits'
      ]
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      title: 'Commercial Projects',
      description: 'Professional solutions for office buildings, retail spaces, and commercial establishments',
      capabilities: [
        'Commercial complex planning',
        'Tendering support',
        'Cost optimization',
        'Compliance verification'
      ]
    },
    {
      icon: <Factory className="w-10 h-10" />,
      title: 'Industrial Projects',
      description: 'Specialized services for manufacturing units, warehouses, and industrial facilities',
      capabilities: [
        'Industrial facility design review',
        'Material handling solutions',
        'Safety audits',
        'Equipment placement planning'
      ]
    }
  ]

  const projectExamples = [
    {
      title: 'Multi-Story Residential Complex',
      location: 'Mumbai Metropolitan Area',
      type: 'Residential',
      scope: 'Structural audit, estimation, and BBS services for 12-story residential building with 120 units',
      services: ['Structural Audit', 'Estimation', 'BBS', 'AutoCAD Drafting']
    },
    {
      title: 'Commercial Office Building',
      location: 'Central Mumbai',
      type: 'Commercial',
      scope: 'Complete tendering support and cost estimation for commercial office development',
      services: ['Tendering', 'Estimation', 'AutoCAD Drafting', 'Compliance Verification']
    },
    {
      title: 'Industrial Manufacturing Unit',
      location: 'Thane District',
      type: 'Industrial',
      scope: 'Design verification and material testing for manufacturing facility expansion',
      services: ['Design Review', 'Testing', 'Estimation', 'Material Reconciliation']
    },
    {
      title: 'Structural Repair Project',
      location: 'South Mumbai',
      type: 'Repair & Restoration',
      scope: 'Comprehensive structural audit and repair recommendations for 25-year-old building',
      services: ['Structural Audit', 'Repair Planning', 'Design Support', 'Supervision']
    },
    {
      title: 'Apartment Renovation',
      location: 'Kurla, Mumbai',
      type: 'Repair & Restoration',
      scope: 'Structural assessment and rehabilitation planning for aged residential building',
      services: ['Structural Audit', 'Drafting', 'Material Selection', 'Execution Support']
    },
    {
      title: 'Commercial Complex Tendering',
      location: 'Bandra Kurla Complex',
      type: 'Commercial',
      scope: 'Bid preparation and tender documentation for major commercial development',
      services: ['Tendering', 'Estimation', 'Specification Review', 'Bidding Strategy']
    }
  ]

  const expertise = [
    {
      title: 'Residential Buildings',
      description: 'From 2-story houses to high-rise apartment complexes'
    },
    {
      title: 'Commercial Establishments',
      description: 'Office spaces, retail centers, and business complexes'
    },
    {
      title: 'Industrial Facilities',
      description: 'Manufacturing units, warehouses, and processing plants'
    },
    {
      title: 'Structural Repairs',
      description: 'Rehabilitation and restoration of aging structures'
    },
    {
      title: 'Government Projects',
      description: 'Compliance and tender support for public sector projects'
    },
    {
      title: 'Private Development',
      description: 'Full-service support from concept to completion'
    }
  ]

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-12 md:py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Project Expertise</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              Proven experience across diverse construction types and project scales
            </p>
          </div>
        </section>

        {/* Project Types */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Project Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projectTypes.map((type, idx) => (
                <Card key={idx} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="text-secondary mb-4">{type.icon}</div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{type.title}</h3>
                  <p className="text-muted-foreground mb-6">{type.description}</p>
                  <div>
                    <h4 className="font-semibold text-primary text-sm mb-3">Our Capabilities:</h4>
                    <ul className="space-y-2">
                      {type.capabilities.map((cap, cidx) => (
                        <li key={cidx} className="flex gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Project Examples */}
        <section className="py-16 md:py-24 px-4 bg-primary/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">Featured Projects</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Representative examples of projects we have supported with our professional services
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectExamples.map((project, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-primary">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.location}</p>
                    </div>
                    <Badge className="bg-secondary whitespace-nowrap">{project.type}</Badge>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.scope}</p>
                  
                  <div>
                    <p className="text-xs font-semibold text-primary mb-2">Services Provided:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, sidx) => (
                        <Badge key={sidx} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Areas of Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertise.map((area, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-primary mb-2">{area.title}</h3>
                  <p className="text-muted-foreground text-sm">{area.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose for Projects */}
        <section className="py-16 md:py-24 px-4 bg-primary/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Why Choose Paradox for Your Project?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Proven Track Record',
                  desc: 'Successful completion of projects across all major categories and scales'
                },
                {
                  title: 'Technical Excellence',
                  desc: 'Latest tools, techniques, and best practices in civil engineering'
                },
                {
                  title: 'End-to-End Support',
                  desc: 'Comprehensive services from planning through completion and beyond'
                },
                {
                  title: 'Cost Optimization',
                  desc: 'Value-for-money solutions without compromising on quality'
                },
                {
                  title: 'Timely Delivery',
                  desc: 'Strict adherence to schedules and efficient project execution'
                },
                {
                  title: 'Regulatory Compliance',
                  desc: 'Full compliance with all building codes and safety regulations'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 px-4 bg-secondary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Start Your Project with Paradox</h2>
            <p className="text-lg opacity-90">
              Let's discuss how we can support your construction project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild size="lg" className="bg-white/20 hover:bg-white/30 text-primary-foreground border border-primary-foreground/30">
                <a href="tel:+918080898048">Call Now</a>
              </Button>
              <Button asChild size="lg" className="bg-white/20 hover:bg-white/30 text-primary-foreground border border-primary-foreground/30">
                <Link href="/contact">Get Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

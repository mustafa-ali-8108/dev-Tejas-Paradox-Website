'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CheckCircle2, Building2, Briefcase, Zap, Award, AlertCircle } from 'lucide-react'

export default function Services() {
  const services = [
    {
      id: 'estimation',
      icon: <Briefcase className="w-10 h-10" />,
      title: 'Estimation and Billing',
      shortDesc: 'Accurate project cost estimation and transparent billing',
      fullDesc: 'Professional estimation services providing detailed cost breakdowns for all types of construction projects. Our team uses industry-standard methods to ensure accuracy and transparency in all financial projections.',
      benefits: [
        'Detailed cost breakdowns',
        'Accurate project budgeting',
        'Transparent billing practices',
        'Cost-benefit analysis',
        'Budget optimization'
      ],
      industries: ['Residential', 'Commercial', 'Industrial']
    },
    {
      id: 'tendering',
      icon: <Award className="w-10 h-10" />,
      title: 'Tendering Services',
      shortDesc: 'Professional bid preparation and tender documentation',
      fullDesc: 'Complete tendering support including bid preparation, tender documentation, and compliance verification. We ensure your proposals meet all regulatory requirements and maximize competitiveness.',
      benefits: [
        'Tender document preparation',
        'Bid estimation',
        'Compliance verification',
        'Schedule management',
        'Negotiation support'
      ],
      industries: ['Government Projects', 'Private Contracts', 'Corporate Development']
    },
    {
      id: 'testing',
      icon: <AlertCircle className="w-10 h-10" />,
      title: 'Testing Services',
      shortDesc: 'Material testing and quality assurance',
      fullDesc: 'Comprehensive testing services including material quality verification, structural testing, and compliance assessment to ensure all work meets required standards.',
      benefits: [
        'Material testing',
        'Quality verification',
        'Compliance testing',
        'Structural assessment',
        'Detailed test reports'
      ],
      industries: ['All Project Types']
    },
    {
      id: 'drafting',
      icon: <Zap className="w-10 h-10" />,
      title: 'AutoCAD Drafting',
      shortDesc: 'Precise technical drawings and CAD services',
      fullDesc: 'Professional 2D and 3D AutoCAD drafting services for all construction documents. We create detailed technical drawings that meet regulatory standards and project specifications.',
      benefits: [
        '2D technical drawings',
        '3D visualization',
        'Working drawings',
        'Architectural plans',
        'Structural drawings'
      ],
      industries: ['Residential', 'Commercial', 'Industrial']
    },
    {
      id: 'bbs',
      icon: <Building2 className="w-10 h-10" />,
      title: 'BBS & Fabrication',
      shortDesc: 'Bar Bending Schedules and steel reconciliation',
      fullDesc: 'Expert BBS (Bar Bending Schedule) preparation and steel reconciliation services. We ensure precise steel requirements and reconciliation of actual usage for complete project accounting.',
      benefits: [
        'BBS preparation',
        'Steel schedules',
        'Reconciliation services',
        'Wastage analysis',
        'Cost optimization'
      ],
      industries: ['All Reinforced Projects']
    },
    {
      id: 'structural-audits',
      icon: <Award className="w-10 h-10" />,
      title: 'Structural Audits',
      shortDesc: 'Comprehensive building assessment and safety audits',
      fullDesc: 'Detailed structural audits and safety assessments of existing buildings. Our engineers evaluate structural integrity, identify risks, and recommend corrective measures.',
      benefits: [
        'Structural assessment',
        'Safety verification',
        'Defect identification',
        'Remedial recommendations',
        'Compliance report'
      ],
      industries: ['Residential Buildings', 'Commercial Buildings', 'Industrial Structures']
    },
    {
      id: 'repair',
      icon: <CheckCircle2 className="w-10 h-10" />,
      title: 'Repair & Restoration',
      shortDesc: 'Expert guidance for structural repairs and restoration',
      fullDesc: 'Professional repair and restoration services for damaged or aging structures. We provide comprehensive solutions from assessment through execution supervision.',
      benefits: [
        'Damage assessment',
        'Repair planning',
        'Material selection',
        'Execution supervision',
        'Quality assurance'
      ],
      industries: ['Residential', 'Commercial', 'Historical Structures']
    },
    {
      id: 'reconciliation',
      icon: <Building2 className="w-10 h-10" />,
      title: 'Steel Reconciliation',
      shortDesc: 'Accurate steel material accounting and verification',
      fullDesc: 'Complete steel reconciliation services ensuring accurate accounting of all steel materials used in construction. We verify quantities, quality, and wastage analysis.',
      benefits: [
        'Steel quantity verification',
        'Quality inspection',
        'Wastage documentation',
        'Cost reconciliation',
        'Supplier coordination'
      ],
      industries: ['All Steel-based Projects']
    }
  ]

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-12 md:py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              Comprehensive civil engineering solutions tailored to your project requirements
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <Card key={service.id} id={service.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="text-secondary mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.fullDesc}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary text-sm mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-xs text-muted-foreground mb-4">
                    <span className="font-semibold">Industries: </span>
                    {service.industries.join(', ')}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why These Services */}
        <section className="py-16 md:py-24 px-4 bg-primary/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Integrated Solutions for Success</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6">
                <h3 className="font-bold text-primary mb-3">Pre-Construction Phase</h3>
                <p className="text-muted-foreground text-sm">
                  Accurate estimation, detailed planning, and tender preparation to set the foundation for project success.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold text-primary mb-3">During Construction</h3>
                <p className="text-muted-foreground text-sm">
                  Technical documentation, testing oversight, and quality verification throughout project execution.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold text-primary mb-3">Post-Construction</h3>
                <p className="text-muted-foreground text-sm">
                  Audits, reconciliation, and support for ongoing maintenance and future modifications.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Our Service Process</h2>
            <div className="space-y-6">
              {[
                { step: '01', title: 'Consultation', desc: 'Initial meeting to understand your project requirements and scope' },
                { step: '02', title: 'Assessment', desc: 'Detailed evaluation and analysis of your specific needs' },
                { step: '03', title: 'Planning', desc: 'Comprehensive plan and proposal tailored to your project' },
                { step: '04', title: 'Execution', desc: 'Professional implementation with regular progress updates' },
                { step: '05', title: 'Delivery', desc: 'Quality assurance and timely delivery of all deliverables' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="text-4xl font-bold text-secondary w-20 flex-shrink-0">{item.step}</div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 px-4 bg-secondary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Need Civil Engineering Services?</h2>
            <p className="text-lg opacity-90">
              Get professional solutions from our experienced team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild size="lg" className="bg-white/20 hover:bg-white/30 text-primary-foreground border border-primary-foreground/30">
                <a href="tel:+918080898048">Call Now</a>
              </Button>
              <Button asChild size="lg" className="bg-white/20 hover:bg-white/30 text-primary-foreground border border-primary-foreground/30">
                <Link href="/contact">Request Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

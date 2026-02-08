'use client'

import React from "react"

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-12 md:py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              Get in touch with our team for professional civil engineering solutions
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="text-secondary mt-1">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Phone</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        <a href="tel:+918080898048" className="text-secondary hover:underline font-semibold">
                          +91 8080898048
                        </a>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <a href="tel:+918108312228" className="text-secondary hover:underline font-semibold">
                          +91 8108312228
                        </a>
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="text-secondary mt-1">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Email</h3>
                      <a 
                        href="mailto:paradoxcivilservices@gmail.com" 
                        className="text-secondary hover:underline font-semibold text-sm break-all"
                      >
                        paradoxcivilservices@gmail.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="text-secondary mt-1">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Address</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Shop No. 1, Dr. Ambedkar Nagar,<br />
                        Raju Badekar Marg, Near Navy Gate,<br />
                        Kurla West, Mumbai – 400070<br />
                        Maharashtra, India
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="text-secondary mt-1">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Business Hours</h3>
                      <p className="text-sm text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="p-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="text-6xl mb-4">✓</div>
                      <h3 className="text-2xl font-bold text-primary mb-2">Thank You!</h3>
                      <p className="text-muted-foreground">
                        Your inquiry has been received. We will get back to you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name" className="mb-2 block font-semibold">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Full Name"
                            required
                            className="border-border"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="mb-2 block font-semibold">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            required
                            className="border-border"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="phone" className="mb-2 block font-semibold">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91"
                            required
                            className="border-border"
                          />
                        </div>
                        <div>
                          <Label htmlFor="projectType" className="mb-2 block font-semibold">Project Type *</Label>
                          <select
                            id="projectType"
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                          >
                            <option value="">Select Project Type</option>
                            <option value="residential">Residential</option>
                            <option value="commercial">Commercial</option>
                            <option value="industrial">Industrial</option>
                            <option value="repair">Repair & Restoration</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message" className="mb-2 block font-semibold">Project Details / Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project requirements..."
                          required
                          rows={6}
                          className="border-border resize-none"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-secondary hover:bg-secondary/90 text-base"
                      >
                        Send Inquiry
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        * All fields are required. We will respond to your inquiry within 24 hours.
                      </p>
                    </form>
                  )}
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24 px-4 bg-muted">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Find Us on the Map</h2>
            <div className="w-full h-96 rounded-lg overflow-hidden border border-border">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.3457524847805!2d72.86757691533194!3d19.075255782104953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce4df4f4f4f5%3A0x4d4d4d4d4d4d4d4d!2sKurla%20West%2C%20Mumbai%2C%20Maharashtra%20400070!5e0!3m2!1sen!2sin!4v1234567890123"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Quick Contact CTA */}
        <section className="py-16 md:py-24 px-4 bg-secondary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Need Immediate Assistance?</h2>
            <p className="text-lg opacity-90">
              Call us directly or visit our office for a quick consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild size="lg" className="bg-white/20 hover:bg-white/30 text-primary-foreground border border-primary-foreground/30">
                <a href="tel:+918080898048">Call +91 8080898048</a>
              </Button>
              <Button asChild size="lg" className="bg-white/20 hover:bg-white/30 text-primary-foreground border border-primary-foreground/30">
                <a href="mailto:paradoxcivilservices@gmail.com">Email Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

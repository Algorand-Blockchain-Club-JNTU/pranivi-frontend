"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

// ✅ Reusable Contact Info Card
function ContactCard({
  icon: Icon,
  title,
  description,
  info,
  subInfo,
}: {
  icon: React.ElementType
  title: string
  description: string
  info: string
  subInfo: string
}) {
  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <Icon className="h-12 w-12 text-blue-500 mb-4" />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-semibold text-blue-600">{info}</p>
        <p className="text-sm text-gray-500">{subInfo}</p>
      </CardContent>
    </Card>
  )
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 🔌 Placeholder for API integration
    console.log("Form submitted:", formData)
    alert("Message sent successfully! 🚀")
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or need assistance? We're here to help. Reach out to our team using the form below or through
            our contact information.
          </p>
        </header>

        {/* Contact Info Cards */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <ContactCard
            icon={Phone}
            title="Phone Support"
            description="Call us for immediate assistance"
            info="+1 (555) 123-4567"
            subInfo="Mon - Fri, 9am - 5pm EST"
          />
          <ContactCard
            icon={Mail}
            title="Email Support"
            description="Send us an email anytime"
            info="support@pranivi.com"
            subInfo="Typically responds within 24 hours"
          />
          <ContactCard
            icon={MapPin}
            title="Office Location"
            description="Visit our headquarters"
            info="123 Tech Plaza, Suite 400"
            subInfo="San Francisco, CA 94105, USA"
          />
        </section>

        {/* Contact Form */}
        <Card className="max-w-3xl mx-auto bg-white shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Send Us a Message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="What is your message about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full hover:shadow-lg">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

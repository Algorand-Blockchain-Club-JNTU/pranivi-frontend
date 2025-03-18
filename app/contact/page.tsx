import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Contact Us</h1>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Have questions or need assistance? We're here to help. Reach out to our team using the form below or through
          our contact information.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <Phone className="h-12 w-12 text-blue-500 mb-4" />
              <CardTitle>Phone Support</CardTitle>
              <CardDescription>Call us for immediate assistance</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold text-blue-600">+1 (555) 123-4567</p>
              <p className="text-sm text-gray-500">Monday - Friday, 9am - 5pm EST</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <Mail className="h-12 w-12 text-blue-500 mb-4" />
              <CardTitle>Email Support</CardTitle>
              <CardDescription>Send us an email anytime</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold text-blue-600">support@pranivi.com</p>
              <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <MapPin className="h-12 w-12 text-blue-500 mb-4" />
              <CardTitle>Office Location</CardTitle>
              <CardDescription>Visit our headquarters</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold text-blue-600">123 Tech Plaza, Suite 400</p>
              <p className="text-sm text-gray-500">San Francisco, CA 94105, USA</p>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-3xl mx-auto bg-white shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Send Us a Message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input id="subject" placeholder="What is your message about?" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message here..." rows={5} />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


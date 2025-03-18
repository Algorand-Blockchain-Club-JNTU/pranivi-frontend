"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Search, Book, MessageCircle, Video, FileText } from "lucide-react"
import { useState } from "react"

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const faqItems = [
    {
      question: "How does Pranivi ensure the security of transactions?",
      answer:
        "Pranivi utilizes advanced blockchain technology and encryption methods to secure all transactions. Our smart contracts are audited regularly, and we employ multi-factor authentication for user accounts.",
    },
    {
      question: "Can Pranivi integrate with my existing ERP system?",
      answer:
        "Yes, Pranivi is designed to integrate seamlessly with most major ERP systems. Our team can provide custom integration solutions for unique setups. Please contact our support team for specific integration inquiries.",
    },
    {
      question: "What kind of support does Pranivi offer?",
      answer:
        "We offer 24/7 customer support via chat, email, and phone. Our enterprise clients also benefit from dedicated account managers and priority support channels.",
    },
    {
      question: "How does Pranivi handle data privacy and compliance?",
      answer:
        "Pranivi is fully compliant with GDPR, CCPA, and other major data protection regulations. We employ strict data handling protocols and regular security audits to ensure your information is always protected.",
    },
    {
      question: "Can I try Pranivi before purchasing?",
      answer:
        "We offer a 30-day free trial for our Pranivi Core and Lite versions. For Enterprise solutions, we provide personalized demos tailored to your specific needs.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Help Center</h1>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Find answers to your questions and learn how to make the most of Pranivi's procurement solutions.
        </p>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Input type="text" placeholder="Search for help..." className="pl-10 py-6 text-lg" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { title: "Documentation", icon: Book, link: "/docs" },
            { title: "Community Forum", icon: MessageCircle, link: "/forum" },
            { title: "Video Tutorials", icon: Video, link: "/tutorials" },
            { title: "API Reference", icon: FileText, link: "/api" },
          ].map((resource, index) => (
            <Link href={resource.link} key={index}>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <CardHeader>
                  <resource.icon className="h-12 w-12 text-blue-500 mb-4" />
                  <CardTitle>{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Access {resource.title.toLowerCase()} to learn more about Pranivi</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-xl mb-6">Our support team is always ready to assist you with any questions or concerns.</p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="font-semibold">
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}


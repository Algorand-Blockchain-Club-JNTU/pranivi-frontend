"use client"

import { useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ShoppingCart, BarChart3, Users, Clock, Shield, Zap } from "lucide-react"

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".feature-card")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const features = [
    {
      title: "Supplier Management",
      description: "Manage all your suppliers in one place with comprehensive profiles and performance metrics.",
      icon: Users,
    },
    {
      title: "Order Tracking",
      description: "Real-time order tracking with notifications and status updates for all your procurement needs.",
      icon: ShoppingCart,
    },
    {
      title: "Data Analytics",
      description: "Powerful analytics tools to visualize spending patterns and identify cost-saving opportunities.",
      icon: BarChart3,
    },
    {
      title: "Time Saving",
      description: "Automated workflows and approvals that save hours of manual work every week.",
      icon: Clock,
    },
    {
      title: "Secure Platform",
      description: "Enterprise-grade security with role-based access control and data encryption.",
      icon: Shield,
    },
    {
      title: "Fast Implementation",
      description: "Quick setup process with minimal disruption to your existing operations.",
      icon: Zap,
    },
  ]

  return (
    <section ref={sectionRef} className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Powerful Features for Modern Procurement
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover how Pranivi's comprehensive features can revolutionize your procurement process and drive
            operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              hoverable
              className="feature-card opacity-0 border-none shadow-lg"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600 feature-icon" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

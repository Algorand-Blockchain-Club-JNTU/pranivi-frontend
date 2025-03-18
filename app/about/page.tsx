"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Zap, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">About Pranivi</h1>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Pranivi is revolutionizing the procurement process with our cutting-edge blockchain-based platform, bringing
          transparency, efficiency, and trust to supply chain management.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              title: "Transparency",
              icon: CheckCircle,
              description: "Blockchain-verified transactions for full visibility",
            },
            { title: "Efficiency", icon: Zap, description: "Streamlined processes reducing time and costs" },
            { title: "Collaboration", icon: Users, description: "Seamless interaction between vendors and buyers" },
            { title: "Security", icon: Shield, description: "Advanced encryption and smart contract protection" },
          ].map((feature, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-blue-500 mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Procurement Process?</h2>
          <p className="text-xl mb-6">Join Pranivi today and experience the future of supply chain management.</p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="font-semibold">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}


"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Download, ArrowRight } from "lucide-react"

export function DownloadSection() {
  const [platform, setPlatform] = useState<"windows" | "mac" | "linux">("windows")

  const features = [
    "Comprehensive supplier management",
    "Real-time order tracking",
    "Advanced analytics dashboard",
    "Automatic purchase order generation",
    "Multi-user collaboration",
    "Secure document storage",
  ]

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Download Pranivi Today</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Start optimizing your procurement process with our powerful desktop application. Available for all major
            platforms with free updates.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
          <Card className="bg-white p-8 rounded-xl shadow-xl w-full lg:w-1/2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Choose Your Platform</h3>
              <div className="flex gap-2">
                <Button
                  variant={platform === "windows" ? "default" : "outline"}
                  onClick={() => setPlatform("windows")}
                  className={platform === "windows" ? "bg-blue-600" : "bg-white text-slate-700"}
                >
                  Windows
                </Button>
                <Button
                  variant={platform === "mac" ? "default" : "outline"}
                  onClick={() => setPlatform("mac")}
                  className={platform === "mac" ? "bg-blue-600" : "bg-white text-slate-700"}
                >
                  macOS
                </Button>
                <Button
                  variant={platform === "linux" ? "default" : "outline"}
                  onClick={() => setPlatform("linux")}
                  className={platform === "linux" ? "bg-blue-600" : "bg-white text-slate-700"}
                >
                  Linux
                </Button>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            >
              <Download className="mr-2 h-5 w-5" />
              Download for {platform === "windows" ? "Windows" : platform === "mac" ? "macOS" : "Linux"}
            </Button>
            <p className="text-xs text-center mt-4 text-slate-500">Version 2.5.1 | Released March 5, 2025</p>
          </Card>

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-4">Why Choose Pranivi?</h3>
            <p className="text-blue-100 mb-6">
              Pranivi is designed to make procurement management effortless. Our platform helps you reduce costs,
              improve supplier relationships, and make data-driven decisions.
            </p>
            <p className="text-blue-100 mb-8">
              Join thousands of businesses that have transformed their procurement process with Pranivi.
            </p>
            <Button variant="secondary" size="lg">
              View Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


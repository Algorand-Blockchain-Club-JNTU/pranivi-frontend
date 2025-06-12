"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function DashboardPreview() {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsActive(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-12 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Powerful Dashboard & Analytics</h2>
          <p className="text-slate-600">
            Get a complete view of your procurement activities with our intuitive dashboard. Monitor expenses, track
            orders, and manage tasks all in one place.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl blur opacity-20"></div>
          <div
            className={`relative bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-1000 ${isActive ? "opacity-100 transform-none" : "opacity-0 translate-y-8"}`}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3SMFTstblSugbJo3ezuhUGyoCKH5Kc.png"
              width={1200}
              height={800}
              alt="Pranivi Dashboard"
              className="w-full h-auto"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <div className="text-white max-w-md">
                <h3 className="text-2xl font-bold mb-2">Interactive Dashboard</h3>
                <p className="mb-4 text-white/80">
                  Our intuitive dashboard puts you in control with real-time analytics and task management.
                </p>
                <Button className="bg-white text-blue-600 hover:bg-slate-100">Try Demo</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

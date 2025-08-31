"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, CheckCircle } from "lucide-react"

// ✅ Static data outside component (avoids re-creation on every render)
const products = [
  {
    name: "Pranivi Core",
    description: "Our flagship procurement platform with full blockchain integration.",
    features: ["Smart Contracts", "Real-time Tracking", "Vendor Management"],
    price: "$499/month",
    badge: "Most Popular",
  },
  {
    name: "Pranivi Lite",
    description: "Essential procurement tools for small to medium businesses.",
    features: ["Basic Smart Contracts", "Order Tracking", "Limited Vendor Management"],
    price: "$199/month",
    badge: null,
  },
  {
    name: "Pranivi Enterprise",
    description: "Customizable solution for large-scale procurement operations.",
    features: ["Advanced Analytics", "Custom Integrations", "Dedicated Support"],
    price: "Custom Pricing",
    badge: "Enterprise",
  },
]

// ✅ Extracted Product Card component
function ProductCard({ product }: { product: (typeof products)[0] }) {
  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-2xl font-bold">{product.name}</CardTitle>
          {product.badge && (
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              {product.badge}
            </Badge>
          )}
        </div>
        <CardDescription className="text-lg">{product.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <ul className="space-y-2">
          {product.features.map((feature, idx) => (
            <li key={idx} className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="flex flex-col items-start">
        <p className="text-2xl font-bold text-blue-600 mb-4">{product.price}</p>
        <Button className="w-full">
          <Download className="mr-2 h-4 w-4" /> Download Now
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the perfect Pranivi solution for your procurement needs. From small businesses to large enterprises,
            we have a product tailored for you.
          </p>
        </header>

        {/* Products Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Product is Right for You?</h2>
          <p className="text-xl mb-6">
            Our team is here to help you find the perfect solution for your business needs.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="font-semibold">
              Contact Sales
            </Button>
          </Link>
        </section>
      </section>
    </main>
  )
}

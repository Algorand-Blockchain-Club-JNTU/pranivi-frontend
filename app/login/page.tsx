
"use client"

import { useWallet } from "@txnlab/use-wallet-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { BarChart3, Package, Truck, FileText, CreditCard, Settings, QrCode, ClipboardCheck } from "lucide-react"

export default function VendorDashboard() {
  const { activeAccount } = useWallet()

  if (!activeAccount) {
    return (
      <div className="container mx-auto p-8 text-center">
        <p>Please connect your wallet to login</p>
      </div>
    )
  }

  const menuItems = [
    { title: "Orders", icon: Package, href: "/vendors/orders", description: "View and manage your orders" },
    { title: "Shipments", icon: Truck, href: "/vendors/shipments", description: "Track and update shipments" },
    { title: "Invoices", icon: FileText, href: "/vendors/invoices", description: "Manage your invoices" },
    { title: "Payments", icon: CreditCard, href: "/vendors/payments", description: "View payment status" },
    { title: "Bids", icon: BarChart3, href: "/vendors/bids", description: "Submit and track bids" },
    {
      title: "Quality Reports",
      icon: ClipboardCheck,
      href: "/vendors/quality",
      description: "Quality control reports",
    },
    { title: "QR Codes", icon: QrCode, href: "/vendors/qr-codes", description: "Generate tracking QR codes" },
    { title: "Settings", icon: Settings, href: "/vendors/settings", description: "Manage your account" },
  ]

  return (
    <div className="container mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome, Vendor</h1>
        <p className="text-gray-600">
          Wallet: {activeAccount.address.slice(0, 10)}...{activeAccount.address.slice(-4)}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {menuItems.map((item) => (
          <Link href={item.href} key={item.title}>
            <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <item.icon className="h-5 w-5" />
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
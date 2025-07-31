"use client"

import Link from "next/link"
import { useMemo } from "react"
import { useWallet } from "@txnlab/use-wallet-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  BarChart3,
  Package,
  Truck,
  FileText,
  CreditCard,
  Settings,
  QrCode,
  ClipboardCheck,
} from "lucide-react"

const menuItems = [
  {
    title: "Orders",
    icon: Package,
    href: "/vendors/orders",
    description: "View and manage your orders",
  },
  {
    title: "Shipments",
    icon: Truck,
    href: "/vendors/shipments",
    description: "Track and update shipments",
  },
  {
    title: "Invoices",
    icon: FileText,
    href: "/vendors/invoices",
    description: "Manage your invoices",
  },
  {
    title: "Payments",
    icon: CreditCard,
    href: "/vendors/payments",
    description: "View payment status",
  },
  {
    title: "Bids",
    icon: BarChart3,
    href: "/vendors/bids",
    description: "Submit and track bids",
  },
  {
    title: "Quality Reports",
    icon: ClipboardCheck,
    href: "/vendors/quality",
    description: "Quality control reports",
  },
  {
    title: "QR Codes",
    icon: QrCode,
    href: "/vendors/qr-codes",
    description: "Generate tracking QR codes",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/vendors/settings",
    description: "Manage your account",
  },
]

export default function VendorDashboard() {
  const { activeAccount } = useWallet()

  const shortAddress = useMemo(() => {
    if (!activeAccount?.address) return ""
    return `${activeAccount.address.slice(0, 10)}...${activeAccount.address.slice(-4)}`
  }, [activeAccount])

  if (!activeAccount) {
    return (
      <div className="container mx-auto p-8 text-center">
        <p className="text-lg text-gray-700">Please connect your wallet to login</p>
      </div>
    )
  }

  return (
    <main className="container mx-auto p-8" aria-label="Vendor Dashboard">
      <header className="mb-10">
        <h1 className="text-3xl font-bold">Welcome, Vendor</h1>
        <p className="text-gray-600 mt-1">Wallet: {shortAddress}</p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {menuItems.map(({ title, icon: Icon, href, description }) => (
          <Link href={href} key={title}>
            <Card className="h-full cursor-pointer hover:shadow-lg transition duration-200 ease-in-out">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                  <Icon className="h-5 w-5" />
                  {title}
                </CardTitle>
              </CardHeader>

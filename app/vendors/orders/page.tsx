"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Home,
  ShoppingBag,
  Package,
  Truck,
  QrCode,
  FileText,
  Wallet,
  FileCheck,
  Users,
  Settings,
  LogOut,
  Bell,
  Search,
  ArrowUpDown,
  Eye,
  Download,
  CheckCircle2,
  Clock,
  AlertCircle,
  Coins,
} from 'lucide-react'

export default function VendorOrders() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("date")
  const [sortOrder, setSortOrder] = useState("desc")
  const [walletConnected, setWalletConnected] = useState(false)
  const [filterCompany, setFilterCompany] = useState("all")

  const connectWallet = () => {
    setWalletConnected(!walletConnected)
  }

  // Dummy data for purchase orders
  const purchaseOrders = [
    {
      id: "PO-2023-156",
      title: "Office Supplies for Q2",
      company: "Acme Corp",
      date: "2025-03-15",
      amount: 12500,
      status: "pending",
      dueDate: "2025-03-30",
      items: "Desk organizers, paper supplies, printer cartridges",
      hasBlockchainContract: true,
    },
    {
      id: "PO-2023-155",
      title: "IT Equipment for New Office",
      company: "TechCorp Inc.",
      date: "2025-03-14",
      amount: 28750,
      status: "processing",
      dueDate: "2025-04-05",
      items: "Laptops, monitors, keyboards, mice",
      hasBlockchainContract: false,
    },
    {
      id: "PO-2023-154",
      title: "Manufacturing Parts Batch #45",
      company: "Global Solutions",
      date: "2025-03-12",
      amount: 18900,
      status: "shipped",
      dueDate: "2025-03-25",
      items: "Custom metal parts, fasteners, connectors",
      hasBlockchainContract: true,
    },
    {
      id: "PO-2023-153",
      title: "Marketing Materials for Trade Show",
      company: "Innovate LLC",
      date: "2025-03-10",
      amount: 4250,
      status: "delivered",
      dueDate: "2025-03-20",
      items: "Brochures, banners, promotional items",
      hasBlockchainContract: false,
    },
    {
      id: "PO-2023-152",
      title: "Office Furniture for Executive Suite",
      company: "Acme Corp",
      date: "2025-03-08",
      amount: 32500,
      status: "pending",
      dueDate: "2025-04-10",
      items: "Executive desks, chairs, conference table",
      hasBlockchainContract: true,
    },
    {
      id: "PO-2023-151",
      title: "Software Licenses Annual Renewal",
      company: "TechCorp Inc.",
      date: "2025-03-05",
      amount: 15800,
      status: "processing",
      dueDate: "2025-03-25",
      items: "Enterprise software licenses, support packages",
      hasBlockchainContract: false,
    },
    {
      id: "PO-2023-150",
      title: "Catering Services for Annual Meeting",
      company: "Global Solutions",
      date: "2025-03-03",
      amount: 7500,
      status: "delivered",
      dueDate: "2025-03-15",
      items: "Full-service catering for 150 people",
      hasBlockchainContract: false,
    },
    {
      id: "PO-2023-149",
      title: "Safety Equipment for Factory Floor",
      company: "Innovate LLC",
      date: "2025-03-01",
      amount: 9200,
      status: "shipped",
      dueDate: "2025-03-18",
      items: "Safety helmets, vests, gloves, eyewear",
      hasBlockchainContract: true,
    },
  ]

  // Get unique companies for filter
  const companies = ["all", ...new Set(purchaseOrders.map((po) => po.company))]

  // Filter purchase orders based on search query and company filter
  const filteredPOs = purchaseOrders.filter((po) => {
    const matchesSearch =
      po.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      po.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      po.id.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCompany = filterCompany === "all" || po.company === filterCompany

    return matchesSearch && matchesCompany
  })

  // Sort purchase orders
  const sortedPOs = [...filteredPOs].sort((a, b) => {
    let comparison = 0

    if (sortBy === "date") {
      comparison = new Date(a.date).getTime() - new Date(b.date).getTime()
    } else if (sortBy === "amount") {
      comparison = a.amount - b.amount
    } else if (sortBy === "dueDate") {
      comparison = new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
    } else if (sortBy === "company") {
      comparison = a.company.localeCompare(b.company)
    }

    return sortOrder === "asc" ? comparison : -comparison
  })

  const toggleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(field)
      setSortOrder("desc")
    }
  }

  // Get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium flex items-center w-fit">
            <Clock className="h-3 w-3 mr-1" />
            Pending
          </span>
        )
      case "processing":
        return (
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium flex items-center w-fit">
            <Package className="h-3 w-3 mr-1" />
            Processing
          </span>
        )
      case "shipped":
        return (
          <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium flex items-center w-fit">
            <Truck className="h-3 w-3 mr-1" />
            Shipped
          </span>
        )
      case "delivered":
        return (
          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium flex items-center w-fit">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            Delivered
          </span>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Vendor Dashboard Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 pt-16">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-900">Purchase Orders</h1>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-slate-500 hover:text-blue-600 transition-colors">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <Button
                variant="outline"
                className={`font-medium ${walletConnected ? "border-green-500 text-green-600" : "border-blue-500 text-blue-600"} hover:bg-blue-50 flex items-center gap-2`}
                onClick={connectWallet}
              >
                <Wallet className="h-4 w-4" />
                {walletConnected ? "Wallet Connected" : "Connect Wallet"}
              </Button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="font-semibold text-blue-600">AC</span>
                </div>
                <div className="hidden md:block">
                  <p className="font-medium text-sm">Acme Corporation</p>
                  <p className="text-xs text-slate-500">Verified Vendor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-slate-200 h-[calc(100vh-9rem)] sticky top-[6.5rem] hidden md:block">
          <nav className="p-4">
            <ul className="space-y-1">
              <li>
                <Link
                  href="/vendors"
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <Home className="h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/vendors/bids"
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span>Bids</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/vendors/orders"
                  className="flex items-center gap-3 px-3 py-2 rounded-md bg-blue-50 text-blue-600 font-medium"
                >
                  <Package className="h-5 w-5" />
                  <span>Orders</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/vendors/shipments"
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <Truck className="h-5 w-5" />
                  <span>Shipments</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/vendors/qr-codes"
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <QrCode className="h-5 w-5" />
                  <span>QR Codes</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/vendors/invoices"
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <FileText className="h-5 w-5" />
                  <span>Invoices</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/vendors/payments"
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <Wallet className="h-5 w-5" />
                  <span>Payments</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/vendors/quality"
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <FileCheck className="h-5 w-5" />
                  <span>Quality Assurance</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/vendors/profile"
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <Users className="h-5 w-5" />
                  <span>Company Profile</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/vendors/smart-contracts"
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <Coins className="h-5 w-5" />
                  <span>Smart Contracts</span>
                </Link>
              </li>
            </ul>

            <div className="mt-8 pt-4 border-t border-slate-200">
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/vendors/settings"
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </Link>
                </li>
                <li>
                  <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 transition-colors">
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Purchase Orders</h2>
              <p className="text-slate-500">View and manage all your purchase orders</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search orders..."
                  className="pl-9 pr-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <select
                className="px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filterCompany}
                onChange={(e) => setFilterCompany(e.target.value)}
              >
                {companies.map((company) => (
                  <option key={company} value={company}>
                    {company === "all" ? "All Companies" : company}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle>Your Purchase Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-4 font-medium text-slate-500">
                        <button className="flex items-center gap-1" onClick={() => toggleSort("id")}>
                          PO ID
                          {sortBy === "id" && <ArrowUpDown className="h-4 w-4" />}
                        </button>
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">Title</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">
                        <button className="flex items-center gap-1" onClick={() => toggleSort("company")}>
                          Company
                          {sortBy === "company" && <ArrowUpDown className="h-4 w-4" />}
                        </button>
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">
                        <button className="flex items-center gap-1" onClick={() => toggleSort("date")}>
                          Issue Date
                          {sortBy === "date" && <ArrowUpDown className="h-4 w-4" />}
                        </button>
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">
                        <button className="flex items-center gap-1" onClick={() => toggleSort("amount")}>
                          Amount
                          {sortBy === "amount" && <ArrowUpDown className="h-4 w-4" />}
                        </button>
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedPOs.length > 0 ? (
                      sortedPOs.map((po) => (
                        <tr key={po.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{po.id}</span>
                              {po.hasBlockchainContract && (
                                <Coins className="h-4 w-4 text-blue-500" aria-label="Has blockchain contract" />
                              )}
                            </div>
                          </td>
                          <td className="py-3 px-4">{po.title}</td>
                          <td className="py-3 px-4">{po.company}</td>
                          <td className="py-3 px-4">{new Date(po.date).toLocaleDateString()}</td>
                          <td className="py-3 px-4">${po.amount.toLocaleString()}</td>
                          <td className="py-3 px-4">{getStatusBadge(po.status)}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Download className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={7} className="py-8 text-center text-slate-500">
                          No purchase orders found matching your criteria
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-slate-900">Order Summary</h3>
                  <Package className="h-5 w-5 text-blue-500" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Total Orders</span>
                    <span className="font-bold">{purchaseOrders.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Pending</span>
                    <span className="font-bold">{purchaseOrders.filter((po) => po.status === "pending").length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Processing</span>
                    <span className="font-bold">
                      {purchaseOrders.filter((po) => po.status === "processing").length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Shipped</span>
                    <span className="font-bold">{purchaseOrders.filter((po) => po.status === "shipped").length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Delivered</span>
                    <span className="font-bold">{purchaseOrders.filter((po) => po.status === "delivered").length}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-slate-900">Orders by Company</h3>
                  <Users className="h-5 w-5 text-green-500" />
                </div>
                <div className="space-y-3">
                  {Object.entries(
                    purchaseOrders.reduce<Record<string, number>>((acc, po) => {
                      acc[po.company] = (acc[po.company] || 0) + 1
                      return acc
                    }, {}),
                  ).map(([company, count]) => (
                    <div key={company} className="flex justify-between items-center">
                      <span className="text-slate-600">{company}</span>
                      <span className="font-bold">{count}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-slate-900">Urgent Actions</h3>
                  <AlertCircle className="h-5 w-5 text-red-500" />
                </div>
                <div className="space-y-3">
                  {purchaseOrders
                    .filter(
                      (po) =>
                        (po.status === "pending" || po.status === "processing") &&
                        new Date(po.dueDate) < new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                    )
                    .slice(0, 3)
                    .map((po) => (
                      <div key={po.id} className="p-3 bg-red-50 border border-red-100 rounded-lg">
                        <p className="font-medium text-red-800">{po.title}</p>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-sm text-red-700">{po.company}</span>
                          <span className="text-sm font-medium text-red-800">
                            Due: {new Date(po.dueDate).toLocaleDateString()}
                          </span>
                        </div>
                        <Button size="sm" className="mt-2 w-full">
                          Take Action
                        </Button>
                      </div>
                    ))}

                  {purchaseOrders.filter(
                    (po) =>
                      (po.status === "pending" || po.status === "processing") &&
                      new Date(po.dueDate) < new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                  ).length === 0 && (
                    <div className="p-4 text-center text-slate-500">
                      <CheckCircle2 className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <p>No urgent actions needed</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

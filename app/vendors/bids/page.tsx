"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, ShoppingBag, Package, Truck, QrCode, FileText, Wallet, FileCheck, Users, Settings, LogOut, Bell, Plus, Filter, Search, CheckCircle2, Clock, XCircle, ArrowUpDown, Eye, Coins } from 'lucide-react'

// Define interfaces for type safety
interface Bid {
  id: string;
  title: string;
  client: string;
  date: string;
  amount: number;
  status: 'active' | 'won' | 'lost';
  dueDate: string;
  category: string;
  hasBlockchainContract: boolean;
}

interface CategoryCount {
  [key: string]: number;
}

export default function VendorBids() {
  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'won' | 'lost'>("active")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<'id' | 'date' | 'amount' | 'dueDate' | 'client'>("date")
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>("desc")
  const [walletConnected, setWalletConnected] = useState(false)

  const connectWallet = () => {
    setWalletConnected(!walletConnected)
  }

  // Dummy data for bids
  const bids: Bid[] = [
    {
      id: "BID-2023-089",
      title: "Office Supplies for Headquarters",
      client: "Acme Corp",
      date: "2025-03-15",
      amount: 4250,
      status: "active",
      dueDate: "2025-03-25",
      category: "Supplies",
      hasBlockchainContract: true,
    },
    {
      id: "BID-2023-088",
      title: "IT Equipment for New Branch",
      client: "TechCorp Inc.",
      date: "2025-03-14",
      amount: 12800,
      status: "active",
      dueDate: "2025-03-28",
      category: "Equipment",
      hasBlockchainContract: false,
    },
    {
      id: "BID-2023-087",
      title: "Manufacturing Parts Q2",
      client: "Global Solutions",
      date: "2025-03-12",
      amount: 8750,
      status: "active",
      dueDate: "2025-03-22",
      category: "Manufacturing",
      hasBlockchainContract: true,
    },
    {
      id: "BID-2023-086",
      title: "Consulting Services",
      client: "Innovate LLC",
      date: "2025-03-10",
      amount: 15000,
      status: "active",
      dueDate: "2025-03-20",
      category: "Services",
      hasBlockchainContract: false,
    },
    {
      id: "BID-2023-085",
      title: "Marketing Materials",
      client: "Brand Masters",
      date: "2025-03-08",
      amount: 3200,
      status: "won",
      dueDate: "2025-03-18",
      category: "Marketing",
      hasBlockchainContract: false,
    },
    {
      id: "BID-2023-084",
      title: "Office Furniture",
      client: "Corporate Interiors",
      date: "2025-03-05",
      amount: 9500,
      status: "lost",
      dueDate: "2025-03-15",
      category: "Furniture",
      hasBlockchainContract: false,
    },
    {
      id: "BID-2023-083",
      title: "Software Licenses",
      client: "TechCorp Inc.",
      date: "2025-03-03",
      amount: 7200,
      status: "won",
      dueDate: "2025-03-13",
      category: "Software",
      hasBlockchainContract: true,
    },
    {
      id: "BID-2023-082",
      title: "Catering Services",
      client: "Acme Corp",
      date: "2025-03-01",
      amount: 2800,
      status: "lost",
      dueDate: "2025-03-11",
      category: "Services",
      hasBlockchainContract: false,
    },
  ]

  // Filter bids based on active tab and search query
  const filteredBids = bids.filter((bid) => {
    const matchesTab = activeTab === "all" || bid.status === activeTab
    const matchesSearch =
      bid.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bid.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bid.id.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesTab && matchesSearch
  })

  // Sort bids
  const sortedBids = [...filteredBids].sort((a, b) => {
    let comparison = 0

    if (sortBy === "date") {
      comparison = new Date(a.date).getTime() - new Date(b.date).getTime()
    } else if (sortBy === "amount") {
      comparison = a.amount - b.amount
    } else if (sortBy === "dueDate") {
      comparison = new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
    } else if (sortBy === "client") {
      comparison = a.client.localeCompare(b.client)
    }

    return sortOrder === "asc" ? comparison : -comparison
  })

  const toggleSort = (field: 'id' | 'date' | 'amount' | 'dueDate' | 'client') => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(field)
      setSortOrder("desc")
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Vendor Dashboard Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 pt-16">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-900">Vendor Bids</h1>
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
                  className="flex items-center gap-3 px-3 py-2 rounded-md bg-blue-50 text-blue-600 font-medium"
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span>Bids</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/vendors/orders"
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 transition-colors"
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
              <h2 className="text-xl font-bold text-slate-900">Manage Your Bids</h2>
              <p className="text-slate-500">View and manage all your bid submissions</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search bids..."
                  className="pl-9 pr-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <Link href="/vendors/bids/create">
                <Button className="whitespace-nowrap">
                  <Plus className="h-4 w-4 mr-2" />
                  New Bid
                </Button>
              </Link>
            </div>
          </div>

          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <CardTitle>Your Bids</CardTitle>

                <div className="flex items-center gap-2">
                  <button
                    className={`px-3 py-1 rounded-full text-sm font-medium ${activeTab === "all" ? "bg-slate-200 text-slate-800" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                    onClick={() => setActiveTab("all")}
                  >
                    All
                  </button>
                  <button
                    className={`px-3 py-1 rounded-full text-sm font-medium ${activeTab === "active" ? "bg-blue-100 text-blue-800" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                    onClick={() => setActiveTab("active")}
                  >
                    Active
                  </button>
                  <button
                    className={`px-3 py-1 rounded-full text-sm font-medium ${activeTab === "won" ? "bg-green-100 text-green-800" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                    onClick={() => setActiveTab("won")}
                  >
                    Won
                  </button>
                  <button
                    className={`px-3 py-1 rounded-full text-sm font-medium ${activeTab === "lost" ? "bg-red-100 text-red-800" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                    onClick={() => setActiveTab("lost")}
                  >
                    Lost
                  </button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-4 font-medium text-slate-500">
                        <button className="flex items-center gap-1" onClick={() => toggleSort("id")}>
                          Bid ID
                          {sortBy === "id" && <ArrowUpDown className="h-4 w-4" />}
                        </button>
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">Title</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">
                        <button className="flex items-center gap-1" onClick={() => toggleSort("client")}>
                          Client
                          {sortBy === "client" && <ArrowUpDown className="h-4 w-4" />}
                        </button>
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">
                        <button className="flex items-center gap-1" onClick={() => toggleSort("date")}>
                          Submission Date
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
                    {sortedBids.length > 0 ? (
                      sortedBids.map((bid) => (
                        <tr key={bid.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{bid.id}</span>
                              {bid.hasBlockchainContract && (
                                <Coins className="h-4 w-4 text-blue-500" aria-label="Has blockchain contract" />
                              )}
                            </div>
                          </td>
                          <td className="py-3 px-4">{bid.title}</td>
                          <td className="py-3 px-4">{bid.client}</td>
                          <td className="py-3 px-4">{new Date(bid.date).toLocaleDateString()}</td>
                          <td className="py-3 px-4">${bid.amount.toLocaleString()}</td>
                          <td className="py-3 px-4">
                            {bid.status === "active" && (
                              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium flex items-center w-fit">
                                <Clock className="h-3 w-3 mr-1" />
                                Active
                              </span>
                            )}
                            {bid.status === "won" && (
                              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium flex items-center w-fit">
                                <CheckCircle2 className="h-3 w-3 mr-1" />
                                Won
                              </span>
                            )}
                            {bid.status === "lost" && (
                              <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium flex items-center w-fit">
                                <XCircle className="h-3 w-3 mr-1" />
                                Lost
                              </span>
                            )}
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              {bid.status === "active" && <Button size="sm">Edit</Button>}
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={7} className="py-8 text-center text-slate-500">
                          No bids found matching your criteria
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
                  <h3 className="text-lg font-semibold text-slate-900">Bid Statistics</h3>
                  <ShoppingBag className="h-5 w-5 text-blue-500" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Total Bids</span>
                    <span className="font-bold">{bids.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Active Bids</span>
                    <span className="font-bold">{bids.filter((b) => b.status === "active").length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Won Bids</span>
                    <span className="font-bold">{bids.filter((b) => b.status === "won").length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Lost Bids</span>
                    <span className="font-bold">{bids.filter((b) => b.status === "lost").length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Success Rate</span>
                    <span className="font-bold">
                      {Math.round(
                        (bids.filter((b) => b.status === "won").length /
                          (bids.filter((b) => b.status === "won").length +
                            bids.filter((b) => b.status === "lost").length)) *
                          100,
                      ) || 0}
                      %
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-slate-900">Upcoming Deadlines</h3>
                  <Clock className="h-5 w-5 text-yellow-500" />
                </div>
                <div className="space-y-3">
                  {bids
                    .filter((bid) => bid.status === "active")
                    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
                    .slice(0, 3)
                    .map((bid) => (
                      <div key={bid.id} className="p-3 bg-slate-50 rounded-lg">
                        <p className="font-medium">{bid.title}</p>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-sm text-slate-500">{bid.client}</span>
                          <span className="text-sm font-medium">Due: {new Date(bid.dueDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-slate-900">Bid by Category</h3>
                  <Filter className="h-5 w-5 text-purple-500" />
                </div>
                <div className="space-y-3">
                  {Object.entries(
                    bids.reduce<CategoryCount>((acc, bid) => {
                      acc[bid.category] = (acc[bid.category] || 0) + 1
                      return acc
                    }, {}),
                  ).map(([category, count]) => (
                    <div key={category} className="flex justify-between items-center">
                      <span className="text-slate-600">{category}</span>
                      <span className="font-bold">{count}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

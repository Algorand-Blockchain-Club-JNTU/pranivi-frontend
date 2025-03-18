"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, FileText, Package, Wallet, Bell, Settings, LogOut, Home, ShoppingBag, Truck, QrCode, FileCheck, Users, Plus, CheckCircle2, Clock, AlertCircle, Coins, Zap, Shield, Database } from 'lucide-react'

export default function VendorsDashboard() {
  const [isVerified, setIsVerified] = useState(true)
  const [walletConnected, setWalletConnected] = useState(false)

  // If the vendor is not verified, redirect to KYC page
  if (!isVerified) {
    return <VendorKYC />
  }

  const connectWallet = () => {
    setWalletConnected(!walletConnected)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Vendor Dashboard Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 pt-16">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-900">Vendor Dashboard</h1>
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
                  className="flex items-center gap-3 px-3 py-2 rounded-md bg-blue-50 text-blue-600 font-medium"
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
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Active Bids</p>
                    <h3 className="text-2xl font-bold mt-1">12</h3>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <ShoppingBag className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-xs text-green-600">
                  <span className="font-medium">+3 new</span>
                  <span className="text-slate-500 ml-1">since last week</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Open Orders</p>
                    <h3 className="text-2xl font-bold mt-1">8</h3>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Package className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-xs text-green-600">
                  <span className="font-medium">+2 new</span>
                  <span className="text-slate-500 ml-1">since yesterday</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Pending Payments</p>
                    <h3 className="text-2xl font-bold mt-1">$24,500</h3>
                  </div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Wallet className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-xs text-yellow-600">
                  <span className="font-medium">3 invoices</span>
                  <span className="text-slate-500 ml-1">awaiting payment</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Performance Score</p>
                    <h3 className="text-2xl font-bold mt-1">92%</h3>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-xs text-green-600">
                  <span className="font-medium">+5%</span>
                  <span className="text-slate-500 ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Blockchain Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Smart Contract Status</h3>
                  <Zap className="h-6 w-6" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Active Contracts</span>
                    <span className="font-bold">5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Pending Approvals</span>
                    <span className="font-bold">2</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Total Value Locked</span>
                    <span className="font-bold">$45,750</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-blue-400">
                  <Link href="/vendors/smart-contracts">
                    <Button variant="secondary" className="w-full bg-white text-blue-600 hover:bg-blue-50">
                      Manage Contracts
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-slate-900">Wallet Balance</h3>
                  <Coins className="h-6 w-6 text-yellow-500" />
                </div>
                {walletConnected ? (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">ETH Balance</span>
                      <span className="font-bold">2.45 ETH</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">USDC Balance</span>
                      <span className="font-bold">5,230 USDC</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">PRV Tokens</span>
                      <span className="font-bold">1,500 PRV</span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <Button className="w-full">Manage Funds</Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <Database className="h-12 w-12 text-slate-300 mx-auto mb-3" />
                    <p className="text-slate-500 mb-4">Connect your wallet to view your balance</p>
                    <Button onClick={connectWallet} className="w-full">
                      <Wallet className="h-4 w-4 mr-2" />
                      Connect Wallet
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-slate-900">Security Status</h3>
                  <Shield className="h-6 w-6 text-green-500" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">KYC Verified</p>
                      <p className="text-xs text-slate-500">Completed on Mar 10, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">2FA Enabled</p>
                      <p className="text-xs text-slate-500">Last used 2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                      <AlertCircle className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-medium">Wallet Backup</p>
                      <p className="text-xs text-slate-500">Backup your wallet keys</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity and Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Bid #BID-2023-089 was accepted</p>
                        <p className="text-sm text-slate-500">
                          Your bid for Office Supplies was accepted by Acme Corp.
                        </p>
                        <p className="text-xs text-slate-400 mt-1">Today at 10:30 AM</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center">
                        <Package className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">New purchase order received</p>
                        <p className="text-sm text-slate-500">PO #PO-2023-156 for $12,500 has been issued.</p>
                        <p className="text-xs text-slate-400 mt-1">Yesterday at 2:15 PM</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-yellow-100 flex-shrink-0 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <p className="font-medium">Shipment deadline approaching</p>
                        <p className="text-sm text-slate-500">Order #ORD-2023-042 is due for shipment in 2 days.</p>
                        <p className="text-xs text-slate-400 mt-1">Yesterday at 9:00 AM</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                        <Wallet className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Payment received</p>
                        <p className="text-sm text-slate-500">Invoice #INV-2023-078 for $8,750 has been paid.</p>
                        <p className="text-xs text-slate-400 mt-1">2 days ago</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex-shrink-0 flex items-center justify-center">
                        <Coins className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium">Smart contract executed</p>
                        <p className="text-sm text-slate-500">
                          Contract #SC-2023-015 for Order #ORD-2023-039 was executed successfully.
                        </p>
                        <p className="text-xs text-slate-400 mt-1">3 days ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Link href="/vendors/bids/create">
                      <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700">
                        <Plus className="h-4 w-4 mr-2" />
                        Create New Bid
                      </Button>
                    </Link>

                    <Link href="/vendors/qr-codes/generate">
                      <Button variant="outline" className="w-full justify-start">
                        <QrCode className="h-4 w-4 mr-2" />
                        Generate QR Code
                      </Button>
                    </Link>

                    <Link href="/vendors/invoices/create">
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="h-4 w-4 mr-2" />
                        Create Invoice
                      </Button>
                    </Link>

                    <Link href="/vendors/quality/report">
                      <Button variant="outline" className="w-full justify-start">
                        <FileCheck className="h-4 w-4 mr-2" />
                        Submit Quality Report
                      </Button>
                    </Link>

                    <Link href="/vendors/smart-contracts/create">
                      <Button variant="outline" className="w-full justify-start">
                        <Coins className="h-4 w-4 mr-2" />
                        Create Smart Contract
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader className="pb-2">
                  <CardTitle>Alerts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-yellow-800">Quality Check Required</p>
                          <p className="text-sm text-yellow-700">
                            Order #ORD-2023-042 requires quality verification before shipping.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Bell className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-blue-800">New RFQ Available</p>
                          <p className="text-sm text-blue-700">
                            3 new RFQs matching your profile are available for bidding.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Upcoming Deliveries */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Upcoming Deliveries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-4 font-medium text-slate-500">Order ID</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">Customer</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">Items</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">Value</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">Due Date</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4">
                        <span className="font-medium">#ORD-2023-042</span>
                      </td>
                      <td className="py-3 px-4">TechCorp Inc.</td>
                      <td className="py-3 px-4">Office Supplies</td>
                      <td className="py-3 px-4">$4,250</td>
                      <td className="py-3 px-4">Mar 20, 2025</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                          Preparing
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                          <Button size="sm">Ship</Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4">
                        <span className="font-medium">#ORD-2023-039</span>
                      </td>
                      <td className="py-3 px-4">Global Solutions</td>
                      <td className="py-3 px-4">IT Equipment</td>
                      <td className="py-3 px-4">$12,800</td>
                      <td className="py-3 px-4">Mar 25, 2025</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                          Processing
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                          <Button size="sm" disabled>
                            Ship
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4">
                        <span className="font-medium">#ORD-2023-036</span>
                      </td>
                      <td className="py-3 px-4">Acme Corp</td>
                      <td className="py-3 px-4">Manufacturing Parts</td>
                      <td className="py-3 px-4">$8,750</td>
                      <td className="py-3 px-4">Mar 30, 2025</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                          Ready
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                          <Button size="sm">Ship</Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

// KYC Verification Component
function VendorKYC() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Business Information
    companyName: "",
    businessType: "",
    registrationNumber: "",
    taxId: "",
    yearEstablished: "",

    // Contact Details
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",

    // Financial Information
    bankName: "",
    accountNumber: "",
    routingNumber: "",
    currency: "",

    // Documents
    businessRegistration: null,
    taxCertificate: null,
    identityProof: null,
    bankStatement: null,
  })

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1)
      window.scrollTo(0, 0)
    }
  }

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would submit the form data to your backend
    console.log("Form submitted:", formData)
    // Redirect to dashboard after verification
    window.location.href = "/vendors"
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Vendor Verification</h1>
            <p className="text-slate-600">Complete the verification process to access the vendor dashboard</p>
          </div>

          {/* Progress Steps */}
          <div className="mb-10">
            <div className="flex items-center justify-between">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                      step === i
                        ? "bg-blue-600 text-white"
                        : step > i
                          ? "bg-green-600 text-white"
                          : "bg-white border border-slate-300 text-slate-500"
                    }`}
                  >
                    {step > i ? <CheckCircle2 className="h-5 w-5" /> : i}
                  </div>
                  <span className={`text-sm mt-2 ${step === i ? "text-blue-600 font-medium" : "text-slate-500"}`}>
                    {i === 1 ? "Business Info" : i === 2 ? "Contact Details" : i === 3 ? "Financial Info" : "Documents"}
                  </span>
                </div>
              ))}
            </div>
            <div className="relative mt-3">
              <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200 rounded-full"></div>
              <div
                className="absolute top-0 left-0 h-1 bg-blue-600 rounded-full transition-all duration-300"
                style={{ width: `${((step - 1) / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Business Information */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold text-slate-900 mb-6">Business Information</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Company Name *</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter company name"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Business Type *</label>
                        <select
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="">Select business type</option>
                          <option value="corporation">Corporation</option>
                          <option value="llc">Limited Liability Company (LLC)</option>
                          <option value="partnership">Partnership</option>
                          <option value="sole-proprietorship">Sole Proprietorship</option>
                          <option value="non-profit">Non-Profit Organization</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Registration Number *</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter registration number"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Tax ID / VAT Number *</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter tax ID"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Year Established</label>
                        <input
                          type="number"
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="YYYY"
                          min="1900"
                          max={new Date().getFullYear()}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Number of Employees</label>
                        <select className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <option value="">Select range</option>
                          <option value="1-10">1-10</option>
                          <option value="11-50">11-50</option>
                          <option value="51-200">51-200</option>
                          <option value="201-500">201-500</option>
                          <option value="501+">501+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Business Description</label>
                      <textarea
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Briefly describe your business and the products/services you offer"
                        rows={4}
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Business Email *</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter business email"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Contact Details */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold text-slate-900 mb-6">Contact Details</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Primary Contact Name *</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter full name"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Job Title *</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter job title"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter email address"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter phone number"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Alternative Email</label>
                        <input
                          type="email"
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter alternative email"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Alternative Phone</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter alternative phone"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Street Address *</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter street address"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">City *</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter city"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">State/Province *</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter state/province"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Postal/ZIP Code *</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter postal/ZIP code"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Country *</label>
                        <select
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="">Select country</option>
                          <option value="us">United States</option>
                          <option value="ca">Canada</option>
                          <option value="uk">United Kingdom</option>
                          <option value="au">Australia</option>
                          <option value="in">India</option>
                          {/* More countries would be added here */}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Website</label>
                      <input
                        type="url"
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="https://www.example.com"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Financial Information */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold text-slate-900 mb-6">Financial Information</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Bank Name *</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter bank name"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Account Holder Name *</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter account holder name"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Account Number *</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter account number"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Routing/SWIFT Number *</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter routing/SWIFT number"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Currency *</label>
                        <select
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="">Select currency</option>
                          <option value="usd">USD - US Dollar</option>
                          <option value="eur">EUR - Euro</option>
                          <option value="gbp">GBP - British Pound</option>
                          <option value="cad">CAD - Canadian Dollar</option>
                          <option value="inr">INR - Indian Rupee</option>
                          {/* More currencies would be added here */}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Tax Withholding</label>
                        <select className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <option value="no">No Tax Withholding</option>
                          <option value="yes">Apply Tax Withholding</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Payment Terms</label>
                      <select className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select payment terms</option>
                        <option value="net15">Net 15</option>
                        <option value="net30">Net 30</option>
                        <option value="net45">Net 45</option>
                        <option value="net60">Net 60</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Wallet Address (Optional)</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter blockchain wallet address"
                      />
                      <p className="text-xs text-slate-500 mt-1">For receiving payments via blockchain</p>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Note:</strong> Your financial information is encrypted and securely stored. We comply
                        with all relevant data protection regulations.
                      </p>
                    </div>
                  </div>
                )}

                {/* Step 4: Document Verification */}
                {step === 4 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold text-slate-900 mb-6">Document Verification</h2>

                    <div className="space-y-6">
                      <div className="border border-slate-200 rounded-lg p-4">
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Business Registration Certificate *
                        </label>
                        <div className="flex items-center justify-center border-2 border-dashed border-slate-300 rounded-lg p-6 bg-slate-50">
                          <div className="text-center">
                            <div className="mb-3">
                              <svg
                                className="mx-auto h-12 w-12 text-slate-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                              >
                                <path
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <div className="flex text-sm text-slate-600">
                              <label
                                htmlFor="file-upload-1"
                                className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                              >
                                <span>Upload a file</span>
                                <input
                                  id="file-upload-1"
                                  name="file-upload-1"
                                  type="file"
                                  className="sr-only"
                                  required
                                />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-slate-500">PDF, JPG, or PNG up to 10MB</p>
                          </div>
                        </div>
                      </div>

                      <div className="border border-slate-200 rounded-lg p-4">
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Tax Registration Certificate *
                        </label>
                        <div className="flex items-center justify-center border-2 border-dashed border-slate-300 rounded-lg p-6 bg-slate-50">
                          <div className="text-center">
                            <div className="mb-3">
                              <svg
                                className="mx-auto h-12 w-12 text-slate-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                              >
                                <path
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <div className="flex text-sm text-slate-600">
                              <label
                                htmlFor="file-upload-2"
                                className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                              >
                                <span>Upload a file</span>
                                <input
                                  id="file-upload-2"
                                  name="file-upload-2"
                                  type="file"
                                  className="sr-only"
                                  required
                                />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-slate-500">PDF, JPG, or PNG up to 10MB</p>
                          </div>
                        </div>
                      </div>

                      <div className="border border-slate-200 rounded-lg p-4">
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Identity Proof (Government ID) *
                        </label>
                        <div className="flex items-center justify-center border-2 border-dashed border-slate-300 rounded-lg p-6 bg-slate-50">
                          <div className="text-center">
                            <div className="mb-3">
                              <svg
                                className="mx-auto h-12 w-12 text-slate-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                              >
                                <path
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <div className="flex text-sm text-slate-600">
                              <label
                                htmlFor="file-upload-3"
                                className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                              >
                                <span>Upload a file</span>
                                <input
                                  id="file-upload-3"
                                  name="file-upload-3"
                                  type="file"
                                  className="sr-only"
                                  required
                                />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-slate-500">PDF, JPG, or PNG up to 10MB</p>
                          </div>
                        </div>
                      </div>

                      <div className="border border-slate-200 rounded-lg p-4">
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Bank Statement (Last 3 months)
                        </label>
                        <div className="flex items-center justify-center border-2 border-dashed border-slate-300 rounded-lg p-6 bg-slate-50">
                          <div className="text-center">
                            <div className="mb-3">
                              <svg
                                className="mx-auto h-12 w-12 text-slate-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                              >
                                <path
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <div className="flex text-sm text-slate-600">
                              <label
                                htmlFor="file-upload-4"
                                className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                              >
                                <span>Upload a file</span>
                                <input id="file-upload-4" name="file-upload-4" type="file" className="sr-only" />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-slate-500">PDF, JPG, or PNG up to 10MB</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <input type="checkbox" id="terms" className="mt-1" required />
                      <label htmlFor="terms" className="text-sm text-slate-700">
                        I certify that all information provided is accurate and complete. I understand that providing
                        false information may result in rejection of my application or termination of my vendor account.
                      </label>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-10">
                  {step > 1 ? (
                    <Button type="button" variant="outline" onClick={handlePrevious}>
                      Previous
                    </Button>
                  ) : (
                    <div></div>
                  )}

                  {step < 4 ? (
                    <Button type="button" onClick={handleNext}>
                      Next
                    </Button>
                  ) : (
                    <Button type="submit" className="bg-green-600 hover:bg-green-700">
                      Submit for Verification
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

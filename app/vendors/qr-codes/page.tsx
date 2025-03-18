"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, ShoppingBag, Package, Truck, QrCode, FileText, Wallet, FileCheck, Users, Settings, LogOut, Bell, Search, Download, Share2, Printer, Eye, Plus, Coins, Filter, Calendar } from 'lucide-react'

export default function VendorQRCodes() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [walletConnected, setWalletConnected] = useState(false)
  
  const connectWallet = () => {
    setWalletConnected(!walletConnected)
  }
  
  // Dummy data for QR codes
  const qrCodes = [
    {
      id: 'QR-2023-156',
      orderId: 'PO-2023-156',
      title: 'Office Supplies for Q2',
      company: 'Acme Corp',
      date: '2025-03-15',
      type: 'shipment',
      status: 'active',
      hasBlockchainVerification: true,
      qrImage: `/placeholder.svg?height=200&width=200`,
      data: {
        trackingNumber: 'TRK1234567890',
        items: 'Desk organizers, paper supplies, printer cartridges',
        destination: '123 Corporate Ave, New York, NY 10001'
      }
    },
    {
      id: 'QR-2023-155',
      orderId: 'PO-2023-155',
      title: 'IT Equipment for New Office',
      company: 'TechCorp Inc.',
      date: '2025-03-14',
      type: 'product',
      status: 'active',
      hasBlockchainVerification: false,
      qrImage: `/placeholder.svg?height=200&width=200`,
      data: {
        serialNumbers: ['SN12345', 'SN12346', 'SN12347'],
        warranty: '3 years',
        specifications: 'Dell XPS 15, 32GB RAM, 1TB SSD'
      }
    },
    {
      id: 'QR-2023-154',
      orderId: 'PO-2023-154',
      title: 'Manufacturing Parts Batch #45',
      company: 'Global Solutions',
      date: '2025-03-12',
      type: 'shipment',
      status: 'active',
      hasBlockchainVerification: true,
      qrImage: `/placeholder.svg?height=200&width=200`,
      data: {
        trackingNumber: 'TRK9876543210',
        items: 'Custom metal parts, fasteners, connectors',
        destination: '789 Industrial Pkwy, Chicago, IL 60607'
      }
    },
    {
      id: 'QR-2023-153',
      orderId: 'PO-2023-153',
      title: 'Marketing Materials for Trade Show',
      company: 'Innovate LLC',
      date: '2025-03-10',
      type: 'marketing',
      status: 'active',
      hasBlockchainVerification: false,
      qrImage: `/placeholder.svg?height=200&width=200`,
      data: {
        event: 'Tech Expo 2025',
        location: 'Las Vegas Convention Center',
        contactPerson: 'John Smith, Marketing Director'
      }
    },
    {
      id: 'QR-2023-152',
      orderId: 'PO-2023-152',
      title: 'Office Furniture for Executive Suite',
      company: 'Acme Corp',
      date: '2025-03-08',
      type: 'product',
      status: 'active',
      hasBlockchainVerification: true,
      qrImage: `/placeholder.svg?height=200&width=200`,
      data: {
        manufacturer: 'Executive Furnishings Inc.',
        materials: 'Solid oak, leather upholstery',
        assemblyInstructions: 'https://example.com/assembly/EF-2023-42'
      }
    },
    {
      id: 'QR-2023-151',
      orderId: 'PO-2023-151',
      title: 'Software Licenses Annual Renewal',
      company: 'TechCorp Inc.',
      date: '2025-03-05',
      type: 'digital',
      status: 'expired',
      hasBlockchainVerification: false,
      qrImage: `/placeholder.svg?height=200&width=200`,
      data: {
        licenseKeys: ['XXX-YYY-ZZZ-123', 'XXX-YYY-ZZZ-124'],
        validUntil: '2026-03-05',
        supportContact: 'support@techcorp.example'
      }
    },
    {
      id: 'QR-2023-150',
      orderId: 'PO-2023-150',
      title: 'Catering Services for Annual Meeting',
      company: 'Global Solutions',
      date: '2025-03-03',
      type: 'service',
      status: 'expired',
      hasBlockchainVerification: false,
      qrImage: `/placeholder.svg?height=200&width=200`,
      data: {
        menu: 'Full-service buffet, beverages, desserts',
        attendees: '150 people',
        dietaryRestrictions: 'Vegetarian, gluten-free, and nut-free options available'
      }
    },
    {
      id: 'QR-2023-149',
      orderId: 'PO-2023-149',
      title: 'Safety Equipment for Factory Floor',
      company: 'Innovate LLC',
      date: '2025-03-01',
      type: 'product',
      status: 'active',
      hasBlockchainVerification: true,
      qrImage: `/placeholder.svg?height=200&width=200`,
      data: {
        certifications: 'OSHA Compliant, ANSI Certified',
        inspectionDate: '2025-02-28',
        replacementSchedule: 'Annual inspection required'
      }
    }
  ]
  
  // Filter QR codes based on search query and type filter
  const filteredQRCodes = qrCodes.filter(qrCode => {
    const matchesSearch = qrCode.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         qrCode.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         qrCode.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         qrCode.orderId.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesType = filterType === 'all' || qrCode.type === filterType
    
    return matchesSearch && matchesType
  })
  
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Vendor Dashboard Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 pt-16">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-900">QR Codes</h1>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-slate-500 hover:text-blue-600 transition-colors">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <Button 
                variant="outline" 
                className={`font-medium ${walletConnected ? 'border-green-500 text-green-600' : 'border-blue-500 text-blue-600'} hover:bg-blue-50 flex items-center gap-2`}
                onClick={connectWallet}
              >
                <Wallet className="h-4 w-4" />
                {walletConnected ? 'Wallet Connected' : 'Connect Wallet'}
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
                <Link href="/vendors" className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 transition-colors">
                  <Home className="h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link href="/vendors/bids" className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 transition-colors">
                  <ShoppingBag className="h-5 w-5" />
                  <span>Bids</span>
                </Link>
              </li>
              <li>
                <Link href="/vendors/orders" className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 transition-colors">
                  <Package className="h-5 w-5" />
                  <span>Orders</span>
                </Link>
              </li>
              <li>
                <Link href="/vendors/shipments" className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 transition-colors">
                  <Truck className="h-5 w-5" />
                  <span>Shipments</span>
                </Link>
              </li>
              <li>
                <Link href="/vendors/qr-codes" className="flex items-center gap-3 px-3 py-2 rounded-md bg-blue-50 text-blue-600 font-medium">
                  <QrCode className="h-5 w-5" />
                  <span>QR Codes</span>
                </Link>
              </li>
              <li>
                <Link href="/vendors/invoices" className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 transition-colors">
                  <FileText className="h-5 w-5" />
                  <span>Invoices</span>
                </Link>
              </li>
              <li>
                <Link href="/vendors/payments" className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 transition-colors">
                  <Wallet className="h-5 w-5" />
                  <span>Payments</span>
                </Link>
              </li>
              <li>
                <Link href="/vendors/quality" className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 transition-colors">
                  <FileCheck className="h-5 w-5" />
                  <span>Quality Assurance</span>
                </Link>
              </li>
              <li>
                <Link href="/vendors/profile" className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 transition-colors">
                  <Users className="h-5 w-5" />
                  <span>Company Profile</span>
                </Link>
              </li>
              <li>
                <Link href="/vendors/smart-contracts" className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 transition-colors">
                  <Coins className="h-5 w-5" />
                  <span>Smart Contracts</span>
                </Link>
              </li>
            </ul>
            
            <div className="mt-8 pt-4 border-t border-slate-200">
              <ul className="space-y-1">
                <li>
                  <Link href="/vendors/settings" className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 transition-colors">
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
              <h2 className="text-xl font-bold text-slate-900">QR Code Management</h2>
              <p className="text-slate-500">Generate and manage QR codes for your orders and products</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search QR codes..." 
                  className="pl-9 pr-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <select 
                className="px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="shipment">Shipment</option>
                <option value="product">Product</option>
                <option value="digital">Digital</option>
                <option value="marketing">Marketing</option>
                <option value="service">Service</option>
              </select>
              
              <Link href="/vendors/qr-codes/generate">
                <Button className="whitespace-nowrap">
                  <Plus className="h-4 w-4 mr-2" />
                  Generate QR Code
                </Button>
              </Link>
            </div>
          </div>
          
          {/* QR Code Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredQRCodes.length > 0 ? (
              filteredQRCodes.map((qrCode) => (
                <Card key={qrCode.id} className="shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-medium text-slate-900 truncate max-w-[180px]" title={qrCode.title}>
                          {qrCode.title}
                        </h3>
                        <p className="text-sm text-slate-500">{qrCode.company}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {qrCode.hasBlockchainVerification && (
                          <div className="p-1 bg-blue-100 rounded-full" title="Blockchain Verified">
                            <Coins className="h-4 w-4 text-blue-600" />
                          </div>
                        )}
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                          qrCode.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {qrCode.status === 'active' ? 'Active' : 'Expired'}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center mb-4">
                      <div className="bg-white p-2 border border-slate-200 rounded-lg">
                        <Image 
                          src={qrCode.qrImage || "/placeholder.svg"} 
                          alt={`QR Code for ${qrCode.title}`} 
                          width={150} 
                          height={150}
                          className="mx-auto"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">QR Code ID:</span>
                        <span className="font-medium">{qrCode.id}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Order ID:</span>
                        <span className="font-medium">{qrCode.orderId}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Type:</span>
                        <span className="font-medium capitalize">{qrCode.type}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Created:</span>
                        <span className="font-medium">{new Date(qrCode.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Share2 className="h-4 w-4 mr-1" />
                        Share
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                <QrCode className="h-16 w-16 text-slate-300 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-2">No QR Codes Found</h3>
                <p className="text-slate-500 mb-6 max-w-md">
                  No QR codes match your current search criteria. Try adjusting your filters or create a new QR code.
                </p>
                <Link href="/vendors/qr-codes/generate">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Generate QR Code
                  </Button>
                </Link>
              </div>
            )}
          </div>
          
          {/* QR Code Usage Guide */}
          <Card className="shadow-sm mt-8">
            <CardHeader className="pb-2">
              <CardTitle>QR Code Usage Guide</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <QrCode className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2">Generate</h3>
                  <p className="text-slate-600 text-sm">
                    Create QR codes for shipments, products, or digital assets. Link them to orders for easy tracking.
                  </p>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Printer className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2">Print & Attach</h3>
                  <p className="text-slate-600 text-sm">
                    Download and print QR codes to attach to physical shipments, products, or marketing materials.
                  </p>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Share2 className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2">Share</h3>
                  <p className="text-slate-600 text-sm">
                    Share QR codes digitally with clients for easy access to order information and tracking details.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-2">QR Code Best Practices</h3>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Use high-contrast colors for better scanning (black on white is best)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Include a minimum 1/4 inch (6.35mm) quiet zone around the QR code</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Test QR codes before distributing to ensure they scan properly</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>For blockchain verification, ensure your wallet is connected</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Update QR codes when order information changes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

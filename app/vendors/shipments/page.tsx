"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, ShoppingBag, Package, Truck, QrCode, FileText, Wallet, FileCheck, Users, Settings, LogOut, Bell, Search, ArrowUpDown, Eye, Download, CheckCircle2, Clock, AlertCircle, Coins, MapPin, Calendar, BarChart3, Filter } from 'lucide-react'

export default function VendorShipments() {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('date')
  const [sortOrder, setSortOrder] = useState('desc')
  const [walletConnected, setWalletConnected] = useState(false)
  const [filterStatus, setFilterStatus] = useState('all')
  
  const connectWallet = () => {
    setWalletConnected(!walletConnected)
  }
  
  // Dummy data for shipments
  const shipments = [
    {
      id: 'SHP-2023-156',
      orderId: 'PO-2023-156',
      title: 'Office Supplies for Q2',
      company: 'Acme Corp',
      date: '2025-03-15',
      deliveryDate: '2025-03-22',
      status: 'in-transit',
      trackingNumber: 'TRK1234567890',
      carrier: 'FedEx',
      destination: '123 Corporate Ave, New York, NY 10001',
      items: 'Desk organizers, paper supplies, printer cartridges',
      hasQrCode: true,
      hasBlockchainVerification: true
    },
    {
      id: 'SHP-2023-155',
      orderId: 'PO-2023-155',
      title: 'IT Equipment for New Office',
      company: 'TechCorp Inc.',
      date: '2025-03-14',
      deliveryDate: '2025-03-25',
      status: 'preparing',
      trackingNumber: '',
      carrier: 'UPS',
      destination: '456 Tech Blvd, San Francisco, CA 94105',
      items: 'Laptops, monitors, keyboards, mice',
      hasQrCode: true,
      hasBlockchainVerification: false
    },
    {
      id: 'SHP-2023-154',
      orderId: 'PO-2023-154',
      title: 'Manufacturing Parts Batch #45',
      company: 'Global Solutions',
      date: '2025-03-12',
      deliveryDate: '2025-03-18',
      status: 'delivered',
      trackingNumber: 'TRK9876543210',
      carrier: 'DHL',
      destination: '789 Industrial Pkwy, Chicago, IL 60607',
      items: 'Custom metal parts, fasteners, connectors',
      hasQrCode: true,
      hasBlockchainVerification: true
    },
    {
      id: 'SHP-2023-153',
      orderId: 'PO-2023-153',
      title: 'Marketing Materials for Trade Show',
      company: 'Innovate LLC',
      date: '2025-03-10',
      deliveryDate: '2025-03-15',
      status: 'delivered',
      trackingNumber: 'TRK5678901234',
      carrier: 'USPS',
      destination: '101 Convention Center Dr, Las Vegas, NV 89109',
      items: 'Brochures, banners, promotional items',
      hasQrCode: true,
      hasBlockchainVerification: false
    },
    {
      id: 'SHP-2023-152',
      orderId: 'PO-2023-152',
      title: 'Office Furniture for Executive Suite',
      company: 'Acme Corp',
      date: '2025-03-08',
      deliveryDate: '2025-04-05',
      status: 'scheduled',
      trackingNumber: '',
      carrier: 'Freight Logistics',
      destination: '123 Corporate Ave, New York, NY 10001',
      items: 'Executive desks, chairs, conference table',
      hasQrCode: false,
      hasBlockchainVerification: true
    },
    {
      id: 'SHP-2023-151',
      orderId: 'PO-2023-151',
      title: 'Software Licenses Annual Renewal',
      company: 'TechCorp Inc.',
      date: '2025-03-05',
      deliveryDate: '2025-03-10',
      status: 'delivered',
      trackingNumber: 'TRK2345678901',
      carrier: 'Digital Delivery',
      destination: '456 Tech Blvd, San Francisco, CA 94105',
      items: 'Enterprise software licenses, support packages',
      hasQrCode: true,
      hasBlockchainVerification: false
    },
    {
      id: 'SHP-2023-150',
      orderId: 'PO-2023-150',
      title: 'Catering Services for Annual Meeting',
      company: 'Global Solutions',
      date: '2025-03-03',
      deliveryDate: '2025-03-15',
      status: 'delivered',
      trackingNumber: 'TRK3456789012',
      carrier: 'Catering Express',
      destination: '789 Industrial Pkwy, Chicago, IL 60607',
      items: 'Full-service catering for 150 people',
      hasQrCode: true,
      hasBlockchainVerification: false
    },
    {
      id: 'SHP-2023-149',
      orderId: 'PO-2023-149',
      title: 'Safety Equipment for Factory Floor',
      company: 'Innovate LLC',
      date: '2025-03-01',
      deliveryDate: '2025-03-12',
      status: 'in-transit',
      trackingNumber: 'TRK4567890123',
      carrier: 'FedEx',
      destination: '101 Manufacturing Way, Detroit, MI 48201',
      items: 'Safety helmets, vests, gloves, eyewear',
      hasQrCode: true,
      hasBlockchainVerification: true
    }
  ]
  
  // Filter shipments based on search query and status filter
  const filteredShipments = shipments.filter(shipment => {
    const matchesSearch = shipment.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         shipment.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         shipment.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         shipment.orderId.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesStatus = filterStatus === 'all' || shipment.status === filterStatus
    
    return matchesSearch && matchesStatus
  })
  
  // Sort shipments
  const sortedShipments = [...filteredShipments].sort((a, b) => {
    let comparison = 0
    
    if (sortBy === 'date') {
      comparison = new Date(a.date).getTime() - new Date(b.date).getTime()
    } else if (sortBy === 'deliveryDate') {
      comparison = new Date(a.deliveryDate).getTime() - new Date(b.deliveryDate).getTime()
    } else if (sortBy === 'company') {
      comparison = a.company.localeCompare(b.company)
    } else if (sortBy === 'status') {
      comparison = a.status.localeCompare(b.status)
    }
    
    return sortOrder === 'asc' ? comparison : -comparison
  })
  
  const toggleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(field)
      setSortOrder('desc')
    }
  }
  
  // Get status badge
  const getStatusBadge = (status) => {
    switch (status) {
      case 'preparing':
        return (
          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium flex items-center w-fit">
            <Package className="h-3 w-3 mr-1" />
            Preparing
          </span>
        )
      case 'scheduled':
        return (
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium flex items-center w-fit">
            <Calendar className="h-3 w-3 mr-1" />
            Scheduled
          </span>
        )
      case 'in-transit':
        return (
          <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium flex items-center w-fit">
            <Truck className="h-3 w-3 mr-1" />
            In Transit
          </span>
        )
      case 'delivered':
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
            <h1 className="text-2xl font-bold text-slate-900">Shipments</h1>
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
                <Link href="/vendors/shipments" className="flex items-center gap-3 px-3 py-2 rounded-md bg-blue-50 text-blue-600 font-medium">
                  <Truck className="h-5 w-5" />
                  <span>Shipments</span>
                </Link>
              </li>
              <li>
                <Link href="/vendors/qr-codes" className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 transition-colors">
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
              <h2 className="text-xl font-bold text-slate-900">Manage Shipments</h2>
              <p className="text-slate-500">Track and manage all your shipments</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search shipments..." 
                  className="pl-9 pr-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <select 
                className="px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="preparing">Preparing</option>
                <option value="scheduled">Scheduled</option>
                <option value="in-transit">In Transit</option>
                <option value="delivered">Delivered</option>
              </select>
              
              <Link href="/vendors/qr-codes/generate">
                <Button className="whitespace-nowrap">
                  <QrCode className="h-4 w-4 mr-2" />
                  Generate QR Code
                </Button>
              </Link>
            </div>
          </div>
          
          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle>Your Shipments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-4 font-medium text-slate-500">
                        <button 
                          className="flex items-center gap-1"
                          onClick={() => toggleSort('id')}
                        >
                          Shipment ID
                          {sortBy === 'id' && (
                            <ArrowUpDown className="h-4 w-4" />
                          )}
                        </button>
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">Order ID</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">
                        <button 
                          className="flex items-center gap-1"
                          onClick={() => toggleSort('company')}
                        >
                          Company
                          {sortBy === 'company' && (
                            <ArrowUpDown className="h-4 w-4" />
                          )}
                        </button>
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">
                        <button 
                          className="flex items-center gap-1"
                          onClick={() => toggleSort('date')}
                        >
                          Ship Date
                          {sortBy === 'date' && (
                            <ArrowUpDown className="h-4 w-4" />
                          )}
                        </button>
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">
                        <button 
                          className="flex items-center gap-1"
                          onClick={() => toggleSort('deliveryDate')}
                        >
                          Delivery Date
                          {sortBy === 'deliveryDate' && (
                            <ArrowUpDown className="h-4 w-4" />
                          )}
                        </button>
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">
                        <button 
                          className="flex items-center gap-1"
                          onClick={() => toggleSort('status')}
                        >
                          Status
                          {sortBy === 'status' && (
                            <ArrowUpDown className="h-4 w-4" />
                          )}
                        </button>
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedShipments.length > 0 ? (
                      sortedShipments.map((shipment) => (
                        <tr key={shipment.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{shipment.id}</span>
                              {shipment.hasBlockchainVerification && (
                                <Coins className="h-4 w-4 text-blue-500" title="Blockchain Verified" />
                              )}
                            </div>
                          </td>
                          <td className="py-3 px-4">{shipment.orderId}</td>
                          <td className="py-3 px-4">{shipment.company}</td>
                          <td className="py-3 px-4">{new Date(shipment.date).toLocaleDateString()}</td>
                          <td className="py-3 px-4">{new Date(shipment.deliveryDate).toLocaleDateString()}</td>
                          <td className="py-3 px-4">
                            {getStatusBadge(shipment.status)}
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              {shipment.hasQrCode && (
                                <Button variant="outline" size="sm">
                                  <QrCode className="h-4 w-4" />
                                </Button>
                              )}
                              {shipment.trackingNumber && (
                                <Button variant="outline" size="sm">
                                  <Truck className="h-4 w-4" />
                                </Button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={7} className="py-8 text-center text-slate-500">
                          No shipments found matching your criteria
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
                  <h3 className="text-lg font-semibold text-slate-900">Shipment Summary</h3>
                  <Truck className="h-5 w-5 text-blue-500" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Total Shipments</span>
                    <span className="font-bold">{shipments.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Preparing</span>
                    <span className="font-bold">{shipments.filter(s => s.status === 'preparing').length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Scheduled</span>
                    <span className="font-bold">{shipments.filter(s => s.status === 'scheduled').length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">In Transit</span>
                    <span className="font-bold">{shipments.filter(s => s.status === 'in-transit').length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Delivered</span>
                    <span className="font-bold">{shipments.filter(s => s.status === 'delivered').length}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-slate-900">Delivery Performance</h3>
                  <BarChart3 className="h-5 w-5 text-green-500" />
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-slate-600">On-Time Delivery Rate</span>
                      <span className="font-bold">92%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-slate-600">Average Transit Time</span>
                      <span className="font-bold">3.2 days</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '64%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-slate-600">Damage-Free Delivery</span>
                      <span className="font-bold">99.5%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '99.5%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-slate-600">Customer Satisfaction</span>
                      <span className="font-bold">4.8/5</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '96%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-slate-900">Upcoming Deliveries</h3>
                  <Calendar className="h-5 w-5 text-red-500" />
                </div>
                <div className="space-y-3">
                  {shipments
                    .filter(s => s.status === 'in-transit' || s.status === 'scheduled')
                    .sort((a, b) => new Date(a.deliveryDate).getTime() - new Date(b.deliveryDate).getTime())
                    .slice(0, 3)
                    .map(shipment => (
                      <div key={shipment.id} className="p-3 bg-slate-50 rounded-lg">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{shipment.title}</p>
                          {getStatusBadge(shipment.status)}
                        </div>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-sm text-slate-500">{shipment.company}</span>
                          <span className="text-sm font-medium">
                            Due: {new Date(shipment.deliveryDate).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="mt-2 text-sm text-slate-500 flex items-center">
                          <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                          <span className="truncate">{shipment.destination}</span>
                        </div>
                      </div>
                    ))}
                  
                  {shipments.filter(s => s.status === 'in-transit' || s.status === 'scheduled').length === 0 && (
                    <div className="p-4 text-center text-slate-500">
                      <CheckCircle2 className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <p>No upcoming deliveries</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-8">
            <CardHeader className="pb-2">
              <CardTitle>Shipment Map</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-100 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-blue-500 mx-auto mb-3" />
                  <p className="text-slate-600 font-medium">Interactive shipment map coming soon</p>
                  <p className="text-slate-500 text-sm mt-1">Track all your shipments in real-time</p>
                  <Button className="mt-4">
                    Enable Location Tracking
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, ShoppingBag, Package, Truck, QrCode, FileText, Wallet, FileCheck, Users, Settings, LogOut, Bell, Search, ArrowUpDown, Eye, Download, CheckCircle2, Clock, AlertCircle, Coins, DollarSign, CreditCard, BarChart3, Calendar, Filter } from 'lucide-react'

export default function VendorPayments() {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('date')
  const [sortOrder, setSortOrder] = useState('desc')
  const [walletConnected, setWalletConnected] = useState(false)
  const [filterStatus, setFilterStatus] = useState('all')
  
  const connectWallet = () => {
    setWalletConnected(!walletConnected)
  }
  
  // Dummy data for payments
  const payments = [
    {
      id: 'PAY-2023-156',
      orderId: 'PO-2023-156',
      invoiceId: 'INV-2023-156',
      title: 'Office Supplies for Q2',
      company: 'Acme Corp',
      date: '2025-03-15',
      amount: 12500,
      status: 'pending',
      dueDate: '2025-03-30',
      method: 'bank-transfer',
      hasBlockchainVerification: true
    },
    {
      id: 'PAY-2023-155',
      orderId: 'PO-2023-155',
      invoiceId: 'INV-2023-155',
      title: 'IT Equipment for New Office',
      company: 'TechCorp Inc.',
      date: '2025-03-14',
      amount: 28750,
      status: 'processing',
      dueDate: '2025-04-05',
      method: 'credit-card',
      hasBlockchainVerification: false
    },
    {
      id: 'PAY-2023-154',
      orderId: 'PO-2023-154',
      invoiceId: 'INV-2023-154',
      title: 'Manufacturing Parts Batch #45',
      company: 'Global Solutions',
      date: '2025-03-12',
      amount: 18900,
      status: 'completed',
      dueDate: '2025-03-25',
      method: 'bank-transfer',
      hasBlockchainVerification: true
    },
    {
      id: 'PAY-2023-153',
      orderId: 'PO-2023-153',
      invoiceId: 'INV-2023-153',
      title: 'Marketing Materials for Trade Show',
      company: 'Innovate LLC',
      date: '2025-03-10',
      amount: 4250,
      status: 'completed',
      dueDate: '2025-03-20',
      method: 'credit-card',
      hasBlockchainVerification: false
    },
    {
      id: 'PAY-2023-152',
      orderId: 'PO-2023-152',
      invoiceId: 'INV-2023-152',
      title: 'Office Furniture for Executive Suite',
      company: 'Acme Corp',
      date: '2025-03-08',
      amount: 32500,
      status: 'pending',
      dueDate: '2025-04-10',
      method: 'crypto',
      hasBlockchainVerification: true
    },
    {
      id: 'PAY-2023-151',
      orderId: 'PO-2023-151',
      invoiceId: 'INV-2023-151',
      title: 'Software Licenses Annual Renewal',
      company: 'TechCorp Inc.',
      date: '2025-03-05',
      amount: 15800,
      status: 'processing',
      dueDate: '2025-03-25',
      method: 'bank-transfer',
      hasBlockchainVerification: false
    },
    {
      id: 'PAY-2023-150',
      orderId: 'PO-2023-150',
      invoiceId: 'INV-2023-150',
      title: 'Catering Services for Annual Meeting',
      company: 'Global Solutions',
      date: '2025-03-03',
      amount: 7500,
      status: 'completed',
      dueDate: '2025-03-15',
      method: 'credit-card',
      hasBlockchainVerification: false
    },
    {
      id: 'PAY-2023-149',
      orderId: 'PO-2023-149',
      invoiceId: 'INV-2023-149',
      title: 'Safety Equipment for Factory Floor',
      company: 'Innovate LLC',
      date: '2025-03-01',
      amount: 9200,
      status: 'overdue',
      dueDate: '2025-03-18',
      method: 'bank-transfer',
      hasBlockchainVerification: true
    }
  ]
  
  // Filter payments based on search query and status filter
  const filteredPayments = payments.filter(payment => {
    const matchesSearch = payment.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         payment.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         payment.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         payment.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         payment.invoiceId.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesStatus = filterStatus === 'all' || payment.status === filterStatus
    
    return matchesSearch && matchesStatus
  })
  
  // Sort payments
  const sortedPayments = [...filteredPayments].sort((a, b) => {
    let comparison = 0
    
    if (sortBy === 'date') {
      comparison = new Date(a.date).getTime() - new Date(b.date).getTime()
    } else if (sortBy === 'amount') {
      comparison = a.amount - b.amount
    } else if (sortBy === 'dueDate') {
      comparison = new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
    } else if (sortBy === 'company') {
      comparison = a.company.localeCompare(b.company)
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
      case 'pending':
        return (
          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium flex items-center w-fit">
            <Clock className="h-3 w-3 mr-1" />
            Pending
          </span>
        )
      case 'processing':
        return (
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium flex items-center w-fit">
            <CreditCard className="h-3 w-3 mr-1" />
            Processing
          </span>
        )
      case 'completed':
        return (
          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium flex items-center w-fit">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            Completed
          </span>
        )
      case 'overdue':
        return (
          <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium flex items-center w-fit">
            <AlertCircle className="h-3 w-3 mr-1" />
            Overdue
          </span>
        )
      default:
        return null
    }
  }
  
  // Get payment method icon
  const getPaymentMethodIcon = (method) => {
    switch (method) {
      case 'bank-transfer':
        return <DollarSign className="h-4 w-4 text-blue-600" />
      case 'credit-card':
        return <CreditCard className="h-4 w-4 text-purple-600" />
      case 'crypto':
        return <Coins className="h-4 w-4 text-green-600" />
      default:
        return null
    }
  }
  
  // Calculate total amounts
  const totalPending = payments
    .filter(p => p.status === 'pending' || p.status === 'processing')
    .reduce((sum, p) => sum + p.amount, 0)
  
  const totalCompleted = payments
    .filter(p => p.status === 'completed')
    .reduce((sum, p) => sum + p.amount, 0)
  
  const totalOverdue = payments
    .filter(p => p.status === 'overdue')
    .reduce((sum, p) => sum + p.amount, 0)
  
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Vendor Dashboard Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 pt-16">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-900">Payments</h1>
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
                <Link href="/vendors/payments" className="flex items-center gap-3 px-3 py-2 rounded-md bg-blue-50 text-blue-600 font-medium">
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
              <h2 className="text-xl font-bold text-slate-900">Payment Management</h2>
              <p className="text-slate-500">Track and manage all your payments</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search payments..." 
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
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="completed">Completed</option>
                <option value="overdue">Overdue</option>
              </select>
              
              <Button className="whitespace-nowrap">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
          
          {/* Payment Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Total Payments</p>
                    <h3 className="text-2xl font-bold mt-1">${(totalPending + totalCompleted + totalOverdue).toLocaleString()}</h3>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-xs text-blue-600">
                  <span className="font-medium">{payments.length} payments</span>
                  <span className="text-slate-500 ml-1">in total</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Pending</p>
                    <h3 className="text-2xl font-bold mt-1">${totalPending.toLocaleString()}</h3>
                  </div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-xs text-yellow-600">
                  <span className="font-medium">{payments.filter(p => p.status === 'pending' || p.status === 'processing').length} payments</span>
                  <span className="text-slate-500 ml-1">awaiting completion</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Completed</p>
                    <h3 className="text-2xl font-bold mt-1">${totalCompleted.toLocaleString()}</h3>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-xs text-green-600">
                  <span className="font-medium">{payments.filter(p => p.status === 'completed').length} payments</span>
                  <span className="text-slate-500 ml-1">successfully processed</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Overdue</p>
                    <h3 className="text-2xl font-bold mt-1">${totalOverdue.toLocaleString()}</h3>
                  </div>
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <AlertCircle className="h-6 w-6 text-red-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-xs text-red-600">
                  <span className="font-medium">{payments.filter(p => p.status === 'overdue').length} payments</span>
                  <span className="text-slate-500 ml-1">past due date</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Payments Table */}
          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle>Payment History</CardTitle>
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
                          Payment ID
                          {sortBy === 'id' && (
                            <ArrowUpDown className="h-4 w-4" />
                          )}
                        </button>
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">Order ID</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">Invoice ID</th>
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
                          Date
                          {sortBy === 'date' && (
                            <ArrowUpDown className="h-4 w-4" />
                          )}
                        </button>
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">
                        <button 
                          className="flex items-center gap-1"
                          onClick={() => toggleSort('amount')}
                        >
                          Amount
                          {sortBy === 'amount' && (
                            <ArrowUpDown className="h-4 w-4" />
                          )}
                        </button>
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">Method</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedPayments.length > 0 ? (
                      sortedPayments.map((payment) => (
                        <tr key={payment.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{payment.id}</span>
                              {payment.hasBlockchainVerification && (
                                <Coins className="h-4 w-4 text-blue-500" title="Blockchain Verified" />
                              )}
                            </div>
                          </td>
                          <td className="py-3 px-4">{payment.orderId}</td>
                          <td className="py-3 px-4">{payment.invoiceId}</td>
                          <td className="py-3 px-4">{payment.company}</td>
                          <td className="py-3 px-4">{new Date(payment.date).toLocaleDateString()}</td>
                          <td className="py-3 px-4 font-medium">${payment.amount.toLocaleString()}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-1">
                              {getPaymentMethodIcon(payment.method)}
                              <span className="capitalize">{payment.method.replace('-', ' ')}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            {getStatusBadge(payment.status)}
                          </td>
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
                        <td colSpan={9} className="py-8 text-center text-slate-500">
                          No payments found matching your criteria
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          
          {/* Payment Analytics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Payment Analytics</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="h-64 bg-slate-50 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-12 w-12 text-slate-300" />
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-slate-600">Payment Success Rate</span>
                      <span className="text-sm font-medium">
                        {Math.round((payments.filter(p => p.status === 'completed').length / payments.length) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${Math.round((payments.filter(p => p.status === 'completed').length / payments.length) * 100)}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-slate-600">Average Payment Time</span>
                      <span className="text-sm font-medium">3.2 days</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '64%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-slate-600">Payment Method Distribution</span>
                    </div>
                    <div className="space-y-2 mt-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-blue-600" />
                          <span className="text-sm">Bank Transfer</span>
                        </div>
                        <span className="text-sm font-medium">
                          {Math.round((payments.filter(p => p.method === 'bank-transfer').length / payments.length) * 100)}%
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4 text-purple-600" />
                          <span className="text-sm">Credit Card</span>
                        </div>
                        <span className="text-sm font-medium">
                          {Math.round((payments.filter(p => p.method === 'credit-card').length / payments.length) * 100)}%
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Coins className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Cryptocurrency</span>
                        </div>
                        <span className="text-sm font-medium">
                          {Math.round((payments.filter(p => p.method === 'crypto').length / payments.length) * 100)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Upcoming Payments</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {payments
                    .filter(p => p.status === 'pending' || p.status === 'processing')
                    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
                    .slice(0, 4)
                    .map(payment => (
                      <div key={payment.id} className="p-3 bg-slate-50 rounded-lg">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{payment.title}</p>
                          <p className="font-medium text-blue-600">${payment.amount.toLocaleString()}</p>
                        </div>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-sm text-slate-500">{payment.company}</span>
                          <div className="flex items-center gap-1 text-sm">
                            <Calendar className="h-3 w-3 text-slate-400" />
                            <span>Due: {new Date(payment.dueDate).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <div className="mt-3 flex justify-between items-center">
                          {getStatusBadge(payment.status)}
                          <Button size="sm">Process Payment</Button>
                        </div>
                      </div>
                    ))}
                  
                  {payments.filter(p => p.status === 'pending' || p.status === 'processing').length === 0 && (
                    <div className="p-4 text-center text-slate-500">
                      <CheckCircle2 className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <p>No pending payments</p>
                    </div>
                  )}
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Wallet className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-blue-800">Payment Methods</h3>
                      <p className="text-sm text-blue-700 mt-1">
                        Connect your wallet to enable cryptocurrency payments and blockchain verification for faster processing.
                      </p>
                      {!walletConnected && (
                        <Button 
                          onClick={connectWallet} 
                          className="mt-3 bg-blue-600 hover:bg-blue-700"
                          size="sm"
                        >
                          <Wallet className="h-4 w-4 mr-2" />
                          Connect Wallet
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Payment Settings */}
          <Card className="shadow-sm mt-8">
            <CardHeader className="pb-2">
              <CardTitle>Payment Settings</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2">Bank Transfer</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Receive payments directly to your bank account. Processing time: 2-3 business days.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Manage Bank Details
                  </Button>
                </div>
                
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <CreditCard className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2">Credit Card</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Accept credit card payments with our secure payment gateway. Processing time: 1-2 business days.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Manage Payment Gateway
                  </Button>
                </div>
                
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Coins className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2">Cryptocurrency</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Accept payments in cryptocurrency with blockchain verification. Processing time: Near instant.
                  </p>
                  <Button variant={walletConnected ? "outline" : "default"} size="sm" className="w-full">
                    {walletConnected ? "Manage Wallet" : "Connect Wallet"}
                  </Button>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Filter className="h-6 w-6 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-2">Payment Preferences</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="auto-invoice" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" checked />
                        <label htmlFor="auto-invoice" className="text-sm text-slate-700">Automatically generate invoices for new orders</label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="payment-reminders" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" checked />
                        <label htmlFor="payment-reminders" className="text-sm text-slate-700">Send payment reminders for upcoming due dates</label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="blockchain-verification" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" checked={walletConnected} disabled={!walletConnected} />
                        <label htmlFor="blockchain-verification" className={`text-sm ${walletConnected ? 'text-slate-700' : 'text-slate-400'}`}>
                          Enable blockchain verification for all payments
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="auto-reconcile" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" checked />
                        <label htmlFor="auto-reconcile" className="text-sm text-slate-700">Automatically reconcile payments with orders</label>
                      </div>
                    </div>
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

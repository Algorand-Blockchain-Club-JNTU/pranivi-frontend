"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, ShoppingBag, Package, Truck, QrCode, FileText, Wallet, FileCheck, Users, Settings, LogOut, Bell, Search, ArrowUpDown, Eye, Download, CheckCircle2, Clock, AlertCircle, Coins, Plus, DollarSign, Calendar, CreditCard, Receipt, FileUp } from 'lucide-react'

// Define interfaces for type safety
interface Invoice {
  id: string;
  orderId: string;
  title: string;
  company: string;
  date: string;
  dueDate: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  paymentMethod: string | null;
  paymentDate: string | null;
  hasBlockchainVerification: boolean;
}

export default function VendorInvoices() {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<'id' | 'date' | 'dueDate' | 'amount' | 'company'>('date')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  const [walletConnected, setWalletConnected] = useState(false)
  const [filterStatus, setFilterStatus] = useState<'all' | 'paid' | 'pending' | 'overdue'>('all')
  
  const connectWallet = () => {
    setWalletConnected(!walletConnected)
  }
  
  // Dummy data for invoices
  const invoices: Invoice[] = [
    {
      id: 'INV-2023-089',
      orderId: 'PO-2023-156',
      title: 'Office Supplies Q2',
      company: 'Acme Corp',
      date: '2025-03-15',
      dueDate: '2025-04-15',
      amount: 12500,
      status: 'paid',
      paymentMethod: 'Bank Transfer',
      paymentDate: '2025-03-20',
      hasBlockchainVerification: true
    },
    {
      id: 'INV-2023-088',
      orderId: 'PO-2023-155',
      title: 'IT Equipment for New Office',
      company: 'TechCorp Inc.',
      date: '2025-03-14',
      dueDate: '2025-04-14',
      amount: 28750,
      status: 'pending',
      paymentMethod: null,
      paymentDate: null,
      hasBlockchainVerification: false
    },
    {
      id: 'INV-2023-087',
      orderId: 'PO-2023-154',
      title: 'Manufacturing Parts Batch #45',
      company: 'Global Solutions',
      date: '2025-03-12',
      dueDate: '2025-04-12',
      amount: 18900,
      status: 'overdue',
      paymentMethod: null,
      paymentDate: null,
      hasBlockchainVerification: true
    },
    {
      id: 'INV-2023-086',
      orderId: 'PO-2023-153',
      title: 'Marketing Materials for Trade Show',
      company: 'Innovate LLC',
      date: '2025-03-10',
      dueDate: '2025-04-10',
      amount: 4250,
      status: 'paid',
      paymentMethod: 'Credit Card',
      paymentDate: '2025-03-25',
      hasBlockchainVerification: false
    },
    {
      id: 'INV-2023-085',
      orderId: 'PO-2023-152',
      title: 'Office Furniture for Executive Suite',
      company: 'Acme Corp',
      date: '2025-03-08',
      dueDate: '2025-04-08',
      amount: 32500,
      status: 'pending',
      paymentMethod: null,
      paymentDate: null,
      hasBlockchainVerification: true
    },
    {
      id: 'INV-2023-084',
      orderId: 'PO-2023-151',
      title: 'Software Licenses Annual Renewal',
      company: 'TechCorp Inc.',
      date: '2025-03-05',
      dueDate: '2025-04-05',
      amount: 15800,
      status: 'paid',
      paymentMethod: 'Cryptocurrency',
      paymentDate: '2025-03-15',
      hasBlockchainVerification: true
    },
    {
      id: 'INV-2023-083',
      orderId: 'PO-2023-150',
      title: 'Catering Services for Annual Meeting',
      company: 'Global Solutions',
      date: '2025-03-03',
      dueDate: '2025-04-03',
      amount: 7500,
      status: 'paid',
      paymentMethod: 'Bank Transfer',
      paymentDate: '2025-03-10',
      hasBlockchainVerification: false
    },
    {
      id: 'INV-2023-082',
      orderId: 'PO-2023-149',
      title: 'Safety Equipment for Factory Floor',
      company: 'Innovate LLC',
      date: '2025-03-01',
      dueDate: '2025-04-01',
      amount: 9200,
      status: 'overdue',
      paymentMethod: null,
      paymentDate: null,
      hasBlockchainVerification: false
    }
  ]
  
  // Filter invoices based on search query and status filter
  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         invoice.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         invoice.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         invoice.orderId.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesStatus = filterStatus === 'all' || invoice.status === filterStatus
    
    return matchesSearch && matchesStatus
  })
  
  // Sort invoices
  const sortedInvoices = [...filteredInvoices].sort((a, b) => {
    let comparison = 0
    
    if (sortBy === 'date') {
      comparison = new Date(a.date).getTime() - new Date(b.date).getTime()
    } else if (sortBy === 'dueDate') {
      comparison = new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
    } else if (sortBy === 'amount') {
      comparison = a.amount - b.amount
    } else if (sortBy === 'company') {
      comparison = a.company.localeCompare(b.company)
    }
    
    return sortOrder === 'asc' ? comparison : -comparison
  })
  
  const toggleSort = (field: 'id' | 'date' | 'dueDate' | 'amount' | 'company') => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(field)
      setSortOrder('desc')
    }
  }
  
  // Get status badge
  const getStatusBadge = (status: 'paid' | 'pending' | 'overdue') => {
    switch (status) {
      case 'paid':
        return (
          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium flex items-center w-fit">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            Paid
          </span>
        )
      case 'pending':
        return (
          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium flex items-center w-fit">
            <Clock className="h-3 w-3 mr-1" />
            Pending
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
  
  // Calculate invoice metrics
  const totalOutstanding = filteredInvoices
    .filter(invoice => invoice.status !== 'paid')
    .reduce((sum, invoice) => sum + invoice.amount, 0)
  
  const totalPaid = filteredInvoices
    .filter(invoice => invoice.status === 'paid')
    .reduce((sum, invoice) => sum + invoice.amount, 0)
  
  const overdueCount = filteredInvoices
    .filter(invoice => invoice.status === 'overdue')
    .length
  
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Vendor Dashboard Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 pt-16">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-900">Invoices</h1>
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
                <Link href="/vendors/invoices" className="flex items-center gap-3 px-3 py-2 rounded-md bg-blue-50 text-blue-600 font-medium">
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
              <h2 className="text-xl font-bold text-slate-900">Manage Invoices</h2>
              <p className="text-slate-500">Create, track, and manage your invoices</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search invoices..." 
                  className="pl-9 pr-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <Link href="/vendors/invoices/create">
                <Button className="whitespace-nowrap">
                  <Plus className="h-4 w-4 mr-2" />
                  New Invoice
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Invoice Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Outstanding Balance</h3>
                  <DollarSign className="h-6 w-6" />
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold">${totalOutstanding.toLocaleString()}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-blue-400">
                  <p className="text-sm text-blue-100">
                    Total amount from {invoices.filter(invoice => invoice.status !== 'paid').length} unpaid invoices
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Paid This Month</h3>
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold">${totalPaid.toLocaleString()}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-green-400">
                  <p className="text-sm text-green-100">
                    Total amount from {invoices.filter(invoice => invoice.status === 'paid').length} paid invoices
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className={`bg-gradient-to-br ${overdueCount > 0 ? 'from-red-500 to-red-600' : 'from-slate-500 to-slate-600'} text-white`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Overdue Invoices</h3>
                  <AlertCircle className="h-6 w-6" />
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold">{overdueCount}</span>
                  <span className="text-white/80 mb-1">invoices</span>
                </div>
                <div className="mt-4 pt-4 border-t border-red-400">
                  <p className="text-sm text-red-100">
                    {overdueCount > 0 
                      ? `Total of $${invoices.filter(invoice => invoice.status === 'overdue').reduce((sum, invoice) => sum + invoice.amount, 0).toLocaleString()} overdue` 
                      : 'No overdue invoices'}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <CardTitle>Your Invoices</CardTitle>
                
                <div className="flex items-center gap-2">
                  <button 
                    className={`px-3 py-1 rounded-full text-sm font-medium ${filterStatus === 'all' ? 'bg-slate-200 text-slate-800' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                    onClick={() => setFilterStatus('all')}
                  >
                    All
                  </button>
                  <button 
                    className={`px-3 py-1 rounded-full text-sm font-medium ${filterStatus === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                    onClick={() => setFilterStatus('pending')}
                  >
                    Pending
                  </button>
                  <button 
                    className={`px-3 py-1 rounded-full text-sm font-medium ${filterStatus === 'paid' ? 'bg-green-100 text-green-800' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                    onClick={() => setFilterStatus('paid')}
                  >
                    Paid
                  </button>
                  <button 
                    className={`px-3 py-1 rounded-full text-sm font-medium ${filterStatus === 'overdue' ? 'bg-red-100 text-red-800' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                    onClick={() => setFilterStatus('overdue')}
                  >
                    Overdue
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
                        <button 
                          className="flex items-center gap-1"
                          onClick={() => toggleSort('id')}
                        >
                          Invoice ID
                          {sortBy === 'id' && (
                            <ArrowUpDown className="h-4 w-4" />
                          )}
                        </button>
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">Order ID</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">Title</th>
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
                          Issue Date
                          {sortBy === 'date' && (
                            <ArrowUpDown className="h-4 w-4" />
                          )}
                        </button>
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">
                        <button 
                          className="flex items-center gap-1"
                          onClick={() => toggleSort('dueDate')}
                        >
                          Due Date
                          {sortBy === 'dueDate' && (
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
                      <th className="text-left py-3 px-4 font-medium text-slate-500">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedInvoices.length > 0 ? (
                      sortedInvoices.map((invoice) => (
                        <tr key={invoice.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{invoice.id}</span>
                              {invoice.hasBlockchainVerification && (
                                <Coins className="h-4 w-4 text-blue-500" aria-label="Blockchain verified" />
                              )}
                            </div>
                          </td>
                          <td className="py-3 px-4">{invoice.orderId}</td>
                          <td className="py-3 px-4">{invoice.title}</td>
                          <td className="py-3 px-4">{invoice.company}</td>
                          <td className="py-3 px-4">{new Date(invoice.date).toLocaleDateString()}</td>
                          <td className="py-3 px-4">{new Date(invoice.dueDate).toLocaleDateString()}</td>
                          <td className="py-3 px-4">${invoice.amount.toLocaleString()}</td>
                          <td className="py-3 px-4">
                            {getStatusBadge(invoice.status)}
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
                          No invoices found matching your criteria
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Payment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                    <CreditCard className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Traditional Payment Methods</h4>
                      <p className="text-sm text-slate-600 mt-1">
                        Accept payments via bank transfer, credit card, or check.
                      </p>
                      <div className="flex gap-2 mt-2">
                        <div className="w-10 h-6 bg-slate-200 rounded"></div>
                        <div className="w-10 h-6 bg-slate-200 rounded"></div>
                        <div className="w-10 h-6 bg-slate-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                    <Coins className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Cryptocurrency Payments</h4>
                      <p className="text-sm text-slate-600 mt-1">
                        Accept payments in various cryptocurrencies with blockchain verification.
                      </p>
                      <div className="flex gap-2 mt-2">
                        <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                        <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
                        <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                    <Receipt className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Smart Contract Payments</h4>
                      <p className="text-sm text-slate-600 mt-1">
                        Set up automated payments triggered by delivery confirmation or quality verification.
                      </p>
                      <Button size="sm" variant="outline" className="mt-2">
                        <Coins className="h-4 w-4 mr-2" />
                        Configure Smart Contracts
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Create New Invoice</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-slate-600">
                    Generate a new invoice for your products or services.
                  </p>
                  <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                    <Calendar className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-blue-800">Automated Invoice Generation</h4>
                      <p className="text-sm text-blue-700 mt-1">
                        Create invoices automatically from purchase orders or delivery confirmations.
                      </p>
                      <div className="mt-3">
                        <Button size="sm" variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                          <FileUp className="h-4 w-4 mr-2" />
                          Import from PO
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-100 rounded-lg">
                    <Coins className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-green-800">Blockchain Verification</h4>
                      <p className="text-sm text-green-700 mt-1">
                        Add an immutable record of your invoice to the blockchain for enhanced trust and transparency.
                      </p>
                      <div className="mt-3">
                        <Button size="sm" variant="outline" className="border-green-300 text-green-700 hover:bg-green-100">
                          <Coins className="h-4 w-4 mr-2" />
                          Enable Verification
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <Link href="/vendors/invoices/create">
                    <Button className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Create New Invoice
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, ShoppingBag, Package, Truck, QrCode, FileText, Wallet, FileCheck, Users, Settings, LogOut, Bell, Search, ArrowUpDown, Eye, Download, CheckCircle2, Clock, AlertCircle, Coins, Plus, Upload, ClipboardCheck, BarChart3, Shield, Award } from 'lucide-react'

export default function VendorQuality() {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('date')
  const [sortOrder, setSortOrder] = useState('desc')
  const [walletConnected, setWalletConnected] = useState(false)
  const [filterStatus, setFilterStatus] = useState('all')
  
  const connectWallet = () => {
    setWalletConnected(!walletConnected)
  }
  
  // Dummy data for quality reports
  const qualityReports = [
    {
      id: 'QR-2023-056',
      orderId: 'PO-2023-156',
      title: 'Office Supplies Quality Check',
      company: 'Acme Corp',
      date: '2025-03-15',
      status: 'passed',
      inspector: 'John Smith',
      score: 98,
      notes: 'All items meet quality standards. Minor packaging issues resolved.',
      hasBlockchainVerification: true
    },
    {
      id: 'QR-2023-055',
      orderId: 'PO-2023-155',
      title: 'IT Equipment Inspection',
      company: 'TechCorp Inc.',
      date: '2025-03-14',
      status: 'pending',
      inspector: 'Sarah Johnson',
      score: null,
      notes: 'Inspection scheduled for tomorrow.',
      hasBlockchainVerification: false
    },
    {
      id: 'QR-2023-054',
      orderId: 'PO-2023-154',
      title: 'Manufacturing Parts Batch #45 QC',
      company: 'Global Solutions',
      date: '2025-03-12',
      status: 'failed',
      inspector: 'Michael Chen',
      score: 72,
      notes: 'Several parts did not meet dimensional specifications. Rework required.',
      hasBlockchainVerification: true
    },
    {
      id: 'QR-2023-053',
      orderId: 'PO-2023-153',
      title: 'Marketing Materials Review',
      company: 'Innovate LLC',
      date: '2025-03-10',
      status: 'passed',
      inspector: 'Emily Davis',
      score: 95,
      notes: 'Print quality excellent. Colors match brand guidelines.',
      hasBlockchainVerification: false
    },
    {
      id: 'QR-2023-052',
      orderId: 'PO-2023-152',
      title: 'Office Furniture Assembly Check',
      company: 'Acme Corp',
      date: '2025-03-08',
      status: 'conditional',
      inspector: 'Robert Wilson',
      score: 85,
      notes: 'Minor assembly issues found. Corrective action plan submitted.',
      hasBlockchainVerification: true
    },
    {
      id: 'QR-2023-051',
      orderId: 'PO-2023-151',
      title: 'Software License Verification',
      company: 'TechCorp Inc.',
      date: '2025-03-05',
      status: 'passed',
      inspector: 'Jennifer Lee',
      score: 100,
      notes: 'All licenses verified and activated successfully.',
      hasBlockchainVerification: false
    },
    {
      id: 'QR-2023-050',
      orderId: 'PO-2023-150',
      title: 'Catering Services Health Inspection',
      company: 'Global Solutions',
      date: '2025-03-03',
      status: 'passed',
      inspector: 'David Brown',
      score: 92,
      notes: 'All health and safety standards met. Food quality excellent.',
      hasBlockchainVerification: false
    },
    {
      id: 'QR-2023-049',
      orderId: 'PO-2023-149',
      title: 'Safety Equipment Certification',
      company: 'Innovate LLC',
      date: '2025-03-01',
      status: 'conditional',
      inspector: 'Lisa Martinez',
      score: 88,
      notes: 'Most items passed certification. Two items require additional testing.',
      hasBlockchainVerification: true
    }
  ]
  
  // Filter quality reports based on search query and status filter
  const filteredReports = qualityReports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         report.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         report.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         report.orderId.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesStatus = filterStatus === 'all' || report.status === filterStatus
    
    return matchesSearch && matchesStatus
  })
  
  // Sort quality reports
  const sortedReports = [...filteredReports].sort((a, b) => {
    let comparison = 0
    
    if (sortBy === 'date') {
      comparison = new Date(a.date).getTime() - new Date(b.date).getTime()
    } else if (sortBy === 'score') {
      // Handle null scores (pending reports)
      if (a.score === null && b.score === null) return 0
      if (a.score === null) return 1
      if (b.score === null) return -1
      comparison = a.score - b.score
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
      case 'passed':
        return (
          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium flex items-center w-fit">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            Passed
          </span>
        )
      case 'pending':
        return (
          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium flex items-center w-fit">
            <Clock className="h-3 w-3 mr-1" />
            Pending
          </span>
        )
      case 'failed':
        return (
          <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium flex items-center w-fit">
            <AlertCircle className="h-3 w-3 mr-1" />
            Failed
          </span>
        )
      case 'conditional':
        return (
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium flex items-center w-fit">
            <ClipboardCheck className="h-3 w-3 mr-1" />
            Conditional
          </span>
        )
      default:
        return null
    }
  }
  
  // Calculate quality metrics
  const passRate = Math.round(
    (qualityReports.filter(r => r.status === 'passed').length / 
    qualityReports.filter(r => r.status !== 'pending').length) * 100
  )
  
  const averageScore = Math.round(
    qualityReports
      .filter(r => r.score !== null)
      .reduce((sum, report) => sum + report.score, 0) / 
    qualityReports.filter(r => r.score !== null).length
  )
  
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Vendor Dashboard Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 pt-16">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-900">Quality Assurance</h1>
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
                <Link href="/vendors/payments" className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 transition-colors">
                  <Wallet className="h-5 w-5" />
                  <span>Payments</span>
                </Link>
              </li>
              <li>
                <Link href="/vendors/quality" className="flex items-center gap-3 px-3 py-2 rounded-md bg-blue-50 text-blue-600 font-medium">
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
              <h2 className="text-xl font-bold text-slate-900">Quality Reports</h2>
              <p className="text-slate-500">Manage and track quality assurance for your products and services</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search reports..." 
                  className="pl-9 pr-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <Link href="/vendors/quality/report">
                <Button className="whitespace-nowrap">
                  <Plus className="h-4 w-4 mr-2" />
                  New Report
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Quality Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Quality Pass Rate</h3>
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold">{passRate}%</span>
                  <span className="text-green-100 mb-1">pass rate</span>
                </div>
                <div className="mt-4 pt-4 border-t border-green-400">
                  <p className="text-sm text-green-100">
                    {passRate >= 90 ? 'Excellent quality performance!' : 
                     passRate >= 80 ? 'Good quality performance.' : 
                     'Needs improvement.'}
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Average Quality Score</h3>
                  <BarChart3 className="h-6 w-6" />
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold">{averageScore}</span>
                  <span className="text-blue-100 mb-1">out of 100</span>
                </div>
                <div className="mt-4 pt-4 border-t border-blue-400">
                  <p className="text-sm text-blue-100">
                    {averageScore >= 90 ? 'Top tier quality standards!' : 
                     averageScore >= 80 ? 'Meeting quality expectations.' : 
                     'Room for improvement.'}
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Blockchain Verification</h3>
                  <Shield className="h-6 w-6" />
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold">
                    {Math.round((qualityReports.filter(r => r.hasBlockchainVerification).length / qualityReports.length) * 100)}%
                  </span>
                  <span className="text-purple-100 mb-1">verified on chain</span>
                </div>
                <div className="mt-4 pt-4 border-t border-purple-400">
                  <p className="text-sm text-purple-100">
                    Blockchain verification adds an immutable record of quality checks.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <CardTitle>Quality Reports</CardTitle>
                
                <div className="flex items-center gap-2">
                  <button 
                    className={`px-3 py-1 rounded-full text-sm font-medium ${filterStatus === 'all' ? 'bg-slate-200 text-slate-800' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                    onClick={() => setFilterStatus('all')}
                  >
                    All
                  </button>
                  <button 
                    className={`px-3 py-1 rounded-full text-sm font-medium ${filterStatus === 'passed' ? 'bg-green-100 text-green-800' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                    onClick={() => setFilterStatus('passed')}
                  >
                    Passed
                  </button>
                  <button 
                    className={`px-3 py-1 rounded-full text-sm font-medium ${filterStatus === 'conditional' ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                    onClick={() => setFilterStatus('conditional')}
                  >
                    Conditional
                  </button>
                  <button 
                    className={`px-3 py-1 rounded-full text-sm font-medium ${filterStatus === 'failed' ? 'bg-red-100 text-red-800' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                    onClick={() => setFilterStatus('failed')}
                  >
                    Failed
                  </button>
                  <button 
                    className={`px-3 py-1 rounded-full text-sm font-medium ${filterStatus === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                    onClick={() => setFilterStatus('pending')}
                  >
                    Pending
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
                          Report ID
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
                          Date
                          {sortBy === 'date' && (
                            <ArrowUpDown className="h-4 w-4" />
                          )}
                        </button>
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">
                        <button 
                          className="flex items-center gap-1"
                          onClick={() => toggleSort('score')}
                        >
                          Score
                          {sortBy === 'score' && (
                            <ArrowUpDown className="h-4 w-4" />
                          )}
                        </button>
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedReports.length > 0 ? (
                      sortedReports.map((report) => (
                        <tr key={report.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{report.id}</span>
                              {report.hasBlockchainVerification && (
                                <Shield className="h-4 w-4 text-blue-500" title="Blockchain verified" />
                              )}
                            </div>
                          </td>
                          <td className="py-3 px-4">{report.orderId}</td>
                          <td className="py-3 px-4">{report.title}</td>
                          <td className="py-3 px-4">{report.company}</td>
                          <td className="py-3 px-4">{new Date(report.date).toLocaleDateString()}</td>
                          <td className="py-3 px-4">
                            {report.score !== null ? (
                              <div className="flex items-center gap-1">
                                <span className={`font-medium ${
                                  report.score >= 90 ? 'text-green-600' : 
                                  report.score >= 80 ? 'text-blue-600' : 
                                  report.score >= 70 ? 'text-yellow-600' : 
                                  'text-red-600'
                                }`}>
                                  {report.score}
                                </span>
                                <span className="text-slate-400">/100</span>
                              </div>
                            ) : (
                              <span className="text-slate-400">Pending</span>
                            )}
                          </td>
                          <td className="py-3 px-4">
                            {getStatusBadge(report.status)}
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
                        <td colSpan={8} className="py-8 text-center text-slate-500">
                          No quality reports found matching your criteria
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
                <CardTitle>Quality Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                    <Award className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">ISO 9001:2015</h4>
                      <p className="text-sm text-slate-600 mt-1">
                        Quality Management System certification ensuring consistent quality products and services.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                    <Award className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">ISO 14001:2015</h4>
                      <p className="text-sm text-slate-600 mt-1">
                        Environmental Management System certification for sustainable operations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                    <Award className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">ISO 45001:2018</h4>
                      <p className="text-sm text-slate-600 mt-1">
                        Occupational Health and Safety Management System certification.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                    <Award className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Industry-Specific Standards</h4>
                      <p className="text-sm text-slate-600 mt-1">
                        Compliance with industry-specific quality and safety standards.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Submit New Quality Report</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-slate-600">
                    Create a new quality assurance report for your products or services.
                  </p>
                  <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                    <Upload className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-blue-800">Upload Quality Documentation</h4>
                      <p className="text-sm text-blue-700 mt-1">
                        Upload test results, inspection reports, and certification documents.
                      </p>
                      <div className="mt-3">
                        <Button size="sm">
                          <Upload className="h-4 w-4 mr-2" />
                          Upload Files
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-100 rounded-lg">
                    <ClipboardCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-green-800">Blockchain Verification</h4>
                      <p className="text-sm text-green-700 mt-1">
                        Add an immutable record of your quality report to the blockchain for enhanced trust and transparency.
                      </p>
                      <div className="mt-3">
                        <Button size="sm" variant="outline" className="border-green-300 text-green-700 hover:bg-green-100">
                          <Shield className="h-4 w-4 mr-2" />
                          Enable Verification
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <Link href="/vendors/quality/report">
                    <Button className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Create New Quality Report
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

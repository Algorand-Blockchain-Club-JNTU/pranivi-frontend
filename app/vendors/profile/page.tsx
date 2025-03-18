"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, ShoppingBag, Package, Truck, QrCode, FileText, Wallet, FileCheck, Users, Settings, LogOut, Bell, Edit, Save, Upload, Building, Mail, Phone, Globe, MapPin, Award, Shield, CheckCircle2, Coins, BadgeCheck, Plus } from 'lucide-react'

export default function VendorProfile() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [editMode, setEditMode] = useState(false)
  
  const connectWallet = () => {
    setWalletConnected(!walletConnected)
  }
  
  // Dummy company profile data
  const companyProfile = {
    name: "Acme Corporation",
    logo: "/placeholder.svg?height=120&width=120",
    description: "Acme Corporation is a leading provider of high-quality office supplies, IT equipment, and business services. With over 20 years of experience, we deliver exceptional products and services to businesses of all sizes.",
    established: "2003",
    employees: "51-200",
    type: "Corporation",
    registrationNumber: "ACM123456789",
    taxId: "TAX987654321",
    website: "https://www.acmecorp.example",
    email: "info@acmecorp.example",
    phone: "+1 (555) 123-4567",
    address: {
      street: "123 Corporate Avenue",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States"
    },
    socialMedia: {
      linkedin: "https://www.linkedin.com/company/acmecorp",
      twitter: "https://twitter.com/acmecorp",
      facebook: "https://facebook.com/acmecorp"
    },
    certifications: [
      { name: "ISO 9001:2015", issuer: "International Organization for Standardization", year: "2020" },
      { name: "ISO 14001:2015", issuer: "International Organization for Standardization", year: "2021" },
      { name: "Minority Business Enterprise (MBE)", issuer: "National Minority Supplier Development Council", year: "2019" }
    ],
    categories: ["Office Supplies", "IT Equipment", "Furniture", "Business Services"],
    performance: {
      rating: 4.8,
      onTimeDelivery: 97,
      qualityScore: 95,
      responseTime: 98
    },
    kycVerified: true,
    blockchainVerified: true
  }
  
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Vendor Dashboard Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 pt-16">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-900">Company Profile</h1>
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
                <Link href="/vendors/quality" className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 transition-colors">
                  <FileCheck className="h-5 w-5" />
                  <span>Quality Assurance</span>
                </Link>
              </li>
              <li>
                <Link href="/vendors/profile" className="flex items-center gap-3 px-3 py-2 rounded-md bg-blue-50 text-blue-600 font-medium">
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
              <h2 className="text-xl font-bold text-slate-900">Company Information</h2>
              <p className="text-slate-500">Manage your company profile and information</p>
            </div>
            
            <div className="flex items-center gap-3">
              {editMode ? (
                <Button 
                  onClick={() => setEditMode(false)}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              ) : (
                <Button 
                  onClick={() => setEditMode(true)}
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              )}
            </div>
          </div>
          
          {/* Company Header */}
          <Card className="shadow-sm mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="relative">
                  <div className="w-24 h-24 rounded-lg bg-slate-100 flex items-center justify-center overflow-hidden">
                    <Image 
                      src={companyProfile.logo || "/placeholder.svg"} 
                      alt={companyProfile.name} 
                      width={120} 
                      height={120}
                      className="object-cover"
                    />
                  </div>
                  {editMode && (
                    <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-1 rounded-full">
                      <Upload className="h-4 w-4" />
                    </button>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                        {companyProfile.name}
                        {companyProfile.kycVerified && (
                          <BadgeCheck className="h-5 w-5 text-blue-600" title="KYC Verified" />
                        )}
                        {companyProfile.blockchainVerified && (
                          <Coins className="h-5 w-5 text-green-600" title="Blockchain Verified" />
                        )}
                      </h1>
                      <p className="text-slate-500 mt-1">{companyProfile.categories.join(" • ")}</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium flex items-center">
                        <Building className="h-3 w-3 mr-1" />
                        {companyProfile.type}
                      </div>
                      <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        {companyProfile.employees} Employees
                      </div>
                    </div>
                  </div>
                  
                  <p className="mt-4 text-slate-600">
                    {editMode ? (
                      <textarea 
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={3}
                        defaultValue={companyProfile.description}
                      />
                    ) : (
                      companyProfile.description
                    )}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Basic Information */}
            <div className="lg:col-span-2">
              <Card className="shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle>Basic Information</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                      {editMode ? (
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          defaultValue={companyProfile.name}
                        />
                      ) : (
                        <p className="text-slate-900">{companyProfile.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Business Type</label>
                      {editMode ? (
                        <select className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <option value="Corporation" selected={companyProfile.type === "Corporation"}>Corporation</option>
                          <option value="LLC" selected={companyProfile.type === "LLC"}>Limited Liability Company (LLC)</option>
                          <option value="Partnership" selected={companyProfile.type === "Partnership"}>Partnership</option>
                          <option value="Sole Proprietorship" selected={companyProfile.type === "Sole Proprietorship"}>Sole Proprietorship</option>
                        </select>
                      ) : (
                        <p className="text-slate-900">{companyProfile.type}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Registration Number</label>
                      {editMode ? (
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          defaultValue={companyProfile.registrationNumber}
                        />
                      ) : (
                        <p className="text-slate-900">{companyProfile.registrationNumber}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Tax ID</label>
                      {editMode ? (
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          defaultValue={companyProfile.taxId}
                        />
                      ) : (
                        <p className="text-slate-900">{companyProfile.taxId}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Year Established</label>
                      {editMode ? (
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          defaultValue={companyProfile.established}
                        />
                      ) : (
                        <p className="text-slate-900">{companyProfile.established}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Number of Employees</label>
                      {editMode ? (
                        <select className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <option value="1-10" selected={companyProfile.employees === "1-10"}>1-10</option>
                          <option value="11-50" selected={companyProfile.employees === "11-50"}>11-50</option>
                          <option value="51-200" selected={companyProfile.employees === "51-200"}>51-200</option>
                          <option value="201-500" selected={companyProfile.employees === "201-500"}>201-500</option>
                          <option value="501+" selected={companyProfile.employees === "501+"}>501+</option>
                        </select>
                      ) : (
                        <p className="text-slate-900">{companyProfile.employees}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Business Categories</label>
                    {editMode ? (
                      <div className="flex flex-wrap gap-2">
                        {companyProfile.categories.map((category, index) => (
                          <div key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium flex items-center">
                            {category}
                            <button className="ml-1 text-blue-600 hover:text-blue-800">×</button>
                          </div>
                        ))}
                        <button className="px-3 py-1 bg-slate-100 text-slate-800 rounded-full text-xs font-medium">
                          + Add Category
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {companyProfile.categories.map((category, index) => (
                          <div key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                            {category}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              {/* Contact Information */}
              <Card className="shadow-sm mt-6">
                <CardHeader className="pb-2">
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-slate-400" />
                        {editMode ? (
                          <input 
                            type="email" 
                            className="flex-1 px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            defaultValue={companyProfile.email}
                          />
                        ) : (
                          <p className="text-slate-900">{companyProfile.email}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-slate-400" />
                        {editMode ? (
                          <input 
                            type="tel" 
                            className="flex-1 px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            defaultValue={companyProfile.phone}
                          />
                        ) : (
                          <p className="text-slate-900">{companyProfile.phone}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Website</label>
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-slate-400" />
                        {editMode ? (
                          <input 
                            type="url" 
                            className="flex-1 px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            defaultValue={companyProfile.website}
                          />
                        ) : (
                          <a href={companyProfile.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            {companyProfile.website}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Address</label>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-slate-400 mt-1" />
                      {editMode ? (
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <input 
                              type="text" 
                              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                              placeholder="Street Address"
                              defaultValue={companyProfile.address.street}
                            />
                            <input 
                              type="text" 
                              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="City"
                              defaultValue={companyProfile.address.city}
                            />
                          </div>
                          <div>
                            <div className="grid grid-cols-2 gap-2 mb-2">
                              <input 
                                type="text" 
                                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="State/Province"
                                defaultValue={companyProfile.address.state}
                              />
                              <input 
                                type="text" 
                                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="ZIP/Postal Code"
                                defaultValue={companyProfile.address.zip}
                              />
                            </div>
                            <select className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                              <option value="United States" selected={companyProfile.address.country === "United States"}>United States</option>
                              <option value="Canada" selected={companyProfile.address.country === "Canada"}>Canada</option>
                              <option value="United Kingdom" selected={companyProfile.address.country === "United Kingdom"}>United Kingdom</option>
                              <option value="Australia" selected={companyProfile.address.country === "Australia"}>Australia</option>
                            </select>
                          </div>
                        </div>
                      ) : (
                        <p className="text-slate-900">
                          {companyProfile.address.street}, {companyProfile.address.city}, {companyProfile.address.state} {companyProfile.address.zip}, {companyProfile.address.country}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Certifications */}
              <Card className="shadow-sm mt-6">
                <CardHeader className="pb-2">
                  <CardTitle>Certifications & Compliance</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {editMode ? (
                    <div className="space-y-4">
                      {companyProfile.certifications.map((cert, index) => (
                        <div key={index} className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
                          <Award className="h-8 w-8 text-blue-500" />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <input 
                                type="text" 
                                className="font-medium text-slate-900 bg-transparent border-b border-slate-300 focus:outline-none focus:border-blue-500"
                                defaultValue={cert.name}
                              />
                              <button className="text-red-500 hover:text-red-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                              </button>
                            </div>
                            <div className="mt-1 grid grid-cols-2 gap-2">
                              <input 
                                type="text" 
                                className="text-sm text-slate-500 bg-transparent border-b border-slate-300 focus:outline-none focus:border-blue-500"
                                defaultValue={cert.issuer}
                              />
                              <input 
                                type="text" 
                                className="text-sm text-slate-500 bg-transparent border-b border-slate-300 focus:outline-none focus:border-blue-500"
                                defaultValue={cert.year}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                      <Button className="w-full">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Certification
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {companyProfile.certifications.map((cert, index) => (
                        <div key={index} className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
                          <Award className="h-8 w-8 text-blue-500" />
                          <div>
                            <p className="font-medium text-slate-900">{cert.name}</p>
                            <p className="text-sm text-slate-500">
                              {cert.issuer} • Issued {cert.year}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="mt-6 flex items-center gap-2 p-3 bg-green-50 border border-green-100 rounded-lg">
                    <Shield className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-green-800">KYC Verification Complete</p>
                      <p className="text-sm text-green-700">Your company has completed the Know Your Customer verification process.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Performance & Verification */}
            <div>
              <Card className="shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle>Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-center">
                      <div className="relative w-20 h-20 mx-auto">
                        <svg className="w-20 h-20" viewBox="0 0 36 36">
                          <circle cx="18" cy="18" r="16" fill="none" className="stroke-slate-200" strokeWidth="2"></circle>
                          <circle 
                            cx="18" 
                            cy="18" 
                            r="16" 
                            fill="none" 
                            className="stroke-blue-600" 
                            strokeWidth="2"
                            strokeDasharray="100"
                            strokeDashoffset={100 - companyProfile.performance.rating * 20}
                            transform="rotate(-90 18 18)"
                          ></circle>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl font-bold text-blue-600">{companyProfile.performance.rating}</span>
                        </div>
                      </div>
                      <p className="mt-2 text-sm font-medium text-slate-700">Overall Rating</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="relative w-20 h-20 mx-auto">
                        <svg className="w-20 h-20" viewBox="0 0 36 36">
                          <circle cx="18" cy="18" r="16" fill="none" className="stroke-slate-200" strokeWidth="2"></circle>
                          <circle 
                            cx="18" 
                            cy="18" 
                            r="16" 
                            fill="none" 
                            className="stroke-green-600" 
                            strokeWidth="2"
                            strokeDasharray="100"
                            strokeDashoffset={100 - companyProfile.performance.onTimeDelivery}
                            transform="rotate(-90 18 18)"
                          ></circle>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl font-bold text-green-600">{companyProfile.performance.onTimeDelivery}%</span>
                        </div>
                      </div>
                      <p className="mt-2 text-sm font-medium text-slate-700">On-Time Delivery</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-slate-600">Quality Score</span>
                        <span className="text-sm font-medium">{companyProfile.performance.qualityScore}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className="bg-purple-500 h-2 rounded-full" 
                          style={{ width: `${companyProfile.performance.qualityScore}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-slate-600">Response Time</span>
                        <span className="text-sm font-medium">{companyProfile.performance.responseTime}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className="bg-yellow-500 h-2 rounded-full" 
                          style={{ width: `${companyProfile.performance.responseTime}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm mt-6">
                <CardHeader className="pb-2">
                  <CardTitle>Verification Status</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <BadgeCheck className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">KYC Verified</p>
                        <p className="text-sm text-slate-500">Completed on Mar 10, 2025</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <Coins className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Blockchain Verified</p>
                        <p className="text-sm text-slate-500">Last updated 2 days ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <Shield className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Security Audit</p>
                        <p className="text-sm text-slate-500">Completed on Feb 15, 2025</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button className="w-full">
                      <CheckCircle2 className="h-4 w-4 mr-2" />
                      Renew Verifications
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm mt-6">
                <CardHeader className="pb-2">
                  <CardTitle>Wallet Connection</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {walletConnected ? (
                    <div className="space-y-4">
                      <div className="p-3 bg-slate-50 rounded-lg">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-slate-900">Connected Wallet</p>
                          <div className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Active</div>
                        </div>
                        <p className="text-sm text-slate-500 mt-1 font-mono">0x71C7...F9E2</p>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-sm text-slate-600">Balance:</span>
                          <span className="text-sm font-medium">2.45 ETH</span>
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full text-red-600 border-red-200 hover:bg-red-50">
                        Disconnect Wallet
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center py-6">
                      <Wallet className="h-12 w-12 text-slate-300 mx-auto mb-3" />
                      <p className="text-slate-500 mb-4">Connect your wallet to enable blockchain verification and smart contracts</p>
                      <Button onClick={connectWallet} className="w-full">
                        <Wallet className="h-4 w-4 mr-2" />
                        Connect Wallet
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

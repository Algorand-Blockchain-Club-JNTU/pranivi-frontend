"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Plus, Trash2, Upload, Calendar, DollarSign, FileText, CheckCircle2 } from 'lucide-react'

// Define an interface for the item structure
interface BidItem {
  name: string;
  description: string;
  quantity: string;
  unitPrice: string;
}

export default function CreateBid() {
  const [items, setItems] = useState<BidItem[]>([{ name: "", description: "", quantity: "", unitPrice: "" }])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const addItem = () => {
    setItems([...items, { name: "", description: "", quantity: "", unitPrice: "" }])
  }

  const removeItem = (index: number) => {
    const newItems = [...items]
    newItems.splice(index, 1)
    setItems(newItems)
  }

  const handleItemChange = (index: number, field: keyof BidItem, value: string) => {
    const newItems = [...items]
    newItems[index][field] = value
    setItems(newItems)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1500)
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-slate-50 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Bid Submitted Successfully!</h1>
            <p className="text-slate-600 mb-8">
              Your bid has been submitted and is now under review. You will be notified once it's evaluated.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/vendors">
                <Button variant="outline">Return to Dashboard</Button>
              </Link>
              <Link href="/vendors/bids">
                <Button>View All Bids</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link href="/vendors" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Dashboard
            </Link>
          </div>

          <h1 className="text-3xl font-bold text-slate-900 mb-6">Create New Bid</h1>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit}>
                <div className="space-y-8">
                  {/* Basic Information */}
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">Basic Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Bid Title *</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter a descriptive title for your bid"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">RFQ Reference *</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter RFQ number"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Client/Company *</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter client name"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Bid Validity *</label>
                        <div className="relative">
                          <input
                            type="date"
                            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                          <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-slate-400 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <label className="block text-sm font-medium text-slate-700 mb-1">Bid Description *</label>
                      <textarea
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Provide a detailed description of your bid"
                        rows={4}
                        required
                      ></textarea>
                    </div>
                  </div>

                  {/* Items and Pricing */}
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">Items and Pricing</h2>

                    {items.map((item, index) => (
                      <div key={index} className="mb-6 p-4 border border-slate-200 rounded-lg bg-slate-50">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-medium">Item #{index + 1}</h3>
                          {items.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeItem(index)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Item Name *</label>
                            <input
                              type="text"
                              className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Enter item name"
                              value={item.name}
                              onChange={(e) => handleItemChange(index, "name", e.target.value)}
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Quantity *</label>
                            <input
                              type="number"
                              className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Enter quantity"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => handleItemChange(index, "quantity", e.target.value)}
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Unit Price (USD) *</label>
                            <div className="relative">
                              <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-slate-400 pointer-events-none" />
                              <input
                                type="number"
                                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="0.00"
                                min="0"
                                step="0.01"
                                value={item.unitPrice}
                                onChange={(e) => handleItemChange(index, "unitPrice", e.target.value)}
                                required
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                            <input
                              type="text"
                              className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Enter item description"
                              value={item.description}
                              onChange={(e) => handleItemChange(index, "description", e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={addItem}
                      className="flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Add Another Item
                    </button>
                  </div>

                  {/* Rest of the form remains unchanged */}
                  {/* Delivery Information */}
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">Delivery Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Estimated Delivery Date *
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                          <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-slate-400 pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Shipping Method *</label>
                        <select
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="">Select shipping method</option>
                          <option value="standard">Standard Shipping</option>
                          <option value="express">Express Shipping</option>
                          <option value="overnight">Overnight Shipping</option>
                          <option value="pickup">Customer Pickup</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Shipping Cost (USD)</label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-slate-400 pointer-events-none" />
                          <input
                            type="number"
                            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="0.00"
                            min="0"
                            step="0.01"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Delivery Terms</label>
                        <select className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <option value="">Select delivery terms</option>
                          <option value="exw">EXW (Ex Works)</option>
                          <option value="fob">FOB (Free on Board)</option>
                          <option value="cif">CIF (Cost, Insurance, Freight)</option>
                          <option value="dap">DAP (Delivered at Place)</option>
                          <option value="ddp">DDP (Delivered Duty Paid)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Quality Assurance */}
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">Quality Assurance</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Quality Standards *</label>
                        <textarea
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Describe the quality standards that will be met"
                          rows={3}
                          required
                        ></textarea>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Warranty Information *</label>
                        <textarea
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Describe warranty terms and duration"
                          rows={3}
                          required
                        ></textarea>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Certifications</label>
                        <div className="flex items-center justify-center border-2 border-dashed border-slate-300 rounded-lg p-6 bg-slate-50">
                          <div className="text-center">
                            <div className="mb-3">
                              <Upload className="mx-auto h-12 w-12 text-slate-400" />
                            </div>
                            <div className="flex text-sm text-slate-600">
                              <label
                                htmlFor="certification-upload"
                                className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                              >
                                <span>Upload certifications</span>
                                <input
                                  id="certification-upload"
                                  name="certification-upload"
                                  type="file"
                                  className="sr-only"
                                  multiple
                                />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-slate-500">PDF, JPG, or PNG up to 10MB</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">Terms and Conditions</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Payment Terms *</label>
                        <select
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="">Select payment terms</option>
                          <option value="advance">100% Advance</option>
                          <option value="50-50">50% Advance, 50% on Delivery</option>
                          <option value="net15">Net 15 Days</option>
                          <option value="net30">Net 30 Days</option>
                          <option value="net45">Net 45 Days</option>
                          <option value="net60">Net 60 Days</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Additional Terms and Conditions
                        </label>
                        <textarea
                          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter any additional terms and conditions"
                          rows={4}
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  {/* Attachments */}
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">Attachments</h2>
                    <div className="flex items-center justify-center border-2 border-dashed border-slate-300 rounded-lg p-6 bg-slate-50">
                      <div className="text-center">
                        <div className="mb-3">
                          <FileText className="mx-auto h-12 w-12 text-slate-400" />
                        </div>
                        <div className="flex text-sm text-slate-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                          >
                            <span>Upload supporting documents</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-slate-500">PDF, DOCX, XLSX, JPG, or PNG up to 10MB</p>
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="pt-4 border-t border-slate-200">
                    <div className="flex flex-col sm:flex-row gap-4 justify-end">
                      <Link href="/vendors">
                        <Button variant="outline" type="button">
                          Cancel
                        </Button>
                      </Link>
                      <Button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-700">
                        {isSubmitting ? "Submitting..." : "Submit Bid"}
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

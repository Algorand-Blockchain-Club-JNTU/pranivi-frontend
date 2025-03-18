"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Download, Copy, CheckCircle2, Package, Truck, QrCode } from "lucide-react"

export default function GenerateQRCode() {
  const [shipmentDetails, setShipmentDetails] = useState({
    orderId: "",
    trackingNumber: "",
    shipmentType: "",
    destination: "",
    items: "",
    notes: "",
  })

  const [qrGenerated, setQrGenerated] = useState(false)
  const [qrCodeData, setQrCodeData] = useState("")
  const [copied, setCopied] = useState(false)

  const qrRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setShipmentDetails((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const generateQRCode = (e) => {
    e.preventDefault()

    // Generate a random tracking number if not provided
    if (!shipmentDetails.trackingNumber) {
      const randomTrackingNumber =
        "TRK" +
        Math.floor(Math.random() * 10000000)
          .toString()
          .padStart(7, "0")
      setShipmentDetails((prev) => ({
        ...prev,
        trackingNumber: randomTrackingNumber,
      }))
    }

    // Create QR code data
    const qrData = JSON.stringify({
      orderId: shipmentDetails.orderId,
      trackingNumber:
        shipmentDetails.trackingNumber ||
        "TRK" +
          Math.floor(Math.random() * 10000000)
            .toString()
            .padStart(7, "0"),
      shipmentType: shipmentDetails.shipmentType,
      destination: shipmentDetails.destination,
      items: shipmentDetails.items,
      timestamp: new Date().toISOString(),
      vendor: "Acme Corporation",
      status: "Ready for Shipment",
    })

    setQrCodeData(qrData)
    setQrGenerated(true)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(qrCodeData)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const downloadQRCode = () => {
    const canvas = qrRef.current.querySelector("canvas")
    if (canvas) {
      const url = canvas.toDataURL("image/png")
      const link = document.createElement("a")
      link.href = url
      link.download = `QR_${shipmentDetails.orderId || "shipment"}.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
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

          <h1 className="text-3xl font-bold text-slate-900 mb-6">Generate Shipment QR Code</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle>Shipment Details</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={generateQRCode}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Order ID *</label>
                      <input
                        type="text"
                        name="orderId"
                        value={shipmentDetails.orderId}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter order ID"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Tracking Number</label>
                      <input
                        type="text"
                        name="trackingNumber"
                        value={shipmentDetails.trackingNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Leave blank to auto-generate"
                      />
                      <p className="text-xs text-slate-500 mt-1">
                        If left blank, a tracking number will be generated automatically
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Shipment Type *</label>
                      <select
                        name="shipmentType"
                        value={shipmentDetails.shipmentType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select shipment type</option>
                        <option value="standard">Standard</option>
                        <option value="express">Express</option>
                        <option value="overnight">Overnight</option>
                        <option value="international">International</option>
                        <option value="fragile">Fragile</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Destination *</label>
                      <input
                        type="text"
                        name="destination"
                        value={shipmentDetails.destination}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter destination address"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Items Description *</label>
                      <textarea
                        name="items"
                        value={shipmentDetails.items}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Describe the items in this shipment"
                        rows={3}
                        required
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Additional Notes</label>
                      <textarea
                        name="notes"
                        value={shipmentDetails.notes}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Any special handling instructions or notes"
                        rows={2}
                      ></textarea>
                    </div>

                    <div className="pt-4">
                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                        Generate QR Code
                      </Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>

            <div>
              <Card className="shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle>QR Code</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {qrGenerated ? (
                    <div className="flex flex-col items-center">
                      <div ref={qrRef} className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                        <img
                          src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrCodeData)}`}
                          alt="QR Code"
                          width={200}
                          height={200}
                          className="mx-auto"
                        />
                      </div>

                      <div className="w-full space-y-4">
                        <div className="flex items-center justify-between p-3 bg-slate-100 rounded-lg">
                          <div className="flex items-center">
                            <Package className="h-5 w-5 text-slate-500 mr-2" />
                            <span className="text-sm font-medium">Order ID:</span>
                          </div>
                          <span className="text-sm">{shipmentDetails.orderId}</span>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-slate-100 rounded-lg">
                          <div className="flex items-center">
                            <Truck className="h-5 w-5 text-slate-500 mr-2" />
                            <span className="text-sm font-medium">Tracking Number:</span>
                          </div>
                          <span className="text-sm">{shipmentDetails.trackingNumber}</span>
                        </div>

                        <div className="flex gap-2">
                          <Button onClick={downloadQRCode} className="flex-1">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>

                          <Button variant="outline" onClick={copyToClipboard} className="flex-1">
                            {copied ? (
                              <>
                                <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                                Copied!
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4 mr-2" />
                                Copy Data
                              </>
                            )}
                          </Button>
                        </div>

                        <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
                          <p className="text-sm text-blue-800">
                            <strong>How to use:</strong> Print this QR code and attach it to your shipment. The
                            recipient can scan it to verify the contents and track delivery status.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full py-12">
                      <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                        <QrCode className="h-12 w-12 text-slate-400" />
                      </div>
                      <h3 className="text-lg font-medium text-slate-700 mb-2">No QR Code Generated</h3>
                      <p className="text-slate-500 text-center mb-6">
                        Fill out the shipment details form and click "Generate QR Code" to create a QR code for your
                        shipment.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {qrGenerated && (
                <div className="mt-6">
                  <Card className="shadow-lg">
                    <CardHeader className="pb-2">
                      <CardTitle>Tracking Link</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <p className="text-sm text-slate-600 mb-2">
                          Share this link with the recipient to track the shipment:
                        </p>
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={`https://pranivi.com/track/${shipmentDetails.trackingNumber}`}
                            className="flex-1 px-4 py-2 border border-slate-300 rounded-md bg-slate-50"
                            readOnly
                          />
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              navigator.clipboard.writeText(
                                `https://pranivi.com/track/${shipmentDetails.trackingNumber}`,
                              )
                              alert("Tracking link copied to clipboard!")
                            }}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


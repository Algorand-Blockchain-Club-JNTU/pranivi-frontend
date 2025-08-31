"use client"

import { useState, useRef, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowLeft,
  Download,
  Copy,
  CheckCircle2,
  Package,
  Truck,
  QrCode,
} from "lucide-react"

// ✅ Shipment details type
interface ShipmentDetails {
  orderId: string
  trackingNumber: string
  shipmentType: string
  destination: string
  items: string
  notes: string
}

export default function GenerateQRCode() {
  const [shipmentDetails, setShipmentDetails] = useState<ShipmentDetails>({
    orderId: "",
    trackingNumber: "",
    shipmentType: "",
    destination: "",
    items: "",
    notes: "",
  })

  const [qrGenerated, setQrGenerated] = useState(false)
  const [copied, setCopied] = useState(false)
  const [qrCodeData, setQrCodeData] = useState("")
  const qrRef = useRef<HTMLDivElement>(null)

  // ✅ Form state handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setShipmentDetails((prev) => ({ ...prev, [name]: value }))
  }

  // ✅ Utilities
  const generateTrackingNumber = () =>
    "TRK" + Math.floor(Math.random() * 1e7).toString().padStart(7, "0")

  const generateQRCode = (e: React.FormEvent) => {
    e.preventDefault()
    const trackingNumber = shipmentDetails.trackingNumber || generateTrackingNumber()

    const qrData = JSON.stringify({
      ...shipmentDetails,
      trackingNumber,
      timestamp: new Date().toISOString(),
      vendor: "Acme Corporation",
      status: "Ready for Shipment",
    })

    setShipmentDetails((prev) => ({ ...prev, trackingNumber }))
    setQrCodeData(qrData)
    setQrGenerated(true)
  }

  const downloadQRCode = () => {
    const canvas = qrRef.current?.querySelector("canvas")
    if (!canvas) return

    const url = canvas.toDataURL("image/png")
    const link = document.createElement("a")
    link.href = url
    link.download = `QR_${shipmentDetails.orderId || "shipment"}.png`
    link.click()
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const trackingLink = useMemo(
    () => `https://pranivi.com/track/${shipmentDetails.trackingNumber}`,
    [shipmentDetails.trackingNumber]
  )

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back */}
          <Link
            href="/vendors"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Dashboard
          </Link>

          <h1 className="text-3xl font-bold text-slate-900 mb-6">
            Generate Shipment QR Code
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Shipment Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={generateQRCode} className="space-y-4">
                  {/* Required text fields */}
                  {[
                    { label: "Order ID *", name: "orderId", required: true },
                    { label: "Tracking Number", name: "trackingNumber" },
                    { label: "Destination *", name: "destination", required: true },
                  ].map(({ label, name, required }) => (
                    <InputField
                      key={name}
                      label={label}
                      name={name as keyof ShipmentDetails}
                      value={shipmentDetails[name as keyof ShipmentDetails]}
                      onChange={handleChange}
                      required={required}
                      note={name === "trackingNumber" ? "Will auto-generate if left blank" : undefined}
                    />
                  ))}

                  {/* Shipment type */}
                  <SelectField
                    label="Shipment Type *"
                    name="shipmentType"
                    value={shipmentDetails.shipmentType}
                    onChange={handleChange}
                    options={["standard", "express", "overnight", "international", "fragile"]}
                    required
                  />

                  {/* Textareas */}
                  <TextAreaField
                    label="Items Description *"
                    name="items"
                    value={shipmentDetails.items}
                    onChange={handleChange}
                    required
                  />
                  <TextAreaField
                    label="Additional Notes"
                    name="notes"
                    value={shipmentDetails.notes}
                    onChange={handleChange}
                    rows={2}
                  />

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Generate QR Code
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* QR Preview */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>QR Code</CardTitle>
              </CardHeader>
              <CardContent>
                {qrGenerated ? (
                  <div className="flex flex-col items-center">
                    <div ref={qrRef} className="p-4 bg-white rounded shadow mb-6">
                      <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
                          qrCodeData
                        )}`}
                        alt="QR Code"
                        width={200}
                        height={200}
                      />
                    </div>

                    <div className="w-full space-y-4">
                      <InfoRow icon={Package} label="Order ID" value={shipmentDetails.orderId} />
                      <InfoRow icon={Truck} label="Tracking Number" value={shipmentDetails.trackingNumber} />

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Button className="flex-1" onClick={downloadQRCode}>
                          <Download className="h-4 w-4 mr-2" /> Download
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1"
                          onClick={() => copyToClipboard(qrCodeData)}
                        >
                          {copied ? (
                            <>
                              <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" /> Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="h-4 w-4 mr-2" /> Copy Data
                            </>
                          )}
                        </Button>
                      </div>

                      <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg text-sm text-blue-800">
                        <strong>How to use:</strong> Print this QR code and attach it to your shipment.
                      </div>
                    </div>
                  </div>
                ) : (
                  <EmptyQRCodeState />
                )}
              </CardContent>
            </Card>

            {/* Tracking Link */}
            {qrGenerated && (
              <Card className="shadow-lg mt-6 lg:col-span-2">
                <CardHeader>
                  <CardTitle>Tracking Link</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-2">
                    Share this link with the recipient to track the shipment:
                  </p>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={trackingLink}
                      readOnly
                      className="flex-1 px-4 py-2 border border-slate-300 rounded-md bg-slate-50"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(trackingLink)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// ✅ Reusable components
function InputField({
  label,
  name,
  value,
  onChange,
  required,
  note,
}: {
  label: string
  name: keyof ShipmentDetails
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  required?: boolean
  note?: string
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
      <input
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={`Enter ${label}`}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required={required}
      />
      {note && <p className="text-xs text-slate-500 mt-1">{note}</p>}
    </div>
  )
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  required,
}: {
  label: string
  name: keyof ShipmentDetails
  value: string
  onChange: React.ChangeEventHandler<HTMLSelectElement>
  options: string[]
  required?: boolean
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required={required}
      >
        <option value="">Select type</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt[0].toUpperCase() + opt.slice(1)}
          </option>
        ))}
      </select>
    </div>
  )
}

function TextAreaField({
  label,
  name,
  value,
  onChange,
  rows = 3,
  required,
}: {
  label: string
  name: keyof ShipmentDetails
  value: string
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>
  rows?: number
  required?: boolean
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        required={required}
        placeholder={`Enter ${label}`}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}

function InfoRow({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between p-3 bg-slate-100 rounded-lg">
      <div className="flex items-center">
        <Icon className="h-5 w-5 text-slate-500 mr-2" />
        <span className="text-sm font-medium">{label}:</span>
      </div>
      <span className="text-sm">{value}</span>
    </div>
  )
}

function EmptyQRCodeState() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-12">
      <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-4">
        <QrCode className="h-12 w-12 text-slate-400" />
      </div>
      <h3 className="text-lg font-medium text-slate-700 mb-2">No QR Code Generated</h3>
      <p className="text-slate-500 text-center max-w-sm">
        Fill out the shipment details and click “Generate QR Code” to create one.
      </p>
    </div>
  )
}

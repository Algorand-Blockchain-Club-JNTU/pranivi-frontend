"use client"

import { Calendar, CheckCircle2, Coins, Package, Truck } from "lucide-react"
import { useState } from "react"

const shipments = [
  {
    id: "72849202",
    date: "2023-01-02",
    customer: "John Doe",
    trackingNumber: "1Z999AA10000000000",
    status: "delivered",
    hasBlockchainVerification: true,
  },
  {
    id: "23948293",
    date: "2023-03-04",
    customer: "Jane Smith",
    trackingNumber: "1Z999AA10000000001",
    status: "in-transit",
    hasBlockchainVerification: false,
  },
  {
    id: "94857392",
    date: "2023-05-06",
    customer: "Peter Jones",
    trackingNumber: "1Z999AA10000000002",
    status: "scheduled",
    hasBlockchainVerification: true,
  },
  {
    id: "12345678",
    date: "2023-07-08",
    customer: "Mary Williams",
    trackingNumber: "1Z999AA10000000003",
    status: "preparing",
    hasBlockchainVerification: false,
  },
]

const columns = [
  { name: "ID", uid: "id" },
  { name: "Date", uid: "date" },
  { name: "Customer", uid: "customer" },
  { name: "Tracking Number", uid: "trackingNumber" },
  { name: "Status", uid: "status" },
  { name: "Actions", uid: "actions" },
]

export default function ShipmentsPage() {
  const [filter, setFilter] = useState("")
  const [sortBy, setSortBy] = useState("date")
  const [sortOrder, setSortOrder] = useState("desc")

  // Add type for the 'field' parameter
  const toggleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(field)
      setSortOrder("desc")
    }
  }

  const sortedShipments = [...shipments].sort((a, b) => {
    const order = sortOrder === "asc" ? 1 : -1

    if (sortBy === "date") {
      return (new Date(a.date).getTime() - new Date(b.date).getTime()) * order
    }

    if (sortBy === "customer") {
      return a.customer.localeCompare(b.customer) * order
    }

    return 0
  })

  const filteredShipments = sortedShipments.filter((shipment) => {
    if (filter === "") return true

    return (
      shipment.customer.toLowerCase().includes(filter.toLowerCase()) ||
      shipment.trackingNumber.toLowerCase().includes(filter.toLowerCase())
    )
  })

  // Add type for the 'status' parameter
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "preparing":
        return (
          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium flex items-center w-fit">
            <Package className="h-3 w-3 mr-1" />
            Preparing
          </span>
        )
      case "scheduled":
        return (
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium flex items-center w-fit">
            <Calendar className="h-3 w-3 mr-1" />
            Scheduled
          </span>
        )
      case "in-transit":
        return (
          <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium flex items-center w-fit">
            <Truck className="h-3 w-3 mr-1" />
            In Transit
          </span>
        )
      case "delivered":
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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shipments</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Filter by customer or tracking number"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.uid}
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  onClick={() => toggleSort(column.uid)}
                >
                  {column.name}
                  {sortBy === column.uid && <span>{sortOrder === "asc" ? " ▲" : " ▼"}</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredShipments.map((shipment) => (
              <tr key={shipment.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{shipment.id}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{shipment.date}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">{shipment.customer}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{shipment.trackingNumber}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {getStatusBadge(shipment.status)}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {shipment.hasBlockchainVerification && (
                    <Coins className="h-4 w-4 text-blue-500" aria-label="Blockchain Verified" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}


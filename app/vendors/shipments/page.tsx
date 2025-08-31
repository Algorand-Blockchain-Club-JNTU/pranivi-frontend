"use client"

import { Calendar, CheckCircle2, Coins, Package, Truck } from "lucide-react"
import { useMemo, useState } from "react"

// ✅ Define types
type Shipment = {
  id: string
  date: string
  customer: string
  trackingNumber: string
  status: "preparing" | "scheduled" | "in-transit" | "delivered"
  hasBlockchainVerification: boolean
}

const shipments: Shipment[] = [
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

// ✅ Column definition
const columns = [
  { name: "ID", uid: "id" },
  { name: "Date", uid: "date" },
  { name: "Customer", uid: "customer" },
  { name: "Tracking Number", uid: "trackingNumber" },
  { name: "Status", uid: "status" },
  { name: "Actions", uid: "actions" },
]

// ✅ Extracted Status Badge
function StatusBadge({ status }: { status: Shipment["status"] }) {
  const base = "px-2 py-1 rounded-full text-xs font-medium flex items-center w-fit"
  switch (status) {
    case "preparing":
      return (
        <span className={`${base} bg-yellow-100 text-yellow-800`}>
          <Package className="h-3 w-3 mr-1" /> Preparing
        </span>
      )
    case "scheduled":
      return (
        <span className={`${base} bg-blue-100 text-blue-800`}>
          <Calendar className="h-3 w-3 mr-1" /> Scheduled
        </span>
      )
    case "in-transit":
      return (
        <span className={`${base} bg-purple-100 text-purple-800`}>
          <Truck className="h-3 w-3 mr-1" /> In Transit
        </span>
      )
    case "delivered":
      return (
        <span className={`${base} bg-green-100 text-green-800`}>
          <CheckCircle2 className="h-3 w-3 mr-1" /> Delivered
        </span>
      )
    default:
      return null
  }
}

export default function ShipmentsPage() {
  const [filter, setFilter] = useState("")
  const [sortBy, setSortBy] = useState<keyof Shipment>("date")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")

  // ✅ Sorting toggle
  const toggleSort = (field: keyof Shipment) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(field)
      setSortOrder("desc")
    }
  }

  // ✅ useMemo for performance
  const sortedShipments = useMemo(() => {
    const order = sortOrder === "asc" ? 1 : -1
    return [...shipments].sort((a, b) => {
      if (sortBy === "date") {
        return (new Date(a.date).getTime() - new Date(b.date).getTime()) * order
      }
      if (sortBy === "customer") {
        return a.customer.localeCompare(b.customer) * order
      }
      return 0
    })
  }, [sortBy, sortOrder])

  const filteredShipments = useMemo(() => {
    if (!filter) return sortedShipments
    return sortedShipments.filter(
      (s) =>
        s.customer.toLowerCase().includes(filter.toLowerCase()) ||
        s.trackingNumber.toLowerCase().includes(filter.toLowerCase())
    )
  }, [filter, sortedShipments])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shipments</h1>

      {/* Filter */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Filter by customer or tracking number"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full leading-normal border-collapse">
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.uid}
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer select-none"
                  onClick={() => toggleSort(column.uid as keyof Shipment)}
                >
                  {column.name}
                  {sortBy === column.uid && <span>{sortOrder === "asc" ? " ▲" : " ▼"}</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredShipments.length > 0 ? (
              filteredShipments.map((shipment) => (
                <tr
                  key={shipment.id}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{shipment.id}</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{shipment.date}</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{shipment.customer}</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{shipment.trackingNumber}</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <StatusBadge status={shipment.status} />
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {shipment.hasBlockchainVerification && (
                      <Coins className="h-4 w-4 text-blue-500" aria-label="Blockchain Verified" />
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-5 py-5 text-center text-gray-500 bg-white"
                >
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

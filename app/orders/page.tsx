'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Search, Package, Truck, CheckCircle, XCircle, Clock, ArrowRight } from 'lucide-react'

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('all')

  // Mock orders data
  const mockOrders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'delivered',
      total: 149.97,
      items: [
        { name: 'Wireless Headphones', quantity: 1, price: 99.99 },
        { name: 'Phone Case', quantity: 2, price: 24.99 }
      ],
      tracking: '1Z999AA1234567890'
    },
    {
      id: 'ORD-002',
      date: '2024-01-10',
      status: 'shipped',
      total: 89.98,
      items: [
        { name: 'Bluetooth Speaker', quantity: 1, price: 39.99 },
        { name: 'USB Cable Set', quantity: 1, price: 49.99 }
      ],
      tracking: '1Z999AA1234567891'
    },
    {
      id: 'ORD-003',
      date: '2024-01-05',
      status: 'processing',
      total: 199.99,
      items: [
        { name: 'Smart Watch', quantity: 1, price: 199.99 }
      ],
      tracking: null
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case 'shipped':
        return <Truck className="h-5 w-5 text-blue-600" />
      case 'processing':
        return <Clock className="h-5 w-5 text-yellow-600" />
      case 'cancelled':
        return <XCircle className="h-5 w-5 text-red-600" />
      default:
        return <Package className="h-5 w-5 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800'
      case 'shipped':
        return 'bg-blue-100 text-blue-800'
      case 'processing':
        return 'bg-yellow-100 text-yellow-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredOrders = mockOrders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.items.some(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesStatus = selectedStatus === 'all' || order.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Orders</h1>
          <p className="text-gray-600">Track your orders and manage returns</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="search">Search Orders</Label>
              <div className="relative mt-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="search"
                  placeholder="Search by order ID or item name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="status">Order Status</Label>
              <select
                id="status"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Orders</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <div className="flex items-end">
              <Button className="w-full bg-orange-400 hover:bg-orange-500 text-gray-900">
                <Search className="h-4 w-4 mr-2" />
                Search Orders
              </Button>
            </div>
          </div>
        </div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No orders found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search criteria or check your order history.</p>
              <Link href="/products">
                <Button className="bg-orange-400 hover:bg-orange-500 text-gray-900">
                  Start Shopping
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {filteredOrders.map((order) => (
              <Card key={order.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {getStatusIcon(order.status)}
                      <div>
                        <CardTitle className="text-lg">Order {order.id}</CardTitle>
                        <p className="text-sm text-gray-600">Placed on {new Date(order.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">${order.total.toFixed(2)}</div>
                      <Badge className={`mt-2 ${getStatusColor(order.status)}`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Order Items */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Items</h4>
                      <div className="space-y-2">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span>{item.name} × {item.quantity}</span>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Order Actions */}
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center space-x-4">
                        {order.tracking && (
                          <div className="flex items-center space-x-2">
                            <Truck className="h-4 w-4 text-blue-600" />
                            <span className="text-sm text-blue-600">Tracking: {order.tracking}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        {order.status === 'delivered' && (
                          <Button variant="outline" size="sm">
                            Return Item
                          </Button>
                        )}
                        {order.status === 'shipped' && (
                          <Button variant="outline" size="sm">
                            Track Package
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Help Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Package className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Track Your Order</h4>
                <p className="text-sm text-gray-600 mb-3">Get real-time updates on your package location</p>
                <Button variant="outline" size="sm">
                  Track Package
                </Button>
              </div>
              <div className="text-center">
                <Truck className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Shipping Info</h4>
                <p className="text-sm text-gray-600 mb-3">Learn about shipping rates and delivery times</p>
                <Button variant="outline" size="sm">
                  Shipping Info
                </Button>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Returns & Refunds</h4>
                <p className="text-sm text-gray-600 mb-3">Easy returns and refunds within 30 days</p>
                <Button variant="outline" size="sm">
                  Return Policy
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

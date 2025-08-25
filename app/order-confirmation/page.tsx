'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Truck, Mail, ArrowRight } from 'lucide-react'

export default function OrderConfirmationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-8">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
        <p className="text-gray-600 text-lg">
          Thank you for your purchase. Your order has been successfully placed.
        </p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>What happens next?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start space-x-4">
            <Mail className="h-6 w-6 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Order Confirmation Email</h3>
              <p className="text-gray-600">
                You'll receive a confirmation email with your order details and tracking information.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Truck className="h-6 w-6 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Order Processing</h3>
              <p className="text-gray-600">
                We'll prepare your order for shipment within 1-2 business days.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Delivery</h3>
              <p className="text-gray-600">
                Your order will be delivered within 5-7 business days.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products">
            <Button size="lg">
              Continue Shopping
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/profile">
            <Button variant="outline" size="lg">
              View Order History
            </Button>
          </Link>
        </div>
        
        <p className="text-gray-600 mt-8">
          Need help with your order? 
          <Link href="/contact" className="text-blue-600 hover:text-blue-700 ml-1">
            Contact our support team
          </Link>
        </p>
      </div>
    </div>
  )
}
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCart } from '@/contexts/CartContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Trash2, ShoppingCart, ArrowLeft, CreditCard, Truck } from 'lucide-react'
import Image from 'next/image'
import { Label } from '@/components/ui/label'

export default function CartPage() {
  const { state, dispatch } = useCart()
  const router = useRouter()
  const [couponCode, setCouponCode] = useState('')

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      dispatch({ type: 'REMOVE_ITEM', payload: productId })
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity: newQuantity } })
    }
  }

  const handleRemoveItem = (productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId })
  }

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const handleCheckout = () => {
    router.push('/checkout')
  }

  const handleContinueShopping = () => {
    router.push('/products')
  }

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <ShoppingCart className="h-24 w-24 text-gray-400 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <div className="space-x-4">
              <Button onClick={handleContinueShopping} className="bg-orange-400 hover:bg-orange-500 text-gray-900">
                Start Shopping
              </Button>
              <Button variant="outline" onClick={() => router.push('/')}>
                Continue Browsing
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => router.back()}>
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </Button>
            <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
            <Badge variant="secondary" className="text-lg px-3 py-1">
              {state.itemCount} {state.itemCount === 1 ? 'item' : 'items'}
            </Badge>
          </div>
          <Button variant="outline" onClick={handleClearCart} className="text-red-600 hover:text-red-700">
            <Trash2 className="h-4 w-4 mr-2" />
            Clear Cart
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Cart Items</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.product.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <div className="relative w-20 h-20">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.product.name}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{item.product.description}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Badge variant="secondary">{item.product.category}</Badge>
                        <span className="text-sm text-gray-500">Rating: {item.product.rating}/5</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">${item.product.price}</div>
                      <div className="flex items-center space-x-2 mt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                        >
                          -
                        </Button>
                        <span className="w-12 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                        >
                          +
                        </Button>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        Total: ${(item.product.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveItem(item.product.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Coupon Code */}
                <div>
                  <Label htmlFor="coupon">Coupon Code</Label>
                  <div className="flex space-x-2 mt-1">
                    <Input
                      id="coupon"
                      placeholder="Enter code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <Button variant="outline" size="sm">
                      Apply
                    </Button>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal ({state.itemCount} items)</span>
                    <span>${state.total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>${(state.total * 0.08).toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${(state.total + (state.total * 0.08)).toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <Button 
                  onClick={handleCheckout} 
                  className="w-full bg-orange-400 hover:bg-orange-500 text-gray-900"
                  size="lg"
                >
                  <CreditCard className="h-5 w-5 mr-2" />
                  Proceed to Checkout
                </Button>

                {/* Continue Shopping */}
                <Button 
                  variant="outline" 
                  onClick={handleContinueShopping}
                  className="w-full"
                >
                  <Truck className="h-5 w-5 mr-2" />
                  Continue Shopping
                </Button>

                {/* Benefits */}
                <div className="text-sm text-gray-600 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Truck className="h-4 w-4 text-green-600" />
                    <span>Free shipping on orders over $25</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CreditCard className="h-4 w-4 text-green-600" />
                    <span>Secure checkout</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Truck className="h-4 w-4 text-green-600" />
                    <span>30-day returns</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
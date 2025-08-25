'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useCart } from '@/contexts/CartContext'
// import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { CreditCard, Truck, Lock } from 'lucide-react'
import { toast } from 'sonner'
import Image from 'next/image'

export default function CheckoutPage() {
  const { state, dispatch } = useCart()
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)
  const [user, setUser] = useState<any>(null)
  
  // Form states
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    paymentMethod: 'card'
  })

  useEffect(() => {
    const getUser = async () => {
      // const { data: { user } } = await supabase.auth.getUser()
      // if (user) {
      //   setUser(user)
      //   setFormData(prev => ({ ...prev, email: user.email || '' }))
      // }
    }
    getUser()
  }, [])

  useEffect(() => {
    if (state.items.length === 0) {
      router.push('/cart')
    }
  }, [state.items, router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Create order (simplified - in real app, integrate with Stripe)
      const orderData = {
        user_id: user?.id,
        total: subtotal + shipping + tax,
        status: 'confirmed',
        items: state.items.map(item => ({
          product_id: item.product.id,
          quantity: item.quantity,
          price: item.product.price
        }))
      }

      // Clear cart
      dispatch({ type: 'CLEAR_CART' })
      
      toast.success('Order placed successfully!')
      router.push('/order-confirmation')
      
    } catch (error) {
      toast.error('Payment failed. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  if (state.items.length === 0) {
    return null
  }

  const subtotal = state.total
  const shipping = subtotal >= 50 ? 0 : 5.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Checkout Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={!!user}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Address */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="mr-2 h-5 w-5" />
                  Shipping Address
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="address">Street Address</Label>
                  <Input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="zipCode">ZIP Code</Label>
                  <Input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="mr-2 h-5 w-5" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={formData.paymentMethod} onValueChange={(value) => setFormData(prev => ({ ...prev, paymentMethod: value }))}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card">Credit Card</Label>
                  </div>
                </RadioGroup>
                
                <div className="mt-4 space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input type="text" id="expiry" placeholder="MM/YY" required />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input type="text" id="cvv" placeholder="123" required />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button type="submit" size="lg" className="w-full" disabled={isProcessing}>
              {isProcessing ? 'Processing...' : `Complete Order - $${total.toFixed(2)}`}
            </Button>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Items */}
              <div className="space-y-3">
                {state.items.map((item) => (
                  <div key={item.product.id} className="flex items-center space-x-3">
                    <div className="relative">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        width={60}
                        height={60}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {item.product.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        ${item.product.price} each
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <Separator />

              {/* Totals */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                
                <Separator />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Security Notice */}
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="flex items-center text-green-600">
                  <Lock className="h-4 w-4 mr-2" />
                  <span className="text-sm">Your payment information is secure</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
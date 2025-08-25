'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/lib/types'
import { useCart } from '@/contexts/CartContext'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart, Heart, Share, Star, Truck, Shield, ArrowLeft, Plus, Minus, MapPin, Clock } from 'lucide-react'
import { toast } from 'sonner'

interface ProductDetailClientProps {
  product: Product
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const router = useRouter()
  const { dispatch } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const addToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({
        type: 'ADD_ITEM',
        payload: product
      })
    }
    toast.success(`Added ${quantity} ${product.name}(s) to cart!`)
  }

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1)
  }

  const decrementQuantity = () => {
    setQuantity(prev => Math.max(1, prev - 1))
  }

  const productImages = [
    product.image,
    'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg',
    'https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg',
    'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg'
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb and Back Button */}
      <div className="flex items-center space-x-2 mb-6">
        <Button 
          variant="ghost" 
          onClick={() => router.back()}
          className="p-2"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <nav className="text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-blue-600">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={productImages[selectedImageIndex]}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Thumbnail Images */}
          <div className="grid grid-cols-4 gap-2">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`aspect-square overflow-hidden rounded-md ${
                  selectedImageIndex === index 
                    ? 'ring-2 ring-blue-500' 
                    : 'ring-1 ring-gray-200 hover:ring-gray-300'
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Information */}
        <div className="space-y-6">
          <div>
            <Badge className="mb-2">{product.category}</Badge>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold text-blue-600 mb-6">
              ${product.price.toFixed(2)}
            </div>
          </div>

          {/* Product Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">Quantity:</span>
              <div className="flex items-center border rounded-md">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={decrementQuantity}
                  className="h-10 w-10 p-0"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={incrementQuantity}
                  className="h-10 w-10 p-0"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button
                onClick={addToCart}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
                size="lg"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                <Share className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Product Features */}
          <div className="grid grid-cols-2 gap-4 py-6 border-t">
            <div className="flex items-center space-x-3">
              <Truck className="h-5 w-5 text-green-600" />
              <div>
                <div className="font-medium">Free Shipping</div>
                <div className="text-sm text-gray-600">On orders over $50</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="h-5 w-5 text-blue-600" />
              <div>
                <div className="font-medium">Secure Payment</div>
                <div className="text-sm text-gray-600">100% protected</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="h-5 w-5 text-orange-600" />
              <div>
                <div className="font-medium">Fast Delivery</div>
                <div className="text-sm text-gray-600">2-3 business days</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-purple-600" />
              <div>
                <div className="font-medium">Local Store</div>
                <div className="text-sm text-gray-600">Pick up available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/lib/types'
import ProductCard from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Filter, Grid, List, Star } from 'lucide-react'

export default function ElectronicsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  useEffect(() => {
    // Mock electronics products data
    const electronicsProducts: Product[] = [
      {
        id: 'elec1',
        name: 'Wireless Bluetooth Headphones',
        description: 'Premium noise-cancelling wireless headphones with 30-hour battery life',
        price: 129.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
        category: 'electronics',
        rating: 4.6,
        reviewCount: 234,
        inStock: true
      },
      {
        id: 'elec2',
        name: 'Smart Watch Series 8',
        description: 'Advanced fitness tracking with heart rate monitor and GPS',
        price: 299.99,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
        category: 'electronics',
        rating: 4.5,
        reviewCount: 189,
        inStock: true
      },
      {
        id: 'elec3',
        name: '4K Ultra HD Smart TV',
        description: '55-inch 4K display with HDR and built-in streaming apps',
        price: 599.99,
        image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&h=500&fit=crop',
        category: 'electronics',
        rating: 4.7,
        reviewCount: 156,
        inStock: true
      },
      {
        id: 'elec4',
        name: 'Gaming Laptop Pro',
        description: 'High-performance gaming laptop with RTX graphics and 16GB RAM',
        price: 1299.99,
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop',
        category: 'electronics',
        rating: 4.8,
        reviewCount: 98,
        inStock: true
      },
      {
        id: 'elec5',
        name: 'Wireless Charging Pad',
        description: 'Fast wireless charging pad compatible with all Qi-enabled devices',
        price: 39.99,
        image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop',
        category: 'electronics',
        rating: 4.3,
        reviewCount: 312,
        inStock: true
      },
      {
        id: 'elec6',
        name: 'Bluetooth Portable Speaker',
        description: 'Waterproof portable speaker with 360-degree sound and 20-hour battery',
        price: 79.99,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
        category: 'electronics',
        rating: 4.4,
        reviewCount: 178,
        inStock: true
      },
      {
        id: 'elec7',
        name: 'USB-C Hub Adapter',
        description: '7-in-1 USB-C hub with HDMI, USB ports, and SD card reader',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500&h=500&fit=crop',
        category: 'electronics',
        rating: 4.2,
        reviewCount: 245,
        inStock: true
      },
      {
        id: 'elec8',
        name: 'Smart Home Security Camera',
        description: '1080p HD security camera with night vision and motion detection',
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
        category: 'electronics',
        rating: 4.5,
        reviewCount: 134,
        inStock: true
      }
    ]

    // Simulate loading delay
    setTimeout(() => {
      setProducts(electronicsProducts)
      setIsLoading(false)
    }, 1000)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-4 mb-6">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/20">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Electronics</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-6">
            Discover the latest in technology and innovation
          </p>
          <div className="flex items-center space-x-4">
            <Badge className="bg-orange-400 text-gray-900 text-lg px-4 py-2">
              {products.length} Products
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Free Shipping
            </Badge>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header with View Toggle */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Electronics Collection</h2>
              <p className="text-gray-600">Cutting-edge technology for modern life</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-white rounded-lg p-1 shadow-sm">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="h-8 w-8 p-0"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="h-8 w-8 p-0"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-gray-200 animate-pulse rounded-lg h-80"></div>
              ))}
            </div>
          ) : (
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {products.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  variant={viewMode === 'list' ? 'default' : 'compact'} 
                />
              ))}
            </div>
          )}

          {/* Category Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">All electronics are tested and certified for quality assurance</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $25 with Prime delivery</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day return policy with hassle-free returns</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

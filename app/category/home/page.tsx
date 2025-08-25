'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/lib/types'
import ProductCard from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Filter, Grid, List, Star, Home } from 'lucide-react'

export default function HomeGardenPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  useEffect(() => {
    // Mock home & garden products data
    const homeGardenProducts: Product[] = [
      {
        id: 'home1',
        name: 'Modern Coffee Table',
        description: 'Elegant wooden coffee table with storage shelf and modern design',
        price: 199.99,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop',
        category: 'home',
        rating: 4.6,
        reviewCount: 89,
        inStock: true
      },
      {
        id: 'home2',
        name: 'Garden Planters Set',
        description: 'Beautiful ceramic planters perfect for indoor and outdoor plants',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&h=500&fit=crop',
        category: 'home',
        rating: 4.4,
        reviewCount: 156,
        inStock: true
      },
      {
        id: 'home3',
        name: 'Smart LED Floor Lamp',
        description: 'Adjustable LED floor lamp with remote control and multiple color modes',
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&h=500&fit=crop',
        category: 'home',
        rating: 4.5,
        reviewCount: 123,
        inStock: true
      },
      {
        id: 'home4',
        name: 'Kitchen Storage Organizer',
        description: 'Multi-compartment kitchen organizer for spices, utensils, and more',
        price: 34.99,
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop',
        category: 'home',
        rating: 4.3,
        reviewCount: 234,
        inStock: true
      },
      {
        id: 'home5',
        name: 'Outdoor Patio Furniture Set',
        description: 'Comfortable patio furniture set with weather-resistant cushions',
        price: 299.99,
        image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&h=500&fit=crop',
        category: 'home',
        rating: 4.7,
        reviewCount: 78,
        inStock: true
      },
      {
        id: 'home6',
        name: 'Wall Art Canvas Prints',
        description: 'Beautiful canvas wall art prints in various sizes and designs',
        price: 59.99,
        image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=500&fit=crop',
        category: 'home',
        rating: 4.2,
        reviewCount: 145,
        inStock: true
      },
      {
        id: 'home7',
        name: 'Garden Tools Set',
        description: 'Complete set of essential garden tools for every gardener',
        price: 79.99,
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        category: 'home',
        rating: 4.6,
        reviewCount: 98,
        inStock: true
      },
      {
        id: 'home8',
        name: 'Bedroom Bedding Set',
        description: 'Luxurious cotton bedding set with pillowcases and duvet cover',
        price: 129.99,
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=500&fit=crop',
        category: 'home',
        rating: 4.4,
        reviewCount: 167,
        inStock: true
      }
    ]

    // Simulate loading delay
    setTimeout(() => {
      setProducts(homeGardenProducts)
      setIsLoading(false)
    }, 1000)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-4 mb-6">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/20">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Home & Garden</h1>
          <p className="text-xl md:text-2xl text-green-100 mb-6">
            Transform your space with beautiful home decor and garden essentials
          </p>
          <div className="flex items-center space-x-4">
            <Badge className="bg-orange-400 text-gray-900 text-lg px-4 py-2">
              {products.length} Products
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Free Assembly
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Home & Garden Collection</h2>
              <p className="text-gray-600">Everything you need to beautify your space</p>
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
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Furniture</h3>
              <p className="text-gray-600">Durable and stylish furniture for every room</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Garden Essentials</h3>
              <p className="text-gray-600">Tools and accessories for beautiful gardens</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Home Decor</h3>
              <p className="text-gray-600">Beautiful decor items to personalize your space</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

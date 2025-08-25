'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/lib/types'
import ProductCard from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Filter, Grid, List, Star, Zap } from 'lucide-react'

export default function SportsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  useEffect(() => {
    // Mock sports products data
    const sportsProducts: Product[] = [
      {
        id: 'sports1',
        name: 'Professional Basketball',
        description: 'Official size basketball with premium grip and durability',
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&h=500&fit=crop',
        category: 'sports',
        rating: 4.6,
        reviewCount: 234,
        inStock: true
      },
      {
        id: 'sports2',
        name: 'Yoga Mat Premium',
        description: 'Non-slip yoga mat with alignment lines and carrying strap',
        price: 39.99,
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop',
        category: 'sports',
        rating: 4.5,
        reviewCount: 189,
        inStock: true
      },
      {
        id: 'sports3',
        name: 'Tennis Racket Pro',
        description: 'Professional tennis racket with carbon fiber frame and premium strings',
        price: 199.99,
        image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=500&h=500&fit=crop',
        category: 'sports',
        rating: 4.7,
        reviewCount: 156,
        inStock: true
      },
      {
        id: 'sports4',
        name: 'Fitness Resistance Bands',
        description: 'Set of 5 resistance bands for strength training and rehabilitation',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop',
        category: 'sports',
        rating: 4.4,
        reviewCount: 312,
        inStock: true
      },
      {
        id: 'sports5',
        name: 'Hiking Backpack 65L',
        description: 'Large capacity hiking backpack with multiple compartments and rain cover',
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
        category: 'sports',
        rating: 4.8,
        reviewCount: 98,
        inStock: true
      },
      {
        id: 'sports6',
        name: 'Cycling Helmet',
        description: 'Lightweight cycling helmet with adjustable fit and ventilation',
        price: 69.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
        category: 'sports',
        rating: 4.6,
        reviewCount: 178,
        inStock: true
      },
      {
        id: 'sports7',
        name: 'Swimming Goggles',
        description: 'Anti-fog swimming goggles with UV protection and comfortable fit',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=500&h=500&fit=crop',
        category: 'sports',
        rating: 4.3,
        reviewCount: 245,
        inStock: true
      },
      {
        id: 'sports8',
        name: 'Camping Tent 4-Person',
        description: 'Spacious 4-person camping tent with weather protection and easy setup',
        price: 149.99,
        image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&h=500&fit=crop',
        category: 'sports',
        rating: 4.7,
        reviewCount: 134,
        inStock: true
      }
    ]

    // Simulate loading delay
    setTimeout(() => {
      setProducts(sportsProducts)
      setIsLoading(false)
    }, 1000)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-4 mb-6">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/20">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Sports & Outdoors</h1>
          <p className="text-xl md:text-2xl text-green-100 mb-6">
            Gear up for adventure and stay active with premium sports equipment
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Sports & Outdoors Collection</h2>
              <p className="text-gray-600">Equipment for every sport and outdoor activity</p>
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
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Quality</h3>
              <p className="text-gray-600">Equipment used by athletes and professionals</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Outdoor Adventure</h3>
              <p className="text-gray-600">Gear for camping, hiking, and outdoor exploration</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fitness & Training</h3>
              <p className="text-gray-600">Equipment for home workouts and gym training</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

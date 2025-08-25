'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/lib/types'
import ProductCard from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Filter, Grid, List, Star, Gamepad2 } from 'lucide-react'

export default function ToysPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  useEffect(() => {
    // Mock toys products data
    const toysProducts: Product[] = [
      {
        id: 'toy1',
        name: 'Building Blocks Set',
        description: 'Educational building blocks set with 100 pieces for creative construction',
        price: 34.99,
        image: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=500&h=500&fit=crop',
        category: 'toys',
        rating: 4.7,
        reviewCount: 456,
        inStock: true
      },
      {
        id: 'toy2',
        name: 'Remote Control Car',
        description: 'High-speed RC car with 4WD and rechargeable battery',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
        category: 'toys',
        rating: 4.5,
        reviewCount: 234,
        inStock: true
      },
      {
        id: 'toy3',
        name: 'Board Game Collection',
        description: 'Family board games set including Monopoly, Scrabble, and more',
        price: 79.99,
        image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=500&h=500&fit=crop',
        category: 'toys',
        rating: 4.6,
        reviewCount: 189,
        inStock: true
      },
      {
        id: 'toy4',
        name: 'Art & Craft Kit',
        description: 'Complete art kit with paints, brushes, canvas, and instructions',
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=500&fit=crop',
        category: 'toys',
        rating: 4.4,
        reviewCount: 312,
        inStock: true
      },
      {
        id: 'toy5',
        name: 'Puzzle 1000 Pieces',
        description: 'Beautiful landscape puzzle with 1000 pieces for adults',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1606092195825-c1afdeda7e3c?w=500&h=500&fit=crop',
        category: 'toys',
        rating: 4.8,
        reviewCount: 178,
        inStock: true
      },
      {
        id: 'toy6',
        name: 'Science Experiment Kit',
        description: 'Educational science kit with 50+ experiments for kids',
        price: 39.99,
        image: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=500&h=500&fit=crop',
        category: 'toys',
        rating: 4.6,
        reviewCount: 145,
        inStock: true
      },
      {
        id: 'toy7',
        name: 'Doll House Set',
        description: 'Beautiful wooden doll house with furniture and accessories',
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=500&h=500&fit=crop',
        category: 'toys',
        rating: 4.7,
        reviewCount: 98,
        inStock: true
      },
      {
        id: 'toy8',
        name: 'Video Game Console',
        description: 'Latest gaming console with wireless controllers and games',
        price: 299.99,
        image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=500&h=500&fit=crop',
        category: 'toys',
        rating: 4.9,
        reviewCount: 567,
        inStock: true
      }
    ]

    // Simulate loading delay
    setTimeout(() => {
      setProducts(toysProducts)
      setIsLoading(false)
    }, 1000)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-4 mb-6">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/20">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Toys & Games</h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-6">
            Fun and educational toys for all ages
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Toys & Games Collection</h2>
              <p className="text-gray-600">Entertainment and learning for everyone</p>
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
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gamepad2 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Educational Toys</h3>
              <p className="text-gray-600">Learning through play with STEM and educational toys</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Family Games</h3>
              <p className="text-gray-600">Board games and activities for family bonding</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Creative Play</h3>
              <p className="text-gray-600">Arts, crafts, and building sets for creativity</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

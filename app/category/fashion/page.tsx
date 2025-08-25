'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/lib/types'
import ProductCard from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Filter, Grid, List, Star, Heart } from 'lucide-react'

export default function FashionPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  useEffect(() => {
    // Mock fashion products data
    const fashionProducts: Product[] = [
      {
        id: 'fashion1',
        name: 'Premium Cotton T-Shirt',
        description: 'Soft, breathable cotton t-shirt with modern fit and stylish design',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
        category: 'fashion',
        rating: 4.4,
        reviewCount: 156,
        inStock: true
      },
      {
        id: 'fashion2',
        name: 'Designer Denim Jeans',
        description: 'High-quality denim jeans with perfect fit and contemporary style',
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop',
        category: 'fashion',
        rating: 4.6,
        reviewCount: 234,
        inStock: true
      },
      {
        id: 'fashion3',
        name: 'Casual Blazer Jacket',
        description: 'Versatile blazer perfect for both casual and formal occasions',
        price: 129.99,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
        category: 'fashion',
        rating: 4.5,
        reviewCount: 98,
        inStock: true
      },
      {
        id: 'fashion4',
        name: 'Summer Dress Collection',
        description: 'Lightweight summer dresses with floral patterns and comfortable fit',
        price: 59.99,
        image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&h=500&fit=crop',
        category: 'fashion',
        rating: 4.7,
        reviewCount: 187,
        inStock: true
      },
      {
        id: 'fashion5',
        name: 'Leather Crossbody Bag',
        description: 'Genuine leather crossbody bag with adjustable strap and multiple compartments',
        price: 79.99,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
        category: 'fashion',
        rating: 4.3,
        reviewCount: 145,
        inStock: true
      },
      {
        id: 'fashion6',
        name: 'Running Shoes Pro',
        description: 'Professional running shoes with advanced cushioning and breathable mesh',
        price: 119.99,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
        category: 'fashion',
        rating: 4.8,
        reviewCount: 267,
        inStock: true
      },
      {
        id: 'fashion7',
        name: 'Wool Sweater',
        description: 'Cozy wool sweater perfect for cold weather with classic knit pattern',
        price: 69.99,
        image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=500&fit=crop',
        category: 'fashion',
        rating: 4.4,
        reviewCount: 123,
        inStock: true
      },
      {
        id: 'fashion8',
        name: 'Sunglasses Collection',
        description: 'Stylish sunglasses with UV protection and modern frame designs',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=500&h=500&fit=crop',
        category: 'fashion',
        rating: 4.2,
        reviewCount: 89,
        inStock: true
      }
    ]

    // Simulate loading delay
    setTimeout(() => {
      setProducts(fashionProducts)
      setIsLoading(false)
    }, 1000)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-4 mb-6">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/20">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Fashion</h1>
          <p className="text-xl md:text-2xl text-pink-100 mb-6">
            Express your style with the latest fashion trends
          </p>
          <div className="flex items-center space-x-4">
            <Badge className="bg-orange-400 text-gray-900 text-lg px-4 py-2">
              {products.length} Products
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Free Returns
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Fashion Collection</h2>
              <p className="text-gray-600">Trendy styles for every occasion</p>
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
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trendy Styles</h3>
              <p className="text-gray-600">Latest fashion trends curated by style experts</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Materials</h3>
              <p className="text-gray-600">Premium fabrics and materials for lasting comfort</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Perfect Fit</h3>
              <p className="text-gray-600">Sizing guides and fit recommendations for every body type</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

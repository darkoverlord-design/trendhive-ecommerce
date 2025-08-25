'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/lib/types'
import ProductCard from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Clock, Zap, Star } from 'lucide-react'

export default function DealsPage() {
  // Initialize with mock data immediately to avoid hydration issues
  const mockDeals: Product[] = [
    {
      id: 'deal1',
      name: 'Wireless Earbuds',
      description: 'Premium wireless earbuds with noise cancellation',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop',
      category: 'electronics',
      rating: 4.6,
      reviewCount: 89,
      inStock: true
    },
    {
      id: 'deal2',
      name: 'Smart Fitness Band',
      description: 'Track your fitness goals with this smart band',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop',
      category: 'electronics',
      rating: 4.3,
      reviewCount: 156,
      inStock: true
    },
    {
      id: 'deal3',
      name: 'Portable Charger',
      description: '10000mAh portable power bank for your devices',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1609592220725-6b21be0c9330?w=500&h=500&fit=crop',
      category: 'electronics',
      rating: 4.4,
      reviewCount: 234,
      inStock: true
    },
    {
      id: 'deal4',
      name: 'Bluetooth Speaker',
      description: 'Waterproof portable bluetooth speaker',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
      category: 'electronics',
      rating: 4.2,
      reviewCount: 78,
      inStock: true
    },
    {
      id: 'deal5',
      name: 'Phone Stand',
      description: 'Adjustable phone stand for desk use',
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
      category: 'electronics',
      rating: 4.1,
      reviewCount: 45,
      inStock: true
    },
    {
      id: 'deal6',
      name: 'USB-C Cable Set',
      description: 'Pack of 3 high-speed USB-C cables',
      price: 7.99,
      image: 'https://images.unsplash.com/photo-1583863788434-e58a36695d1b?w=500&h=500&fit=crop',
      category: 'electronics',
      rating: 4.0,
      reviewCount: 123,
      inStock: true
    }
  ]

  const [dealsProducts] = useState<Product[]>(mockDeals)
  const [isLoading] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Zap className="h-8 w-8 mr-2" />
            <h1 className="text-4xl md:text-6xl font-bold">Today's Deals</h1>
            <Zap className="h-8 w-8 ml-2" />
          </div>
          <p className="text-xl md:text-2xl mb-6">Limited time offers - don't miss out!</p>
          <div className="flex items-center justify-center space-x-4 text-lg">
            <Clock className="h-6 w-6" />
            <span>Deals end in 23:59:59</span>
          </div>
        </div>
      </section>

      {/* Deals Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Flash Deals</h2>
              <p className="text-gray-600">Hurry! These deals won't last long</p>
            </div>
            <Link href="/products">
              <Button variant="outline" className="border-orange-400 text-orange-600 hover:bg-orange-50">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-gray-200 animate-pulse rounded-lg h-80"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {dealsProducts.map((product) => (
                <div key={product.id} className="relative">
                  <Badge className="absolute top-3 left-3 z-10 bg-red-500 text-white">
                    <Zap className="h-3 w-3 mr-1" />
                    Deal
                  </Badge>
                  <ProductCard product={product} variant="compact" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Deal Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Electronics', image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg', href: '/products?category=electronics', deals: '12 deals' },
              { name: 'Fashion', image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg', href: '/products?category=fashion', deals: '8 deals' },
              { name: 'Home & Garden', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg', href: '/products?category=home', deals: '15 deals' },
              { name: 'Books', image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg', href: '/products?category=books', deals: '6 deals' },
            ].map((category) => (
              <Link key={category.name} href={category.href}>
                <div className="group hover:shadow-lg transition-all duration-300 cursor-pointer rounded-lg overflow-hidden">
                  <div className="relative">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={200}
                      height={150}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                    <div className="absolute bottom-2 left-2 text-white">
                      <div className="font-semibold text-sm">{category.name}</div>
                      <div className="text-xs opacity-90">{category.deals}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Early Access to Deals</h2>
          <p className="text-xl mb-8">Be the first to know about new deals and exclusive offers</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <Button className="bg-orange-400 hover:bg-orange-500 text-gray-900">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

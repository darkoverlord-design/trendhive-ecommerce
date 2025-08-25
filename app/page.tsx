'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import { supabase } from '@/lib/supabase'
import { Product } from '@/lib/types'
import ProductCard from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Star, Truck, Shield, RefreshCw, Gift, Zap, Clock } from 'lucide-react'

export default function HomePage() {
  // Initialize with proper mock data immediately to avoid hydration issues
  const mockFeaturedProducts: Product[] = [
    {
      id: '1',
      name: 'Wireless Headphones',
      description: 'High-quality wireless headphones with noise cancellation',
      price: 99.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
      category: 'electronics',
      rating: 4.5,
      reviewCount: 128,
      inStock: true
    },
    {
      id: '2',
      name: 'Designer Dress',
      description: 'Elegant evening dress with premium fabric',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&h=500&fit=crop',
      category: 'fashion',
      rating: 4.6,
      reviewCount: 203,
      inStock: true
    },
    {
      id: '3',
      name: 'Coffee Table',
      description: 'Modern wooden coffee table for living room',
      price: 249.99,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop',
      category: 'home',
      rating: 4.7,
      reviewCount: 156,
      inStock: true
    },
    {
      id: '4',
      name: 'Best Selling Novel',
      description: 'Award-winning fiction novel by renowned author',
      price: 14.99,
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop',
      category: 'books',
      rating: 4.8,
      reviewCount: 892,
      inStock: true
    },
    {
      id: '5',
      name: 'Running Shoes',
      description: 'Professional running shoes with advanced cushioning',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
      category: 'sports',
      rating: 4.4,
      reviewCount: 421,
      inStock: true
    },
    {
      id: '6',
      name: 'Educational Toy Set',
      description: 'STEM learning toy set for kids aged 6-12',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=500&h=500&fit=crop',
      category: 'toys',
      rating: 4.5,
      reviewCount: 278,
      inStock: true
    }
  ]

  const mockDealsProducts: Product[] = [
    {
      id: '7',
      name: 'Smartphone',
      description: 'Latest model smartphone with advanced camera',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop',
      category: 'electronics',
      rating: 4.3,
      reviewCount: 567,
      inStock: true
    },
    {
      id: '8',
      name: 'Casual T-Shirt',
      description: 'Comfortable cotton t-shirt in multiple colors',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
      category: 'fashion',
      rating: 4.2,
      reviewCount: 234,
      inStock: true
    },
    {
      id: '9',
      name: 'Table Lamp',
      description: 'Modern LED table lamp with adjustable brightness',
      price: 45.99,
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&h=500&fit=crop',
      category: 'home',
      rating: 4.4,
      reviewCount: 167,
      inStock: true
    },
    {
      id: '10',
      name: 'Programming Guide',
      description: 'Complete guide to modern web development',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&h=500&fit=crop',
      category: 'books',
      rating: 4.6,
      reviewCount: 312,
      inStock: true
    },
    {
      id: '11',
      name: 'Yoga Mat',
      description: 'Non-slip exercise mat for yoga and fitness',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop',
      category: 'sports',
      rating: 4.1,
      reviewCount: 189,
      inStock: true
    },
    {
      id: '12',
      name: 'Building Blocks',
      description: 'Creative building blocks set for imagination',
      price: 34.99,
      image: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=500&h=500&fit=crop',
      category: 'toys',
      rating: 4.7,
      reviewCount: 445,
      inStock: true
    }
  ]

  const [featuredProducts] = useState<Product[]>(mockFeaturedProducts)
  const [dealsProducts] = useState<Product[]>(mockDealsProducts)
  const [isLoading] = useState(false)



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Carousel */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-400 text-gray-900">
                <Gift className="w-4 h-4 mr-2" />
                Special Offers
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Shop Everything You Need
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Millions of products, fast delivery, and unbeatable prices. 
                Join Prime for free shipping and exclusive deals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <Button size="lg" className="bg-orange-400 hover:bg-orange-500 text-gray-900">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/prime">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-gray-900 backdrop-blur-sm">
                    Try Prime Free
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform">
                    <Image
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=128&fit=crop"
                      alt="Electronics"
                      width={200}
                      height={128}
                      className="w-full h-32 object-cover rounded mb-2"
                    />
                    <p className="text-gray-900 font-semibold">Electronics</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-lg transform -rotate-2 hover:rotate-0 transition-transform">
                    <Image
                      src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=200&h=128&fit=crop"
                      alt="Fashion"
                      width={200}
                      height={128}
                      className="w-full h-32 object-cover rounded mb-2"
                    />
                    <p className="text-gray-900 font-semibold">Fashion</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white p-4 rounded-lg shadow-lg transform -rotate-3 hover:rotate-0 transition-transform">
                    <Image
                      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=128&fit=crop"
                      alt="Home"
                      width={200}
                      height={128}
                      className="w-full h-32 object-cover rounded mb-2"
                    />
                    <p className="text-gray-900 font-semibold">Home</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-lg transform rotate-2 hover:rotate-0 transition-transform">
                    <Image
                      src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=128&fit=crop"
                      alt="Books"
                      width={200}
                      height={128}
                      className="w-full h-32 object-cover rounded mb-2"
                    />
                    <p className="text-gray-900 font-semibold">Books</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prime Benefits */}
      <section className="py-8 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Truck className="h-8 w-8 text-orange-400" />
              <div>
                <div className="font-semibold">Free Shipping</div>
                <div className="text-sm text-blue-100">On orders over $25</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Zap className="h-8 w-8 text-orange-400" />
              <div>
                <div className="font-semibold">Prime Delivery</div>
                <div className="text-sm text-blue-100">Same-day & next-day</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Shield className="h-8 w-8 text-orange-400" />
              <div>
                <div className="font-semibold">Secure Shopping</div>
                <div className="text-sm text-blue-100">Protected payments</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <RefreshCw className="h-8 w-8 text-orange-400" />
              <div>
                <div className="font-semibold">Easy Returns</div>
                <div className="text-sm text-blue-100">30-day policy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Today's Deals */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Today's Deals</h2>
              <p className="text-gray-600">Limited time offers - don't miss out!</p>
            </div>
            <Link href="/deals">
              <Button variant="outline" className="border-orange-400 text-orange-600 hover:bg-orange-50">
                See all deals
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-gray-200 animate-pulse rounded-lg h-64"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {dealsProducts.slice(0, 6).map((product) => (
                <div key={product.id} className="relative">
                  <Badge className="absolute top-2 left-2 z-10 bg-red-500">
                    Deal
                  </Badge>
                  <ProductCard product={product} variant="compact" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Electronics', image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400&h=300&fit=crop', href: '/products?category=electronics' },
              { name: 'Fashion', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop', href: '/products?category=fashion' },
              { name: 'Home & Garden', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop', href: '/products?category=home' },
              { name: 'Books', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop', href: '/products?category=books' },
              { name: 'Sports', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop', href: '/products?category=sports' },
              { name: 'Toys', image: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400&h=300&fit=crop', href: '/products?category=toys' },
            ].map((category) => (
              <Link key={category.name} href={category.href}>
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={200}
                      height={150}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
              <p className="text-gray-600">Handpicked favorites from our collection</p>
            </div>
            <Link href="/products">
              <Button variant="outline">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-gray-200 animate-pulse rounded-lg h-96"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} variant="featured" />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Prime Membership CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <Badge className="mb-4 bg-orange-400 text-gray-900 text-lg px-4 py-2">
              <Star className="w-5 h-5 mr-2" />
              Prime Membership
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Join Prime Today</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get unlimited fast, free delivery on millions of items, plus exclusive deals, 
              streaming, and more benefits.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Truck className="h-12 w-12 text-orange-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Free Delivery</h3>
              <p className="text-blue-100 text-sm">Unlimited fast, free delivery on eligible items</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-orange-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Same-Day Delivery</h3>
              <p className="text-blue-100 text-sm">Get items delivered the same day in select areas</p>
            </div>
            <div className="text-center">
              <Gift className="h-12 w-12 text-orange-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Exclusive Deals</h3>
              <p className="text-blue-100 text-sm">Access to Prime-only deals and early access</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/prime">
              <Button size="lg" className="bg-orange-400 hover:bg-orange-500 text-gray-900">
                Start Your Prime Trial
              </Button>
            </Link>
            <Link href="/prime/learn-more">
              <Button size="lg" variant="outline" className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-gray-900 backdrop-blur-sm">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
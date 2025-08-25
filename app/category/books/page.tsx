'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/lib/types'
import ProductCard from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Filter, Grid, List, Star, BookOpen } from 'lucide-react'

export default function BooksPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  useEffect(() => {
    // Mock books products data
    const booksProducts: Product[] = [
      {
        id: 'book1',
        name: 'The Great Gatsby',
        description: 'Classic American novel by F. Scott Fitzgerald, a story of the Jazz Age',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop',
        category: 'books',
        rating: 4.8,
        reviewCount: 1234,
        inStock: true
      },
      {
        id: 'book2',
        name: 'To Kill a Mockingbird',
        description: 'Harper Lee\'s masterpiece about justice and racial inequality',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=500&fit=crop',
        category: 'books',
        rating: 4.9,
        reviewCount: 2156,
        inStock: true
      },
      {
        id: 'book3',
        name: '1984 by George Orwell',
        description: 'Dystopian novel about totalitarianism and surveillance society',
        price: 11.99,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
        category: 'books',
        rating: 4.7,
        reviewCount: 1897,
        inStock: true
      },
      {
        id: 'book4',
        name: 'Pride and Prejudice',
        description: 'Jane Austen\'s beloved romance novel about love and social class',
        price: 13.99,
        image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&h=500&fit=crop',
        category: 'books',
        rating: 4.6,
        reviewCount: 1678,
        inStock: true
      },
      {
        id: 'book5',
        name: 'The Hobbit',
        description: 'J.R.R. Tolkien\'s fantasy adventure about Bilbo Baggins',
        price: 16.99,
        image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&h=500&fit=crop',
        category: 'books',
        rating: 4.8,
        reviewCount: 2341,
        inStock: true
      },
      {
        id: 'book6',
        name: 'Harry Potter and the Sorcerer\'s Stone',
        description: 'J.K. Rowling\'s magical first book in the Harry Potter series',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=500&h=500&fit=crop',
        category: 'books',
        rating: 4.9,
        reviewCount: 3456,
        inStock: true
      },
      {
        id: 'book7',
        name: 'The Catcher in the Rye',
        description: 'J.D. Salinger\'s coming-of-age story about teenage alienation',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=500&fit=crop',
        category: 'books',
        rating: 4.5,
        reviewCount: 987,
        inStock: true
      },
      {
        id: 'book8',
        name: 'Lord of the Flies',
        description: 'William Golding\'s allegorical novel about human nature and civilization',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&h=500&fit=crop',
        category: 'books',
        rating: 4.4,
        reviewCount: 1456,
        inStock: true
      }
    ]

    // Simulate loading delay
    setTimeout(() => {
      setProducts(booksProducts)
      setIsLoading(false)
    }, 1000)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-4 mb-6">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/20">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Books</h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-6">
            Discover worlds of imagination and knowledge through literature
          </p>
          <div className="flex items-center space-x-4">
            <Badge className="bg-orange-400 text-gray-900 text-lg px-4 py-2">
              {products.length} Books
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Book Collection</h2>
              <p className="text-gray-600">Classic and contemporary literature for every reader</p>
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
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Classic Literature</h3>
              <p className="text-gray-600">Timeless stories that have shaped literature</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Classics</h3>
              <p className="text-gray-600">Contemporary works that will become classics</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reader Reviews</h3>
              <p className="text-gray-600">Real reviews from our community of readers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
// import { supabase } from '@/lib/supabase'
import { Product } from '@/lib/types'
import ProductCard from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Search, Filter, Star, Grid, List } from 'lucide-react'

function ProductsContent() {
  const searchParams = useSearchParams()
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState(searchParams?.get('search') || '')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [sortBy, setSortBy] = useState<string>('name')
  const [priceRange, setPriceRange] = useState<string>('all')
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [minRating, setMinRating] = useState<number>(0)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [brands, setBrands] = useState<string[]>([])

  useEffect(() => {
    // Mock data instead of Supabase
    const mockProducts: Product[] = [
      {
        id: '1',
        name: 'Wireless Headphones',
        description: 'High-quality wireless headphones with noise cancellation',
        price: 99.99,
        image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
        category: 'electronics',
        rating: 4.5,
        reviewCount: 128,
        inStock: true
      },
      {
        id: '2',
        name: 'Smart Watch',
        description: 'Feature-rich smartwatch with health tracking',
        price: 199.99,
        image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
        category: 'electronics',
        rating: 4.3,
        reviewCount: 89,
        inStock: true
      },
      {
        id: '3',
        name: 'Laptop Stand',
        description: 'Adjustable laptop stand for better ergonomics',
        price: 49.99,
        image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg',
        category: 'electronics',
        rating: 4.7,
        reviewCount: 56,
        inStock: true
      },
      {
        id: '4',
        name: 'Phone Case',
        description: 'Protective phone case with stylish design',
        price: 19.99,
        image: 'https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg',
        category: 'electronics',
        rating: 4.2,
        reviewCount: 234,
        inStock: true
      },
      {
        id: '5',
        name: 'Bluetooth Speaker',
        description: 'Portable bluetooth speaker with great sound',
        price: 39.99,
        image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
        category: 'electronics',
        rating: 4.4,
        reviewCount: 167,
        inStock: true
      },
      {
        id: '6',
        name: 'USB Cable',
        description: 'High-speed USB-C cable for fast charging',
        price: 12.99,
        image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg',
        category: 'electronics',
        rating: 4.1,
        reviewCount: 89,
        inStock: true
      }
    ]

    // Simulate loading delay
    setTimeout(() => {
      setProducts(mockProducts)
      setFilteredProducts(mockProducts)
      
      // Extract unique categories
      const uniqueCategories = Array.from(new Set(mockProducts.map(p => p.category)))
      setCategories(uniqueCategories)
      
      // Extract unique brands (using category as brand for mock data)
      const uniqueBrands = Array.from(new Set(mockProducts.map(p => p.category).filter(Boolean)))
      setBrands(uniqueBrands)
      
      setIsLoading(false)
    }, 1000)

    // Original Supabase code commented out:
    // const fetchProducts = async () => {
    //   const { data, error } = await supabase
    //     .from('products')
    //     .select('*')
      
    //   if (data && !error) {
    //     setProducts(data)
    //     setFilteredProducts(data)
        
    //     // Extract unique categories
    //     const uniqueCategories = Array.from(new Set(data.map(p => p.category)))
    //     setCategories(uniqueCategories)
        
    //     // Extract unique brands
    //     const uniqueBrands = Array.from(new Set(data.map(p => p.brand).filter(Boolean)))
    //     setBrands(uniqueBrands)
    //   }
    //   setIsLoading(false)
    // }

    // fetchProducts()
  }, [])

  useEffect(() => {
    let filtered = products

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }
    
    // Brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => selectedBrands.includes(product.category)) // Changed to category for mock data
    }
    
    // Rating filter
    if (minRating > 0) {
      filtered = filtered.filter(product => product.rating >= minRating)
    }

    // Price range filter
    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'under-25':
          filtered = filtered.filter(product => product.price < 25)
          break
        case '25-50':
          filtered = filtered.filter(product => product.price >= 25 && product.price <= 50)
          break
        case '50-100':
          filtered = filtered.filter(product => product.price >= 50 && product.price <= 100)
          break
        case 'over-100':
          filtered = filtered.filter(product => product.price > 100)
          break
      }
    }

    // Sort
    switch (sortBy) {
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        filtered.sort((a, b) => {
          const dateA = a.created_at ? new Date(a.created_at).getTime() : 0
          const dateB = b.created_at ? new Date(b.created_at).getTime() : 0
          return dateB - dateA
        })
        break
    }

    setFilteredProducts(filtered)
  }, [products, searchQuery, selectedCategory, sortBy, priceRange, selectedBrands, minRating])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Search is handled by useEffect
  }
  
  const handleBrandChange = (brand: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands(prev => [...prev, brand])
    } else {
      setSelectedBrands(prev => prev.filter(b => b !== brand))
    }
  }
  
  const clearFilters = () => {
    setSearchQuery('')
    setSelectedCategory('all')
    setPriceRange('all')
    setSelectedBrands([])
    setMinRating(0)
  }

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="bg-gray-200 animate-pulse rounded-lg h-80"></div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
            <p className="text-gray-600">Discover millions of products with fast, free delivery</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Active filters */}
        {(selectedCategory !== 'all' || selectedBrands.length > 0 || priceRange !== 'all' || minRating > 0) && (
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-sm text-gray-600">Active filters:</span>
            {selectedCategory !== 'all' && (
              <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedCategory('all')}>
                {selectedCategory} ×
              </Badge>
            )}
            {selectedBrands.map(brand => (
              <Badge key={brand} variant="secondary" className="cursor-pointer" onClick={() => handleBrandChange(brand, false)}>
                {brand} ×
              </Badge>
            ))}
            {priceRange !== 'all' && (
              <Badge variant="secondary" className="cursor-pointer" onClick={() => setPriceRange('all')}>
                {priceRange} ×
              </Badge>
            )}
            {minRating > 0 && (
              <Badge variant="secondary" className="cursor-pointer" onClick={() => setMinRating(0)}>
                {minRating}+ stars ×
              </Badge>
            )}
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              Clear all
            </Button>
          </div>
        )}
      </div>

      <div className="flex gap-6">
        {/* Sidebar Filters */}
        <div className="w-64 flex-shrink-0 hidden lg:block">
          <Card className="sticky top-4">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </h3>
              
              {/* Search */}
              <div className="mb-6">
                <form onSubmit={handleSearch} className="flex">
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="rounded-r-none"
                  />
                  <Button type="submit" className="rounded-l-none bg-orange-400 hover:bg-orange-500 text-gray-900">
                    <Search className="h-4 w-4" />
                  </Button>
                </form>
              </div>
              
              {/* Category */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Category</h4>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Brands */}
              {brands.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Brand</h4>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {brands.slice(0, 10).map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox
                          id={brand}
                          checked={selectedBrands.includes(brand)}
                          onCheckedChange={(checked) => handleBrandChange(brand, checked as boolean)}
                        />
                        <label htmlFor={brand} className="text-sm cursor-pointer">
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Rating */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Customer Rating</h4>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center space-x-2">
                      <Checkbox
                        id={`rating-${rating}`}
                        checked={minRating === rating}
                        onCheckedChange={(checked) => setMinRating(checked ? rating : 0)}
                      />
                      <label htmlFor={`rating-${rating}`} className="text-sm cursor-pointer flex items-center">
                        <div className="flex items-center mr-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        {rating}+ stars
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price</h4>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Prices" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="under-25">Under $25</SelectItem>
                    <SelectItem value="25-50">$25 - $50</SelectItem>
                    <SelectItem value="50-100">$50 - $100</SelectItem>
                    <SelectItem value="over-100">Over $100</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Main Content */}
        <div className="flex-1">
          {/* Mobile Filters */}
          <Card className="mb-6 lg:hidden">
            <CardContent className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <form onSubmit={handleSearch} className="col-span-2 flex">
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="rounded-r-none"
                  />
                  <Button type="submit" className="rounded-l-none bg-orange-400 hover:bg-orange-500 text-gray-900">
                    <Search className="h-4 w-4" />
                  </Button>
                </form>
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="under-25">Under $25</SelectItem>
                    <SelectItem value="25-50">$25 - $50</SelectItem>
                    <SelectItem value="50-100">$50 - $100</SelectItem>
                    <SelectItem value="over-100">Over $100</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
          
          {/* Sort and Results */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600">
              {filteredProducts.length} of {products.length} results
              {searchQuery && ` for "${searchQuery}"`}
            </p>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Products Grid/List */}
          {filteredProducts.length > 0 ? (
            <div className={
              viewMode === 'grid' 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "space-y-4"
            }>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Filter className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
              <Button onClick={clearFilters} variant="outline">
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="bg-gray-200 animate-pulse rounded-lg h-80"></div>
          ))}
        </div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  )
}
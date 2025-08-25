'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Search, ShoppingCart, User, Menu, MapPin, Globe } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
// import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

export default function Header() {
  const { state } = useCart()
  // const [user, setUser] = useState<any>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // useEffect(() => {
  //   const getUser = async () => {
  //     const { data: { user } } = await supabase.auth.getUser()
  //     setUser(user)
  //   }
  //   getUser()

  //   const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
  //     setUser(session?.user ?? null)
  //   })

  //   return () => subscription.unsubscribe()
  // }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`
    }
  }

  // const handleSignOut = async () => {
  //   await supabase.auth.signOut()
  // }

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-gray-800 text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>Deliver to New York 10001</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Globe className="h-4 w-4" />
              <span>EN</span>
            </div>
            {/* {user ? (
              <div className="flex items-center space-x-2">
                <span>Hello, {user.user_metadata?.full_name || user.email}</span>
                <Button onClick={handleSignOut} variant="ghost" size="sm" className="text-white hover:text-gray-300">
                  Sign Out
                </Button>
              </div>
            ) : ( */}
              <Link href="/auth" className="hover:text-gray-300">
                Hello, Sign in
              </Link>
            {/* )} */}
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white hover:text-gray-300 transition-colors">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              TrendHive
            </span>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl">
            <div className="flex">
              <select className="bg-gray-200 text-gray-900 px-3 py-2 rounded-l-md border-r border-gray-300 focus:outline-none">
                <option>All</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Home</option>
                <option>Books</option>
                <option>Sports</option>
              </select>
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 rounded-none border-0 focus:ring-0 text-gray-900"
              />
              <Button type="submit" className="bg-orange-400 hover:bg-orange-500 text-gray-900 rounded-l-none px-4">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </form>

          {/* Right side navigation */}
          <div className="flex items-center space-x-6">
            {/* Account */}
            <Link href="/auth" className="flex flex-col items-center hover:text-gray-300 transition-colors">
              <User className="h-6 w-6" />
              <span className="text-xs">Account</span>
            </Link>

            {/* Orders */}
            <Link href="/orders" className="flex flex-col items-center hover:text-gray-300 transition-colors">
              <div className="text-xs">Returns</div>
              <div className="text-sm font-semibold">& Orders</div>
            </Link>

            {/* Cart */}
            <Link href="/cart" className="flex items-center space-x-1 hover:text-gray-300 transition-colors relative">
              <div className="relative">
                <ShoppingCart className="h-8 w-8" />
                {state.itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-orange-400 text-gray-900 text-xs min-w-[20px] h-5 flex items-center justify-center">
                    {state.itemCount}
                  </Badge>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-xs">Cart</span>
                <span className="text-sm font-semibold">${state.total.toFixed(2)}</span>
              </div>
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Categories bar */}
      <div className="bg-gray-700 border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center space-x-6 text-sm">
            <Link href="/category/electronics" className="hover:text-gray-300 transition-colors">
              Electronics
            </Link>
            <Link href="/category/fashion" className="hover:text-gray-300 transition-colors">
              Fashion
            </Link>
            <Link href="/category/home" className="hover:text-gray-300 transition-colors">
              Home & Garden
            </Link>
            <Link href="/category/books" className="hover:text-gray-300 transition-colors">
              Books
            </Link>
            <Link href="/category/sports" className="hover:text-gray-300 transition-colors">
              Sports & Outdoors
            </Link>
            <Link href="/category/toys" className="hover:text-gray-300 transition-colors">
              Toys & Games
            </Link>
            <Link href="/deals" className="hover:text-gray-300 transition-colors text-orange-400">
              Today's Deals
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-600">
          <div className="px-4 py-4 space-y-4">
            <form onSubmit={handleSearch} className="flex">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 mr-2 text-gray-900"
              />
              <Button type="submit" className="bg-orange-400 hover:bg-orange-500 text-gray-900">
                <Search className="h-4 w-4" />
              </Button>
            </form>
            <div className="space-y-2">
              <Link href="/products?category=electronics" className="block hover:text-gray-300">Electronics</Link>
              <Link href="/products?category=fashion" className="block hover:text-gray-300">Fashion</Link>
              <Link href="/products?category=home" className="block hover:text-gray-300">Home & Garden</Link>
              <Link href="/products?category=books" className="block hover:text-gray-300">Books</Link>
              <Link href="/products?category=sports" className="block hover:text-gray-300">Sports & Outdoors</Link>
              <Link href="/products?category=toys" className="block hover:text-gray-300">Toys & Games</Link>
            </div>
            <div className="pt-4 border-t border-gray-600">
              <Link href="/auth" className="block hover:text-gray-300 mb-2">Sign In</Link>
              <Link href="/cart" className="block hover:text-gray-300">Cart ({state.itemCount} items)</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
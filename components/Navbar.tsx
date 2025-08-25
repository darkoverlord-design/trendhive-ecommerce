'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Search, ShoppingCart, User, Menu, MapPin, Globe, X } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
// import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

export default function Navbar() {
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

  // const handleSignOut = async () => {
  //   await supabase.auth.signOut()
  // }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            ShopHub
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors">
              Products
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-blue-600 transition-colors">
              Categories
            </Link>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex items-center">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64"
              />
              <Button type="submit" variant="ghost" size="sm">
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Right side - Cart, User */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Link href="/cart" className="relative text-gray-700 hover:text-blue-600 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {state.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.items.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </Link>

            {/* User Menu */}
            {/* {user ? (
              <div className="flex items-center space-x-2">
                <Link href="/profile" className="text-gray-700 hover:text-blue-600 transition-colors">
                  <User className="h-6 w-6" />
                </Link>
                <Button onClick={handleSignOut} variant="outline" size="sm">
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href="/auth">
                  <Button variant="outline" size="sm">Sign In</Button>
                </Link>
              </div>
            )} */}

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <form onSubmit={handleSearch} className="flex items-center">
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 mr-2"
                />
                <Button type="submit" variant="ghost" size="sm">
                  <Search className="h-4 w-4" />
                </Button>
              </form>
              <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors">
                Products
              </Link>
              <Link href="/categories" className="text-gray-700 hover:text-blue-600 transition-colors">
                Categories
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
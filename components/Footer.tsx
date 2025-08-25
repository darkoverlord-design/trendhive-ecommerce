'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Back to top */}
      <div 
        className="bg-gray-700 py-4 text-center cursor-pointer hover:bg-gray-600 transition-colors"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="text-sm">Back to top</span>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Get to Know Us */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Get to Know Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/about" className="hover:text-white transition-colors">About TrendHive</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/press" className="hover:text-white transition-colors">Press Releases</Link></li>
              <li><Link href="/investor" className="hover:text-white transition-colors">Investor Relations</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">TrendHive Blog</Link></li>
            </ul>
          </div>

          {/* Make Money with Us */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Make Money with Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/sell" className="hover:text-white transition-colors">Sell products</Link></li>
              <li><Link href="/business" className="hover:text-white transition-colors">Sell on Business</Link></li>
              <li><Link href="/apps" className="hover:text-white transition-colors">Sell apps</Link></li>
              <li><Link href="/affiliate" className="hover:text-white transition-colors">Become an Affiliate</Link></li>
              <li><Link href="/advertise" className="hover:text-white transition-colors">Advertise Your Products</Link></li>
            </ul>
          </div>

          {/* Payment Products */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Payment Products</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/credit-card" className="hover:text-white transition-colors">Business Card</Link></li>
              <li><Link href="/shop-with-points" className="hover:text-white transition-colors">Shop with Points</Link></li>
              <li><Link href="/reload" className="hover:text-white transition-colors">Reload Your Balance</Link></li>
              <li><Link href="/currency-converter" className="hover:text-white transition-colors">Currency Converter</Link></li>
            </ul>
          </div>

          {/* Let Us Help You */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Let Us Help You</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/account" className="hover:text-white transition-colors">Your Account</Link></li>
              <li><Link href="/orders" className="hover:text-white transition-colors">Your Orders</Link></li>
              <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping Rates & Policies</Link></li>
              <li><Link href="/returns" className="hover:text-white transition-colors">Returns & Replacements</Link></li>
              <li><Link href="/help" className="hover:text-white transition-colors">Help</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Logo and language */}
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <Link href="/" className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  TrendHive
                </span>
              </Link>
              <div className="flex items-center space-x-4 text-sm">
                <button className="border border-gray-600 px-3 py-1 rounded hover:bg-gray-800 transition-colors">
                  🌐 English
                </button>
                <button className="border border-gray-600 px-3 py-1 rounded hover:bg-gray-800 transition-colors">
                  💰 USD - U.S. Dollar
                </button>
                <button className="border border-gray-600 px-3 py-1 rounded hover:bg-gray-800 transition-colors">
                  🇺🇸 United States
                </button>
              </div>
            </div>

            {/* Social media */}
            <div className="flex items-center space-x-4">
              <Facebook className="h-5 w-5 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-pink-400 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 hover:text-red-400 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        {/* Bottom links */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-gray-400">
            <div>
              <h4 className="font-semibold mb-2 text-white">TrendHive Music</h4>
              <p>Stream millions of songs</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-white">TrendHive Advertising</h4>
              <p>Find, attract, and engage customers</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-white">TrendHive Drive</h4>
              <p>Cloud storage from TrendHive</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-white">TrendHive Prime</h4>
              <p>Enjoy fast, FREE delivery</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6">
            <Link href="/conditions" className="hover:text-white transition-colors">Conditions of Use</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Notice</Link>
            <Link href="/interest-ads" className="hover:text-white transition-colors">Interest-Based Ads</Link>
          </div>
          <p className="mt-4">&copy; 2024 TrendHive, Inc. or its affiliates</p>
        </div>
      </div>
    </footer>
  )
}
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Truck, Clock, Gift, Star, Shield, Music, Film, Package, Users, Globe, Heart } from 'lucide-react'

export default function PrimeLearnMorePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <Badge className="mb-4 bg-orange-400 text-gray-900 text-lg px-6 py-2">
              <Star className="w-5 h-5 mr-2" />
              Learn About Prime
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Everything You Need to Know About 
              <span className="text-orange-400"> Prime</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Discover how Prime membership transforms your shopping experience with 
              fast delivery, entertainment, exclusive deals, and premium services.
            </p>
          </div>
        </div>
      </section>

      {/* What is Prime Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What is TrendHive Prime?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                TrendHive Prime is a membership program that gives you access to fast, free delivery 
                on millions of items, plus a growing collection of entertainment, shopping, and reading benefits.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Over 100 million items</h3>
                    <p className="text-gray-600">Eligible for fast, free delivery with Prime</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Entertainment included</h3>
                    <p className="text-gray-600">Prime Video, Prime Music, and Prime Gaming at no extra cost</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Exclusive member benefits</h3>
                    <p className="text-gray-600">Early access to deals, special discounts, and member-only events</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Truck className="h-12 w-12 mx-auto mb-3" />
                    <h3 className="font-semibold mb-1">Fast Delivery</h3>
                    <p className="text-sm opacity-90">1-2 day shipping</p>
                  </div>
                  <div className="text-center">
                    <Film className="h-12 w-12 mx-auto mb-3" />
                    <h3 className="font-semibold mb-1">Prime Video</h3>
                    <p className="text-sm opacity-90">Unlimited streaming</p>
                  </div>
                  <div className="text-center">
                    <Music className="h-12 w-12 mx-auto mb-3" />
                    <h3 className="font-semibold mb-1">Prime Music</h3>
                    <p className="text-sm opacity-90">2M+ songs ad-free</p>
                  </div>
                  <div className="text-center">
                    <Gift className="h-12 w-12 mx-auto mb-3" />
                    <h3 className="font-semibold mb-1">Exclusive Deals</h3>
                    <p className="text-sm opacity-90">Member-only prices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Prime Benefits Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore every benefit included with your Prime membership and discover 
              how they can enhance your daily life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Shipping Benefits */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Truck className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Shipping & Delivery</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">FREE Two-Day Delivery</h4>
                  <p className="text-gray-600">On millions of eligible items with no minimum order size</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">FREE One-Day Delivery</h4>
                  <p className="text-gray-600">Available in select areas on eligible items</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">FREE Same-Day Delivery</h4>
                  <p className="text-gray-600">In major cities on qualifying orders over $35</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Prime Now</h4>
                  <p className="text-gray-600">Ultrafast delivery in as little as 1-2 hours</p>
                </div>
              </div>
            </div>

            {/* Entertainment Benefits */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Film className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Entertainment</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Prime Video</h4>
                  <p className="text-gray-600">Stream thousands of movies, TV shows, and award-winning Originals</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Prime Music</h4>
                  <p className="text-gray-600">Listen to over 2 million songs ad-free with unlimited skips</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Prime Gaming</h4>
                  <p className="text-gray-600">Free games, in-game content, and a free Twitch channel subscription</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Prime Reading</h4>
                  <p className="text-gray-600">Access to thousands of books, magazines, and comics</p>
                </div>
              </div>
            </div>

            {/* Shopping Benefits */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Gift className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Shopping & Deals</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Lightning Deals</h4>
                  <p className="text-gray-600">Early access to time-limited deals, often with 30-minute early access</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Prime Day</h4>
                  <p className="text-gray-600">Exclusive access to our biggest shopping event of the year</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Prime-Only Prices</h4>
                  <p className="text-gray-600">Special discounts available only to Prime members</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Subscribe & Save</h4>
                  <p className="text-gray-600">Extra discounts on regular deliveries of everyday essentials</p>
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Additional Services</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Prime Photos</h4>
                  <p className="text-gray-600">Unlimited photo storage with 5GB video storage</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">TrendHive Family</h4>
                  <p className="text-gray-600">Share your Prime benefits with family members</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Prime Wardrobe</h4>
                  <p className="text-gray-600">Try before you buy on fashion items</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Prescription Savings</h4>
                  <p className="text-gray-600">Save on prescription medications with Prime Rx</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prime by the Numbers
            </h2>
            <p className="text-xl text-blue-100">
              See how Prime members are enjoying their benefits worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">200M+</div>
              <div className="text-lg text-blue-100">Prime Members Worldwide</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">100M+</div>
              <div className="text-lg text-blue-100">Items with Prime Delivery</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">5B+</div>
              <div className="text-lg text-blue-100">Packages Delivered Annually</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">15K+</div>
              <div className="text-lg text-blue-100">Movies & TV Shows</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Prime Members Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from satisfied Prime members
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-900">Sarah M.</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "Prime has completely changed how I shop. The fast delivery means I never have to worry about running out of essentials, and Prime Video keeps my family entertained."
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-900">Michael R.</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "The exclusive deals alone have saved me hundreds of dollars this year. Plus, getting my orders in just one day is incredible for my busy lifestyle."
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  J
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-900">Jennifer L.</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "I love that Prime includes entertainment too. After a long day, I can unwind with Prime Video or listen to music ad-free. It's like getting multiple subscriptions for the price of one."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Get Started
            </h2>
            <p className="text-xl text-gray-600">
              Joining Prime is simple and you can start enjoying benefits immediately
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sign Up</h3>
              <p className="text-gray-600">
                Click "Start Your Free Trial" and create your account or sign in if you already have one.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Start Your Trial</h3>
              <p className="text-gray-600">
                Enjoy all Prime benefits free for 30 days. No commitment required during your trial.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enjoy Benefits</h3>
              <p className="text-gray-600">
                Start shopping with fast delivery, stream entertainment, and access exclusive deals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Prime?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your 30-day free trial today and discover why millions love Prime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/prime">
              <Button size="lg" className="bg-orange-400 hover:bg-orange-500 text-gray-900 text-lg px-8 py-4">
                Start Your Free Trial
              </Button>
            </Link>
            <Link href="/">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-gray-900 backdrop-blur-sm text-lg px-8 py-4"
              >
                Back to Shopping
              </Button>
            </Link>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            No risk. Cancel anytime during your free trial.
          </p>
        </div>
      </section>
    </div>
  )
}
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Truck, Clock, Gift, Star, Shield, Music, Film, Package } from 'lucide-react'

export default function PrimePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <Badge className="mb-4 bg-orange-400 text-gray-900 text-lg px-6 py-2">
              <Star className="w-5 h-5 mr-2" />
              Prime Membership
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Try Prime <span className="text-orange-400">Free</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Get unlimited fast, free delivery on millions of items, plus exclusive deals, 
              streaming entertainment, and so much more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-400 hover:bg-orange-500 text-gray-900 text-lg px-8 py-4">
                Start Your 30-Day Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-gray-900 backdrop-blur-sm text-lg px-8 py-4"
              >
                Learn More
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              Cancel anytime. After trial, Prime is just $12.99/month.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Prime Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you love about shopping, plus exclusive perks that make your life easier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Fast Delivery */}
            <div className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast, Free Delivery</h3>
              <p className="text-gray-600 mb-4">
                Unlimited fast, free shipping on eligible items with no minimum order size.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Free One-Day delivery in select areas</li>
                <li>• Free Two-Day delivery nationwide</li>
                <li>• Same-Day delivery in major cities</li>
              </ul>
            </div>

            {/* Prime Video */}
            <div className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Film className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Prime Video</h3>
              <p className="text-gray-600 mb-4">
                Stream thousands of movies and TV episodes, including award-winning Prime Originals.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Exclusive Prime Original series</li>
                <li>• Latest movies and TV shows</li>
                <li>• Watch anywhere, anytime</li>
              </ul>
            </div>

            {/* Prime Music */}
            <div className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Prime Music</h3>
              <p className="text-gray-600 mb-4">
                Listen to over 2 million songs ad-free with unlimited skips and offline listening.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Ad-free music streaming</li>
                <li>• Offline downloads</li>
                <li>• Unlimited skips</li>
              </ul>
            </div>

            {/* Exclusive Deals */}
            <div className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Exclusive Deals</h3>
              <p className="text-gray-600 mb-4">
                Get early access to Lightning Deals and exclusive discounts on thousands of items.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Prime-only Lightning Deals</li>
                <li>• Early access to sales</li>
                <li>• Exclusive member discounts</li>
              </ul>
            </div>

            {/* Prime Gaming */}
            <div className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Prime Gaming</h3>
              <p className="text-gray-600 mb-4">
                Get free games, in-game content, and exclusive gaming benefits every month.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Free games monthly</li>
                <li>• In-game content & loot</li>
                <li>• Twitch channel subscription</li>
              </ul>
            </div>

            {/* Secure Shopping */}
            <div className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Shopping</h3>
              <p className="text-gray-600 mb-4">
                Shop with confidence knowing your personal information and payments are protected.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Secure payment processing</li>
                <li>• Purchase protection</li>
                <li>• Easy returns & refunds</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Simple, Transparent Pricing
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <Badge className="mb-4 bg-green-500 text-white">
              Best Value
            </Badge>
            <div className="text-5xl font-bold text-gray-900 mb-2">
              $12.99<span className="text-xl text-gray-500">/month</span>
            </div>
            <p className="text-gray-600 mb-6">
              Or $119/year (save $36 compared to monthly)
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Free fast delivery</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Prime Video included</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Prime Music included</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Exclusive deals & discounts</span>
              </div>
            </div>

            <Button size="lg" className="bg-orange-400 hover:bg-orange-500 text-gray-900 text-lg px-12 py-4">
              Start Your Free Trial
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              30-day free trial. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What is included with Prime membership?
              </h3>
              <p className="text-gray-600">
                Prime membership includes unlimited fast, free delivery on eligible items, Prime Video streaming, 
                Prime Music, exclusive deals, Prime Gaming benefits, and much more.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How does the free trial work?
              </h3>
              <p className="text-gray-600">
                You can try Prime free for 30 days. During your trial, you'll have access to all Prime benefits. 
                You can cancel anytime during the trial period without being charged.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Can I cancel my Prime membership?
              </h3>
              <p className="text-gray-600">
                Yes, you can cancel your Prime membership at any time. If you cancel during a paid membership period, 
                you can continue to use Prime benefits until the end of that period.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Is Prime available in my area?
              </h3>
              <p className="text-gray-600">
                Prime is available nationwide, though some benefits like same-day delivery may be limited to certain areas. 
                Free Two-Day delivery is available almost everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join millions of Prime members and start enjoying the benefits today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-400 hover:bg-orange-500 text-gray-900 text-lg px-8 py-4">
              Start Your Free Trial
            </Button>
            <Link href="/">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-gray-900 backdrop-blur-sm text-lg px-8 py-4"
              >
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
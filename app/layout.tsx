import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CartProvider } from '@/contexts/CartContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TrendHive - Online Shopping for Electronics, Fashion, Home & More',
  description: 'Shop millions of products with fast, free delivery. Find deals on electronics, fashion, home goods, books, and more. Prime members enjoy unlimited fast, free shipping.',
  keywords: 'ecommerce, shopping, electronics, fashion, home goods, online store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </CartProvider>
      </body>
    </html>
  )
}
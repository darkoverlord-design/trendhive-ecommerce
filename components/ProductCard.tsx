'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/lib/types'
import { useCart } from '@/contexts/CartContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, ShoppingCart, Heart } from 'lucide-react'
import { toast } from 'sonner'

interface ProductCardProps {
  product: Product
  variant?: 'default' | 'compact' | 'featured'
}

export default function ProductCard({ product, variant = 'default' }: ProductCardProps) {
  const { dispatch } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch({ type: 'ADD_ITEM', payload: product })
    toast.success(`Added ${product.name} to cart`)
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < Math.floor(rating)
                ? 'text-yellow-400 fill-current'
                : i < rating
                ? 'text-yellow-400 fill-current opacity-50'
                : 'text-gray-300'
            }`}
          />
        ))}
        <span className="text-sm text-blue-600 hover:text-orange-600 cursor-pointer">
          ({product.reviewCount || 0})
        </span>
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <Link href={`/products/${product.id}`}>
        <Card className="group hover:shadow-lg transition-all duration-300 h-full">
          <div className="relative overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {!product.inStock && (
              <Badge className="absolute top-2 right-2 bg-red-500">
                Out of Stock
              </Badge>
            )}
          </div>
          <CardContent className="p-3">
            <h3 className="font-medium text-sm mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
              {product.name}
            </h3>
            {renderStars(product.rating)}
            <div className="mt-2">
              <span className="text-lg font-bold text-red-600">${product.price}</span>
            </div>
          </CardContent>
        </Card>
      </Link>
    )
  }

  if (variant === 'featured') {
    return (
      <Link href={`/products/${product.id}`}>
        <Card className="group hover:shadow-xl transition-all duration-300 h-full bg-gradient-to-br from-white to-gray-50">
          <div className="relative overflow-hidden rounded-t-lg">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <Badge className="absolute top-3 left-3 bg-red-500 text-white">
              Featured
            </Badge>
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                toast.success('Added to wishlist')
              }}
              className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
            >
              <Heart className="h-4 w-4 text-gray-600" />
            </button>
          </div>
          <CardContent className="p-4">
            <div className="mb-2">
              <Badge variant="secondary" className="text-xs">
                {product.category}
              </Badge>
            </div>
            <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
              {product.name}
            </h3>
            {renderStars(product.rating)}
            <p className="text-gray-600 text-sm mt-2 line-clamp-2">{product.description}</p>
            <div className="flex items-center justify-between mt-4">
              <div>
                <span className="text-2xl font-bold text-red-600">${product.price}</span>
                <div className="text-xs text-gray-500">Free shipping</div>
              </div>
              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="bg-orange-400 hover:bg-orange-500 text-gray-900"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          </CardContent>
        </Card>
      </Link>
    )
  }

  return (
    <Link href={`/products/${product.id}`}>
      <Card className="group hover:shadow-lg transition-all duration-300 h-full">
        <div className="relative overflow-hidden rounded-t-lg">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {!product.inStock && (
            <Badge className="absolute top-2 right-2 bg-red-500">
              Out of Stock
            </Badge>
          )}
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              toast.success('Added to wishlist')
            }}
            className="absolute top-2 left-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors opacity-0 group-hover:opacity-100"
          >
            <Heart className="h-4 w-4 text-gray-600" />
          </button>
        </div>
        
        <CardContent className="p-4">
          <div className="mb-2">
            <Badge variant="secondary" className="text-xs">
              {product.category}
            </Badge>
          </div>
          <h3 className="font-semibold text-base mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          {renderStars(product.rating)}
          <p className="text-gray-600 text-sm mt-2 line-clamp-2">{product.description}</p>
          
          <div className="mt-4">
            <div className="flex items-baseline space-x-2">
              <span className="text-xl font-bold text-red-600">${product.price}</span>
              <span className="text-sm text-gray-500 line-through">${(product.price * 1.2).toFixed(2)}</span>
            </div>
            <div className="text-xs text-gray-500 mt-1">Free shipping</div>
          </div>

          <Button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="w-full mt-3 bg-orange-400 hover:bg-orange-500 text-gray-900"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {!product.inStock ? 'Out of Stock' : 'Add to Cart'}
          </Button>
        </CardContent>
      </Card>
    </Link>
  )
}
import { Product } from '@/lib/types'
import ProductDetailClient from './ProductDetailClient'

// Generate static params for static export
export async function generateStaticParams() {
  const productIds = [
    'elec1', 'elec2', 'elec3', 'elec4',
    'fashion1', 'fashion2',
    'home1', 'home2',
    'book1', 'book2',
    'sports1', 'sports2',
    'toys1', 'toys2'
  ]
  
  return productIds.map((id) => ({
    id: id,
  }))
}

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const productId = Array.isArray(params.id) ? params.id[0] : params.id
  
  // Mock product data
  const electronicsProducts = {
    'elec1': {
      name: 'Wireless Bluetooth Headphones',
      description: 'Premium noise-cancelling wireless headphones with 30-hour battery life.',
      price: 129.99,
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      category: 'electronics',
      rating: 4.6,
      reviewCount: 234,
      inStock: true
    },
    'elec2': {
      name: 'Smart Watch Series 8',
      description: 'Advanced fitness tracking smartwatch with heart rate monitor and GPS.',
      price: 299.99,
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
      category: 'electronics',
      rating: 4.5,
      reviewCount: 189,
      inStock: true
    }
  }

  const defaultProduct = {
    name: 'Sample Product',
    description: 'This is a sample product description.',
    price: 29.99,
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg',
    category: 'general',
    rating: 4.5,
    reviewCount: 100,
    inStock: true
  }

  const mockProduct: Product = {
    id: productId,
    ...electronicsProducts[productId as keyof typeof electronicsProducts] || defaultProduct
  } as Product

  return <ProductDetailClient product={mockProduct} />
}
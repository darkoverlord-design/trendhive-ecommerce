export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  brand?: string
  rating: number
  reviewCount: number
  inStock: boolean
  features?: string[]
  specifications?: Record<string, string>
  created_at?: string
  updated_at?: string
}

export interface CartItem {
  id: string
  product_id: string
  quantity: number
  product: Product
}

export interface User {
  id: string
  email: string
  full_name: string
  avatar_url?: string
  created_at: string
}

export interface Order {
  id: string
  user_id: string
  total: number
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'
  shipping_address: ShippingAddress
  created_at: string
  order_items: OrderItem[]
}

export interface OrderItem {
  id: string
  order_id: string
  product_id: string
  quantity: number
  price: number
  product: Product
}

export interface ShippingAddress {
  full_name: string
  address_line_1: string
  address_line_2?: string
  city: string
  state: string
  postal_code: string
  country: string
}

export interface Review {
  id: string
  product_id: string
  user_id: string
  rating: number
  title: string
  comment: string
  created_at: string
  user: User
}
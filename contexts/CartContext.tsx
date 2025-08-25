'use client'

import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { Product } from '@/lib/types'

interface CartItem {
  product: Product
  quantity: number
}

interface CartState {
  items: CartItem[]
  total: number
  itemCount: number
}

type CartAction = 
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] }

const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<CartAction>
} | null>(null)

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.product.id === action.payload.id)
      let newItems: CartItem[]
      
      if (existingItem) {
        newItems = state.items.map(item =>
          item.product.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        newItems = [...state.items, { product: action.payload, quantity: 1 }]
      }
      
      const total = newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)
      
      return { items: newItems, total, itemCount }
    }
    
    case 'REMOVE_ITEM': {
      const filteredItems = state.items.filter(item => item.product.id !== action.payload)
      const total = filteredItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
      const itemCount = filteredItems.reduce((sum, item) => sum + item.quantity, 0)
      
      return { items: filteredItems, total, itemCount }
    }
    
    case 'UPDATE_QUANTITY': {
      const updatedItems = state.items.map(item =>
        item.product.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      ).filter(item => item.quantity > 0)
      
      const total = updatedItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
      const itemCount = updatedItems.reduce((sum, item) => sum + item.quantity, 0)
      
      return { items: updatedItems, total, itemCount }
    }
    
    case 'CLEAR_CART':
      return { items: [], total: 0, itemCount: 0 }
      
    case 'LOAD_CART': {
      const total = action.payload.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
      const itemCount = action.payload.reduce((sum, item) => sum + item.quantity, 0)
      
      return { items: action.payload, total, itemCount }
    }
    
    default:
      return state
  }
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0, itemCount: 0 })

  useEffect(() => {
    const savedCart = localStorage.getItem('trendhiveCart')
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        dispatch({ type: 'LOAD_CART', payload: parsedCart })
      } catch (error) {
        console.error('Error loading cart from localStorage:', error)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('trendhiveCart', JSON.stringify(state.items))
  }, [state.items])

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
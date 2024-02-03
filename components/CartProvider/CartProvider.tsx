'use client'

import React, { createContext, useEffect, useState } from 'react';
import { getCookie, setCookie } from '@/lib/utils';

import { Product } from '@/types/Product';

type CartProduct = Pick<Product, 'id' | 'name' | 'thumbnails' | 'price' | 'discount'> & {
  quantity: number;
  color?: string;
};

type CartState = {
  products: CartProduct[];
};

type CartActions = {
  addOrUpdateProduct: (product: CartProduct) => void;
  removeProduct: (productId: string) => void;
  totalItems: number;
  clearCart: () => void;
};

type CartContext = CartState & CartActions;

const CartContext = createContext<CartContext | null>(null);

const CART_COOKIE_NAME = 'cart';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);

  // Load cart from cookies on component mount
  useEffect(() => {
    const storedCart = getCookie(CART_COOKIE_NAME);
    if (storedCart) {
      setProducts(JSON.parse(storedCart));
    }
  }, []);

  const updateCookies = (cart: CartProduct[]) => {
    setCookie(CART_COOKIE_NAME, JSON.stringify(cart), 7);
  };

  const addOrUpdateProduct = (product: CartProduct) => {
    const existingProduct = products.find((p) => p.id === product.id && p.color === product.color);
    if (existingProduct) {
      const newProducts = products.map((p) => {
        if (p.id === product.id && p.color === product.color) {
          return {
            ...p,
            quantity: p.quantity + product.quantity,
          };
        }
        return p;
      });
      setProducts(newProducts);
      updateCookies(newProducts);
    } else {
      const newProducts = [...products, product];
      setProducts(newProducts);
      updateCookies(newProducts);
    }
  }

  const removeProduct = (productId: string) => {
    const newProducts = products.filter((p) => p.id !== productId);
    setProducts(newProducts);
    updateCookies(newProducts);
  };

  const clearCart = () => {
    setProducts([]);
    updateCookies([]);
  };

  const totalItems = products.reduce((acc, p) => acc + p.quantity, 0);

  return (
    <CartContext.Provider value={{ products, addOrUpdateProduct, removeProduct, clearCart,totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const cart = React.useContext(CartContext);
  if (!cart) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return cart;
};


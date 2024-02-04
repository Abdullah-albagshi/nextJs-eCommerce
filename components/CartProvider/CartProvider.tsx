'use client';

import React, { createContext, useEffect, useState } from 'react';
import { getCookie, setCookie } from '@/lib/utils';

import { Product } from '@/types/Product';
import { useToast } from '@/components/ui/use-toast';

export type CartProduct = Pick<
  Product,
  'id' | 'name' | 'thumbnails' | 'price' | 'discount' | 'quantity' | 'slug'
> & {
  selectedQuantity: number;
  color?: string;
};

type CartState = {
  products: CartProduct[];
};

type CartActions = {
  // returns false if the product is not added to the cart
  addOrUpdateProduct: (product: CartProduct) => boolean;
  updateProductQuantity: (productId: string, quantity: number) => void;
  removeProduct: (productId: string) => void;
  clearCart: () => void;
  isCartModalOpen: boolean;
  setIsCartModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  totalItems: number;
  subtotal: number;
};

type CartContext = CartState & CartActions;

const CartContext = createContext<CartContext | null>(null);

const CART_COOKIE_NAME = 'cart';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<CartProduct[]>([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const { toast } = useToast();

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

  const toastMessage = (
    description: string | React.ReactNode,
    variant: 'success' | 'warning'
  ) => {
    const className =
      variant === 'success'
        ? 'bg-white text-green-700 rounded  border'
        : 'bg-white text-yellow-700 rounded  border';
    toast({
      className,
      description,
    });
  };

  // update the cart state and the cookies and show a toast message
  const updateCardAndNotify = (cart: CartProduct[], message: string) => {
    setProducts(cart);
    updateCookies(cart);
    toastMessage(<p className='text-base'>{message}</p>, 'success');
  }


  const checkAvailableQuantity = (product: CartProduct) => {
    const existingProduct = products.find(
      (p) => p.id === product.id && p.color === product.color
    );
    // check if the product is already in the cart and if the quantity is available
    if (existingProduct) {
      return (
        product.quantity >=
        existingProduct.selectedQuantity + product.selectedQuantity
      );
    }
    // if the product is not in the cart, check if the quantity is available
    return product.quantity >= product.selectedQuantity;
  };

  const addOrUpdateProduct = (product: CartProduct) => {
    // check if the quantity is available
    if (!checkAvailableQuantity(product)) {
      toastMessage(<p className='text-base'>Not enough stock</p>, 'warning');
      return false;
    }
    const existingProduct = products.find(
      (p) => p.id === product.id && p.color === product.color
    );
    // check if the product is already in the cart
    if (existingProduct) {
      const newProducts = products.map((p) => {
        if (p.id === product.id && p.color === product.color) {
          return {
            ...p,
            selectedQuantity: p.selectedQuantity + product.selectedQuantity,
          };
        }
        return p;
      });
      updateCardAndNotify(newProducts, 'Updated cart');
    } else {
      // if the product is not in the cart, add it
      const newProducts = [...products, product];
      updateCardAndNotify(newProducts, 'Added to cart');
    }
    return true;
  };

  const updateProductQuantity = (productId: string, quantity: number) => {
    const newProducts = products.map((p) => {
      if (p.id === productId) {
        return {
          ...p,
          selectedQuantity: quantity,
        };
      }
      return p;
    });
    updateCardAndNotify(newProducts, 'Updated quantity');
  };

  const removeProduct = (productId: string) => {
    const newProducts = products.filter((p) => p.id !== productId);
    updateCardAndNotify(newProducts, 'Product Removed from cart');
  };

  const clearCart = () => {
    updateCardAndNotify([], 'Cart cleared');
  };

  // total items in the cart
  const totalItems = products.reduce((acc, p) => acc + p.selectedQuantity, 0);
  // subtotal of the cart with discount
  const subtotal = products.reduce((acc, p) => acc + (p.selectedQuantity * p.price * (100 - (p.discount || 0))) / 100, 0);

  return (
    <CartContext.Provider
      value={{
        products,
        addOrUpdateProduct,
        removeProduct,
        clearCart,
        updateProductQuantity,
        isCartModalOpen,
        setIsCartModalOpen,
        totalItems,
        subtotal,
      }}
    >
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

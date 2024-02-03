'use client';

import React, { createContext, useEffect, useState } from 'react';
import { getCookie, setCookie } from '@/lib/utils';

import { Product } from '@/types/Product';
import { useToast } from '@/components/ui/use-toast';

type CartProduct = Pick<
	Product,
	'id' | 'name' | 'thumbnails' | 'price' | 'discount' | 'quantity'
> & {
	selectedQuantity: number;
	color?: string;
};

type CartState = {
	products: CartProduct[];
};

type CartActions = {
	addOrUpdateProduct: (product: CartProduct) => void;
	updateQuantity: (productId: string, quantity: number) => void;
	removeProduct: (productId: string) => void;
	totalItems: number;
	clearCart: () => void;
};

type CartContext = CartState & CartActions;

const CartContext = createContext<CartContext | null>(null);

const CART_COOKIE_NAME = 'cart';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [products, setProducts] = useState<CartProduct[]>([]);
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

  const updateCart = (cart: CartProduct[]) => {
    setProducts(cart);
    updateCookies(cart);
  };

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
		if (checkAvailableQuantity(product)) {
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
				updateCart(newProducts);
				toast({
					description: 'Updated cart',
				});
			} else {
        // if the product is not in the cart, add it
				const newProducts = [...products, product];
				updateCart(newProducts);
				toast({
					description: 'Added to cart',
				});
			}
		} else {
			toast({
				variant: 'destructive',
				description: 'Not enough stock',
			});
		}

	};

	const updateQuantity = (productId: string, quantity: number) => {
		const newProducts = products.map((p) => {
			if (p.id === productId) {
				return {
					...p,
					selectedQuantity: quantity,
				};
			}
			return p;
		});
		updateCart(newProducts);
	};

	const removeProduct = (productId: string) => {
		const newProducts = products.filter((p) => p.id !== productId);
		updateCart(newProducts);
	};

	const clearCart = () => {
		updateCart([]);
	};

	const totalItems = products.reduce((acc, p) => acc + p.selectedQuantity, 0);

	return (
		<CartContext.Provider
			value={{
				products,
				addOrUpdateProduct,
				removeProduct,
				clearCart,
				totalItems,
				updateQuantity,
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

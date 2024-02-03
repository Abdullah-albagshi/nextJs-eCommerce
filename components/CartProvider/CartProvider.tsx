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
	// update the cart state and the cookies
	const updateCart = (cart: CartProduct[]) => {
		setProducts(cart);
		updateCookies(cart);
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
				toastMessage(<p className='text-base'>Updated cart</p>,'success');
			} else {
				// if the product is not in the cart, add it
				const newProducts = [...products, product];
				updateCart(newProducts);
        toastMessage(<p className='text-base'>Added to cart</p>,'success');
			}
		} else {
      toastMessage(<p className='text-base'>Not enough stock</p>,'warning');
      return false;
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
		updateCart(newProducts);
    toastMessage(<p className='text-base'>Updated quantity</p>,'success');
	};

	const removeProduct = (productId: string) => {
		const newProducts = products.filter((p) => p.id !== productId);
		updateCart(newProducts);
    toastMessage(<p className='text-base'>Product Removed from cart</p>,'success');
	};

	const clearCart = () => {
		updateCart([]);
    toastMessage(<p className='text-base'>Cart cleared</p>,'success');
	};

	const totalItems = products.reduce((acc, p) => acc + p.selectedQuantity, 0);
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

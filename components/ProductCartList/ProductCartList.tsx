'use client';
import React from 'react'
import { useCart } from '../CartProvider/CartProvider';
import ProductCartItem from '../ProductCartItem/ProductCartItem';

export const ProductCartList = () => {
  const { products } = useCart();
  return (
    <>
      {products.map((product,idx) => (
        <ProductCartItem key={`product-${product.id}-${idx}-${product.color}`} product={product} />
      ))}
    </>
  )
}

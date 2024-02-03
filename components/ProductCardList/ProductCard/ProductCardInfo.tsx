'use client';

import { ProductCardPrice } from './ProductCardPrice';
import React from 'react';
import { useProductCard } from './ProductCardContext';

export const ProductCardInfo = () => {
  const { product } = useProductCard();
  return (
    <div className='flex flex-col items-start justify-center mt-4'>
      <a href={`/product/${product.slug}`}>
        <p className='text-ecm-gray hover:text-ecm-black'>{product.name}</p>
      </a>
      <ProductCardPrice />
    </div>
  );
};

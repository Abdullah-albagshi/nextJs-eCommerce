'use client';

import React from 'react';
import { useProductCard } from './ProductCardContext';

export const ProductCardDiscount = () => {
  const { product } = useProductCard();
  const discount = product.discount;
  if (!discount) return null;

  return (
    <span className='absolute top-3 right-5 z-50 bg-white px-2  rounded-[1.875rem]'>
      <span className='text-sm text-ecm-black'>-{discount}%</span>
    </span>
  );
};

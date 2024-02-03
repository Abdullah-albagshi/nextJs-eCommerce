'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useProductCard } from './ProductCardContext';

export const ProductCardColors = () => {
  const { product } = useProductCard();
  const colors = product.colors;
  if (!colors) return null;

  return (
    <span className='absolute z-20 flex items-center justify-center gap-1 top-4 left-5'>
      {colors.map((color, idx) => (
        <div
          key={idx}
          style={{ backgroundColor: color.colorHash }}
          className={cn(
            'w-[.625rem] h-[.625rem] rounded-full',
            'transition-all duration-200',
            'cursor-pointer'
          )}
        ></div>
      ))}
    </span>
  );
};

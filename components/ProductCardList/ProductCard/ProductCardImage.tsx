'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useProductCard } from './ProductCardContext';

export const ProductCardImage = () => {
  const { product, isHovered } = useProductCard();
  const thumbnails = product.thumbnails;

  return (
    <a href={`/product/${product.slug}`}>
      <div className='relative overflow-hidden pb-[100%]'>
        {thumbnails.map((thumbnail, idx) => (
          <img
            key={idx}
            src={thumbnail}
            alt={product.name}
            className={cn(
              'absolute inset-0 w-full h-full object-cover',
              'transition-opacity duration-200',
              idx === 0 ? 'opacity-100' : 'opacity-0',
              isHovered && idx === 1 && 'opacity-100'
            )} />
        ))}
      </div>
    </a>
  );
};

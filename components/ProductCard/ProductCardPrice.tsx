'use client';

import Link from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';
import { useProductCard } from './ProductCardContext';

export const ProductCardPrice = () => {
  const { product, isHovered,setIsModalOpen } = useProductCard();
  const isDiscounted = product.discount !== 0;

  return (
    <div className='relative flex items-center justify-between w-full'>
      <div className={cn('text-ecm-gray', isHovered && 'opacity-0')}>
        <span className={cn(isDiscounted && 'line-through')}>
          {'$'}
          {product.price.toFixed(2)}
        </span>
        {isDiscounted && product.discount && (
          <span className='ml-2  text-ecm-yellow'>
            {'$'}
            {((product.price * (100 - product.discount)) / 100).toFixed(2)}
          </span>
        )}
      </div>
      <button
        className={cn(
          'text-ecm-black hover:text-ecm-yellow p-1 ps-0 absolute left-[-50%] text-sm opacity-0 bg-white',
          'border-b border-transparent hover:border-b hover:border-ecm-gray-lightest',
          'transition-all duration-200',
          isHovered && 'opacity-100 left-0'
        )}
        onClick={() => {setIsModalOpen(true)}}
      >
        Show more
      </button>
    </div>
  );
};

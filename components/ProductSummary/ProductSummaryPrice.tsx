'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useProductSummary } from './ProductSummaryContext';

export const ProductSummaryPrice = () => {
  const { product } = useProductSummary();
  const isDiscounted = product.discount !== 0;
  return (
    <div className={cn('text-ecm-gray')}>
      <span
        className={cn(
          isDiscounted && 'line-through text-sm relative top-[-4px]'
        )}
      >
        {'$'}
        {product.price.toFixed(2)}
      </span>
      {isDiscounted && product.discount && (
        <span className='mt-2 ml-2 text-xl text-ecm-yellow'>
          {'$'}
          {((product.price * (100 - product.discount)) / 100).toFixed(2)}
        </span>
      )}
    </div>
  );
};

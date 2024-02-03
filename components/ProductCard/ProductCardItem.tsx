'use client';

import { ProductItemProps } from './ProductCard';
import React from 'react';
import { cn } from '@/lib/utils';
import { useProductCard } from './ProductCardContext';

export const ProductCardItem = ({
  className, children, ...props
}: ProductItemProps) => {
  const { setIsHovered } = useProductCard();
  return (
    <li
      className={cn(
        'relative w-full h-full overflow-hidden pt-[2px] px-3 pb-6',
        className
      )}
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </li>
  );
};

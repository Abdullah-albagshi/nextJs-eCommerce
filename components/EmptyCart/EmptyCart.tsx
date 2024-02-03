'use client';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React from 'react';

export const EmptyCart = () => {
  const path = usePathname();
  const inCartPage = path === '/cart';

  return (
    <div
      className={cn(
        'flex flex-col  items-center',
        inCartPage ? '' : 'flex-1 justify-center w-full h-full'
      )}
    >
      <X
        size={32}
        strokeWidth={2}
        className='p-2 bg-ecm-gray rounded-full animate-pulse'
      />
      <p className={cn(
        'text-ecm-gray-lightest text-lg',
        inCartPage && 'text-ecm-black'
      )}>
        No products in the cart.
      </p>
    </div>
  );
};

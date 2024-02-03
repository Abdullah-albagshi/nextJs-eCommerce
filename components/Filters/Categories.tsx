'use client';

import Link from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';
import { Categories as data } from '@/data/Categories';
import { usePathname } from 'next/navigation';

const Categories = () => {
  const pathname = usePathname();
  return (
    <div className='flex flex-col flex-wrap px-3 md:flex-row md:items-center'>
      {data.map((category, idx) => (
        <div key={category.key} className='pb-2 border-b md:pb-0 md:border-none'>
          <Link
            href={`${category.href}#${category.name}`}
            className={cn(
              'text-lg text-ecm-gray hover:text-ecm-yellow ',
              'transition-colors duration-200',
              pathname === category.href && 'text-ecm-yellow'
            )}
          >
            <span className=''>{category.name}</span>
          </Link>
          {idx !== data.length - 1 && (
            <span className={cn('hidden md:inline-block text-ecm-gray text-sm px-4')}>
              /
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Categories;

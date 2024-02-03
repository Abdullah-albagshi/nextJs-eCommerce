'use client';

import Link from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';
import { Categories as data } from '@/data/Categories';
import { usePathname } from 'next/navigation';

const Categories = () => {
  const pathname = usePathname();
  return (
    <div className='flex flex-wrap items-center'>
      {data.map((category, idx) => (
        <div key={category.key}>
          <Link
            href={`${category.href}#${category.name}`}
            className={cn(
              'text-lg text-ecm-gray hover:text-ecm-yellow ',
              'transition-colors duration-200',
              pathname === category.href && 'text-ecm-yellow'
            )}
          >
            {idx !== 0 && <span className={cn('hidden md:inline-block text-ecm-gray px-4')}>
              /
            </span>}
            <span className=''>{category.name}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;

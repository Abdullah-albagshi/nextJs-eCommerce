import { Categories } from '@/data/Categories'
import { Category } from '@/types/Categories'
import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/utils'

type CategoryNavProps = {} & React.HTMLAttributes<HTMLElement>

const CategoryNav = ({className,...props}: CategoryNavProps) => {
  
  return (
    <div className={cn('md:sticky md:left-0 md:top-20 bg-white w-full py-5 z-20', className)} {...props}>
      <div className='flex flex-wrap items-center w-full h-full md:max-w-[67.5rem] md:mx-auto'>
        {Categories.map((category: Category) => (
          <div key={category.key} className='w-1/2 sm:w-1/3 md:w-1/5 mb-5 md:mb-0  md:border-r-[1px] last:border-r-0'>
            <Link href={`${category.href}#${category.name}`} className='flex flex-col items-center text-ecm-gray hover:text-ecm-black'>
              <img src={category.image} alt={category.name} className='mx-auto mb-6 max-h-16' />
              <div className='text-sm text-center'>{category.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryNav
import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/utils'

type CategoryNavProps = {} & React.HTMLAttributes<HTMLElement>
type Category = {
  key: string
  name: string
  href: string
  image: string
}
const CategoryNav = ({className,...props}: CategoryNavProps) => {
  const categories: Category[] = [
    {
      key: 'bags',
      name: 'Bags & Backpacks',
      href: '/bags-backpacks',
      image: 'https://savoy.nordicmade.com/wp-content/uploads/2020/08/category-thumb-bags-backpacks.jpg',
    },
    {
      key: 'decoration',
      name: 'Decoration',
      href: '/decoration',
      image: 'https://savoy.nordicmade.com/wp-content/uploads/2020/08/category-thumb-decoration.jpg',
    },
    {
      key: 'essentials',
      name: 'Essentials',
      href: '/essentials',
      image: 'https://savoy.nordicmade.com/wp-content/uploads/2020/08/category-thumb-essentials.jpg',
    },
    {
      key: 'interior',
      name: 'Interior',
      href: '/interior',
      image: 'https://savoy.nordicmade.com/wp-content/uploads/2020/08/category-thumb-interior.jpg',
    },
    {
      key: 'all',
      name: 'Shop All',
      href: '/shop-all',
      image: 'https://savoy.nordicmade.com/wp-content/uploads/2020/08/category-thumb-all.jpg',
    }
  ]
  return (
    <div className={cn('md:sticky md:left-0 md:top-20 bg-white w-full py-5 z-20', className)} {...props}>
      <div className='flex flex-wrap items-center w-full h-full md:max-w-[67.5rem] md:mx-auto'>
        {categories.map((category: Category) => (
          <div key={category.key} className='w-1/2 sm:w-1/3 md:w-1/5 mb-5 md:mb-0  md:border-r-[1px] last:border-r-0'>
            <Link href={category.href} className='flex flex-col items-center text-ecm-gray hover:text-ecm-black'>
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
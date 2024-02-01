import Link from 'next/link';
import React from 'react'
import { cn } from '@/lib/utils';
import { shopMenuItems } from './ShopMenuItems'

type Props = {} & React.HTMLAttributes<HTMLDivElement>



const ShopNav = ({ className, ...props }: Props) => {
  const menuItems = shopMenuItems;
  return (
    <div className={cn('bg-ecm-black w-[31.25rem] flex justify-between items-center p-4 flex-wrap gap-4', className)}>
      {
        menuItems.map((item, index) => (
          <ul key={item.title} className='space-y-2 w-[40%]' tabIndex={index}>
            <li className='mb-4 text-ecm-gray-lightest'>
              <Link href={item.href}>
                <span>
                  {item.title}
                </span>
              </Link>
            </li>
            {
              item.children.map((subItem) => (
                <li key={subItem.title} className='mb-2 transition-all duration-300 text-ecm-gray-lighter hover:text-ecm-gray-lightest'>
                  <Link href={item.href}>
                    <span className='text-[.875rem]'>
                      {subItem.title}
                      {subItem.isNew && <span className='text-[.625rem] p-[1px] rounded  bg-white text-ecm-black relative top-[-10px] right-0' >NEW</span>}
                    </span>
                  </Link>
                </li>
              ))
            }
          </ul>
        ))
      }
    </div>
  )
}

export default ShopNav
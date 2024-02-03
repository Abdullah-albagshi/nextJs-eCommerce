import { Categories } from '@/data/Categories'
import Link from 'next/link'
import { Product } from '@/types/Product'
import React from 'react'

type BreadcrumbProps = {
  product: Product
}

const Breadcrumb = ({ product }: BreadcrumbProps) => {
  const { name, category } = product
  const categoryPath = Categories.find((c) => c.key === category)?.href || ''
  const categoryName = Categories.find((c) => c.key === category)?.name
  return (
    <div className='flex gap-1 text-ecm-gray text-sm'>
      <Link href='/'>
        <span className='text-ecm-black hover:text-ecm-yellow transition-colors duration-300 text-sm'>Shop</span>
      </Link>
      <span className='text-ecm-gray'> / </span>
      <Link
        href={categoryPath}
      >
        <span className='text-ecm-black hover:text-ecm-yellow transition-colors duration-300 text-sm'>{categoryName}</span>
      </Link>
      <span className='text-ecm-gray'> / </span>
      <span className='text-ecm-gray text-sm'>{name}</span>
    </div>
  )
}

export default Breadcrumb
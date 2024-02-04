import { Product } from '@/types/Product'
import ProductCard from './ProductCard/ProductCard'
import React from 'react'

type Props = {
  products: Product[] | null
}

export const ProductCardList = ({ products }: Props) => {
  if (!products?.length) {
    return <p className='px-3 text-ecm-black'>No products were found matching your selection.</p>
  }
  return (
    <ul className='flex flex-wrap'>
      {products.map((product) => (
        <ProductCard product={product} className='w-1/2 md:w-1/3 lg:w-1/4' key={`product-${product.id}`} />
      ))}
    </ul>
  )
}

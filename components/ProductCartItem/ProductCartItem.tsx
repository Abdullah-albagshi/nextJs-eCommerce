import { CartProduct, useCart } from '../CartProvider/CartProvider'
import { Play, X } from 'lucide-react'

import React from 'react'
import { cn } from '@/lib/utils'

type Props = {
  product: CartProduct
}

const ProductCartItem = ({ product }: Props) => {
  const { removeProduct } = useCart()
  const { name, thumbnails, price, selectedQuantity, color, discount } = product
  const totalPriceWithDiscount = (selectedQuantity * price * (100 - (discount || 0))) / 100
  const firstThumbnail = thumbnails[0]

  return (
    <div className='relative flex w-full h-[120px] py-4 border-b border-ecm-gray'>
      <button className="absolute top-[8px] right-0 text-base" onClick={()=>removeProduct(product.id)}><X color='#a5a5a5'/></button>
      <div>
        <img className='w-full h-full' src={firstThumbnail} alt={firstThumbnail} />
      </div>
      <div className="ps-3 w-full">
        <div className='flex flex-col gap-2 pe-2'>
          <h3 className='text-ecm-gray-lightest'>{name} {color && <span> - {color}</span>}</h3>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <span className='text-base text-[#a5a5a5]'>Qty</span>
            <ProductCartUpdateQuantity product={product} />
          </div>
          <p className="text-ecm-gray-lightest">
            ${totalPriceWithDiscount.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  )
}

const ProductCartUpdateQuantity = ({ product }: Props) => {
  const { updateProductQuantity } = useCart()
  const { selectedQuantity, quantity } = product
  return (
    <div className='flex gap-2'>
      <button onClick={() => updateProductQuantity(product.id, selectedQuantity - 1)} disabled={selectedQuantity <= 1}>
        <span className='sr-only'>Decrease quantity</span>
        <Play
          size={16}
          strokeWidth={0}
          className={cn(
            'rotate-180 fill-[#a5a5a5] hover:fill-white transition-all duration-300',
            selectedQuantity === 1 && 'fill-none hover:fill-none'
          )} />
      </button>
      <span className='text-ecm-gray-lightest'>{selectedQuantity}</span>
      <button onClick={() => updateProductQuantity(product.id, selectedQuantity + 1)} disabled={selectedQuantity >= quantity}>
        <span className='sr-only'>Increase quantity</span>
        <Play size={16} className={
          cn(
            'fill-[#a5a5a5] hover:fill-white transition-all duration-300',
            selectedQuantity === quantity && 'fill-none hover:fill-none'
          )} strokeWidth={0} />
      </button>
    </div>
  )
}

export default ProductCartItem
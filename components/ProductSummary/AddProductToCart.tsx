'use client';

import { Play } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';
import { useCart } from '../CartProvider/CartProvider';
import { useProductSummary } from './ProductSummaryContext';

export const AddProductToCart = () => {
  const {addOrUpdateProduct} = useCart()
  const {
    product, quantity: selectedQuantity, color, setColor, updateQuantity, isButtonDisabled,
  } = useProductSummary();
  const { colors, quantity: AvailableQuantity } = product;

  const handleAddToCart = () => {
    addOrUpdateProduct({
      id: product.id,
      name: product.name,
      thumbnails: product.thumbnails,
      price: product.price,
      discount: product.discount,
      quantity: AvailableQuantity,
      selectedQuantity,
      color,
    });
  }

  return (
    <section>
      {/* colors */}
      {colors && colors?.length > 0 && (
        <div className='flex flex-row items-center justify-between p-4 border border-b-0'>
          <p>Color</p>
          <div className='flex items-center gap-2'>
            {colors.map((c) => (
              <button
                key={c.colorName}
                onClick={() => setColor(c.colorName)}
                className={cn(
                  'w-6 h-6 rounded-full flex items-center justify-center hover:border hover:border-ecm-gray transition-all duration-300',
                  color === c.colorName
                    ? 'border border-ecm-gray border-spacing-2'
                    : 'border-2 border-transparent border-spacing-2 '
                )}
              >
                <span
                  className={cn('rounded-full w-4 h-4 block')}
                  style={{ backgroundColor: c.colorHash }}
                ></span>
                <span className='sr-only'>{c.colorName}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      {/* quantity */}
      <div className='flex items-center justify-between gap-2 p-4 border'>
        <p>Quantity</p>
        <div className='flex items-center'>
          <button
            onClick={() => updateQuantity(selectedQuantity - 1)}
            disabled={selectedQuantity <= 1}
            className=' text-ecm-black border-ecm-gray'
          >
            <span className='sr-only'>Decrease quantity</span>
            <Play
              size={16}
              fill={`${selectedQuantity <= 1 ? 'ecm-gray' : 'ecm-black'}`}
              className='rotate-180' />
          </button>
          <input
            type='number'
            value={selectedQuantity}
            min={1}
            max={AvailableQuantity}
            pattern='[0-9]*'
            onChange={(e) => updateQuantity(parseInt(e.target.value))}
            className='text-center min-w-6 bg-transparent border-ecm-gray [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' />
          <button
            onClick={() => updateQuantity(selectedQuantity + 1)}
            disabled={selectedQuantity >= AvailableQuantity}
            className='text-ecm-black border-ecm-gray'
          >
            <span className='sr-only'>Increase quantity</span>
            <Play size={16} fill='ecm-black' />
          </button>
        </div>
      </div>

      <button
        className='w-full p-4 text-white transition-colors duration-300 bg-ecm-black hover:bg-ecm-gray disabled:cursor-not-allowed disabled:hover:bg-ecm-black'
        disabled={isButtonDisabled}
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </section>
  );
};

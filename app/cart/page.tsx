'use client';

import { EmptyCart } from '@/components/EmptyCart/EmptyCart';
import Link from 'next/link';
import { ProductCartList } from '@/components/ProductCartList/ProductCartList';
import { useCart } from '@/components/CartProvider/CartProvider';

export default function Page() {
  const { products, subtotal } = useCart();

  if (products.length === 0) {
    return (
      <div className='flex flex-col items-center mx-auto mt-14'>
        <EmptyCart />
        <Link
          href='/'
          className='ecm-black-button'
        >
          Return to shop
        </Link>
      </div>
    );
  }

  return (
    <section className='flex-1 mx-auto ecm-max-width basis-full center flex flex-col md:flex-row  mt-14 gap-14 !px-8'>
      {/* shopping cart */}
      <section className='w-full md:w-2/3'>
        <h1 className='mb-8 text-2xl text-ecm-black'>Shopping Cart</h1>
        <div className='cart-list'>
          <ProductCartList />
        </div>
      </section>
      {/* cart total */}
      <section className='w-full md:w-1/3'>
        <h1 className='mb-8 text-2xl text-ecm-black'>
          Cart totals
        </h1>
        <div className="bg-[#FAFAFA]">
          <div className="flex flex-row justify-between p-5 border border-b-0">
            <p className='text-sm' >subtotal</p>
            <p className='text-sm'>${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex flex-row justify-between p-5 border border-b-0">
            <p className='text-sm'>Shipping</p>
            <p className='text-sm'>$10.00</p>
          </div>
          <div className="flex flex-row justify-between p-5 border">
            <p className='text-sm'>Total</p>
            <p className='text-sm'>${(subtotal + 10).toFixed(2)}</p>
          </div>
        </div>
        <button className='ecm-black-button'>
          Proceed to Checkout
        </button>
      </section>
    </section>
  );
}

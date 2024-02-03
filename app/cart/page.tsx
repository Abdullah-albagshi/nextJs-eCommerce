'use client';
import { useCart } from '@/components/CartProvider/CartProvider';
import { EmptyCart } from '@/components/EmptyCart/EmptyCart';
import { ProductCartList } from '@/components/ProductCartList/ProductCartList';
import Link from 'next/link';

export default function Page() {
  const { products, subtotal } = useCart();

  if (products.length === 0) {
    return (
      <div className='mx-auto mt-14 flex flex-col items-center'>
        <EmptyCart />
        <Link
          href='/'
          className='mt-4  px-2 py-1 text-center text-white transition-colors duration-300 bg-[#111] hover:bg-[#111]/50 disabled:cursor-not-allowed disabled:hover:bg-ecm-black'
        >
          Return to shop
        </Link>
      </div>
    );
  }

  return (
    <section className='flex-1 mx-auto ecm-max-width basis-full center flex flex-row mt-14 gap-14 !px-8'>
      {/* shopping cart */}
      <section className='w-2/3'>
        <h1 className='text-2xl text-ecm-black mb-8'>Shopping Cart</h1>
        <div>
          <ProductCartList />
        </div>
      </section>
      {/* cart total */}
      <section className='w-1/3'>
        <h1 className='text-2xl text-ecm-black mb-8'>
          Cart totals
        </h1>
        <div className="bg-[#FAFAFA]">
          <div className="flex flex-row justify-between p-5 border border-b-0">
            <p>subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex flex-row justify-between p-5 border border-b-0">
            <p>Shipping</p>
            <p>$10.00</p>
          </div>
          <div className="flex flex-row justify-between p-5 border">
            <p>Total</p>
            <p>${(subtotal + 10).toFixed(2)}</p>
          </div>
        </div>
        <button className='w-full p-4 text-white transition-colors duration-300 bg-[#111] hover:bg-[#111]/50 disabled:cursor-not-allowed disabled:hover:bg-ecm-black mt-4'>
          Proceed to Checkout
        </button>
      </section>
    </section>
  );
}

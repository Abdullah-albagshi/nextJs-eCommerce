'use client';

import { Sheet, SheetContent } from '@/components/ui/sheet';

import React from 'react';
import { ScrollArea } from '../ui/scroll-area';
import { X } from 'lucide-react';
import { useCart } from '../CartProvider/CartProvider';
import { cn } from '@/lib/utils';
import { ProductCartList } from '../ProductCartList/ProductCartList';
import { EmptyCart } from '../EmptyCart/EmptyCart';
import Link from 'next/link';

type CartModalProps = {
	isOpen: boolean;
	setOpen: (open: boolean) => void;
};

const CartModal = ({ isOpen, setOpen }: CartModalProps) => {
	const { products, subtotal, setIsCartModalOpen } = useCart();
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Sheet open={isOpen} onOpenChange={handleClose}>
			<SheetContent className='flex flex-col border-none bg-ecm-light-black py-8 px-10 w-full md:min-w-[26rem]'>
				<div className='text-end border-b border-ecm-gray-light pb-4'>
					<button
						className='text-ecm-gray-lightest text-base'
						onClick={handleClose}
					>
						Close
					</button>
				</div>
				{products.length === 0 && <EmptyCart />}
				<ScrollArea className='flex-1'>
					<ProductCartList/>
				</ScrollArea>
				<div className=''>
					<button
						className={cn(
							'w-full bg-transparent text-ecm-gray-lightest text-base py-2 ',
							'border border-ecm-gray rounded-lg hover:border-white transition-all',
							products.length !== 0 && 'hidden'
						)}
						onClick={handleClose}
					>
						Continue Shopping
					</button>
				</div>
				<div
					className={cn(
						'flex flex-col gap-2 items-start justify-center',
						products.length === 0 && 'hidden'
					)}
					hidden={products.length === 0}
				>
					<div className='flex justify-between w-full py-2 border-y border-ecm-gray mb-8'>
						<p className='text-base text-ecm-gray-lightest'>SubTotal:</p>
						<span className='text-base text-ecm-gray-lightest'>
							${subtotal.toFixed(2)}
						</span>
					</div>
					<Link href='/cart' className='w-full' onClick={()=>{setIsCartModalOpen(false)}}>
						<button
							className={cn(
								'w-full bg-transparent text-ecm-gray-lightest text-base py-2 ',
								'border border-ecm-gray rounded-lg hover:border-white transition-all'
							)}
						>
							View Cart
						</button>
					</Link>
					<Link href='/cart' className='w-full' onClick={()=>{setIsCartModalOpen(false)}}>
						<button className='w-full p-4 text-white transition-colors duration-300 bg-[#111] hover:bg-[#111]/50 disabled:cursor-not-allowed disabled:hover:bg-ecm-black'>
							Proceed to Checkout
						</button>
					</Link>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default CartModal;

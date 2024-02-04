import { CartProduct, useCart } from '../../CartProvider/CartProvider';
import { Play, X } from 'lucide-react';

import Link from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

type Props = {
	product: CartProduct;
};

const ProductCartItem = ({ product }: Props) => {
	const path = usePathname();
	const inCartPage = path === '/cart';
	const { removeProduct } = useCart();
	const { name, thumbnails, price, selectedQuantity, color, discount, slug } =
		product;
	const totalPriceWithDiscount =
		(selectedQuantity * price * (100 - (discount || 0))) / 100;
	const firstThumbnail = thumbnails[0];

	return (
		<div className='relative flex w-full h-[120px] py-4 border-b '>
			<button
				className='absolute top-[8px] right-0 text-base'
				onClick={() => removeProduct(product.id)}
			>
				<X color='#a5a5a5' />
			</button>
			<Link href={`/product/${slug}`} passHref>
				<img
					className='w-[80px] h-[90px]'
					src={firstThumbnail}
					alt={firstThumbnail}
				/>
			</Link>
			<div className='w-full ps-3'>
				<div className='flex flex-col gap-2 pe-2'>
					<Link href={`/product/${slug}`} passHref>
						<h3
							className={cn(
                'pe-5',
								inCartPage ? 'text-ecm-black' : 'text-ecm-gray-lightest'
							)}
						>
							{name} {color && <span> - {color}</span>}
						</h3>
					</Link>
				</div>
				<div className='flex justify-between'>
					<div className='flex items-center gap-2'>
						<span
							className={cn(
								'text-base text-[#a5a5a5]',
								inCartPage ? 'text-ecm-black' : 'text-ecm-gray-lightest'
							)}
						>
							Qty
						</span>
						<ProductCartUpdateQuantity
							product={product}
							inCartPage={inCartPage}
						/>
					</div>
					<p
						className={cn(
							inCartPage ? 'text-ecm-black' : 'text-ecm-gray-lightest'
						)}
					>
						${totalPriceWithDiscount.toFixed(2)}
					</p>
				</div>
			</div>
		</div>
	);
};

const ProductCartUpdateQuantity = ({
	product,
	inCartPage,
}: {
	product: CartProduct;
	inCartPage: boolean;
}) => {
	const { updateProductQuantity } = useCart();
	const { selectedQuantity, quantity } = product;
	return (
		<div className='flex gap-2'>
			<button
				onClick={() => updateProductQuantity(product.id, selectedQuantity - 1)}
				disabled={selectedQuantity <= 1}
			>
				<span className='sr-only'>Decrease quantity</span>
				<Play
					size={16}
					strokeWidth={0}
					className={cn(
						'rotate-180 fill-[#a5a5a5] hover:fill-[#eee] transition-all duration-300',
						selectedQuantity === 1 && 'fill-none hover:fill-none'
					)}
				/>
			</button>
			<span
				className={cn(inCartPage ? 'text-ecm-black' : 'text-ecm-gray-lightest')}
			>
				{selectedQuantity}
			</span>
			<button
				onClick={() => updateProductQuantity(product.id, selectedQuantity + 1)}
				disabled={selectedQuantity >= quantity}
			>
				<span className='sr-only'>Increase quantity</span>
				<Play
					size={16}
					className={cn(
						'fill-[#a5a5a5] hover:fill-[#eee] transition-all duration-300',
						selectedQuantity === quantity && 'fill-none hover:fill-none'
					)}
					strokeWidth={0}
				/>
			</button>
		</div>
	);
};

export default ProductCartItem;

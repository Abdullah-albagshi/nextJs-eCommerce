'use client';

import { Play } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';
import { useCart } from '../CartProvider/CartProvider';
import { useProductSummary } from './ProductSummaryContext';

type Props = {
	// callback is used to close the modal after adding the product to the cart
	callback?: () => void;
};

export const AddProductToCart = ({ callback }: Props) => {
	const { addOrUpdateProduct, setIsCartModalOpen } = useCart();
	const {
		product,
		quantity: selectedQuantity,
		color,
		setColor,
		updateQuantity,
		isButtonDisabled,
	} = useProductSummary();
	const { colors, quantity: AvailableQuantity } = product;

	const handleAddToCart = () => {
		const isProductAdded = addOrUpdateProduct({
			id: product.id,
			name: product.name,
			slug: product.slug,
			thumbnails: product.thumbnails,
			price: product.price,
			discount: product.discount,
			quantity: AvailableQuantity,
			selectedQuantity,
			color,
		});
		if (!isProductAdded) {
			return;
		}
		// check if a callback is passed and call it
		if (callback) {
			callback();
		}
		setIsCartModalOpen(true);
	};

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
										? 'border border-ecm-gray'
										: 'border border-transparent'
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
							className='rotate-180'
						/>
					</button>
					<input
						type='number'
						value={selectedQuantity}
						min={1}
						max={AvailableQuantity}
						pattern='[0-9]*'
						onChange={(e) => updateQuantity(parseInt(e.target.value))}
						className={cn(
							'text-center min-w-6 bg-transparent border-ecm-gray ',
              // this remove the arrows from the number input
							'[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
						)}
					/>
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
				className='!mt-0 ecm-black-button'
				disabled={isButtonDisabled}
				onClick={handleAddToCart}
			>
				Add to Cart
			</button>
		</section>
	);
};

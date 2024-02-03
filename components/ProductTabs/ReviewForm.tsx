'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const ReviewForm = () => {
	const [rating, setRating] = React.useState(0);
	const [hoverRating, setHoverRating] = React.useState(0);
	return (
		<div className='flex flex-col w-full gap-4 flex-start'>
			<p className='text-sm text-ecm-gray text-start'>
				Your email address will not be published.
			</p>
			{/* rating */}
			<p className='text-ecm-black text-start'>
				Your rating
				<abbr className='ps-1 decoration-transparent' title='required'>
					*
				</abbr>
			</p>
			<div className='flex mb-4'>
				{[1, 2, 3, 4, 5].map((star, index) => (
					<Star
						key={index}
						size={24}
						strokeWidth={0.5}
						className={cn(
							'cursor-pointer hover:fill-ecm-yellow',
							star <= (hoverRating || rating)
								? 'fill-ecm-yellow'
								: 'fill-ecm-gray',
							'transition-all duration-300 ease-in-out'
						)}
						onClick={() => setRating(star)}
						onMouseEnter={() => setHoverRating(star)}
						onMouseLeave={() => setHoverRating(0)}
					/>
				))}
			</div>
			{/* review form */}
			<form className='flex flex-col gap-4 flex-start'>
				{/* your review  name email */}
				<div className='flex flex-col '>
					<label htmlFor='review' className='text-ecm-black text-start'>
						Your review
						<abbr className='ps-1 decoration-transparent' title='required'>
							*
						</abbr>
					</label>
					<textarea id='review' className='w-full h-48 border-2 ' required />
				</div>
				<div className='flex flex-row w-full gap-4'>
					<div className='flex-1 text-start'>
						<label htmlFor='name' className='w-full text-ecm-black text-start'>
							Name
							<abbr className='ps-1 decoration-transparent' title='required'>
								*
							</abbr>
						</label>
						<input id='name' className='w-full border-2 ' required />
					</div>
					<div className='flex-1 text-start'>
						<label htmlFor='email' className='text-ecm-black text-start'>
							Email
							<abbr className='ps-1 decoration-transparent' title='required'>
								*
							</abbr>
						</label>
						<input id='email' className='w-full border-2 ' required />
					</div>
				</div>
				<button className='w-fit px-8 py-2 text-white transition-colors duration-300 bg-[#111] hover:bg-[#111]/50 disabled:cursor-not-allowed disabled:hover:bg-ecm-black'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default ReviewForm;

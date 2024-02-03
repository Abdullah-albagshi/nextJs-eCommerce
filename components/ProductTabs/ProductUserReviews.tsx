import { Star, User } from 'lucide-react';

import React from 'react';
import ReviewForm from './ReviewForm';
import { UserReviews } from '@/types/Product';
import { cn } from '@/lib/utils';

type Props = {
	reviews: UserReviews;
};

const ProductUserReviews = ({ reviews }: Props) => {
	const EmptyReviews = () => {
		if (!reviews || reviews.length === 0)
			return (
				<div className='text-center'>
					<p>There are no reviews yet.</p>
					<h1>Be the first to review “Striped Canvas Bag”</h1>
				</div>
			);
	};
	const UserReviews = () => {
		if (!reviews) return null;
		return (
			<div className='flex flex-col gap-4 my-4 text-start'>
				{reviews.map((review, index) => (
					<div key={index} className='flex flex-row gap-4'>
            <User size={50} strokeWidth={1} />
						<div className='flex-1'>
							<div className=''>
								<div className='flex justify-between'>
									<h2 className='text-ecm-black text-start'>{review.name}</h2>
									<div className='flex gap-1'>
										{[1, 2, 3, 4, 5].map((star, index) => (
											<Star
												key={index}
												size={24}
												strokeWidth={0.5}
												className={cn(
													star <= review.rating
														? 'fill-ecm-yellow'
														: 'fill-ecm-gray',
													'transition-all duration-300 ease-in-out'
												)}
											/>
										))}
									</div>
								</div>
                <p className='text-ecm-gray text-start'>{review.date}</p>
							</div>
							<p className='mt-4 text-ecm-black text-start'>{review.content}</p>
						</div>
					</div>
				))}
        <h1 className='my-8 text-2xl text-ecm-black'>Add a review</h1>
			</div>
		);
	};
	return (
		<div className='text-center'>
			<EmptyReviews />
			<UserReviews />
			<ReviewForm />
		</div>
	);
};

export default ProductUserReviews;

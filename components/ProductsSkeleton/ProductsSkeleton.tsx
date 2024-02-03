import React from 'react';
import { Skeleton } from '../ui/skeleton';

const ProductsSkeleton = () => {
	return (
		<div className='flex flex-wrap gap-4'>
			<Skeleton className='h-[300px] w-1/2 md:w-1/3 lg:w-1/4 bg-gray-200' />
			<Skeleton className='h-[300px] w-1/2 md:w-1/3 lg:w-1/4 bg-gray-200' />
			<Skeleton className='h-[300px] w-1/2 md:w-1/3 lg:w-1/4 bg-gray-200' />
		</div>
	);
};

export default ProductsSkeleton;

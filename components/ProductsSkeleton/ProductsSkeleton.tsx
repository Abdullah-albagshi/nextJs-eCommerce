import React from 'react';
import { Skeleton } from '../ui/skeleton';

const ProductsSkeleton = () => {
  return (
    <div className='flex flex-wrap'>
      {/* three */}
      {
        Array.from({ length: 4 }).map((_, i) => (
          <div className="w-1/2 p-3 my-3 md:w-1/3 lg:w-1/4" key={i}>
            <Skeleton className='h-[300px]  bg-gray-200' />
          </div>
        ))
      }

    </div>
  );
};

export default ProductsSkeleton;

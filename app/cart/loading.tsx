import ProductsSkeleton from '@/components/ProductsSkeleton/ProductsSkeleton'
import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const loading = () => {
  return (
    <div className="flex-1 flex mx-auto basis-full gap-4 justify-center bg-ecm-gray-lightest">
      <Skeleton className='h-[600px] w-1/3 bg-gray-400' />
      <Skeleton className='h-[600px] w-1/3 bg-gray-400' />

    </div>
  )
}

export default loading
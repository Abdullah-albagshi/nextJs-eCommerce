import ProductsSkeleton from '@/components/ProductsSkeleton/ProductsSkeleton'
import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const Loading = () => {
  return (
    <div className="flex flex-col justify-center flex-1 gap-4 pt-4 mx-auto md:flex-row basis-full bg-ecm-gray-lightest">
      <Skeleton className='h-[600px] md:w-1/3 bg-gray-400' />
      <Skeleton className='h-[600px] md:w-1/3 bg-gray-400' />
    </div>
  )
}

export default Loading
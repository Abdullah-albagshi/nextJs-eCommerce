import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const Loading = () => {
  return (
    <div>
      <Skeleton className="h-[125px] w-[250px]"/>
    </div>
  )
}

export default Loading
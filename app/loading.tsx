import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const loading = () => {
  return (
    <div>
      <Skeleton className="h-[125px] w-[250px]"/>
      <p>loading</p>
    </div>
  )
}

export default loading
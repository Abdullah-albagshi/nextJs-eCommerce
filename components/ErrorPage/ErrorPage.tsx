import { ArrowLeft, X } from 'lucide-react'

import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/utils'

const ErrorPage = () => {
  return (
    <div 
      className={cn(
        'mx-auto ecm-max-width',
        'flex flex-col items-center',
        ' justify-start w-full mt-10 gap-2'
      )}
    >
      <X
        size={32}
        strokeWidth={2}
        className='p-2 rounded-full bg-ecm-gray animate-pulse'
      />
      <h2 className={cn('text-ecm-black font-light text-2xl')}>Page not found.</h2>
      <p className={cn('text-ecm-gray max-w-sm text-balance text-center')}>It looks like nothing was found at this location.</p>
      <p className={cn('text-ecm-gray max-w-sm text-balance text-center')}>Click the link below to return home.</p>

      <Link href={'/'} className='ecm-black-button !w-fit flex items-center !p-2' >
        <ArrowLeft size={16} strokeWidth={2} className='mr-2' />
        <span>Go Home</span>
      </Link>
    </div>
  )
}

export default ErrorPage
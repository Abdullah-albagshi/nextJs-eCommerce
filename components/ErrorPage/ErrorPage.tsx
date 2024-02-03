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
        'flex-1 justify-center w-full '
      )}
    >
      <X
        size={32}
        strokeWidth={2}
        className='p-2 rounded-full bg-ecm-gray animate-pulse'
      />
      <p className={cn('text-ecm-black')}>Page not found.</p>

      <Link href={'/'} className='w-full p-4 text-white transition-colors duration-300 bg-[#111] hover:bg-[#111]/50 disabled:cursor-not-allowed disabled:hover:bg-ecm-black' >
        <ArrowLeft size={16} strokeWidth={2} className='mr-2' />Go Home
      </Link>
    </div>
  )
}

export default ErrorPage
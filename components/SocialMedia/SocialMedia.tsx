import { Facebook, Instagram, Twitter } from 'lucide-react';

import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/utils';

type props = {} & React.HTMLAttributes<HTMLElement>

const SocialMedia = ({className,...props}: props) => {
  return (
    <ul className={cn('flex items-center justify-start w-full mt-4', className)}>
      <li className='mr-4 '>
        <Link href='/'>
          <Facebook />
        </Link>
      </li>
      <li className='mr-4 '>
        <Link href='/'>
          <Twitter />
        </Link>
      </li>
      <li className='mr-4 '>
        <Link href='/'>
          <Instagram />
        </Link>
      </li>
    </ul>
  )
}

export default SocialMedia
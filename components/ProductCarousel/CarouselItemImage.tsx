'use client'

import {
  CarouselItem as CnCarouselItem,
  useCarousel,
} from '@/components/ui/carousel';

import React from 'react'

const CarouselItemImage = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <CnCarouselItem className='relative cursor-grab'>
        <section>
          {/* picture is used for art direction "image will be displayed based on screen size" */}
          <picture>
            {children}
          </picture>
        </section>
      </CnCarouselItem>
    </>
  )
}

export default CarouselItemImage
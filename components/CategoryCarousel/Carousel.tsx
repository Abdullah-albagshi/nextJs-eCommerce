import {
  Carousel as CarouselComponent,
  CarouselContent,
  CarouselDots,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import CarouselItem from './CarouselItem';
import { CategoryItems } from '@/data/Categories';
import React from 'react';

const Carousel = () => {
  


  return (
    <section className='max-w-[100rem] mx-auto'>
      <CarouselComponent className='w-full'>
        <CarouselContent>
          {CategoryItems.map((item, idx) => (
            <CarouselItem item={item} index={idx} key={item.key} />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <CarouselDots className='md:border-none'/>
      </CarouselComponent>
    </section>
  );
};

export default Carousel;

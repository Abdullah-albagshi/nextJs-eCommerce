import {
  Carousel as CarouselComponent,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import Link from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';

const Carousel = () => {
  const carouselItems = [
    {
      key: 'lamp',
      title: 'Contemporary Pendant Lighting',
      category: 'Interior',
      link: '/category/interior',
      image:
        'https://savoy.nordicmade.com/wp-content/uploads/2015/08/slider-pendant-lighting.jpg',
      mobileImage:
        'https://savoy.nordicmade.com/wp-content/uploads/2015/08/slider-pendant-lighting-alt.jpg',
      textColor: 'md:text-white',
    },
    {
      key: 'clock',
      title: 'Minimalist Rotating Disc Wall Clock',
      category: 'Decoration',
      link: '/category/decoration',
      image:
        'https://savoy.nordicmade.com/wp-content/uploads/2015/08/slider-wall-clock.jpg',
      mobileImage:
        'https://savoy.nordicmade.com/wp-content/uploads/2015/08/slider-wall-clock-alt.jpg',
      textColor: 'text-black',
    },
    {
      key: 'basket',
      title: 'Bamboo Zigzag Pattern Basket',
      category: 'Essentials',
      link: '/category/essentials',
      image:
        'https://savoy.nordicmade.com/wp-content/uploads/2015/08/slider-basket.jpg',
      mobileImage:
        'https://savoy.nordicmade.com/wp-content/uploads/2015/08/slider-basket-alt.jpg',
      textColor: 'text-black',
    },
  ];


  return (
    <section className='max-w-[100rem] mx-auto'>
      <CarouselComponent className='w-full' >
        <CarouselContent>
          {carouselItems.map((item) => (
            <CarouselItem key={item.key} className='relative'>
              <section>
                {/* picture is used for art direction "image will be displayed based on screen size" */}
                <picture>
                  <source
                    media='(max-width: 768px)'
                    srcSet={item.mobileImage}
                  />
                  <source media='(min-width: 769px)' srcSet={item.image} />
                  <img
                    className='w-full h-full object-cover'
                    src={item.image}
                    alt={item.title}
                  />
                </picture>
              </section>
              <div
                key={`details-key-${item.key}`}
                className='p-6 md:absolute md:top-1/2 md:-translate-y-1/2 md:translate-x-[10%] md:flex flex-col justify-center items-start w-full max-w-[76.25rem] md:p-[5%]'
              >
                <h2
                  className={cn('text-xl md:text-4xl w-full md:max-w-[40%]',
                    'text-ecm-black',
                    `${item.textColor}`
                  )}
                >
                  {item.title}
                </h2>
                <Link
                  href={item.link}
                  className={`text-[1rem] md:text-lg mt-[0.3125rem] md:mt-0 my-4 pb-1 transition-all duration-300 text-ecm-gray md:hover:text-ecm-yellow md:border-b-[1px] md:border-b-ecm-gray `}
                >
                  {item.category}
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <CarouselDots />
      </CarouselComponent>
    </section>
  );
};

export default Carousel;

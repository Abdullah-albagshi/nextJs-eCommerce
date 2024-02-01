import {
  Carousel as CarouselComponent,
  CarouselContent,
  CarouselDots,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import CarouselItem from './CarouselItem';
import React from 'react';

export type CarouselItemProps = {
  key: string;
  title: string;
  category: string;
  link: string;
  image: string;
  mobileImage: string;
  textColor: string;
};

const Carousel = () => {
  const carouselItems: CarouselItemProps[] = [
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
      <CarouselComponent className='w-full'>
        <CarouselContent>
          {carouselItems.map((item, idx) => (
            <CarouselItem item={item} index={idx} key={item.key} />
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

import {
  Carousel as CarouselComponent,
  CarouselContent,
  CarouselDots,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Categories, Category } from '@/types/Categories';

import CarouselItem from './CarouselItem';
import React from 'react';

export type CarouselItemProps = {
  key: string;
  title: string;
  category: Categories;
  link: Category['href'];
  image: string;
  mobileImage: string;
  textColor: string;
};

const Carousel = () => {
  const carouselItems: CarouselItemProps[] = [
    {
      key: 'lamp',
      title: 'Contemporary Pendant Lighting',
      category: 'interior',
      link: '/product-category/interior',
      image:
        'https://savoy.nordicmade.com/wp-content/uploads/2015/08/slider-pendant-lighting.jpg',
      mobileImage:
        'https://savoy.nordicmade.com/wp-content/uploads/2015/08/slider-pendant-lighting-alt.jpg',
      textColor: 'md:text-white',
    },
    {
      key: 'clock',
      title: 'Minimalist Rotating Disc Wall Clock',
      category: 'decoration',
      link: '/product-category/decoration',
      image:
        'https://savoy.nordicmade.com/wp-content/uploads/2015/08/slider-wall-clock.jpg',
      mobileImage:
        'https://savoy.nordicmade.com/wp-content/uploads/2015/08/slider-wall-clock-alt.jpg',
      textColor: 'text-black',
    },
    {
      key: 'basket',
      title: 'Bamboo Zigzag Pattern Basket',
      category: 'essentials',
      link: '/product-category/essentials',
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
        <CarouselDots className='md:border-none'/>
      </CarouselComponent>
    </section>
  );
};

export default Carousel;

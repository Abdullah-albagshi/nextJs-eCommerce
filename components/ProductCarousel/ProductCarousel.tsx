import {
  Carousel as CarouselComponent,
  CarouselContent,
  CarouselDots,
  CarouselNext,
  CarouselPrevious,
  CarouselThumbs,
} from '@/components/ui/carousel';

import CarouselItemImage from './CarouselItemImage';
import { Product } from '@/types/Product';
import React from 'react';

type CarouselProps = {
  product: Product;
  // for carousel dots or carousel thumbs
  children?: React.ReactNode;
  className?: string;
};


const ProductCarousel = ({ product, children,className }: CarouselProps) => {

  return (
      <CarouselComponent className={className}>
        {children}
        <CarouselContent>
          {
            product.images.map((image, index) => (
              <CarouselItemImage key={index}>
                <img
                  className='w-full h-auto'
                  src={image}
                  alt={product.name}
                />
              </CarouselItemImage>
            ))
          }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </CarouselComponent>
  );
};

ProductCarousel.CarouselDots = CarouselDots;
ProductCarousel.CarouselThumbs = CarouselThumbs;

export default ProductCarousel;

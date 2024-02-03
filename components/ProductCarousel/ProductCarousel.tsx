import {
  Carousel as CarouselComponent,
  CarouselContent,
  CarouselDots,
  CarouselNext,
  CarouselPrevious,
  CarouselThumbs,
} from '@/components/ui/carousel';

import CarouselItemImage from './CarouselItemImage';
import { ImageZoom } from '../ImageZoom/ImageZoom';
import { Product } from '@/types/Product';
import React from 'react';

type CarouselProps = {
  product: Product;
  // for carousel dots or carousel thumbs
  children?: React.ReactNode;
  // image with zoom
  imageWithZoom?: boolean;
  className?: string;
};


const ProductCarousel = ({ product, children, className, imageWithZoom }: CarouselProps) => {
  // wither to use image zoom or not based on the prop
  const ImgContainer = imageWithZoom ? ImageZoom : 'div';

  return (
    <CarouselComponent className={className}>
      {children}
      <CarouselContent>
        {
          product.images.map((image, index) => (
            <CarouselItemImage key={index}>
              <ImgContainer>
                <img
                  className='w-full h-auto'
                  src={image}
                  alt={product.name}
                />
              </ImgContainer>
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

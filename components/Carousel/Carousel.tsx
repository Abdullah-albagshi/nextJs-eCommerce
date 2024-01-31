import {
  Carousel as CarouselComponent,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Link from "next/link"
import React from 'react'

const Carousel = () => {

  const carouselItems = [
    {
      key: 'lamp',
      title: 'Contemporary Pendant Lighting',
      category: 'Interior',
      link: '/category/interior',
      image: 'https://savoy.nordicmade.com/wp-content/uploads/2015/08/slider-pendant-lighting.jpg',
      mobileImage: 'https://savoy.nordicmade.com/wp-content/uploads/2015/08/slider-pendant-lighting-alt.jpg',
      textColor: 'text-white',
    },
    {
      key: 'clock',
      title: 'Minimalist Rotating Disc Wall Clock',
      category: 'Decoration',
      link: '/category/decoration',
      image: 'https://savoy.nordicmade.com/wp-content/uploads/2015/08/slider-wall-clock.jpg',
      mobileImage: 'https://savoy.nordicmade.com/wp-content/uploads/2015/08/slider-wall-clock-alt.jpg',
      textColor: 'text-black',
    },
    {
      key: 'basket',
      title: 'Bamboo Zigzag Pattern Basket',
      category: 'Essentials',
      link: '/category/essentials',
      image: 'https://savoy.nordicmade.com/wp-content/uploads/2015/08/slider-basket.jpg',
      mobileImage: 'https://savoy.nordicmade.com/wp-content/uploads/2015/08/slider-basket-alt.jpg',
      textColor: 'text-black',
    }
  ]



  return (
    <section className='max-w-[100rem] mx-auto'>
      <CarouselComponent className="w-full">
        <CarouselContent>
          {carouselItems.map((item) => (
            <CarouselItem key={item.key} className="relative">
              <div className="">
                  {/* it's used for art direction "image will be displayed based on screen size" */}
                <picture>
                  <source media="(max-width: 768px)" srcSet={item.mobileImage} />
                  <source media="(min-width: 769px)" srcSet={item.image} />
                  <img className="w-full h-full object-cover" src={item.image} alt={item.title} />
                </picture>
              </div>
              <div className=" bg-black bg-opacity-50"></div>
              <div className="absolute top-1/2 -translate-y-1/2 translate-x-[10%] hidden md:flex flex-col justify-center items-start w-full max-w-[76.25rem] p-[5%]">
                <h2 className={`text-4xl w-full max-w-[40%] ${item.textColor}`}>{item.title}</h2>
                <Link href={item.link} className={`text-lg my-4 pb-1 text-ecm-gray hover:text-ecm-yellow border-b-[1px] border-b-ecm-gray ${item.textColor}`}>{item.category}</Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <CarouselDots />
      </CarouselComponent>
    </section>
  )
}

export default Carousel


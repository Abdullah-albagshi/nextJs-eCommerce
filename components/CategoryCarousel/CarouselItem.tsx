'use client';

import {
	CarouselItem as CnCarouselItem,
	useCarousel,
} from '@/components/ui/carousel';

import { CategoryCarousel } from '@/types/Categories';
import Link from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';

type Props = {
	item: CategoryCarousel;
	index: number;
};

const CarouselItem = ({ item, index }: Props) => {
	const { api } = useCarousel();
	if (!api) return null;
	const { selectedScrollSnap } = api;
	// check if the current item is visible
	const isVisible = selectedScrollSnap() === index;
	return (
		<>
			<CnCarouselItem key={item.key} className='relative cursor-grab'>
				<section>
					{/* picture is used for art direction "image will be displayed based on screen size" */}
					<picture>
						<source media='(max-width: 768px)' srcSet={item.mobileImage} />
						<source media='(min-width: 769px)' srcSet={item.image} />
						<img
							className='object-cover w-full h-full'
							src={item.image}
							alt={item.title}
						/>
					</picture>
				</section>
				<div
					key={`details-key-${item.key}`}
					className={cn(
						'p-6  flex-col justify-center items-start w-full max-w-[76.25rem] ',
            'md:absolute md:top-1/2 md:-translate-y-1/2 md:translate-x-[10%] md:flex md:p-[5%]',
						isVisible ? 'md:animate-fade-in ' : ''
					)}
				>
					<h1
						className={cn(
							'text-xl md:text-4xl md:font-thin w-full md:max-w-[40%]',
							'text-ecm-black',
							item.textColor === 'light' ? 'md:text-white' : '',
						)}
					>
						{item.title}
					</h1>
					<Link
						href={`${item.link}#${item.category}`}
						className={cn(
							'text-[1rem]  mt-[0.3125rem]  my-4 pb-1 transition-all duration-300 text-ecm-gray ',
							'md:mt-0 md:text-lg md:hover:text-ecm-yellow md:border-b-[1px] md:border-b-ecm-gray'
						)}
					>
						{item.category}
					</Link>
				</div>
			</CnCarouselItem>
		</>
	);
};

export default CarouselItem;

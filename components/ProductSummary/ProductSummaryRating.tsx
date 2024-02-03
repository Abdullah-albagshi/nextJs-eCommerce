'use client';

import { Star, StarHalf } from 'lucide-react';

import React from 'react';
import { useProductSummary } from './ProductSummaryContext';

export const ProductSummaryRating = () => {
  const { product } = useProductSummary();
  const { rating } = product;
  if (!rating) return null;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars = Array.from({ length: 5 }, (_, i) => {
    if (i < fullStars) {
      return <Star key={i} fill='#DC9814' size={18} strokeWidth={0.5} />;
    } else if (hasHalfStar && i === fullStars) {
      return <StarHalf key={i} fill='#DC9814' size={18} strokeWidth={0.5} />;
    } else {
      // gray dot
      return <span key={i} className='w-1 h-1 rounded-full bg-ecm-gray' />;
    }
  });
  return (
    <p className='flex items-center gap-1 mt-4 text-ecm-gray'>
      {stars}
      {/* screen reader */}
      <span className='sr-only'>{rating} stars</span>
    </p>
  );
};

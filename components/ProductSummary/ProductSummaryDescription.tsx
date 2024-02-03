'use client';

import React from 'react';
import { useProductSummary } from './ProductSummaryContext';

export const ProductSummaryDescription = () => {
  const { product } = useProductSummary();
  const { description } = product;
  return <p className='mt-4 text-ecm-gray'>{description}</p>;
};

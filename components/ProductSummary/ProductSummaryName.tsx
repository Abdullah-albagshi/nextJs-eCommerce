'use client';

import React from 'react';
import { useProductSummary } from './ProductSummaryContext';

export const ProductSummaryName = () => {
  const { product } = useProductSummary();
  const { name } = product;
  return <h1 className='text-2xl text-ecm-black'>{name}</h1>;
};

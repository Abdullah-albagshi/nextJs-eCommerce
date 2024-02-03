'use client';

import { AddProductToCart } from './AddProductToCart';
import { Product } from '@/types/Product';
import { ProductSummaryDescription } from './ProductSummaryDescription';
import { ProductSummaryName } from './ProductSummaryName';
import { ProductSummaryPrice } from './ProductSummaryPrice';
import ProductSummaryProvider from './ProductSummaryContext';
import { ProductSummaryRating } from './ProductSummaryRating';
import React from 'react';

export type Props = {
	product: Product;
	children: React.ReactNode;
};

const ProductSummaryRoot = ({ product, children }: Props) => {
	return (
		<ProductSummaryProvider product={product}>
			{children}
		</ProductSummaryProvider>
	);
};

// this is done because of next.js does not support compound components the way react does
const ProductSummary = Object.assign(ProductSummaryRoot, {
  ProductSummaryName: ProductSummaryName,
  ProductSummaryPrice: ProductSummaryPrice,
  ProductSummaryDescription: ProductSummaryDescription,
  ProductSummaryRating: ProductSummaryRating,
  AddProductToCart: AddProductToCart,
});

export default ProductSummary;


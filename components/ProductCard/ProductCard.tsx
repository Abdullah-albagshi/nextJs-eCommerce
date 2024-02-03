'use client';

import { Product } from '@/types/Product';
import { ProductCardColors } from './ProductCardColors';
import { ProductCardDiscount } from './ProductCardDiscount';
import { ProductCardImage } from './ProductCardImage';
import { ProductCardInfo } from './ProductCardInfo';
import { ProductCardItem } from './ProductCardItem';
import { ProductCardPrice } from './ProductCardPrice';
import { ProductCardProvider } from './ProductCardContext';
import { ProductModal } from '../ProductModal/ProductModal';
import React from 'react';

type Props = {
  product: Product;
} & React.HTMLAttributes<HTMLElement>;
export type ProductItemProps = {} & React.HTMLAttributes<HTMLElement>;

const ProductCard = ({ product, className, ...props }: Props) => {
  return (
    <ProductCardProvider product={product}>
      <ProductCardItem className={className} {...props}>
        <ProductCardColors />
        <ProductCardDiscount />
        <ProductCardImage />
        <ProductCardInfo />
      </ProductCardItem>
      <ProductModal product={product} />
    </ProductCardProvider>
  );
};

export default ProductCard;

ProductCard.Image = ProductCardImage;
ProductCard.Price = ProductCardPrice;
ProductCard.Colors = ProductCardColors;
ProductCard.Discount = ProductCardDiscount;
ProductCard.Info = ProductCardInfo;
ProductCard.Item = ProductCardItem;


// ProductSummaryContext.tsx

import React, { createContext, useContext, useState } from 'react';

import { Product } from '@/types/Product';
import { isNumber } from 'util';

type ProductSummaryContextType = {
  product: Product;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  updateQuantity: (newQuantity: number) => void;
  isButtonDisabled: boolean;
};

const ProductSummaryContext = createContext<ProductSummaryContextType | null>(
  null
);

export const useProductSummary = () => {
  const context = useContext(ProductSummaryContext);
  if (!context) {
    throw new Error(
      'useProductSummary must be used within a ProductSummaryProvider'
    );
  }
  return context;
};

const ProductSummaryProvider: React.FC<{
  product: Product;
  children: React.ReactNode;
}> = ({ product, children }) => {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');

  const updateQuantity = (newQuantity: number) => {
    if (!isNumber(newQuantity) || newQuantity < 0) {
      return;
    }
    setQuantity(newQuantity);
  }

  const productColors = product.colors;
  // if no colors are available, the button should be enabled by default (no color selection required) 
  // if colors are available, the button should be disabled until a color is selected
  // if quantity is 0, the button should be disabled
  const isButtonDisabled = productColors && productColors.length > 0 && color === '' || quantity === 0 || false;


  return (
    <ProductSummaryContext.Provider
      value={{
        product,
        quantity,
        setQuantity,
        color,
        setColor,
        updateQuantity,
        isButtonDisabled,
      }}
    >
      {children}
    </ProductSummaryContext.Provider>
  );
};

export default ProductSummaryProvider;
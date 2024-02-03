// ProductCardContext.tsx

import React, { createContext, useState } from 'react';

import { Product } from '@/types/Product';

export type ProductCardContextProps = {
  product: Product;
  isHovered: boolean;
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ProductCardContext = React.createContext<ProductCardContextProps | null>(null);

export const ProductCardProvider = ({ children, product }: { children: React.ReactNode; product: Product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <ProductCardContext.Provider value={{
      product,
      isHovered,
      setIsHovered,
      isModalOpen,
      setIsModalOpen,
    }}>
      {children}
    </ProductCardContext.Provider>
  );
};

export const useProductCard = () => {
  const context = React.useContext(ProductCardContext);
  if (!context) {
    throw new Error('useProductCard must be used within a ProductCardProvider');
  }
  return context;
};

export default ProductCardContext;
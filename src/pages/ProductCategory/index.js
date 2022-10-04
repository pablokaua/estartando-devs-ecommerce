import { Header } from '../../components/Header';
import { ProductTitle } from '../../components/ProductTitle';
import { ProductCategoryWrapper } from './styled';
import React from 'react';

export const ProductCategory = () => {
  return (
    <ProductCategoryWrapper>
      <Header />
      <ProductTitle />
    </ProductCategoryWrapper>
  );
};

import { ProductTitleWrapper } from './styles';
import { ImArrowLeft2 } from 'react-icons/im';
import { Link } from 'react-router-dom';
import React from 'react';

export const ProductTitle = ({ children }) => {
  return (
    <ProductTitleWrapper>
      <div>
        <Link to={'/'}>
          <ImArrowLeft2 />
        </Link>
      </div>
      <p>{children}</p>
    </ProductTitleWrapper>
  );
};

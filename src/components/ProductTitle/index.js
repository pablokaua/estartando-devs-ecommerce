import { ProductTitleWrapper } from './styles';
import { ImArrowLeft2 } from 'react-icons/im';
import { Link } from 'react-router-dom';
import React from 'react';

<<<<<<< HEAD
export const ProductTitle = ({ productName }) => {
  return (
    <ProductTitleWrapper>
      <div>
        <Link to={'/'}>
          <ImArrowLeft2 />
        </Link>
      </div>
      <p>{productName}</p>
=======
export const ProductTitle = ({children}) => {
    return (
    <ProductTitleWrapper>
        <div>
            <Link to={'/'}>
                <ImArrowLeft2/>
            </Link>
        </div>
        <p>{children}</p>
>>>>>>> 87f8f15c51803ce5ca50ee42c8f8e1ed15a81412
    </ProductTitleWrapper>
  );
};

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategories } from '../../services/productService';
import { Header } from '../../components/Header';
import { ProductsList } from '../../components/ProductsList';
import { ProductTitle } from '../../components/ProductTitle';
import { ProductCategoryWrapper } from './styled';

export const ProductCategory = () => {
  const { path } = useParams();
  const [productsByCategory, setProductsByCategory] = useState([]);

  useEffect(() => {
    const categoryPromise = getCategories(path);

    categoryPromise
      .then(result => setProductsByCategory(result.data))
      .catch(error => console.error(error));
  }, [path]);

  return (
    <ProductCategoryWrapper>
      <Header />
      <ProductTitle>
        Todos os produtos de <span>{path}</span>
      </ProductTitle>
      <ProductsList products={productsByCategory} />
    </ProductCategoryWrapper>
  );
};

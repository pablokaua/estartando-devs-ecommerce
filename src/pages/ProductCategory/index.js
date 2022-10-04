<<<<<<< HEAD
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
=======
import {  useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCategories } from "../../services/productService";
import { Header } from "../../components/Header"
import { ProductsList } from "../../components/ProductsList"
import { ProductTitle } from "../../components/ProductTitle"
import { ProductCategoryWrapper } from "./styled"

export const ProductCategory = () => {
    const { path } = useParams();
    const [productsByCategory, setProductsByCategory] = useState([]);

    
    useEffect(() => {
        const categoryPromise = getCategories(path);
        
        categoryPromise
        .then(result => setProductsByCategory(result.data))
        .catch(error => console.error(error))
    }, [path])

    return (
        <ProductCategoryWrapper>
            <Header />
            <ProductTitle>Todos os produtos de <span>{path}</span></ProductTitle>
            <ProductsList products={productsByCategory}/>
        </ProductCategoryWrapper>
    )
}
>>>>>>> 87f8f15c51803ce5ca50ee42c8f8e1ed15a81412

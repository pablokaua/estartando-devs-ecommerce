import { createContext, useEffect, useState } from "react";
import { getProducts } from "../services/productService";

export const ProductContext = createContext();

export const ProductContextProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [productsBanner, setProductsBanner] = useState([])
    const categories = [
        {name: 'design ux', color: '#6C63FF', path: 'design'},
        {name: 'front-end', color: '#81CAA8', path: 'frontend'},
        {name: 'back-end', color: '#1EC0D6', path: 'backend'},
    ]


    useEffect(() => {
        const productsPromise = getProducts();

        productsPromise
        .then(result => {
            setProducts(result.data[1])
            setProductsBanner(result.data[0])
        })
        .catch(error => console.error(error))
    }, [])


    return (
        <ProductContext.Provider value={{products, productsBanner, categories}}>
            {children}
        </ProductContext.Provider>
    )
}
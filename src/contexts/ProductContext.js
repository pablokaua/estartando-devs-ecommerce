import { createContext, useEffect, useState } from "react";
import { getProducts } from "../services/productService";

export const ProductContext = createContext();

export const ProductContextProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [productsBanner, setProductsBanner] = useState([])

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
        <ProductContext.Provider value={{products, productsBanner}}>
            {children}
        </ProductContext.Provider>
    )
}
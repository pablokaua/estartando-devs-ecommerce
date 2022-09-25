import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ProductDetails } from "../../components/ProductDetails"
import { ProductTitle } from "../../components/ProductTitle"
import { getProduct } from "../../services/productService"
import { ProductWrapper } from "./styles"
import { Header } from "../../components/Header"


export const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    
    useEffect(() => {
        const productPromise = getProduct(id);
        
        productPromise
        .then(result => setProduct(result.data))
        .catch(error => console.error(error))
    }, [id])
    
    
    return (
        <ProductWrapper>
            <Header />
            <ProductTitle productName={product?.name}/>
            <img src={product?.images?.[1]} alt={product?.name} />
            <ProductDetails product={product}/>
        </ProductWrapper>
    )
}
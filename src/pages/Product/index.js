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
            <img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/418/872/products/flamengo-away-11-af92226cd19e1d654316313739918123-1024-1024.jpeg" alt="qualquer coisa" />
            <ProductDetails 
            productName={product?.name}
            productPrice={product?.price}
            productSizes={product?.sizes}
            productColors={product?.colors}
            productDescription={product?.description}/>
        </ProductWrapper>
    )
}
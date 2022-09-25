import { useContext } from "react"
import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext"
import { ProductsWrapper } from "./styles"
import { ProductCard } from "../../components/ProductCard"

export const ProductsList = () => {
    const { products } = useContext(ProductContext);

    return (
        <ProductsWrapper>
            <h2>Produtos</h2>
            <div>
            {products?.map(product => (
                <Link to={`/produtos/${product?.id - 1}`} key={product?.id}>
                    <ProductCard product={product}/> 
                </Link>
            ))}
            </div>
        </ProductsWrapper>
    )
}
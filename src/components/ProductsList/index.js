import { Link } from "react-router-dom";
import { ProductsWrapper } from "./styles"
import { ProductCard } from "../../components/ProductCard"

export const ProductsList = ({children, products}) => {

    return (
        <ProductsWrapper>
            {children}
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
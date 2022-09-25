import { ImageCardWrapper, ProductCardDetails, ProductCardName, ProductCardWrapper } from "./styles"
import { BsPlusLg } from 'react-icons/bs'

export const ProductCard = ({product}) => {
    return (
        <ProductCardWrapper>
            <ImageCardWrapper>
                <img src={product?.images[0]} alt={product?.name} />
            </ImageCardWrapper>

            <ProductCardName><p>{product?.name}</p></ProductCardName>
            
            <ProductCardDetails>
                <span>R${product?.price}</span>
                <button><BsPlusLg/></button>
            </ProductCardDetails>

        </ProductCardWrapper>
    )
}
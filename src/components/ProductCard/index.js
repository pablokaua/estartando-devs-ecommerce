import { ImageCardWrapper, ProductCardDetails, ProductCardName, ProductCardWrapper } from "./styles"
import { BsPlusLg } from 'react-icons/bs'

export const ProductCard = ({image, name, price}) => {
    return (
        <ProductCardWrapper>
            <ImageCardWrapper>
                <img src={image} alt={name} />
            </ImageCardWrapper>

            <ProductCardName><p>{name}</p></ProductCardName>
            
            <ProductCardDetails>
                <span>R${price}</span>
                <button><BsPlusLg/></button>
            </ProductCardDetails>

        </ProductCardWrapper>
    )
}
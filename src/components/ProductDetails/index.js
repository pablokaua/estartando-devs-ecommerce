import { Button } from "../Button"
import { AddBagWrapper, Color, ColorsProduct, DetailsWrapper, InfoWrapper, ProductDescription, SizeOption, SizeWrapper } from "./styles"

export const ProductDetails = ({ product }) => {
    return (
        <DetailsWrapper>
            <ColorsProduct>
                {product?.colors?.map(color => (
                    <Color key={color} bgColor={color}/>
                ))}
            </ColorsProduct>
            
            <InfoWrapper>
                <p>{product?.name}</p>
                <span>R${product?.price}</span>
            </InfoWrapper>

            <SizeWrapper>
                <p>Escolha seu tamanho</p>
                <SizeOption>
                {product?.sizes?.map(size => (
                    <div key={size}>{size}</div>
                ))}
                </SizeOption>
            </SizeWrapper>
            <AddBagWrapper>
                <Button description={'Adicionar a sacola'}/>
                <p>calcular a entrega</p>
            </AddBagWrapper>

            <ProductDescription>
                {product?.description}
            </ProductDescription>
        </DetailsWrapper>
    )
}
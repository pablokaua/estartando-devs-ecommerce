import { Button } from "../Button"
import { AddBagWrapper, Color, ColorsProduct, DetailsWrapper, InfoWrapper, ProductDescription, SizeOption, SizeWrapper } from "./styles"

export const ProductDetails = ({productName, productPrice, productColors, productSizes, productDescription }) => {
    return (
        <DetailsWrapper>
            <ColorsProduct>
                {productColors?.map(color => (
                    <Color key={color} bgColor={color}/>
                ))}
            </ColorsProduct>
            
            <InfoWrapper>
                <p>{productName}</p>
                <span>R${productPrice}</span>
            </InfoWrapper>

            <SizeWrapper>
                <p>Escolha seu tamanho</p>
                <SizeOption>
                {productSizes?.map(size => (
                    <div key={size}>{size}</div>
                ))}
                </SizeOption>
            </SizeWrapper>
            <AddBagWrapper>
                <Button description={'Adicionar a sacola'}/>
                <p>calcular a entrega</p>
            </AddBagWrapper>

            <ProductDescription>
                {productDescription}
            </ProductDescription>
        </DetailsWrapper>
    )
}
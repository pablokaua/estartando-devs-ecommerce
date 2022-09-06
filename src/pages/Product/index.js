import { Header } from "../../components/Header"
import { ProductTitle } from "../../components/ProductTitle"
import { ProductWrapper } from "./styles"

export const Product = () => {
    return (
        <ProductWrapper>
            <Header />
            <ProductTitle productName="qualque coisa"/>
        </ProductWrapper>
    )
}
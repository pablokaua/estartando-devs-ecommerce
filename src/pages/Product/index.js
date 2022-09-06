import { Header } from "../../components/Header"
import { ProductTitle } from "../../components/ProductTitle"
import { ProductWrapper } from "./styles"

fetch('/produtos/2').then(result  => result.json()).then(data => console.log(data))

export const Product = () => {
    return (
        <ProductWrapper>
            <Header />
            <ProductTitle productName="qualque coisa"/>
        </ProductWrapper>
    )
}
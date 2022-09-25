import { Header } from "../../components/Header"
import { ProductTitle } from "../../components/ProductTitle"
import { ProductCategoryWrapper } from "./styled"

export const ProductCategory = () => {
    return (
        <ProductCategoryWrapper>
            <Header />
            <ProductTitle />
        </ProductCategoryWrapper>
    )
}
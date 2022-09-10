import { ProductTitleWrapper } from "./styles"
import { ImArrowLeft2 } from "react-icons/im"

export const ProductTitle = ({productName}) => {
    return (
    <ProductTitleWrapper>
        <div><ImArrowLeft2/></div>
        <p>{productName}</p>
    </ProductTitleWrapper>
    )
}
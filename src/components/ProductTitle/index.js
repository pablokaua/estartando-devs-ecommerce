import { ProductTitleWrapper } from "./styles"
import { ImArrowLeft2 } from "react-icons/im"
import { Link } from "react-router-dom"

export const ProductTitle = ({productName}) => {
    return (
    <ProductTitleWrapper>
        <div>
            <Link to={'/'}>
                <ImArrowLeft2/>
            </Link>
        </div>
        <p>{productName}</p>
    </ProductTitleWrapper>
    )
}
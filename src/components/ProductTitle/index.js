import { ProductTitleWrapper } from "./styles"
import { FaArrowLeft } from 'react-icons/fa';

export const ProductTitle = (props) => {
    return (
    <ProductTitleWrapper>
        <div><FaArrowLeft/></div>
        <p>{props.productName}</p>
    </ProductTitleWrapper>
    )
}
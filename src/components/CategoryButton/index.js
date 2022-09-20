import { CategoryButtonWrapper } from "./styles"

export const CategoryButton = ({categoryName, color}) => {
    return (
        <CategoryButtonWrapper>
            <button style={{color: color}}>{categoryName}</button>
        </CategoryButtonWrapper>
    )
}
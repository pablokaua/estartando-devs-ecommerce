import { ButtonWrapper } from "./styles"

export const Button = ({description}) => {
    return (
    <ButtonWrapper>
        <button>{description}</button>
    </ButtonWrapper>
    )
}
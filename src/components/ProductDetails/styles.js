import styled from "styled-components";

export const DetailsWrapper = styled.div`
    width: 100%;
    padding: 24px 16px;
`

export const ColorsProduct = styled.div`
    display: flex;
    gap: 16px;
`

export const Color = styled.span`
    width: 24px;
    height: 24px;
    border-radius: 4px;
    cursor: pointer;
    background-color: ${props => props.bgColor};
`

export const InfoWrapper = styled.div`
    font-family: sans-serif;

    & > p {
        margin-top: 16px;
        margin-bottom: 7.5px;
        color:#939393;
        font-size: 16px;
    }

    & > span {
        color: #232323;
        font-weight: 700;
        font-size: 24px;
        margin-bottom: 21px;
    }
`

export const SizeWrapper = styled.div`
    font-family: sans-serif;
    margin-top: 21px;
    & > p {
        color: #939393;
        font-size: 14px;
    }
`

export const SizeOption = styled.div`
    display: flex;
    gap: 8px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;

    & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
    }
`

export const AddBagWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    & > p {
        color: #232323;
        font-size: 14px;
    }
`

export const ProductDescription = styled.div`
    margin-top: 32px;
    color: #939393;
    font-size: 16px;
    text-transform: capitalize;
`
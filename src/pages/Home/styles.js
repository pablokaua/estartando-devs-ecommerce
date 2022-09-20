import styled from "styled-components";

export const HomeWrapper = styled.div`
    width: 100%;
` 

export const CategoriesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 10px 16px 24px;
    font-family: sans-serif;
    width: 100%;
    margin: 0px auto 24px;

    & > h2 {
        margin: 24px 0;
        font-size: 16px;
    }
`

export const ProductsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
    width: 100%;

    & > h2 {
        font-size: 16px;
    }

    & > div {
        padding: 24px 10px;
        justify-content: center;
        gap: 23px 16px;
        display: flex;
        flex-wrap: wrap;
    }
`
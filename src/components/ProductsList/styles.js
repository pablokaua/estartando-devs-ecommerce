import styled from "styled-components";

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
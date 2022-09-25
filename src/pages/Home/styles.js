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

    & > a {
        width: 100%;
    }

    & > h2 {
        margin: 24px 0;
        font-size: 16px;
    }
`

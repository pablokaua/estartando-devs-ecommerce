import styled from "styled-components";

export const ProductCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 150px;
    max-width: 140px;
    box-shadow: 0px 3px 8px 0px rgba(0,0,0,0.2);
    border-radius: 12px;
    font-family: sans-serif;
    overflow: hidden;
`

export const ImageCardWrapper = styled.div`
    width: 100%;
    overflow: hidden;

    & > img {
        width: 100%;
        transform: scale(1.4) translateY(10%);
    }
`
export const ProductCardName = styled.div`
    height: 32px;
    width: fit-content;
    margin: 8px;
    overflow: hidden;
    
    & > p {
        color: #939393;
        overflow: hidden;
        font-size: 12px;
        font-weight: 300;
        text-overflow: ellipsis;
    }
`

export const ProductCardDetails = styled.div`
    display: flex;
    justify-content: space-between;

    & > span {
        margin: 0 0 7px 8px;
        font-size: 16px;
        font-weight: 600;
    }

    & > button {
        border: none;
        background-color: #81CAA8;
        border-radius: 12px 0px;
        color: black;
        padding: 8px;

        & > i {
            font-size: 16px;
            font-weight: bold;
        }
    }
`
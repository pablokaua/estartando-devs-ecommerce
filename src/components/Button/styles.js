import styled from "styled-components";

export const ButtonWrapper = styled.div`
    width: 100%;
    height: auto;
     
    & > button {
        width: 100%;
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;
        border: none;
        background-color: #81CAA8;
        color: #FFFFFF;
        padding: 16px 0;
        margin: 24px auto 8px auto;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
    }
`
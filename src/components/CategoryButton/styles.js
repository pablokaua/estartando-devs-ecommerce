import styled from "styled-components";

export const CategoryButtonWrapper = styled.div`
    width: 100%;
    height: auto;

    & > button {
        height: auto;
        width: 100%;
        padding: 19px 0;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/elite-devs/f_auto,c_limit,w_1920,q_auto/images/header-bg.webp);
        background-position: center;
        background-position-x: 1000px;
        border-radius: 12px;
        text-transform: uppercase;
        font-size: 16px;
    }
`
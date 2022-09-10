import styled from "styled-components"

export const HeaderWrapper = styled.header`
    display: flex;
    width: 100%;
    height: auto;
    justify-content: space-between;
    align-items: center;
    padding: 26px 17px;
    background-color: #232323;

    & > div {
        display: flex;
        align-items: center;
        font-size: 25px;
        width: fit-content;
        height: 35px;
        color: #FFFFFF;

        &:last-child {
            color: #81CAA8;
        }
    }
`

export const Logo = styled.div`
    display: flex;
    font-family: sans-serif;
    font-size: 30px;
    gap: 5px;
    height: 35px;

    & > p {
        color: #81CAA8;
    }

    & > img {
        height: 100%;
    }
`


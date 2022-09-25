import styled from "styled-components";

export const MenuWrapper = styled.div`
    position: absolute;
    right: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: ${({isVisible}) => isVisible ? 'flex' : 'none'};
    background-color: #F2F2F2;
    z-index: 99;
    
    
    & > nav {
        display: flex;
        flex-direction: column;
        margin-top: 32px;
        width: 100%;
    }
`

export const MenuLink = styled.a`
    font-family: sans-serif;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    width: 100%;

    & > div {
        width: 100%;
        padding: 14px 16px;
    }

    &:last-child > div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > svg {
            color: #81CAA8;

            &:hover {
                filter: brightness(0.8);
            }
        }
    }

    &:last-child {
        & > ul {
            display: ${({categoriesIsVisible}) => categoriesIsVisible ? 'initial' : 'none'};
            
            &  > a > li {
                padding: 10px 35px;
            }
        }
    }
`
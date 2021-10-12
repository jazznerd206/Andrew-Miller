import styled from "styled-components";

export const WelcomeContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        padding: 0 auto;
        margin: 0 auto;
    }
    `

export const WTitle = styled.div`
    position: relative;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    @media (max-width: 768px) {
        justify-content: flex-end;
    }
`

export const TitleMain = styled.h1`
    /* position: relative; */
    text-transform: uppercase;
    font-size: 2em;
    margin: 0 auto;
`

export const Title = styled.h3`
    padding: 0;
    margin: 0;
    font-variant: small-caps;
    font-weight: lighter;
`

export const TitleSub = styled.div`
    width: max-content;
    height: min-content;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, 100%, 0);
    @media (max-width: 768px) {
        bottom: -50%;
        left: 50%;
        transform: translate3d(-50%, 500%, 0);
    }
    transition: all .25s ease-in-out;
`

export const TitleContent = styled.p``

export const WContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    /* height: 100%; */
    flex: 1 1 auto;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
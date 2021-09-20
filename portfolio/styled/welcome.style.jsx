import styled from "styled-components";

export const WelcomeContainer = styled.div`
    height: 100%;
    width: 100%;
    margin: auto auto;
    padding: 5em auto;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        padding: 0 auto;
        margin: 0 auto;
        /* max-height: 100vh; */
    }
`

export const WTitle = styled.div`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
`

export const TitleMain = styled.h1`
    text-transform: uppercase;
    font-size: 2em;
    margin: 0 auto;
`

export const TitleSub = styled.h2`
    font-variant: small-caps;
    font-weight: lighter;
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
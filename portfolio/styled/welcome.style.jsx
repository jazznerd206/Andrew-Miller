import styled from "styled-components";

export const WelcomeContainer = styled.div`
    height: 100%;
    width: 100%;
    margin: auto auto;
    padding: 5em auto;
    display: flex;
    @media (max-width: 768px) {
        padding: 0;
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
    margin: 0 auto;
`

export const TitleSub = styled.h2``

export const TitleContent = styled.p``

export const WContent = styled.div`
    display: flex;
    width: 100%auto;
    height: 100%;
    flex: 1 1 auto;
`
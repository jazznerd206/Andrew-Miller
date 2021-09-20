import styled from "styled-components";

export const Container = styled.div`
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
    transition: all .25s ease-in-out;

`

export const GrabbyContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    flex: 0 1 auto;
    justify-content: center;
    align-items: flex-end;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const Grabby = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1em auto;
    cursor: pointer;
    pointer-events: all;
    transition: all .25s ease-in-out;
`

export const GrabbyText = styled.span`
    background: black;
    text-transform: uppercase;
    font-size: 2em;
    padding-bottom: .25em;
    border-bottom: 1px solid white;
    border-radius: 5px;
`

export const GrowyText = styled.span`
    background: black;
`

export const Growy = styled.div`
    width: 100%;
    height: 0%;
    max-height: 0vh;
    display: flex;
    visibility: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0 1 auto;
    /* &.active {
        max-height: 100%;
    } */
    transition: all .25s ease-in-out;
`

export const CloseClicker = styled.div`
    cursor: pointer;
    pointer-events: all;
    font-size: 2em;
    position: absolute;
    top: 0;
    right: 0;
    margin: 1em;
    color: white;
    z-index: 999;
`
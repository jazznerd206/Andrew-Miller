import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    justify-content: flex-end;
    align-items: flex-end;
`

export const Grabby = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex: 0 1 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1em auto;
    cursor: pointer;
    pointer-events: all;
`

export const GrabbyText = styled.span`
    background: black;
    text-transform: uppercase;
    font-size: 2em;
`

export const GrowyText = styled.span`
    background: black;
`

export const Growy = styled.div`
    width: 100%;
    height: 0%;
    max-height: 0%;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1 1 auto;
    &.active {
        max-height: 100%;
    }
    transition: all .25s ease-in-out;
`
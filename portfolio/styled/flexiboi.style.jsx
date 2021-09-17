import styled from "styled-components";

export const Container = styled.div`
    background: red;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    justify-content: flex-end;
    align-items: flex-end;
`

export const Grabby = styled.div`
    background: blue;
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
`

export const GrowyText = styled.span`
    background: black;
`

export const Growy = styled.div`
    width: 100%;
    height: 100%;
    max-height: 0%;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    &.active {
        max-height: 100%;
    }
`
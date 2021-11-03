import styled from "styled-components";
import { flash } from './keyframe.styled';

export const Container = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    justify-content: flex-start;
    align-items: center;
    transition: all .25s ease-in-out;

`

export const GrabbyContainer = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const Grabby = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: auto;
    text-align: center;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: .25em auto;
    cursor: pointer;
    pointer-events: all;
    transition: all .25s ease-in-out;
    box-shadow: ${props => props.open === true ? '0 4px 5px -5px gray;' : 'none'};
`

export const GrabbyText = styled.span`
    margin: 0;
    padding: 0;
    font-size: 2em;
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
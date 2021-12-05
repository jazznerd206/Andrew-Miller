import styled from "styled-components";

export const SpaceInvaders = styled.div`
    height: auto;
    width: auto;
    max-width: 500px;
    display: flex;
    flex-flow: column;
    flex: 0;
`

export const GameCanvas = styled.canvas`
    margin: 0 auto;
    background-color: rgba(0,0,0,.75);
`

export const Scoreboard = styled.div`
    height: 1.5em;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-flow: row;
    flex: 1;
    border: 1px solid orangered;
    background-color: rgba(0,0,0);
    color: white;
`

export const MessageBox = styled.div`
    max-height: 2em;
    min-height: 2em;
    width: 100%;
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    align-items: center;
    flex: 0;
    overflow: hidden;
    border: 1px solid orangered;
    background-color: rgba(0,0,0);
    color: white;
    
`

export const Message = styled.span`
    margin-left: .25em;
    width: 100%;
    display: flex;
    flex-flow: row;
    flex: 1;
    
`
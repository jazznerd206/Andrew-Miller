import styled from 'styled-components';

export const Snake = styled.div`
    margin: 0;
    padding: 0;
    height: fit-content;;
    max-height: 400px;
    width: fit-content;;
    max-width: 400px;
    display: flex;
    flex-flow: column;
    flex: 1;
`

export const ScoreBoard = styled.div`
margin: 0 auto;
    border: 1px solid;
    height: auto;
    width: 100%;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    flex: 0;
`

export const GameContainer = styled.div`
    margin: 0 auto;
    padding: 0;
    border: 1px solid;
    height: 400px;
    width: 400px;
    display: flex;
    flex-flow: row wrap;
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const GameBox = styled.div`
    margin: 0;
    padding: 0;
    width: 10px;
    height: 10px;
    font-size: 4px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`

export const SnakeBox = styled.div`
    background: black;
    margin: 0;
    padding: 0;
    width: 10px;
    height: 10px;
    font-size: 4px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`
import styled from 'styled-components';

export const GameContainer = styled.div`
    max-width: 318px;
    display: flex;
    flex-direction: column;
`

export const TicTacBox = styled.div`
    display: flex;
    flex-flow: row wrap;
    background: black;
`

export const TicTacItem = styled.div`
    margin: 2px;
    min-height: 100px;
    min-width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    border: 1px solid black;
    &:hover {
        border: 1px solid chartreuse;
    }
`

export const TicTacItemPlayer = styled.div`
    margin: 2px;
    min-height: 100px;
    min-width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid chartreuse;
`

export const TicTacItemComputer = styled.div`
    margin: 2px;
    min-height: 100px;
    min-width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
`
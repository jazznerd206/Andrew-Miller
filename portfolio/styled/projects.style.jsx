import styled from 'styled-components';

export const ProjectContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    /* flex: 1 1 auto; */
    justify-content: space-evenly;
    align-items: center;
    overflow: scroll;
`

export const CardTitle = styled.div`
`

export const CardLink = styled.a`
    /* text-decoration: none; */
    color: inherit;
    cursor: pointer;
    pointer-events: all;
`

export const CardContent = styled.div`
    color: black;
    display: none;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const CardFront = styled.div`
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const Card = styled.div`
    margin: 100px auto;
    background: rgb(100,100,100);
    min-width: 250px;
    height: 150px;
    border-radius: 10px;
    position: relative;
    transition: all .25s ease-in-out;
    &.active {
        height: 350px;
        margin: 0 auto;
        & ${CardFront} {
            display: none;
        }
        & ${CardContent} {
            display: flex;
        }
    }
    @media (max-width: 768px) {
        height: 350px;
        margin: 1em auto;
        & ${CardFront} {
            display: none;
        }
        & ${CardContent} {
            display: flex;
        }
    }
`

export const InnerCard = styled.div`
    background: rgb(200,200,200);
    border-radius: 8px;
    position: absolute;
    top: .25em;
    bottom: .25em;
    left: .25em;
    right: .25em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Summary = styled.span`
    text-align: center;
`

export const StackList = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-flow: row wrap;
`

export const StackItem = styled.li`
    margin: .25em;
    padding: 0;
`

export const ArrowBox = styled.span`
    height: auto;
    width: 100vw;
    display: flex;
    flex: 1 1 auto;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        display: none;
    }
`
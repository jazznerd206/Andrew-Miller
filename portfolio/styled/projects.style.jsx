import styled from 'styled-components';

export const ProjectContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    flex: 1;
    justify-content: space-evenly;
    align-items: center;
    overflow: scroll;
`

export const CardTitle = styled.div`
    text-align: center;
`

export const CardLink = styled.a`
    color: inherit;
    cursor: pointer;
    pointer-events: all;
    padding-bottom: 5px;
    font-weight: bolder;
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
    margin: 0 auto;
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

export const ProjectList = styled.div`
    max-width: 1000px;
    height: auto;
    margin: 1em auto;
    padding: 1em auto;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 1000px) {
        max-width: 95vw;
        margin: 0 auto;
    }
    @media (max-width: 768px) {
        margin: 0;
        padding: 0;
    }
`

export const Topic = styled.div`
    margin: .25em;
    padding: .25em;
    display: none;
    max-height: 0%;
    height: fit-content;
    width: fit-content;
    border: .5px solid;
    border-radius: 10px;
    transition: all .25s ease-in-out;
    @media (max-width: 768px) {
        display: flex;
    }
`

export const RepoFacts = styled.div`
    display: none;
    flex: 1;
    flex-flow: row wrap;
    align-items: flex-end;
    max-height: 0%;
    transition: all .25s ease-in-out;
    @media (max-width: 768px) {
        display: flex;
        align-items: center;
    }
`

export const Description = styled.p`
    display: none;
    margin: 0;
    padding: 0;
    font-size: xx-small;
    @media (max-width: 768px) {
        display: flex;
        font-size: large;
        justify-content: center;
        text-align: center;
    }
`

export const Dates = styled.div`
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-size: xx-small;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    @media (max-width: 768px) {
        flex-direction: row;
        width: 85vw;
        justify-content: space-evenly;
    }
    transition: all .25s ease-in-out;
`

export const ProjectItem = styled.div`
    margin: .25em 0;
    padding: 1em;
    width: 1000px;
    height: auto;
    border: 1px solid;
    border-radius: 0px;
    box-shadow: none;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition: all .25s ease-in-out;
    transform: scale(1);
    @media (min-width: 768px) {
        &:hover {
            transform: scale(1.05);
            border-radius: 10px;
            box-shadow: 0 0 5px rgb(0,0,0,.25);
            padding: 1em;
        }
        &:hover ${RepoFacts} {
            display: flex;
        }
        &:hover ${Topic} {
            display: flex;
        }
        &:hover ${Description} {
            display: flex;
            font-size: large;
        }
    }
    @media (max-width: 1000px) {
        max-width: 100vw;
    }
    @media (max-width: 768px) {
        margin: 0;
        padding: 0;
        flex-direction: column;
        border: none;
        padding-bottom: 10px;
        border-bottom: 1px solid;
    }
`

export const ItemBox = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    @media (max-width: 768px) {
        align-items: center;
    }
`

export const ItemCol = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex: 1;
    flex-flow: row wrap;
    @media (max-width: 768px) {
        flex-flow: row wrap;
        max-width: 85vw;
    }
`

export const Title = styled.div`
    display: flex;
    flex-direction: row;
`

export const RepoName = styled.h1`

`

export const Fact = styled.div`
    margin: 0 1em;
    padding: 0;
`


// export const Dates = styled.div`
//     margin: 0;
//     padding: 0;
//     height: 100%;
//     width: 100%;
//     font-size: xx-small;
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     align-items: flex-start;
//     @media (max-width: 768px) {
//         flex-direction: row;
//         width: 85vw;
//         justify-content: space-evenly;
//     }
// `
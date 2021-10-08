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

export const ProjectList = styled.div`
    width: 100%;
    max-width: 1000px;
    height: auto;
    margin: 3em;
    padding: 1em;
    list-style-type: none;
    display: flex;
    flex: 1;
    flex-direction: column;
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
    transition: all .25s ease-in-out;;
`

export const RepoFacts = styled.div`
    display: none;
    flex: 1;
    flex-flow: row wrap;
    align-content: flex-end;
    max-height: 0%;
    transition: all .25s ease-in-out;
`

export const Description = styled.p`
    display: none;
    margin: 0;
    padding: 0;
    font-size: xx-small;
`

export const ProjectItem = styled.div`
    margin: .25em;
    padding: 0;
    width: 100%;
    height: auto;
    border: none;
    border-radius: 0px;
    box-shadow: none;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition: all .25s ease-in-out;
    transform: scale(1);
    &:hover {
        transform: scale(1.1);
        /* border: 1px solid rgb(0,0,0,.25); */
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
`

export const ItemBox = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
`

export const ItemCol = styled.div`
    display: flex;
    flex: 1;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
`

// export const Topic = styled.div`
//     margin: .25em;
//     padding: .25em;
//     display: none;
//     height: fit-content;
//     width: fit-content;
//     border: .5px solid;
//     border-radius: 10px;
// `
// export const RepoFacts = styled.div`
//     display: none;
//     flex: 1;
//     flex-flow: row wrap;
//     align-content: flex-end;
// `

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


export const Dates = styled.span`
    height: 100%;
    font-size: xx-small;
    display: flex;
    flex-flow: column;
`

export const Languages = styled.span`
    display: flex;
    flex-flow: row;
    flex: 1;

`
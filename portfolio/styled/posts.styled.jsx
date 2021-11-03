import styled from 'styled-components';
import { ArrowDown } from '@styled-icons/evil';

export const Down = styled(ArrowDown)`
    size: ${props => props.size ? props.size : 48};
`

export const Posts = styled.div`
    width: 100%;
    max-width: 1000px;
    height: 100%;
    display: flex;
    flex-flow: column;
`

export const PostList = styled.ul`
    margin: 0 auto;
    padding: 0;
    width: 100%;
    max-width: 1000px;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`

export const Post = styled.li`
    margin: 0 auto;
    padding: 0;
    width: 100%;
    max-width: 756px;
    height: 100vh;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        max-width: 90vw;
        flex-flow: row wrap;
        justify-content: center;
        height: auto;
    }
`

export const PostTop = styled.div`
    width: 100%;
    max-width: 750px;
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 768px) {
        flex-flow: column;
        justify-content: center;
    }
`

export const PostTopLeft = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex: 0;
    flex-flow: row;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 768px) {
    }
`

export const Header = styled.div`
    margin: 2em auto;
    width: 100%;
    min-height: 90vh;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
        margin: 1em auto;
        flex-flow: row wrap;
    }
`

export const HeaderTitle = styled.h1`
    @media (max-width: 768px) {
        font-size: 24px;
    }
`

export const HeaderLinkList = styled.ul`
    margin: 0 auto;
    padding: 0;
    width: 100%;
    max-width: 756px;
    list-style-type: none;
    display: flex;
    flex: 1;
    @media (max-width: 768px) {
    }
`

export const HeaderLinkItem = styled.li`
    margin: 0 auto;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
`

export const HeaderLinkAnchor = styled.a`
    border-bottom: 0px solid;
    text-decoration: none;
    color: black;
    font-size: 24px;
    &:hover {
        border-bottom: .5px solid;
    }
    transition: all 5s ease-in-out;
`

export const HeaderLinks = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex: 1;
    flex-flow: row;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 0px 4px 4px -4px rgb(0,0,0,.25);
`

export const HeaderQuote = styled.div`
    margin: 0 auto;
    display: flex;
    flex-flow: column;
    max-width: 350px;
`
export const Quote = styled.p`
    font-style: italic;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

export const Attribution = styled.p`
    text-align: center;
    @media (max-width: 768px) {
        font-size: 10px;
    }
`

export const CopyTop = styled.span`
    font-size: large;
    font-weight: bold;
`

export const CopyBottom = styled.span`
    font-size: medium;
`

export const HeaderCopy = styled.div``

// export const Header = styled.div``

export const PostTitle = styled.p`
    font-size: 24px;
`

export const PostDate = styled.div`
    font-size: 16px;
    position: absolute;
    top: .25em;
    right: .25em;
    @media (max-width: 768px) {
        font-size: 12px;
        position: relative;
        top: 0;
    right: 0;
    }
`

export const PostLink = styled.a`
    font-size: 20px;
`

export const PostContent = styled.p`
    font-size: 20px;
`

export const PostImage = styled.img`
    margin: 0 auto;
`

export const PostTopRight = styled.div`
    position: relative;
    margin: 0;
    padding: 0;
    padding-left: 1em;
    height: 100%;
    width: 100%;
    display: flex;
    flex: 1;
    flex-flow: column;
    justify-content: space-evenly;
    align-items: flex-start;
`

export const PostBottom = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`


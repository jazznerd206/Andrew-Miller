import styled from 'styled-components';

export const Posts = styled.div``

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
    height: 100%;
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
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;   
`

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


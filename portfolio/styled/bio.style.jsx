import styled from 'styled-components';
import { ArrowLeft, ArrowRight, ScGithub, ScTwitter, ScInstagram } from '@styled-icons/evil'


export const BioContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: row;
    flex: 1;
    justify-content: space-between;
    align-items: center;
`

export const LeftArrow = styled(ArrowLeft)``

export const RightArrow = styled(ArrowRight)``

export const NavSubTitle = styled.h3`
    text-decoration: underline;
    text-decoration-color: transparent;
    transition: all .25s ease-in-out;
`

export const Navigation = styled.div`
    opacity: ${props => props.vis === true ? 1 : 0};
    pointer-events: ${props => props.vis === true ? 'all' : 'none'};
    width: 12.5vh;
    margin: 0 auto;
    text-align: center;
    height: 100%;
    flex-flow: column;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
    z-index: 99;
    transition: all .25s ease-in-out;
    &:hover {
        & ${NavSubTitle} {
            text-decoration-color: rgb(0,0,0);
        }
    }
`

export const Content = styled.ul`
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export const Slide = styled.li`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-around;
    align-items: center;
`

export const Column = styled.div`
    height: 100%;
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    flex: 1;
`

export const Title = styled.h1`
`

export const TextHolder = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: ${props => props.width};
    font-size: ${props => props.fs + 'px'};
    @media (max-width: 768px) {
        width: 100%;
    }
`

export const I = styled.i`
`

export const Text = styled.p``

export const IconTag = styled.div`
    display: none;
`

export const Github = styled(ScGithub)`
    position: relative;
    opacity: .5;
    &:hover {
        opacity: 1;
    }
    &:hover ${IconTag} {
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
    }
    transition: all .25s ease-in-out;
`

export const Instagram = styled(ScInstagram)`
    opacity: .5;
    &:hover {
        opacity: 1;
    }
    transition: all .25s ease-in-out;
`

export const Twitter = styled(ScTwitter)`
    opacity: .5;
    &:hover {
        opacity: 1;
    }
    transition: all .25s ease-in-out;
`


export const IconHolder = styled.div`
background: black;
`

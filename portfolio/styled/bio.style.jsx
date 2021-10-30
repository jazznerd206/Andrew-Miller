import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ScGithub, ScTwitter, ScInstagram, Envelope as E } from '@styled-icons/evil'


export const BioContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: row;
    flex: 1;
    justify-content: space-between;
    align-items: center;
`

export const OffPageLink = styled.a`
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: ${props => props.color ? props.color : 'black'};
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
    display: flex;
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
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export const Slide = styled.li`
    margin: 0;
    padding: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const Column = styled.div`
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    flex: 1;
    @media (max-width: 768px) {
        flex-direction: row wrap;
    }
`

export const Record = styled.img`
    width: 500px;
    @media (max-width: 768px) {
        width: 70vw;
    }
`

export const Title = styled.h1`
    font-style: italic;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`

export const TextHolder = styled.span`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: space-evenly;
    align-items: center;
    width: ${props => props.width};
    @media (max-width: 768px) {
        width: 100%;
    }
`

export const I = styled.i`
`

export const Text = styled.p`
    margin: 0;
    padding: 0;
    display: flex;
    flex: 1;
    font-size: 24px;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`

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

export const Email = styled(E)`
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

export const Resume = styled.a.attrs(props => ({
    href: props.document,
    target: '_blank',
    rel: 'noopener noreferrer'
}))`
    text-decoration: none;
    border-bottom: 0px solid;
    font-variant: small-caps;
    color: black;
    font-size: 48px;
    &:hover {
        border-bottom: .5px solid;
    }
    transition: all .25s ease-in-out;
    @media (max-width: 768px) {
        font-size: 24px;
    }
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
    display: flex;
    flex-flow: column;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        flex-flow: row;
    }
`

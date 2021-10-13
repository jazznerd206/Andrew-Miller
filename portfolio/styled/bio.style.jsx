import styled from 'styled-components';
import { ArrowLeft, ArrowRight } from '@styled-icons/evil'


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

export const NavSubTitle = styled.h3``

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
`

export const Content = styled.ul`
    height: 100%;
    width: 100%;
    position: relative;
`

export const Slide = styled.li`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
`
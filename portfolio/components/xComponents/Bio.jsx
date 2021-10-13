import React, { useState, useEffect, useRef } from 'react'
import { BioContainer, LeftArrow, RightArrow, Navigation, Content, NavSubTitle, Slide } from '../../styled/bio.style';
import SlideOne from './slides/SlideOne';
import SlideTwo from './slides/SlideTwo';
import SlideThree from './slides/SlideThree';
import SlideFour from './slides/SlideFour';


function Bio() {

    const slides = [
        {
            id: 0,
            name: 'record',
            content: SlideOne()
        },
        {
            id: 1,
            name: 'bio',
            content: SlideTwo()
        },
        {
            id: 2,
            name: 'dogs',
            content: SlideThree()
        },
        {
            id: 3,
            name: 'golf',
            content: SlideFour()
        },
    ]

    const [ active, setActive ] = useState(slides[0]);

    const moveSlide = direction => {
        if (direction === 0) {
            if (active.id === 0) return;
            else {
                setActive(slides[active.id - 1]);
            }
        } else if (direction === 1) {
            if (active.id === 4) return;
            else setActive(slides[active.id + 1]);
        }
    }

    
    return (
        <BioContainer>
            <Navigation vis={active.id >= 1 ? true : false}>
                <LeftArrow size={50} onClick={() => moveSlide(0)} />
                {active.id >= 1 ? <NavSubTitle>{slides[active.id - 1].name}</NavSubTitle> : null}
            </Navigation>
            <Content>
                <Slide>
                    {active.content}
                </Slide>
            </Content>
            <Navigation vis={active.id < slides.length - 1 ? true : false} >
                <RightArrow size={50}onClick={() => moveSlide(1)} />
                {active.id < slides.length - 1 ? <NavSubTitle>{slides[active.id + 1].name}</NavSubTitle> : null}
            </Navigation>
        </BioContainer>
    )
}

export default Bio

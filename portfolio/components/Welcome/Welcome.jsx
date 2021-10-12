import React, { useState, useEffect, useRef } from 'react';
import { useMousePosition } from '../../hooks/mousePosition';
import { elementPosition } from '../../hooks/elementPosition';
import { WelcomeContainer, WTitle, TitleMain, TitleSub, Title, TitleContent, WContent } from '../../styled/welcome.style';

function Welcome({active}) {

    const mover = useRef(null);
    const position = useMousePosition();

    const gaugeCloseness = (mouse, center, current) => {
        let width =  window.innerWidth;
        let height =  window.innerHeight;
        let radius = width / 5;
        if (mouse.x > center.middleX - radius && mouse.x < center.middleX) {
            if (mouse.y < center.middleY && mouse.y > center.middleY - radius) {
                current.style.top = `${center.middleY + radius < height ? center.middleY + radius : 0 + radius}px`;
            } else if (mouse.y > center.middleY && mouse.y < center.middleY + radius) {
                current.style.left = `${center.middleX + radius < width ? center.middleX + radius : 0 + radius}px`;
            }
        }
        if (mouse.x < center.middleX + radius && mouse.x > center.middleX) {
            if (mouse.y > center.middleY && mouse.y < center.middleY + radius) {
                current.style.top = `${center.middleY - radius > 0 ? center.middleY - radius : height - radius }px`;
            } else if (mouse.y < center.middleY && mouse.y > center.middleY - radius) {
                current.style.left = `${center.middleY - radius > 0 ? center.middleY - radius : width - radius}px`;
            }
        }
    }
   

    useEffect(() => {
        if (mover.current) {
            const elPos = elementPosition(mover.current);
            gaugeCloseness(position, elPos, mover.current);
        }
    }, [position, mover.current])

    if (active === true) {
        return null
    }
    else return (
        <WelcomeContainer>
            <WTitle>
                <TitleMain>
                    Andrew Miller
                </TitleMain>
                <TitleSub ref={mover}>
                    <Title>{`{ WEB DEVELOPER }`}</Title>
                </TitleSub>
            </WTitle>
        </WelcomeContainer>
    )
}

export default Welcome

import React, { useState, useEffect, useRef } from 'react';
import { useMousePosition } from '../../hooks/mousePosition';
import { elementPosition } from '../../hooks/elementPosition';
import { WelcomeContainer, WTitle, TitleMain, TitleSub, Title, TitleContent, WContent } from '../../styled/welcome.style';
import Snake from '../../games/Snake';

function Welcome({active}) {

    const mover = useRef(null);
    const position = useMousePosition();
    const messages = ['{ WEB DEVELOPER }', '{ CRITICAL THINKER }', '{ TESTER }', '{ ARTIST }', '{ SOFTWARE ENGINEER }'];
    const [ message, setMessage ] = useState(messages[0]);
    const [ gameActive, setGameActive ] = useState(false)

    const gaugeCloseness = (mouse, center, current) => {
        let width =  window.innerWidth;
        let height =  window.innerHeight;
        if (center.middleX < width / 2 && center.middleY < height / 2) {
            setMessage(messages[1]);
        } else if (center.middleX < width / 2 && center.middleY > height / 2) {
            setMessage(messages[2]);
        } else if (center.middleX > width / 2 && center.middleY < height / 2) {
            setMessage(messages[3]);
        } else if (center.middleX > width / 2 && center.middleY > height / 2) {
            setMessage(messages[4]);
        }
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

    const activateGame = (event) => {
        if (event.keyCode === 32) {
            console.log('space');
            setGameActive(true);
        } else if (event.keyCode === 81) {
            setGameActive(false);
        } else {
            console.log('event.keyCode :>> ', event.keyCode);
            console.log('neither space nor escape');
            return;
        }
    }

    useEffect(() => {
        setMessage(messages[0]);
        document.addEventListener('keyup', activateGame)
        // return () => document.removeEventListener('keydown', activateGame)
    }, [])

    if (active === true) {
        return null
    }
    else return (
        <WelcomeContainer>
            {!gameActive &&
                <WTitle>
                    <TitleMain>
                        Andrew Miller
                    </TitleMain>
                    {/* <TitleSub ref={mover}>
                        <Title>{message}</Title>
                    </TitleSub> */}
                    <TitleSub>
                        <Title>press space bar to play a game</Title>
                    </TitleSub>
                </WTitle>
            }
            {gameActive &&
                <Snake />
            }
        </WelcomeContainer>
    )
}

export default Welcome

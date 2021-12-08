import React, { useState, useEffect, useRef } from 'react';
import { GameContainer, TicTacItem, TicTacBox, TicTacItemPlayer, TicTacItemComputer } from '../styled/tictac.styled';
import { _CELL } from './tictacs/constants';


function TicTacToe() {

    const setBoxToPlayer = event => {
        event.preventDefault();
        const target = event.target.id;
        let copy = boxes;
        copy[target] = 'x'
        setBoxes(copy);
        setTurns(turns + 1);
    }

    const computerPlay = () => {
        let potentials = [];
        boxes.forEach((box, index) => {
            console.log('box :>> ', box);
            if (box === '') potentials.push(index);
        });
        let randomBox = Math.floor(Math.random() * potentials.length);
        console.log('computer turn ', potentials);
        boxes[potentials[randomBox]] = 'o'
        setBoxes(boxes);
        setTurns(turns + 1);
    }

    const [ boxes, setBoxes ] = useState([]);
    const [ turns, setTurns ] = useState(0);

    useEffect(() => {
        setBoxes(['', '', '', '', '', '', '', '', ''])
    }, [])

    useEffect(() => {
        if (turns % 2 === 1) {
            computerPlay();
        }
    }, [turns])

    return (
        <GameContainer>
            <TicTacBox>
                {boxes.map((box, index) => {
                    if (box === 'x') {
                        return (
                            <TicTacItemPlayer
                                key={index} 
                                id={index}
                            >
                                {box}
                            </TicTacItemPlayer>
                        )
                    }
                    else if (box === 'o') {
                        return (
                            <TicTacItemComputer
                                key={index} 
                                id={index}
                            >
                                {box}
                            </TicTacItemComputer>
                        )
                    }
                    else return (
                        <TicTacItem 
                            key={index} 
                            id={index}
                            onPointerDown={e => setBoxToPlayer(e)}
                        >
                            {box}
                        </TicTacItem>
                    )
                })}
            </TicTacBox>
        </GameContainer>
    )
}

export default TicTacToe

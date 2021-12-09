import React, { useState, useEffect, useRef } from 'react';
import { GameContainer, TicTacItem, TicTacBox, TicTacItemPlayer, TicTacItemComputer } from '../styled/tictac.styled';
import { _CELL, _WINS } from './tictacs/constants';


function TicTacToe() {

    const playerTurn = event => {
        event.preventDefault();
        const target = event.target.id;
        let boardCopy = boxes;
        boardCopy[target] = 'x'
        setPlayerSquares(playerSquares => [...playerSquares, parseInt(target) + 1]);
        setBoxes(boardCopy);
        setTurns(turns + 1);
    }

    const computerTurn = () => {
        let potentials = [];
        boxes.forEach((box, index) => {
            if (box === '') potentials.push(index);
        });
        let randomBox = Math.floor(Math.random() * potentials.length);
        boxes[potentials[randomBox]] = 'o'
        setComputerSquares(computerSquares => [...computerSquares, potentials[randomBox] + 1]);
        setBoxes([...boxes]);
        setTurns(turns + 1);
    }

    const calculatePotentialWins = (potentialWin) => {
        let potentialWins = [];
        _WINS.forEach(win => {
            potentialWin.forEach(box => {
                console.log('box :>> ', box);
                if (win.indexOf(box) !== -1 && !potentialWins.includes(win)) {
                    potentialWins.push(win)
                } else if (win.every(x => potentialWin.indexOf(x) !== -1)) {
                    setGameOver(true);
                    console.log('win ', potentialWin)
                }
            })
        })
        return potentialWins;
    }

    const [ gameOver, setGameOver ] = useState(false);
    const [ turns, setTurns ] = useState(0);
    const [ boxes, setBoxes ] = useState([]);
    const [ playerSquares, setPlayerSquares ] = useState([]);
    const [ computerSquares, setComputerSquares ] = useState([]);

    useEffect(() => {
        setBoxes(['', '', '', '', '', '', '', '', ''])
    }, [])

    useEffect(() => {
        if (turns % 2 === 1) {
            computerTurn();
        }
    }, [turns])

    useEffect(() => {
        let playerWin = calculatePotentialWins(playerSquares);
    }, [playerSquares])

    useEffect(() => {
        let computerWin = calculatePotentialWins(computerSquares);
    }, [computerSquares])

    if (gameOver === true) {
        return (
            <GameContainer>
                Game over
            </GameContainer>
        )
    }
    else return (
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
                            onPointerDown={e => playerTurn(e)}
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

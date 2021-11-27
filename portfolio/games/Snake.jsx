import React, { useState, useEffect, useRef } from 'react';
import { SnakeBox, GameBox, GameContainer, ScoreBoard, Snake as Container } from '../styled/snake.styled.jsx';

const _SIZE = [ 400, 400 ];
const _BOX_COUNT = 20
const _SNEGMENTS = [[9,9]]
const _SNAGMENT = [4,9]
const _DIRECTIONS = {
    38: [0, -1],
    40: [0, 1],
    37: [-1, 0],
    39: [1, 0]
};

function Snake() {

    const canvasRef = useRef();
    const newFrame = useRef();
    const prevFrame = useRef();
    const dirRef = useRef();
    const mouseRef = useRef();
    const [ mouse, setMouse ] = useState([_SNAGMENT]);
    const [ snake, setSnake ] = useState([_SNEGMENTS[0]]);
    const [gameOver, setGameOver] = useState(false);

    // movement controls
    const directional = event => {
        switch(event.keyCode) {
            case 32:
                if (newFrame.current === null) {
                    console.log('newFrame.current :>> ', newFrame.current);
                    startGame();
                    setGameOver(false);
                } else {
                    console.log('game in progress');
                    break;
                }
            case 37:
                dirRef.current = _DIRECTIONS[event.keyCode];
                break;
            case 38:
                dirRef.current = _DIRECTIONS[event.keyCode];
                break;
            case 39:
                dirRef.current = _DIRECTIONS[event.keyCode];
                break;
            case 40:
                dirRef.current = _DIRECTIONS[event.keyCode];
                break;
            default:
                break;
        }
    }

    // set game state
    useEffect(() => {
        dirRef.current = _DIRECTIONS[38]
        mouseRef.current = _SNAGMENT;
        setSnake([[]])
        window.addEventListener('keydown', directional)
        startGame();
        return () => {
            window.removeEventListener('keydown', directional)
            endGame();
        }
    }, [])

    // update game state
    useEffect(() => {
        if (gameOver === true) return;
        else {
            const context = canvasRef.current.getContext("2d");
            context.setTransform(_BOX_COUNT, 0, 0, _BOX_COUNT, 0, 0);
            context.clearRect(0, 0, window.innerWidth, window.innerHeight);
            context.fillStyle = "black";
            snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
            context.fillStyle = "grey";
            let currMouse = mouse[0];
            // context.fillRect(currMouse[0], currMouse[1], 1, 1);
            context.beginPath();
            context.arc(currMouse[0] + .5, currMouse[1] + .5, .25, 0, 2 * Math.PI, false);
            context.fillStyle = 'green';
            context.fill();
            context.strokeStyle = '#003300'
            context.stroke();
        }
    }, [snake, mouse, gameOver]);

    
    // game logic
    const startGame = () => {
        dirRef.current = _DIRECTIONS[38]
        mouseRef.current = _SNAGMENT;
        setSnake([_SNEGMENTS[0]]);
        newFrame.current = requestAnimationFrame(gameLoop);
        // console.log('newFrame.current :>> ', newFrame.current);
    }
    const endGame = () => {
        setGameOver(true);
        cancelAnimationFrame(newFrame.current);
        newFrame.current = null;
        return;
    }
    const gameLoop = (time) => {
        prevFrame.current = prevFrame.current === undefined ? time : prevFrame.current;
        let delta = time - prevFrame.current;
        if (delta > 125) {
            let temp = snake;
            let oldHead = temp[0];
            let newX = oldHead[0] + (dirRef.current[0] * .5)
            let newY = oldHead[1] + (dirRef.current[1] * .5)
            let newHead = [newX, newY]
            if (!checkBoundaries(newHead)) {
                endGame();
            } else if (checkSnake(newHead, snake)) {
                endGame();
            }
            let mouseCheck = checkMouse(newHead, mouse)
            if (mouseCheck === false) {
                temp.pop();
            }
            temp.unshift(newHead)
            setSnake([...temp]);
            prevFrame.current = time;
        }
        requestAnimationFrame(gameLoop);
    }

    const checkBoundaries = head => {
        if (head[0] < 0 || head[0] >= _BOX_COUNT || head[1] < 0 || head[1] >= _BOX_COUNT) return false
        else return true
    }

    const checkSnake = (head, oldSnake) => {
        if (snake.length === 1) return false;
        else {
            for (let seg of snake) {
                if (head[0] === seg[0] && head[1] === seg[1]) return true;
            }
            return false;
        }
    }

    const checkMouse = (head) => {
        let currMouse = mouse[0];
        if (Math.floor(head[0]) === currMouse[0] && Math.floor(head[1]) === currMouse[1]) {
            let newX = Math.floor(Math.random() * _BOX_COUNT);
            let newY = Math.floor(Math.random() * _BOX_COUNT);
            let array = [ newX, newY ]
            mouse.unshift(array);
            return true
        }
        else return false;
    }

    const moveMouse = () => {
        let newX = Math.floor(Math.random() * _BOX_COUNT);
        let newY = Math.floor(Math.random() * _BOX_COUNT);
        let array = [ newX, newY ]
        console.log('moving mouse to ' + array)
        mouseRef.current = array;
    }

    return (
        <Container>
            {gameOver === false &&
                <>
                    <ScoreBoard>
                        <div>Q to quit  </div>
                        <div>Score: {snake.length}</div>
                    </ScoreBoard>
                    <canvas
                        style={{ border: "1px solid black" }}
                        ref={canvasRef}
                        width={`${_SIZE[0]}px`}
                        height={`${_SIZE[1]}px`}
                    />
                </>    
            }
            {gameOver === true && 
                <>
                    <ScoreBoard>
                        <div>Q to quit</div>
                        <div>GAME OVER</div>
                    </ScoreBoard>
                    <GameContainer>
                        Score: {snake.length}
                    </GameContainer>
                </>
            }
        </Container>
    )
}

export default Snake

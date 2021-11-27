import React, { useState, useEffect, useRef } from 'react';
import { Player, Enemy } from './space_assets/index.js';
import { _DIRECTIONS } from './space_assets/constants.js';


function BuildCanvas() {

    const directional = event => {
        switch(event.keyCode) {
            case 37:
                playerDirection.current = _DIRECTIONS[event.keyCode];
                break;
            // case 38:
            //     playerDirection.current = _DIRECTIONS[event.keyCode];
            //     break;
            case 39:
                playerDirection.current = _DIRECTIONS[event.keyCode];
                break;
            // case 40:
            //     playerDirection.current = _DIRECTIONS[event.keyCode];
            //     break;
            case 70:
                fireRef.current = true
                // break;
            default:
                break;
        }
    }
    const antiDirectional = event => {
        switch(event.keyCode) {
            case 37:
                playerDirection.current = null
                break;
            // case 38:
            //     playerDirection.current = null
            //     break;
            case 39:
                playerDirection.current = null
                break;
            // case 40:
            //     playerDirection.current = null
            //     break;
            case 70:
                fireRef.current = null
                break;
            default:
                break;
        }
    }
    const canvasRef = useRef();
    const playerRef = useRef();
    const playerDirection = useRef();
    const fireRef = useRef();
    let animRef = useRef();
    const [ playerPosition, setPlayerPosition ] = useState([])
    const [ bolts, setBolts ] = useState([])
    const [ enemies, setEnemies ] = useState([])
    let barracks = [];

    // ON PAGE LOAD, build game and add keystroke listeners
    useEffect(() => {
        let ranks = 5;
        let perRank = 10;
        for (let i = 0; i < ranks; ++i) {
            for (let j = 0; j < perRank; ++j) {
                let eWidth = 10;
                let eY = i % 2 === 0 ? i * eWidth : i * eWidth + 10;
                let eHeight = 10;
                let eX = canvasRef.current.width / perRank * j;
                let newEnemy = new Enemy(eX, eY, eWidth, eHeight);
                barracks.push(newEnemy)
            }
        }
        let newPlayer = new Player("Andrew", 40, 20, canvasRef.current.width / 2 - 20, canvasRef.current.height - 20);
        playerRef.current = newPlayer.init();
        setPlayerPosition(playerRef.current.position);
        window.addEventListener('keydown', directional);
        window.addEventListener('keyup', antiDirectional);
        animRef.current = requestAnimationFrame(gameLoop);
        return () => {
            window.removeEventListener('keydown', directional);
            window.addEventListener('keyup', antiDirectional);
            cancelAnimationFrame(animRef.current);
        }
    }, [])

    // DRAW CANVAS
    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        context.fillStyle = "black";
        if (playerRef.current) {
            context.fillRect(playerPosition[0], playerPosition[1], playerRef.current.width, playerRef.current.height)
        }
        context.fillStyle = "red";
        if (bolts) {
            bolts.map(bolt => {
                context.fillRect(bolt.position[0], bolt.position[1], bolt.width, bolt.height)
            })
        }
        context.fillStyle = "grey";
        enemies.forEach(enemy => {
            context.fillRect(enemy.position[0], enemy.position[1], enemy.width, enemy.height)
        })
    }, [playerRef, playerPosition, bolts, enemies])

    // RENDER LOOP
    const gameLoop = () => {
        if (animRef.current) {
            let boltsCopy = bolts;
            if (fireRef.current === true) {
                let newBolt = playerRef.current.fireLaser()
                    boltsCopy.push(newBolt);
                }
                boltsCopy.forEach(bolt => {
                    let newPosition = [bolt.position[0] + bolt.direction[0], bolt.position[1] + bolt.direction[1]]
                    bolt.position = newPosition;
                })
                let barracksCopy = barracks;
                if (barracksCopy.length) {
                    barracksCopy.forEach((enemy, index) => {
                        let collisionCheck = enemy.checkForCollision(boltsCopy)
                        if (collisionCheck === false) {
                            enemy.shiftX(enemy.speed)
                            if (enemy.position[0] >= canvasRef.current.width - enemy.width && enemy.speed > 0 
                            || enemy.position[0] <= 0 && enemy.speed < 0) {
                                enemy.shiftY(enemy.height)
                            }
                        } else  {
                            barracksCopy.splice(index, 1);
                        }
                    })
                }
                barracks = barracksCopy;
                if (playerRef.current) {
                    let oldPosition = playerRef.current.position;
                    if (playerDirection.current) {
                        setPlayerPosition(playerRef.current.updatePosition(oldPosition, playerDirection.current));
                    }
                }
                setBolts([...boltsCopy]);
                setEnemies([...barracksCopy]);
                requestAnimationFrame(gameLoop);
            }
    }
    return (
        <canvas
            ref={canvasRef}
            id="space_invaders" 
            width="360" 
            height="400" 
            style={{border: '1px solid black'}}
        />
    )
}

function SpaceInvaders() {
    return (
        <BuildCanvas 

        />
    )
}

export default SpaceInvaders

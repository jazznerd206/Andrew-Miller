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
    const [ playerPosition, setPlayerPosition ] = useState([])
    const [ bolts, setBolts ] = useState([])
    const [ enemies, setEnemies ] = useState([])

    // ON PAGE LOAD, build game and add keystroke listeners
    useEffect(() => {
        let newPlayer = new Player("Andrew", 40, 20, canvasRef.current.width / 2 - 20, canvasRef.current.height - 20);
        playerRef.current = newPlayer.init();
        setPlayerPosition(playerRef.current.position);
        let ranks = 5;
        let perRank = 10;
        let barracks = [];
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
        setEnemies(barracks);
        window.addEventListener('keydown', directional);
        window.addEventListener('keyup', antiDirectional);
        let gLoop = requestAnimationFrame(gameLoop);
        return () => {
            window.removeEventListener('keydown', directional);
            window.addEventListener('keyup', antiDirectional);
            cancelAnimationFrame(gLoop);
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
        enemies.forEach(enemies => {
            context.fillRect(enemies.position[0], enemies.position[1], enemies.width, enemies.height)
        })
    }, [playerRef, playerPosition, bolts, enemies])

    // RENDER LOOP
    const gameLoop = () => {
        let boltsCopy = bolts;
        if (fireRef.current === true) {
            let newBolt = playerRef.current.fireLaser()
            boltsCopy.push(newBolt);
        }
        else { 
            boltsCopy.forEach(bolt => {
                let newPosition = [bolt.position[0] + bolt.direction[0], bolt.position[1] + bolt.direction[1]]
                bolt.position = newPosition;
            })
        }
        setBolts([...boltsCopy])
        enemies.forEach(enemy => {
            console.log('enemy => ', enemy)
        })
        if (playerRef.current) {
            let oldPosition = playerRef.current.position;
            if (playerDirection.current) {
                setPlayerPosition(playerRef.current.updatePosition(oldPosition, playerDirection.current));
            }
        }
        requestAnimationFrame(gameLoop);
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

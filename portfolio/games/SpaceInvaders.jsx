import React, { useState, useEffect, useRef } from 'react';
import { Player, Enemy } from './space_assets/index.js';
import { _DIRECTIONS, _ENEMIES } from './space_assets/constants.js';


function BuildCanvas() {

    // state holders
    const canvasRef = useRef();
    const playerRef = useRef();
    const playerDirection = useRef();
    const fireRef = useRef();
    const shiftCount = useRef();
    let animRef = useRef();
    const [ playerPosition, setPlayerPosition ] = useState([])
    const [ bolts, setBolts ] = useState([])
    const [ enemies, setEnemies ] = useState([])
    let barracks = [];

    // keystrokes
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
    const buildBarracks = (target, ranks) => {
        let barracksWidth = canvasRef.current.width * .8
        let bX = canvasRef.current.width / 2 - barracksWidth / 2 
        let soldiers = 10, commanders = 4, bosses = 2;
        for (let i = 0; i < ranks; ++i) {
            let newRank = [], j = 0;
            if (i < ranks / 2) {
                for (j; j < soldiers; ++j) {
                    let eW = _ENEMIES.soldier.width
                    let eH = _ENEMIES.soldier.height
                    let eX = Math.floor((barracksWidth / soldiers * (j + 1)) + (barracksWidth / soldiers));
                    let eY = Math.floor((i * eH * 3) + canvasRef.current.height / 5);
                    let newEnemy = new Enemy(eX, eY, eW, eH);
                    newRank.push(newEnemy)
                }
            } else {
                for (j; j < commanders; ++j) {
                    let eW = _ENEMIES.commander.width
                    let eH = _ENEMIES.commander.height
                    let eX = Math.floor((barracksWidth / commanders * (j + 1)))
                    let eY = Math.floor((i - ranks / 2) * eH * 2);
                    let newEnemy = new Enemy(eX, eY, eW, eH);
                    newRank.push(newEnemy)
                }
            }
            target.push(newRank);
        }
    }
    useEffect(() => {
        let newPlayer = new Player("Andrew", 40, 20, canvasRef.current.width / 2 - 20, canvasRef.current.height - 20);
        playerRef.current = newPlayer.init();
        setPlayerPosition(playerRef.current.position);
        buildBarracks(barracks, 5);
        window.addEventListener('keydown', directional);
        window.addEventListener('keyup', antiDirectional);
        animRef.current = requestAnimationFrame(gameLoop);
        return () => {
            window.removeEventListener('keydown', directional);
            window.addEventListener('keyup', antiDirectional);
            cancelAnimationFrame(animRef.current);
        }
    }, [])

    // update game state on canvas
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
        if (enemies.length) {
            enemies.forEach(rank => {
                rank.forEach(enemy => {
                    context.fillRect(enemy.position[0], enemy.position[1], enemy.width, enemy.height)
                })
            })
        }
    }, [playerRef, playerPosition, bolts, enemies])

    // game logic
    const gameLoop = () => {
        if (animRef.current) {
            let boltsCopy = bolts;
            if (fireRef.current === true) {
                let newBolt = playerRef.current.fireLaser()
                boltsCopy.push(newBolt);
            }
            fireRef.current = false;
            boltsCopy.forEach(bolt => {
                let newPosition = [bolt.position[0] + bolt.direction[0], bolt.position[1] + bolt.direction[1]]
                bolt.position = newPosition;
            })
            let barracksCopy = barracks;
            if (barracksCopy.length) {
                barracksCopy.forEach(rank => {
                    rank.forEach(enemy => {
                        // console.log(enemy);
                    })
                })
                // return;
                // barracksCopy.forEach((enemy, index) => {
                //     let collisionCheck = enemy.checkForCollision(boltsCopy)
                //     if (collisionCheck === false) {
                //         enemy.shiftX(enemy.speed)
                //         if (enemy.position[0] >= canvasRef.current.width - enemy.width && enemy.speed > 0 
                //         || enemy.position[0] <= 0 && enemy.speed < 0) {
                //             enemy.shiftY(enemy.height)
                //         }
                //     } else  {
                //         barracksCopy.splice(index, 1);
                //     }
                // })
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

    // html
    return (
        <canvas
            ref={canvasRef}
            id="space_invaders" 
            width="500" 
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

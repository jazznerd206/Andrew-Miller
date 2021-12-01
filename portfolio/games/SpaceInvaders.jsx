import React, { useState, useEffect, useRef } from 'react';
import { Player, Enemy } from './space_assets/index.js';
import { _DIRECTIONS, _ENEMIES, _WIDTH, _HEIGHT, _ENEMY_BOX_END, _ENEMY_BOX_START} from './space_assets/constants.js';


function BuildCanvas() {

    /**
     * STATE INITIALIZERS
    */
    const canvasRef = useRef();
    const playerRef = useRef();
    const playerDirection = useRef();
    const fireRef = useRef();
    const shiftCount = useRef();
    let animRef = useRef();
    const [ playerPosition, setPlayerPosition ] = useState([])
    const [ bolts, setBolts ] = useState([]);
    const [ eBolts, setEBolts ] = useState([]);
    const [ enemies, setEnemies ] = useState([])
    let barracks = [];

    /**
     * KEYSTROKES
     * directional => key down
     * antidirectional => key up
    */
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
    /**
     * 
     * STATE CONTROL FUNCTIONS
     * 
     * 1. buildBarracks() => builds initial state of barracks
     * 2. addRank(enemyType, count) => adds rank of enemy of specified type to barracks
     * 
    */
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
                    let newEnemy = new Enemy(eX, eY, eW, eH, _ENEMIES.soldier.fire, _ENEMIES.soldier.type);
                    newRank.push(newEnemy)
                }
            } else {
                for (j; j < commanders; ++j) {
                    let eW = _ENEMIES.commander.width
                    let eH = _ENEMIES.commander.height
                    let eX = Math.floor((barracksWidth / commanders * (j + 1)))
                    let eY = Math.floor((i - ranks / 2) * eH * 2);
                    let newEnemy = new Enemy(eX, eY, eW, eH, _ENEMIES.commander.fire, _ENEMIES.commander.type);
                    newRank.push(newEnemy)
                }
            }
            target.push(newRank);
        }
    }
    const addRank = (enemyType, count) => {
        console.log('enemyType, count :>> ', enemyType, count);
        let newRank = [];
        for (let i = 0; i < count; ++i) {
            // instantiate new enemy
            // push new enemy
        }
        barracks.push(newRank);
    }
    /**
     * GAME INSTANTIATOR
     * create player, assign to ref
     * create enemy barracks
     * add event listeners
     * init requestAnimationFrameL loop
    */
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

    /**
     * RENDER CURRENT GAME STATE TO CANVAS
    */
    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        context.fillStyle = "black";
        // render player
        if (playerRef.current) {
            context.fillRect(playerPosition[0], playerPosition[1], playerRef.current.width, playerRef.current.height)
        }
        context.fillStyle = "red";
        // render player bolts
        if (bolts) {
            bolts.map(bolt => {
                context.fillRect(bolt.position[0], bolt.position[1], bolt.width, bolt.height)
            })
        }
        // render enemy bolts
        if (eBolts) {
            eBolts.map(bolt => {
                context.fillRect(bolt.position[0], bolt.position[1], bolt.width, bolt.height)
            })
        }
        context.fillStyle = "grey";
        // render enemies
        if (enemies.length) {
            enemies.forEach(rank => {
                rank.forEach(enemy => {
                    context.fillRect(enemy.position[0], enemy.position[1], enemy.width, enemy.height)
                })
            })
        }
    }, [playerRef, playerPosition, bolts, enemies])

    /**
     * GAME LOGIC
    */
    const gameLoop = () => {
        if (animRef.current) {
            // check bolts fired by player for collisions
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
            // check bolts fired by enemies for collisions
            let eBoltsCopy = eBolts;
            if (eBoltsCopy.length) {
                console.log(`eBolts`, eBolts)
                for (let i = 0; i < eBolts.length; ++i) {
                    if (eBolts[i].position[1] > canvasRef.current.height) {
                        eBoltsCopy.slice(i, 1);
                    } else {
                        let newPosition = [eBolts[i].position[0] + eBolts[i].direction[0], eBolts[i].position[1] + 3]
                        eBolts[i].position = newPosition;
                    }
                }
            }
            // update enemy positions
            let barracksCopy = barracks;
            if (barracksCopy.length) {
                barracksCopy.forEach(rank => {
                    rank.forEach(enemy => {
                        // fire ze enemy lasers
                        let laser = enemy.fireLaser();
                        if (laser === false) {;}
                        else eBolts.push(laser);
                        // check for collisions
                        let collisionCheck = enemy.checkForCollision(boltsCopy);
                        console.log('coll :>> ', collisionCheck);
                        if (collisionCheck === false) {
                            // update X
                            enemy.shiftX(enemy.speed);
                        }
                    })
                    // update Y
                    let first = rank[0];
                    let last  = rank[rank.length - 1];
                    if (last.position[0] >= _ENEMY_BOX_END - last.width && last.speed > 0 
                    || first.position[0] <= _ENEMY_BOX_START && first.speed < 0) {
                        rank.forEach(enemy => {
                            enemy.shiftY(enemy.height)
                        })
                    }
                })
            }
            barracks = barracksCopy;
            // update player position
            if (playerRef.current) {
                let oldPosition = playerRef.current.position;
                if (playerDirection.current) {
                    setPlayerPosition(playerRef.current.updatePosition(oldPosition, playerDirection.current));
                }
            }
            // reset game state
            setBolts([...boltsCopy]);
            setEnemies([...barracksCopy]);
            setEBolts([...eBoltsCopy]);
            requestAnimationFrame(gameLoop);
        }
    }

    /**
     * HTML
    */
    return (
        <canvas
            ref={canvasRef}
            id="space_invaders" 
            width={_WIDTH}
            height={_HEIGHT}
            style={{border: '1px solid black'}}
        />
    )
}

/**
 * WRAPPER
*/
function SpaceInvaders() {
    return (
        <BuildCanvas 

        />
    )
}

/**
 * EXPORT
*/
export default SpaceInvaders

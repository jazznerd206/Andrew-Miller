import React, { useState, useEffect, useRef } from 'react';
import { Player, Enemy, Shield, Laser, Starfield } from './space_assets/index.js';
import { _DIRECTIONS, _ENEMIES, _WIDTH, _HEIGHT, _ENEMY_BOX_END, _ENEMY_BOX_START} from './space_assets/constants.js';
import { EndGameCanvas, Message, GameCanvas, MessageBox, Scoreboard, SpaceInvaders as Container } from '../styled/space.styled.jsx'

function BuildCanvas() {

    /**
     * STATE INITIALIZERS
    */
    let animRef = useRef();
    const canvasRef = useRef();
    const playerRef = useRef();
    const fireRef = useRef();
    const playerDirection = useRef();
    const score = useRef();
    const shiftCount = useRef();
    const [ messages, setMessages ] = useState('')
    const [ gameOver, setGameOver ] = useState(false);
    const [ playerPosition, setPlayerPosition ] = useState([])
    const [ bolts, setBolts ] = useState([]);
    const [ eBolts, setEBolts ] = useState([]);
    const [ enemies, setEnemies ] = useState([]);
    const [ barriers, setBarriers ] = useState([]);
    const [ stars, setStars ] = useState([]);
    let barracks = [];
    let shields = [];

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
     * MESSAGE FACTORY
     */
    const createMessage = message => {
        setMessages(message);
    }
    /**
     * 
     * STATE CONTROL FUNCTIONS
     * 
     * 1. buildBarracks() => builds initial state of barracks
     * 2. addRank(enemyType, count) => adds rank of enemy of specified type to barracks
     * 3. buildShields() => builds initial player barriers
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
        setMessages(messages => [...messages, 'Enemies detected.']);
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
    const buildShields = (target, count) => {
        let column = canvasRef.current.width / count;
        for (let i = 0; i < count; ++i) {
            let sx = ((i + 1) * column) - ((column / 2));
            let sy = 300;
            let newShield = new Shield(sx, sy)
            target.push(newShield);
        }
        createMessage('Shields built.')
    }
    /**
     * GAME INSTANTIATOR
     * create player, assign to ref
     * create enemy barracks
     * add event listeners
     * init requestAnimationFrame loop
    */
    useEffect(() => {
        let newField = new Starfield(50, 360, 500)
        setStars(newField.field);
        shiftCount.current = 0;
        score.current = 0;
        let newPlayer = new Player("Andrew", 40, 20, canvasRef.current.width / 2 - 20, canvasRef.current.height - 20);
        playerRef.current = newPlayer.init();
        setPlayerPosition(playerRef.current.position);
        buildBarracks(barracks, 5);
        buildShields(shields, 4)
        createMessage('Game has begun. Best of luck...')
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
        if (gameOver === true) {
            return;
        } else {
            const context = canvasRef.current.getContext("2d");
            context.clearRect(0, 0, window.innerWidth, window.innerHeight);
            // render stars
            context.fillStyle = "white";
            stars.forEach(star => {
                context.fillRect(star.x, star.y, star.width, star.height);
            })
            context.fillStyle = "lawngreen";
            // render player
            if (playerRef.current) {
                context.fillRect(playerPosition[0], playerPosition[1], playerRef.current.width, playerRef.current.height)
            }
            // render shields
            if (barriers.length) {
                barriers.forEach((shield, index) => {
                    context.fillStyle = index % 2 === 0 ? 'steelblue' : 'lightblue'
                    context.fillRect(shield.position[0], shield.position[1], shield.width, shield.height);
                })
            }
            // render player bolts
            if (bolts) {
                bolts.forEach((bolt, index) => {
                    context.fillStyle = bolt.color;
                    context.fillRect(bolt.position[0], bolt.position[1], bolt.width, bolt.height)
                })
            }
            // render enemy bolts
            context.fillStyle = 'red';
            if (eBolts) {
                eBolts.forEach(bolt => {
                    context.fillStyle = bolt.color;
                    context.fillRect(bolt.position[0], bolt.position[1], bolt.width, bolt.height)
                })
            }
            // render enemies
            if (enemies.length) {
                enemies.forEach((rank, index) => {
                    context.fillStyle = index % 2 === 0 ? "orangered" : "red";
                    rank.forEach(enemy => {
                        context.fillRect(enemy.position[0], enemy.position[1], enemy.width, enemy.height)
                    })
                })
            }
        }
    }, [playerRef, playerPosition, bolts, enemies, barriers, eBolts, gameOver])

    /**
     * GAME LOGIC
    */
    const gameLoop = () => {
        if (shiftCount.current % 5 === 0) {
            console.log('shiftcount => ', shiftCount.current)
        }
        if (animRef.current) {
            // player fire laser and update bolt positions
            let boltsCopy = bolts;
            if (fireRef.current === true) {
                let newBolt = playerRef.current.fireLaser()
                boltsCopy.push(newBolt);
            }
            fireRef.current = false;
            for (let i = 0; i < boltsCopy.length; ++i) {
                let newPosition = [boltsCopy[i].position[0] + boltsCopy[i].direction[0], boltsCopy[i].position[1] + boltsCopy[i].direction[1]]
                boltsCopy[i].position = newPosition;
            }
            // check bolts fired by enemies for collisions
            let eBoltsCopy = eBolts;
            if (eBoltsCopy.length) {
                for (let i = 0; i < eBolts.length; ++i) {
                    if (eBolts[i].position[1] > canvasRef.current.height) {
                        eBoltsCopy.splice(i, 1);
                    } else {
                        let collisionCheck = playerRef.current.checkForCollision(eBoltsCopy[i].getCollisionMap());
                        if (collisionCheck === false) {
                            let newPosition = [eBolts[i].position[0] + eBolts[i].direction[0], eBolts[i].position[1] + -eBolts[i].direction[1]]
                            eBolts[i].position = newPosition;
                        } else {
                            createMessage('Player hit by enemy.... ☠️☠️☠️')
                            eBoltsCopy.splice(i, 1);
                        }
                    }
                }
            }
            // update enemy positions
            let barracksCopy = barracks;
            if (barracksCopy.length) {
                barracksCopy.forEach((rank, index) => {
                    if (rank.length === 0) barracksCopy.splice(index, 1);
                    rank.forEach((enemy, index) => {
                        // fire ze enemy lasers
                        let laser = enemy.fireLaser();
                        if (laser === false) {;}
                        else eBolts.push(laser);
                        // check for collisions
                        let collisionCheck = enemy.checkForCollision(boltsCopy);
                        if (collisionCheck.hit === false) {
                            // update X
                            enemy.shiftX(enemy.speed);
                        } else {
                            score.current += 100;
                            rank.splice(index, 1);
                            createMessage('Enemy destroyed!! 🔥🔥🔥')
                        }
                    })
                    // update Y
                    let first = rank[0];
                    let last  = rank[rank.length - 1];
                    if (first || last) {
                        if (last.position[0] >= _ENEMY_BOX_END - last.width && last.speed > 0 
                        || first.position[0] <= _ENEMY_BOX_START && first.speed < 0) {
                            ++shiftCount.current;
                            rank.forEach(enemy => {
                                enemy.shiftY(enemy.height)
                            })
                        } else if (first.position[1] > _HEIGHT - 20 || last.position[1] > _HEIGHT - 20) {
                            createMessage("Enemy breach. You lose.")
                            setGameOver(true);
                        }
                    }
                })
            } else {
                setMessages('All enemies destroyed. Congratulations 👻👻👻')
                setGameOver(true);
            }
            barracks = barracksCopy;
            // check for shield collisions with player and enemy bolts
            let shieldCopy = shields;
            let playerBoltsToShields = boltsCopy;
            let enemyBoltsToShields = eBoltsCopy;
            if (shieldCopy.length) {
                shieldCopy.forEach(shield => {
                    let playerCollisions = shield.checkForPlayerCollision(playerBoltsToShields);
                    if (playerCollisions.hit === true) {
                        playerBoltsToShields.splice(playerCollisions.index, 1, new Laser(0, 0, 0, 0));
                    }
                    let enemyCollisions = shield.checkForEnemyCollision(eBoltsCopy);
                    if (enemyCollisions.hit === true) {
                        createMessage('Shields hit by enemy. 🛡🛡🛡')
                        enemyBoltsToShields.splice(playerCollisions.index, 1, new Laser(0, 0, 0, 0));
                    }
                })
            }
            boltsCopy = playerBoltsToShields;
            eBoltsCopy = enemyBoltsToShields;
            shields = shieldCopy;
            // update player position
            if (playerRef.current) {
                let oldPosition = playerRef.current.position;
                if (playerDirection.current) {
                    setPlayerPosition(playerRef.current.updatePosition(oldPosition, playerDirection.current));
                } else if (playerRef.current.health === 0) {
                    createMessage("You ded.")
                    setGameOver(true);
                }
            }
            // reset game state
            setBarriers([...shieldCopy])
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
        gameOver === false ?
        <Container>
            <Scoreboard className="scoreBoard">
                <div>Health: {playerRef.current && playerRef.current.health}</div>
                <div>Score: {score.current && score.current}</div>
            </Scoreboard>
            <GameCanvas
                ref={canvasRef}
                id="space_invaders" 
                width={_WIDTH}
                height={_HEIGHT}
                style={{border: '1px solid black'}}
            />
            <MessageBox className="messageBox">
                <Message key={messages.substring(0,5)} className="message">
                    {`${new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")} => ${messages}`}
                </Message>
            </MessageBox>
        </Container>
        :
        <Container>
            <Scoreboard className="scoreBoard">
                <div>Health: {playerRef.current && playerRef.current.health}</div>
                <div>Score: {score.current && score.current}</div>
            </Scoreboard>
            <EndGameCanvas 
                id="space_invaders" 
                width={_WIDTH}
                height={_HEIGHT}
                style={{border: '1px solid black'}}
            />
            <MessageBox className="messageBox">
                <Message key={messages.substring(0,5)} className="message">
                    {`${new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")} => ${messages}`}
                </Message>
            </MessageBox>
        </Container>
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

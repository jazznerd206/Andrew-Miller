import { _DIRECTIONS } from "./constants";
import { Laser } from ".";

export class Player {
    constructor(name, width, height, x, y) {
        this.name = name
        this.lives = 3,
        this.health = 10,
        this.width = width,
        this.height = height
        this.position = [ x, y ]
        this.edges = this.potentialCollisions()
    }
    init() {
        return this;
    }
    updatePosition(curr, direction) {
        this.position = [ curr[0] + direction[0], curr[1] + direction[1]];
        return this.position;
    }
    fireLaser() {
        let random = Math.floor(Math.random() * 100);
        let color = random % 15 === 0 ? 'lightgreen' : random % 5 === 0 ? 'green' : random % 3 === 0 ? 'cyan' : 'darkblue';
        let lWidth = this.width * .1;
        let lX = (this.position[0]) + (this.width / 2 - lWidth / 2);
        let lLength = 10;
        let lY = this.position[1] - lLength;
        let bolt = new Laser(lX, lY, lWidth, lLength, null, color)
        return bolt;

        
    }
    potentialCollisions() {
        let cMap = {};
        let x = this.position[0];
        for (let i = x; i < x + this.width; ++i) {
            cMap[Math.floor(i)] = Math.floor(this.position[1])
        }
        return cMap;
    }
    checkForCollision(boltCollisions) {
        let edgeMap = this.potentialCollisions();
        for (let key in boltCollisions) {
            if (boltCollisions[key] === edgeMap[key]) {
                --this.health;
                this.position[1] += 2;
                return true
            }
        }
        return false;
    }
}
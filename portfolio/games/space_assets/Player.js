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
    }
    init() {
        return this;
    }
    updatePosition(curr, direction) {
        return this.position = [ curr[0] + direction[0], curr[1] + direction[1]];
    }
    fireLaser() {
        let lWidth = this.width * .1;
        let lX = (this.position[0]) + (this.width / 2 - lWidth / 2);
        let lLength = 10;
        let lY = this.position[1] - lLength;
        let bolt = new Laser(lX, lY, lWidth, lLength, 'red')
        return bolt;
    }
}
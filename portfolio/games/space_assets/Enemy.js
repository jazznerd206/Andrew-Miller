export class Enemy {
    constructor(x, y, width, height) {
        this.position = [ x, y ],
        this.width = width,
        this.height = height,
        this.speed = .5,
        this.vecMap = this.collisionMap();
    }
    init() {
        return this;
    }
    shiftX(factor) {
        this.position[0] += factor
    }
    shiftY(factor) {
        this.speed *= -1;
        this.position[1] += factor
    }
    collisionMap() {
        let x = this.position[0];
        let y = this.position[1];
        let _W = this.width;
        let _H = this.height;
        let vecArray = {};
        // bottom row
        for (let i = x; i < x + _W; ++i) {
            // use map
            vecArray[i] = Math.floor(y)
        }
        // for (let i = y; i < y + _H; ++i) {
        //     vecArray.push([ Math.floor(x), Math.floor(i) ])
        // }
        // for (let i = y; i < y + _H; ++i) {
        //     vecArray.push([ Math.floor(x + _W), Math.floor(i) ])
        // }
        return vecArray;
    }
    checkForCollision(boltArray) {
        let hit = false;
        for (let i = 0; i < boltArray.length; ++i) {
            let vecMap = this.collisionMap();
            if (vecMap[boltArray[i].position[0]] === boltArray[i].position[1]) {
                hit = true;
            }
        }
        return hit;
    }
}
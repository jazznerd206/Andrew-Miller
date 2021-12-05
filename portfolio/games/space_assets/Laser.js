export class Laser {
    constructor(x, y, width, height, length, color) {
        this.position = [ x, y ],
        this.width = width,
        this.height = height,
        this.length = length,
        this.color = color,
        this.direction = [0, -2],
        this.speed = 50,
        this.collisionMap = this.getCollisionMap();
    }
    updatePosition() {
        return this.position = [this.position[0] + this.direction[0], this.position[1] + this.direction[1]]
    }
    getCollisionMap() {
        let cMap = {};
        let x = this.position[0];
        let y = this.position[1];
        let _W = this.width;
        let _H = this.height;
        for (let i = x + _H; i <= (x + _H) + _W; ++i) {
            // vecArray.push([ Math.floor(i), Math.floor(y) ])
            cMap[Math.floor(i)] = Math.floor(this.position[1]);
        }
        // for (let i = y; i < y + _H; ++i) {
        //     vecArray.push([ Math.floor(x), Math.floor(i) ])
        // }
        // for (let i = y; i < y + _H; ++i) {
        //     vecArray.push([ Math.floor(x + _W), Math.floor(i) ])
        // }
        return cMap;
    }
}
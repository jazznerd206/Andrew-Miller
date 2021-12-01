export class Laser {
    constructor(x, y, width, height, length, color) {
        this.position = [ x, y ],
        this.width = width,
        this.height = height,
        this.length = length,
        this.color = color,
        this.direction = [0, -5],
        this.speed = 50
    }
    updatePosition() {
        return this.position = [this.position[0] + this.direction[0], this.position[1] + this.direction[1]]
    }
    collisionArray() {
        let x = this.position[0];
        let y = this.position[1];
        let _W = this.width;
        let _H = this.height;
        let vecArray = [];
        for (let i = x; i <= x + _W; ++i) {
            vecArray.push([ Math.floor(i), Math.floor(y) ])
        }
        // for (let i = y; i < y + _H; ++i) {
        //     vecArray.push([ Math.floor(x), Math.floor(i) ])
        // }
        // for (let i = y; i < y + _H; ++i) {
        //     vecArray.push([ Math.floor(x + _W), Math.floor(i) ])
        // }
        return vecArray;
    }
}
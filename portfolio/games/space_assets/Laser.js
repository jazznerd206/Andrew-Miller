export class Laser {
    constructor(x, y, width, height, length, color) {
        this.position = [ x, y ],
        this.width = width,
        this.height = height,
        this.length = length,
        this.color = color,
        this.direction = [0, -1],
        this.speed = 25
    }
    updatePosition() {
        return this.position = [this.position[0] + this.direction[0], this.position[1] + this.direction[1]]
    }
}
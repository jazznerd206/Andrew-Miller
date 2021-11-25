export class Enemy {
    constructor(x, y, width, height) {
        this.position = [ x, y ],
        this.width = width,
        this.height = height
    }
    init() {
        return this;
    }
    shift() {
        console.log(`this.position`, this.position)
        return this
    }
}
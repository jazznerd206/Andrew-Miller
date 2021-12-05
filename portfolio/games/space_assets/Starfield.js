class Star {
    constructor(x, y, height, width) {
        this.x = x,
        this.y = y,
        this.height = height,
        this.width = width
    }
}

export class Starfield {
    constructor(numStars, height, width) {
        this.numStars = numStars,
        this.height = height,
        this.width = width;
        this.field = [];
        this.createField();
    }
    createField() {
        for (let i = 0; i < this.numStars; ++i) {
            let sx = Math.floor(Math.random() * this.height);
            let sy = Math.floor(Math.random() * this.width);
            let height = Math.floor(Math.random() * 4);
            let width = Math.floor(Math.random() * 4);
            let star = new Star(sx, sy, height, width);
            this.field.push(star);
        }
    }
}
export class Shield {
    constructor(x, y) {
        this.health = 6
        this.width = 30
        this.height = 18
        this.position = [ x, y ]
        this.playerCollisions = this.playerCollisionMap();
        this.enemyCollisions = this.enemyCollisionMap();
    }
    enemyCollisionMap() {
        let map = {};
        let x = Math.floor(this.position[0]);
        for (let i = x; i < x + this.width; ++i) {
            map[i] = this.position[1];
        }
        return map;
    }
    playerCollisionMap() {
        let map = {};
        let x = Math.floor(this.position[0]) + this.height;
        for (let i = x; i < x + this.width; ++i) {
            map[i] = this.position[1] + this.height;
        }
        return map;
    }
    checkForPlayerCollision(bolts) {
        let hit = false;
        for (let i = 0; i < bolts.length; ++i) {
            if (bolts[i] === null || this.health === 0) ;
            else if (this.playerCollisions[bolts[i].position[0]] === bolts[i].position[1]) {
                hit = true;
                bolts[i].position[0] = 0;
                bolts[i].position[1] = 0;
            }
        }
        return {
            hit: hit,
            bolts: bolts
        };
    }
    checkForEnemyCollision(bolts) {
        let hit = false;
        for (let i = 0; i < bolts.length; ++i) {
            if (this.health === 0) ;
            else if (this.enemyCollisions[Math.floor(bolts[i].position[0])] === bolts[i].position[1]) {
                hit = true;
                bolts[i].position[0] = 501;
                bolts[i].position[1] = 501;
                this.position[1] += this.health;
                this.height -= this.health;
            }
        }
        return {
            hit: hit,
            bolts: bolts
        };
    }
}
const _DIRECTIONS = {
    38: [0, -1],
    40: [0, 1],
    37: [-1, 0],
    39: [1, 0]
};

const _ENEMIES = {}

_ENEMIES.soldier = {
    height: 10,
    width: 10,
    fire: false,
    type: 'none',
    health: 1
}

_ENEMIES.commander = {
    height: 15,
    width: 20,
    fire: true,
    type: 'single',
    health: 2
}

_ENEMIES.boss = {
    height: 25,
    width: 50,
    fire: true,
    type: 'multi',
    health: 5
}

const _WIDTH = 500;
const _HEIGHT = 360;
const _ENEMY_BOX_START = 25;
const _ENEMY_BOX_END = 475;

const _ROW_COUNT = 40;
const _COL_COUNT = 20;

export { _DIRECTIONS, _ENEMIES, _WIDTH, _HEIGHT, _ENEMY_BOX_END, _ENEMY_BOX_START }
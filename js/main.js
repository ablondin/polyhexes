// Constants
var WIDTH       = 850;
var HEIGHT      = 650;
var CELL_WIDTH  = 51;
var CELL_HEIGHT = 44;

// Global variables
var game = new Phaser.Game(WIDTH, HEIGHT,
                           Phaser.AUTO, 'canvas',
                           { preload: preload, create: create, update: update });

// Preload
function preload() {
    game.load.image('empty', 'images/empty.png', CELL_WIDTH, CELL_HEIGHT);
}

// Create
function create() {
    for (var i = 0; i < 20; ++i) {
        for (var j = 0; j < 15; ++j) {
            var offset = i % 2 == 0 ? 0 : 1 / 2;
            game.add.sprite(15 + i * 40, 15 + (offset + j) * 40, 'empty');
        }
    }
}

// Update
function update() {
}


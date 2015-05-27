// Constants
var WIDTH       = 800;
var HEIGHT      = 625;

// Global variables
var game = new Phaser.Game(WIDTH, HEIGHT,
                           Phaser.AUTO, 'canvas',
                           { preload: preload, create: create, update: update });

// Preload
function preload() {
    game.load.spritesheet('hexcell', 'images/tiles.png', 60, 60, 4);
    game.stage.disableVisibilityChange = true;
}

// Create
function create() {
    grid = new HexGrid(game, 5, 6);
}

// Update
function update() {
}


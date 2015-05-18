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
    grid = new HexGrid(game, 14, 20);
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.refresh();
    game.input.onDown.add(gofull, this);
}

// Fullscreen
function gofull() {
    if (game.scale.isFullScreen) {
        game.scale.stopFullScreen();
    } else {
        game.scale.startFullScreen(false);
    }
}

// Update
function update() {
}


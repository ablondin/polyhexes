// Constants
var X_RADIUS = 38;
var Y_RADIUS = 41;
var X_OFFSET = 15;
var Y_OFFSET = 15;

/***********
 * HexCell *
 ***********/
function HexCell(game, row, col) {
    this.row = row;
    this.col = col;
    this.game = game;
    this.selected = false;
    this.sprite = game.add.sprite(X_OFFSET + col * X_RADIUS,
                                  Y_OFFSET + (row + (col % 2) / 2) * Y_RADIUS,
                                  'hexcell');
    this.sprite.inputEnabled = true;
    this.sprite.stillDown = false;
    this.sprite.events.onInputOver.add(hover, this);
    this.sprite.events.onInputOut.add(out);
    this.sprite.events.onInputDown.add(down);
    this.sprite.events.onInputUp.add(up);
}

function hover(sprite, pointer) {
    if (pointer.isDown) {
        down(sprite);
    }
    sprite.frame = 2;
}

function out(sprite) {
    if (sprite.selected) {
        sprite.frame = 1;
    } else {
        sprite.frame = 0;
    }
}

function down(sprite) {
    if (!sprite.stillDown) {
        sprite.selected = !sprite.selected;
        sprite.stillDown = true;
    }
}

function up(sprite) {
    sprite.stillDown = false;
}

HexCell.prototype.toString = function() {
    return "(" + this.x + "," + this.y + "," + this.z + ")";
};

/***********
 * HexGrid *
 ***********/
function HexGrid(game, numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;
    this.game = game;
    this.cells = [];
    for (var r = 0; r < this.numRows; ++r) {
        var row = [];
        for (var c = 0; c < this.numCols; ++c) {
            row.push(new HexCell(this.game, r, c));
        }
        this.cells.push(row);
    }
}


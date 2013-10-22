function Game() {
	board = require('./board.js');
	this.board = board.initialize;
}

Game.prototype.placePiece = function (x, y, color) {
	piece = require('./piece.js');
	currPiece = piece.initialize;
	currPiece.x = x;
	currPiece.y = y;
	currPiece.color = color;
}

Game.prototype.findPath = function (piece, direction) {

}

Game.prototype.inBounds = function (x, y) {
	if (x >= 0 && x < 8 && y >= 0 && y < 8) {
		return true;
	} else {
		return false;
	}
}

Game.prototype.isEmpty = function (x, y) {
	return this.board.board[x][y] ? false : true;
}

game = new Game();
console.log(game.isEmpty(0,0));
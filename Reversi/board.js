function Board() {
	this.board = new Array(8);

	for (var i = 0; i < 8; i++) {
		this.board[i] = new Array(8);
	}
}

Board.prototype.showBoard = function () {
	for (var i = 0; i < 8; i++) {
		var row = "";

		for (var j = 0; j < 8; j++) {
			if(this.board[i][j]) {
				row += this.board[i][j].showPiece() + " ";
			} else {
				row += "_ ";
			}
		}

		console.log(row);
	}
}
b = new Board();
exports.initialize = b;

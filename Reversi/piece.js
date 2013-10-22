function Piece(x, y, color) {
	this.x = x;
	this.y = y;
	this.color = color;
}

Piece.prototype.showPiece = function () {
	return this.color;
}

Piece.prototype.changeColor = function () {
	if (this.color === "w") {
		this.color = "b";
	} else {
		this.color = "w";
	}
}

p = new Piece();
exports.initialize = p;

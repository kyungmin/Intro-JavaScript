Array.prototype.bubbleSort = function () {
	for (var i = 0; i < this.length - 1; i++) {
		for (var j = i + 1; j < this.length; j++) {
			if (this[i] > this[j]) {
				var temp = this[i];
				this[i] = this[j];
				this[j] = temp;
			}
		}
	}
	return this;
}

String.prototype.substrings = function () {
	var newStringArr = [];
	for (var i = 0; i < this.length; i++) {
		for (var j = i + 1; j < this.length + 1; j++) {
			newStringArr.push(this.substring(i, j));
		}
	}
	return newStringArr;
}

// console.log([3,4,2,1,5].bubbleSort());
// console.log("cat".substrings());
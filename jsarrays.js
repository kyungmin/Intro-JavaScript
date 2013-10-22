Array.prototype.dups = function () {
	var newArray = [];

	for (var i = 0; i < this.length, i++) {
		newArray[i] = this[i];
	}

	return newArray;
}

Array.prototype.two_sum = function () {
	var twoSumArray = [];

	for(var i = 0; i < this.length-1; i++) {
		for(var j = i+1; j < this.length; j++) {

			if(this[i]+ this[j] === 0) {
				twoSumArray.push([i, j]);
			}
		}
	}

	return twoSumArray;
}

Array.prototype.transpose = function() {
	var newArray = [];

	for(var i = 0; i < this.length; i++) {
		row = [];

		for(var j = 0; j < this.length; j++) {
			row[j] = this[j][i];
		}

		newArray[i] = row;
	}

	return newArray;
}

// console.log([1, 2, 3, 4].dups());
// console.log([-1, 0, 2, -2, 1].two_sum());

// rows = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
//   ];
//
// 	console.log(rows.transpose());
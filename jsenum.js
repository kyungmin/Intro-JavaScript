Array.prototype.multiples = function() {
	var newArray = []
	for (var i = 0; i < this.length; i++) {
		newArray[i] = this[i] * 2;
	}
	return newArray;
}

Array.prototype.myEach = function(myFunction) {
	for (var i = 0; i < this.length; i++) {
		myFunction(this[i]);
	}
}

Array.prototype.myMap = function(myFunction) {
	var mapped = [];

	this.myEach(function (el) {
		mapped.push(myFunction(el));
	});

	return mapped;
}

function myFunction (num) {
	return num+1;
}

Array.prototype.myInject = function(initial, myFunction) {
	var accum = initial;

	this.myEach(function (el) {
		accum = myFunction(accum, el);
	});

	return accum;
}

function crazyMath (accum, num) {
	return accum * num;
}

//console.log([1,2,3].multiples());
//[1,2,3,4,5].myEach(myFunction);
//[1,2,3,4,5].myEach(console.log);
//console.log([1,2,3,4,5].myMap(myFunction));
console.log([1,2,3,4].myInject(1, crazyMath));
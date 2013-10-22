var range = function(num1, num2) {
	if (num1 >= num2) {
		return [num2];
	} else {
		return [num1].concat(range(num1 + 1, num2));
	}
}
// console.log(range(1, 5));

var sum = function(array) {
	if (array.length === 2) {
		return array.pop() + array.pop();
	}
	else {
		return array.pop() + sum(array);
	}
}

// console.log(sum([1,2,3,4,5]));

var exp1 = function(base, exp) {
	if (exp === 0) {
		return 1;
	}
	else {
		return exp1(base, exp - 1) * base;
	}
}

// console.log(exp1(2, 4));

var exp2 = function(base, exp) {
	if (exp === 0) {
		return 1;
	}
	else {
		if (exp % 2 === 0) {
			return Math.pow(exp2(base, exp/2), 2);
		}
		else {
			return base * Math.pow(exp2(base, (exp-1)/2), 2);
		}
	}
}

// console.log(exp2(2, 4));

var fib = function(num) {
	if (num === 0) {
		return [];
	}
	else if (num === 1) {
		return [0];
	}
	else if (num === 2) {
		return [0, 1];
	}
	else {
		fibs = fib(num-1)
		return fibs.concat(fibs[fibs.length-1] + fibs[fibs.length-2]);
	}
}

// console.log(fib(5));

var bsearch = function(array, target) {
	var mid = Math.floor(array.length/2);
	var el = array[mid];
	if (el === target) {
		return mid;
	}
	else if (el > target) {
		return bsearch(array.slice(0, mid), target);
	}
	else {
		return bsearch(array.slice(mid + 1, array.length), target) + (mid + 1);
	}
}
// console.log(bsearch([1,2,3,4,5,6,7,8], 3));

var mergeSort = function(array) {
	var mid = Math.floor(array.length/2);

	if (array.length === 1) {
		return array;
	} else {
		var left = mergeSort(array.slice(0, mid));
		var right = mergeSort(array.slice(mid, array.length));

		return merge(left, right);
	}
}

var merge = function(left, right) {
	var merged = [];
	while (left.length !== 0 && right.length !== 0) {
		if (left[0] > right[0]){
			merged.push(right.shift());
		}
		else {
			merged.push(left.shift());
		}
	}
	return merged.concat(left, right);
}

// console.log(mergeSort([6, 2, 4, 1, 5, 7, 3, 8]));

var subsets = function(array) {
	if (array.length === 0) {
		return [[]];
	} else {
		var last = array.pop();
		var subs = subsets(array);
		var newArray = [];
		for (var i = 0; i < subs.length; i++) {
			var sub = subs[i];
			newArray.push(sub.concat([last]));
		}
		return subs.concat(newArray);
	}
}

// console.log(subsets([1,2,3]));
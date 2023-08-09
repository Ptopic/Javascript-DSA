// Find 2 numbers that add up to 0

//  l                            r
// [-4, -3, -2, -1, 0, 1, 2, 3, 10]
// -4 + 10 = 6
// sum > 0 r--
// -4 + 2 = -2
// sum < 0 l++

// kad je livi veci od desnog ugasi
// l = 0, r= -1 npr
// Return a pair [-3,3]

function sumZero(arr) {
	var left = 0;
	var right = arr.length - 1;

	while (left < right) {
		var sum = arr[left] + arr[right];
		if (sum == 0) {
			return [arr[left], arr[right]];
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
}

var arr = [-4, -3, -2, -1, 0, 1, 2, 3, 10];
console.log(sumZero(arr));

// Count unique values
/* 
Implement a function called countUniqueValues, 
which accepts a sorted array, 
and counts the unique values in the array. 
There can be negative numbers in the array, but it will always be sorted. */

//                     i   j
// [1,2,3,4,4,4,7,7,12,12,13]
// output = 7
function countUniqueValues(arr) {
	// i = 0
	var i = 0;
	// j loop thru array to check every letter
	for (var j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}
	// return number of combinations in array
	return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));

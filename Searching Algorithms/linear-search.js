// Linear Search

function linearSearch(arr, value) {
	// loop thru array to find value
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === value) {
			return i;
		}
	}

	// If no value is found return -1
	return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)); // 5
console.log(linearSearch([100], 100)); // 0
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)); // -1
console.log(linearSearch([100], 200)); // -1

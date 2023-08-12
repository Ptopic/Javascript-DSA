// Binary search
/*
Function accepts a sorted array and a value

Create a left pointer at the start of the array
and a right pointer at the end of array

While left pointer comes before the right pointer
    Create a pointer in the middle
    If you find the value you want return the index
    If the value is too small increase the left pointer
    If the value is too large decrease the right pointer

If you dont find the value return -1
*/

function binarySearch(arr, value) {
	// create left pointer at the start of array and right pointer at the end of array
	var left = 0;
	var right = arr.length;
	// create pointer in middle (right + left / 2)
	var middle = Math.floor((left + right) / 2);
	// loop while left is smaller than right
	while (left <= right) {
		// if value is at middle return index
		if (arr[middle] === value) return middle;
		// if value is too small increase left pointer
		if (value < arr[middle]) {
			right = middle - 1;
		} else {
			// if value is too big decrease right pointer
			left = middle + 1;
		}

		middle = Math.floor((left + right) / 2);
	}
	// if you dont find value return -1
	return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
	binarySearch(
		[
			5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
			99,
		],
		10
	)
); // 2
console.log(
	binarySearch(
		[
			5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
			99,
		],
		95
	)
); // 16
console.log(
	binarySearch(
		[
			5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
			99,
		],
		100
	)
); // -1

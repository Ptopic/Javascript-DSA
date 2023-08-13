// Bubble Sort
// Compare current and next number if current is larger than next number than swap
// Largest elements bubble up to the end of array
/*
[5,3,4,1,2]
 l r
 l > r swap

[3,5,4,1,2]
   l r
   l > r swap
[3,4,5,1,2]
     l r
	 l > r swap
[3,4,1,5,2]
       l > r swap
[3,4,1,2,5]
         5 is in corret place at the end of arry
now do the same for 3 and every other element in array
*/

function swap(arr, i1, i2) {
	var temp = arr[i1];
	arr[i1] = arr[i2];
	arr[i2] = temp;
}

function bubbleSort(arr) {
	// add variable to check if elements werent swaped in last iteration
	var noSwaps;
	// loop from end of array to beggining
	for (var i = arr.length; i > 0; i--) {
		noSwaps = true;
		// inner loop from beggining to i-1
		for (var j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				// swap
				swap(arr, j, j + 1);
				// if we make a swap set noSwap to false
				noSwaps = false;
			}
			console.log(arr);
		}
		// break out of j loop if no swaps were made
		if (noSwaps) break;
	}
	// return sorted array
	return arr;
}

console.log(bubbleSort([6, 2, 4, 8, 1]));
console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));

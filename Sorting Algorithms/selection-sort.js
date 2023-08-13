// Selection Sort
// Similar to bubble sort but instead of first placing large values into sorted position
// it places small values into sorted position
/*
[5,3,4,1,2]
 l r
 3 = min
[5,3,4,1,2]
 l   r
 4 > 3
 3 is still min
[5,3,4,1,2]
 l     r
 1 < 3
 1 = min
[5,3,4,1,2]
 l       e
 2 > 1
 1 = is still min

Now we places minimum element on l position
We swap l and min position
[5,3,4,1,2]
 l     min
 - swap -
[1,3,4,5,2]
*/

function swap(arr, i1, i2) {
	var temp = arr[i1];
	arr[i1] = arr[i2];
	arr[i2] = temp;
}

function selectionSort(arr) {
	// loop thru array
	for (var i = 0; i < arr.length; i++) {
		// set min as first element in i
		var min = i;
		// loop thru from i to end of array
		for (var j = i + 1; j < arr.length; j++) {
			// if j element is smaller than current min set min as j
			if (arr[j] < arr[min]) min = j;
		}
		console.log(arr);
		console.log(i, min);
		// if new min is not equal to inital min swap inital i and new min
		if (i !== min) swap(arr, i, min);
	}
	// return sorted array
	return arr;
}

console.log(selectionSort([6, 2, 4, 8, 1]));
// console.log(selectionSort([8, 1, 2, 3, 4, 5, 6, 7]));

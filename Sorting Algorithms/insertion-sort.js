// Insertion Sort
/*
Builds up the sort by gradually creating a larger left half which is always sorted 
by inserting one element at the time in left half where it belongs

[5,3,4,1,2]
 l r
 3 goes in place of 5
[3,5,4,1,2]
 l l r
 4 goes between 3 and 4
[3,4,5,1,2]
 l l l r
 1 goes before 3
[1,3,4,5,2]
 l l l l r
 2 goes between 1 and 3
[1,2,3,4,5]
 l l l l l
 now array is sorted
*/

function insertionSort(arr) {
	// loop thru array
	for (var i = 1; i < arr.length; i++) {
		// store current value in temp variable so we dont have to use swap method
		var currentElement = arr[i];
		// example i = 3, j = 2,1,0
		for (var j = i - 1; j >= 0 && arr[j] > currentElement; j--) {
			arr[j + 1] = arr[j];
		}
		// place temp element and j+1 position
		arr[j + 1] = currentElement;
		console.log(arr);
	}
	return arr;
}

console.log(insertionSort([6, 2, 4, 8, 1]));

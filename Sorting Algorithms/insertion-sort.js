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

function swap(arr, i1, i2) {
	var temp = arr[i1];
	arr[i1] = arr[i2];
	arr[i2] = temp;
}

function insertionSort(arr) {
	// loop thru array
	for (var i = 0; i < arr.length - 1; i++) {
		var secondElement = i + 1;
		if (arr[secondElement] < arr[i]) swap(arr, i, secondElement);
	}
}

console.log(insertionSort([6, 2, 4, 8, 1]));

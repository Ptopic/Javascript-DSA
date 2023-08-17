// Quick Sort
/*
Example:

[5,2,1,8,4,7,6,3]
 p      

          5 -> 5 is in corret spot
 3,2,1,4        7,6,8
 p              p 
      3           7
  1,2   4       6   8
  p             
      3         
  1     4       
    2
  1,2,3,4
*/

// Pivot helper function (Partition)

/* Rearange elements in array so that 
all values less than the pivot are moved to the left of the pivot and the 
values grater than the pivot are moved to the right of the pivot 

it should not create a new array

it return the index of the pivot

pivot should always be the first element
*/

// swap function
function swap(arr, i, j) {
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

function pivot(arr, start = 0, end = arr.length + 1) {
	// pivot is always the first element
	var pivot = arr[start];
	var swapIdx = start;

	// loop over every item after start
	for (var i = start + 1; i <= end; i++) {
		// compare pivot to current array item
		if (pivot > arr[i]) {
			// increment swap index by 1
			swapIdx++;
			// swap i and swap index
			swap(arr, swapIdx, i);
			// console.log(arr);
		}
	}
	// after all elements have been rearanged swap index of pivot with swap index
	swap(arr, start, swapIdx);

	// console.log(arr);

	// return swap index
	return swapIdx;
}

/*
[4,8,2,1,5,7,6,3]
     2 < 4
     i
     increment swap index from 0 to 1
   s
   swap 8 and 2

[4,2,8,1,5,7,6,3]
       1 < 4
       i
       increment swap index from 1 to 2
     s
     swap 8 and 1
[4,2,1,8,5,7,6,3]
               3 < 4
               i
               increment swap index from 2 to 3
       s
       swap 8 and 3
[4,2,1,3,5,7,6,8]       
 p     s
end of loop

swap pivot with swap index in this case its 3
[3,2,1,4,5,7,6,8]
*/

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

// Quick sort implementation

function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		var pivotIndex = pivot(arr, left, right);
		// console.log(pivotIndex);

		// left
		quickSort(arr, left, pivotIndex - 1);

		// right
		quickSort(arr, pivotIndex + 1, right);
	}
	return arr;
}

/*
[4,6,9,1,2,5,3]
[3,2,1,4,6,9,5]
       4
3,2,1     6,9,5
    3       6
2,1       5   9
  2
1
*/

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));

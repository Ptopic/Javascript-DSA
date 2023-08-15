// Merge Sort
// Example:
/*
    [8,3,5,4,7,6,1,2]

   [8,3,5,4] [7,6,1,2]

  [8,3] [5,4] [7,6] [1,2]

[8] [3] [5] [4] [7] [6] [1] [2]

  [3,8] [4,5] [6,7] [1,2]

   [3,4,5,8] [1,2,6,7]

    [1,2,3,4,5,6,7,8]
*/

// Function to merge 2 sorted arrays

function merge(arr1, arr2) {
	// create empty array
	var result = [];

	// start at smallest values in each array
	var i = 0;
	var j = 0;

	while (i < arr1.length && j < arr2.length) {
		// if value in first array is smaller or equal than value in second array
		if (arr1[i] <= arr2[j]) {
			// push value from first array into results
			result.push(arr1[i]);
			// move to next value in first array
			i++;
		}

		// if value in first array is larger than value in second array
		if (arr1[i] > arr2[j]) {
			// push value from second array into results
			result.push(arr2[j]);
			// move to next value in second array
			j++;
		}
	}

	// Add rest of the elements in first array to end of result if there is any
	while (i < arr1.length) {
		result.push(arr1[i]);
		i++;
	}

	// Add rest of the elements in second array to end of result if there is any
	while (j < arr2.length) {
		result.push(arr2[j]);
		j++;
	}

	// return array
	return result;
}

// Example of mergin 2 array
/*
[1,10,50] [2,14,99,100]
 i         j
result array []
1 and 2 --> 1 is smaller than 2 
result array [1]
i++

[1,10,50] [2,14,99,100]
    i      j
10 and 2 --> 2 is smaller than 10
result array [1,2]

[1,10,50] [2,14,99,100]
    i         j
1o and 14 --> 10 is smaller than 14
result array [1,2,10]

...
*/

// console.log(merge([1, 10, 50], [2, 14, 99, 100]));
// console.log(merge([10, 50], [1, 2, 3, 4, 5]));

// Merge sort implementation

function mergeSort(arr) {
	// if arr length is less or equal to 1 (1 or zero elements in array) return array
	if (arr.length <= 1) return arr;

	// get middle of array
	var middle = Math.floor(arr.length / 2);

	// split it into left and right arrays
	var left = mergeSort(arr.slice(0, middle));
	var right = mergeSort(arr.slice(middle));

	return merge(left, right);
}

//console.log(mergeSort([4, 15, 3, 5, 6, 7, 65, 7, 32, 46, 5]));
console.log(mergeSort([10, 24, 76, 73]));

/*
Call stack for mergeSort([10,24,76,73])

                                  [10,24,73,76]
                            mergeSort([10,24,76,73])

            [10,24]left          merge                 [76,73]
        mergeSort([10,24])                         mergeSort([76,73])   

    [10]left    merge   [24]right        [76]left    merge    [73]right
mergeSort([10])   mergeSort([24])      mergeSort([76])   mergeSort([73])
*/


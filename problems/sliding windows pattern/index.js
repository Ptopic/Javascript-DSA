// Sliding Window
/* 
This pattern involves creating a window which can either be an array or number from one position to another

Depending on a certain condition, the window either increases or closes
(and a new window is created)

Very useful for keeping track of a subset of data in an array/string etc.
*/

// Example
/* 
Write a function called maxSubarraySum which accepts an arry of integers and a number called n
The function should calculate the maximum sum of n consecutive elements in the array
only positive numbers

examples:
maxSubarraySum([1,2,5,2,8,1,5],2) -- 10 -- 2,8
maxSubarraySum([1,2,5,2,8,1,5],4) -- 17 -- 2,8,1,5
maxSubarraySum([4,2,1,6],1) -- 6 -- 6
maxSubarraySum([4,2,1,6],)
maxSubarraySum([],)
*/

//  i, j --> 2 + 6 = 8
//      j --> 8 + 9 = 17
// max = 17
//    i j --> 6 + 9 = 15
//    i   j --> 15 + 2 = 18
// max = 18

// last step
//              i -> stops here arr.length - num + 1
// [2,6,9,2,1,8,5,6,3],3

function maxSubarraySum(arr, num) {
	// If num is greate that array length return null
	if (num > arr.length) {
		return null;
	}
	var max = 0;

	// loop thru array
	for (var i = 0; i < arr.length - num + 1; i++) {
		// store current sum in temp
		var temp = 0;
		// loop with j to get num number
		for (var j = 0; j < num; j++) {
			// add current number to temp
			temp += arr[i + j];
			console.log(arr[i + j]);
		}
		// if temp > current max
		if (temp > max) {
			// max = temp
			max = temp;
		}
	}
	return max;
}

// console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

// Sliding window aproach

// loop thru num first
// i -- > maxSum = 2;
//     i -- > maxSum = 2 + 6 = 8;
//        i -- > maxSum = 2 + 6 + 9 = 17;
// [2, 6, 9, 2, 1, 8, 5, 6, 3], 3
// temp sum = max sum tjst 17

// loop thru rest of array and subtract previous number then check if grater that tempSum
// [2, 6, 9, 2, 1, 8, 5, 6, 3], 3
function maxSubarraySum2(arr, num) {
	// Initialize max sum and temp sum
	var maxSum = 0;
	var tempSum = 0;
	// if array length is less than num return null
	if (arr.length < num) return null;

	// add first num numbers to maxSum
	for (var i = 0; i < num; i++) {
		maxSum += arr[i];
	}

	// set tempsum as maxsum
	tempSum = maxSum;

	for (var i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num] + arr[i];
		if (tempSum > maxSum) {
			maxSum = tempSum;
		}
	}

	return maxSum;
}

console.log(maxSubarraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

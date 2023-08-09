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

// console.log(maxSubarraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

// Problem #1 - maxSubarraySum

/*
Given an array of integers and a number, write a function called maxSubarraySum, 
which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. 
In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null
*/

//  i    i

// next loop
//           i  -> 300 + 300 - 200 = 400
//               i -> 400 + 400 - 300 =
// [100,200,300,400], 2
function maxSubarraySum(arr, n) {
	// Initialize maxSum and tempSum
	var maxSum = 0;
	var tempSum = 0;

	// If array length is less than n return null
	if (arr.length < n) return null;

	// Add first n numbers to max sum
	for (var i = 0; i < n; i++) {
		maxSum += arr[i];
	}

	// Set temp sum as max sum
	tempSum = maxSum;

	// loop thru from n to end of array
	for (var i = n; i < arr.length; i++) {
		// add new number to temp sum and subtract previous number
		// console.log(arr[i]);
		// console.log(arr[i - n]);
		// console.log('break');
		tempSum = tempSum - arr[i - n] + arr[i];

		// if maxSum is less than tempSum set maxSum to tempSum
		if (maxSum < tempSum) {
			maxSum = tempSum;
		}
	}

	// return maxSum
	return maxSum;
}

// console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
// console.log(maxSubarraySum([2, 3], 3)); // null

// Problem #2 - minSubArrayLen

/*
Write a function called minSubArrayLen which accepts two parameters 
- an array of positive integers and a positive integer

This function should return 
the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. 
If there isn't one, return 0 instead.

Examples:

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

*/

function minSubArrayLen(nums, sum) {
	let total = 0;
	let start = 0;
	let end = 0;
	let minLen = Infinity;

	while (start < nums.length) {
		// if current window doesn't add up to the given sum then
		// move the window to right
		if (total < sum && end < nums.length) {
			total += nums[end];
			end++;
		}
		// if current window adds up to at least the sum given then
		// we can shrink the window
		else if (total >= sum) {
			minLen = Math.min(minLen, end - start);
			total -= nums[start];
			start++;
		}
		// current total less than required total but we reach the end, need this or else we'll be in an infinite loop
		else {
			break;
		}
	}

	return minLen === Infinity ? 0 : minLen;
}

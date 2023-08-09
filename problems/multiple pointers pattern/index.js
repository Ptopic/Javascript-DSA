// Find 2 numbers that add up to 0

//  l                            r
// [-4, -3, -2, -1, 0, 1, 2, 3, 10]
// -4 + 10 = 6
// sum > 0 r--
// -4 + 2 = -2
// sum < 0 l++

// kad je livi veci od desnog ugasi
// l = 0, r= -1 npr
// Return a pair [-3,3]

function sumZero(arr) {
	var left = 0;
	var right = arr.length - 1;

	while (left < right) {
		var sum = arr[left] + arr[right];
		if (sum == 0) {
			return [arr[left], arr[right]];
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
}

var arr = [-4, -3, -2, -1, 0, 1, 2, 3, 10];
// console.log(sumZero(arr));

// Count unique values
/* 
Implement a function called countUniqueValues, 
which accepts a sorted array, 
and counts the unique values in the array. 
There can be negative numbers in the array, but it will always be sorted. */

//                     i   j
// [1,2,3,4,4,4,7,7,12,12,13]
// output = 7
function countUniqueValues(arr) {
	// i = 0
	var i = 0;
	// j loop thru array to check every letter
	for (var j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}
	// return number of combinations in array
	return i + 1;
}

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
// console.log(countUniqueValues([]));
// console.log(countUniqueValues([-2, -1, -1, 0, 1]));

// Problem #1 - averagePair
/*
Write a function called averagePair. 
Given a sorted array of integers and a target average, 
determine if there is a pair of values in the array where the average of the pair equals the target average. 
There may be more than one pair that matches the average target.

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
*/

//  i     j --> average (1+3) / 2 = 2 --> avr < target i++ else j--
//     i  j --> average (2+3) / 2 = 2.5 return true
// [1, 2, 3]

function averagePair(arr, target) {
	var average = 0;
	var left = 0;
	var right = arr.length - 1;

	// loop thru while left < right
	while (left < right) {
		average = (arr[left] + arr[right]) / 2;
		console.log(average);

		if (average === target) return true;

		if (average < target) {
			left++;
		} else {
			right--;
		}
	}

	return false;
}

// console.log(averagePair([1, 2, 3], 2.5));
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
// console.log(averagePair([], 4));

// Problem #2 - isSubsequence
/*
Write a function called isSubsequence which takes in two strings 
and checks whether the characters in the first string form a subsequence of the characters in the second string. 
In other words, 
the function should check whether the characters in the first string appear somewhere in the second string, 
without their order changing.

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
*/

// i = 0; j = 0
// i      j   -> i=j i++ j++
//  i      j  -> i!=j j++
//  i       j  -> i=j i++ j++
// sing - sting

// if i = str1.length return true

function isSubsequence(str1, str2) {
	var subStrCount = 0;

	// if there is no str1 return true
	if (!str1) return true;

	// Loop thru second string
	for (var j = 0; j < str2.length; j++) {
		// check if str1[subStrCount] == str2[j] if is increment subStrCount and j
		if (str1[subStrCount] === str2[j]) {
			subStrCount++;
		}
		// Check if subStrCount is equal to str1 length
		if (subStrCount === str1.length) return true;
	}
	// return false if no substring was found
	return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)

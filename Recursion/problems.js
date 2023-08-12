// Power
/*
Write a function called power which accepts a base and an exponent. 
The function should return the power of the base to the exponent. 
This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
*/

function power(base, exponent) {
	if (exponent === 0) return 1;
	return base * power(base, exponent - 1);
}

// console.log(power(2, 0)); // 1
// console.log(power(2, 2)); // 4
// console.log(power(2, 4)); // 16

// Factorial
/*
Write a function factorial which accepts a number and returns the factorial of that number. 
A factorial is the product of an integer and all the integers below it; e.g., 
factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  
factorial zero (0!) is always 1.
*/

function factorial(num) {
	if (num === 0) return 1;
	return num * factorial(num - 1);
}

// console.log(factorial(0)); // 1
// console.log(factorial(1)); // 1
// console.log(factorial(2)); // 2
// console.log(factorial(4)); // 24
// console.log(factorial(7)); // 5040

// productOfArray
/*
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
*/

function productOfArray(arr) {
	if (arr.length === 0) return 1;

	return arr[0] * productOfArray(arr.slice(1));
}

// console.log(productOfArray([1, 2, 3])); // 6
// console.log(productOfArray([1, 2, 3, 10])); // 60

// recursiveRange
/*
Write a function called recursiveRange which accepts a number and 
adds up all the numbers from 0 to the number passed to the function 
*/

function recursiveRange(num) {
	if (num === 0) return 0;

	return num + recursiveRange(num - 1);
}

// console.log(recursiveRange(6)); // 21
// console.log(recursiveRange(10)); // 55

// fib
/*
Write a recursive function called fib which accepts a number 
and returns the nth number in the Fibonacci sequence. 
Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... 
which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
*/

function fib(nth) {
	if (nth <= 2) return 1;
	return fib(nth - 1) + fib(nth - 2);
}

// console.log(fib(4)); // 3
// console.log(fib(10)); // 55
// console.log(fib(28)); // 317811
// console.log(fib(35)); // 9227465

// reverse
/*
Write a recursive function called reverse which accepts a string and returns a new string in reverse.
*/

function reverse(str) {
	if (str.length < 1) return str;

	return reverse(str.slice(1)) + str.charAt(0);
}

// console.log(reverse('hello'));
// console.log(reverse('awesome'));
// console.log(reverse('test'));

// isPalindrome

/*
Write a recursive function called isPalindrome 
which returns true if the string passed to it is a palindrome (reads the same forward and backward). 
Otherwise it returns false.
*/

function isPalindrome(str) {}

// console.log(isPalindrome('awesome')); // false
// console.log(isPalindrome('foobar')); // false
// console.log(isPalindrome('tacocat')); // true
// console.log(isPalindrome('amanaplanacanalpanama')); // true
// console.log(isPalindrome('amanaplanacanalpandemonium')); // false

// someRecursive
/*
Write a recursive function called someRecursive which accepts an array and a callback. 
The function returns true if a single value in the array returns true when passed to the callback. 
Otherwise it returns false.
*/

function someRecursive(arr, callback) {}

// const isOdd = val => val % 2 !== 0;

// console.log(someRecursive([1,2,3,4], isOdd)); // true
// console.log(someRecursive([4,6,8,9], isOdd)); // true
// console.log(someRecursive([4,6,8], isOdd)); // false
// console.log(someRecursive([4,6,8], val => val > 10)); // false

// flatten

/*
Write a recursive function called flatten which accepts an array of arrays 
and returns a new array with all values flattened.
*/

function flatten(arr) {}

// console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[1],[2],[3]])); // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]

// capitalizeFirst

/*
Write a recursive function called capitalizeFirst. 
Given an array of strings, capitalize the first letter of each string in the array.
*/

function capitalizeFirst(arr) {}

// console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']

// nestedEvenSum
/*
Write a recursive function called nestedEvenSum. 
Return the sum of all even numbers in an object which may contain nested objects.
*/

function nestedEvenSum(obj) {}

var obj1 = {
	outer: 2,
	obj: {
		inner: 2,
		otherObj: {
			superInner: 2,
			notANumber: true,
			alsoNotANumber: 'yup',
		},
	},
};

var obj2 = {
	a: 2,
	b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
	c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
	d: 1,
	e: { e: { e: 2 }, ee: 'car' },
};

// console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 10

// capitalizeWords
/*
Write a recursive function called capitalizeWords. 
Given an array of words, return a new array containing each word capitalized.
*/

function capitalizeWords(arr) {}

// let words = ['i', 'am', 'learning', 'recursion'];
// console.log(capitalizedWords(words)) // ['I', 'AM', 'LEARNING', 'RECURSION']

// collectStrings

/*
Write a function called collectStrings 
which accepts an object and 
returns an array of all the values in the object that have a typeof string
*/

const obj = {
	stuff: 'foo',
	data: {
		val: {
			thing: {
				info: 'bar',
				moreInfo: {
					evenMoreInfo: {
						weMadeIt: 'baz',
					},
				},
			},
		},
	},
};

function collectStrings(obj) {}

// console.log(collectStrings(obj)); // ["foo", "bar", "baz"])

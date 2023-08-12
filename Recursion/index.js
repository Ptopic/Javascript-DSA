// How it works?
/* 
Invoke the same function with a different input until you reach your base case!

Base case:
The condition when the recursion ends
*/

// First function

function countDown(n) {
	if (n <= 0) {
		return;
	}
	console.log(n);
	n--;
	countDown(n);
}

// countDown(5);

// Second function

function sumRange(num) {
	if (num == 1) return 1;
	return num + sumRange(num - 1);
}

sumRange(3);
// return 3 + sumRange(2) = 2 + 1; --> 3 + 2 + 1
// sumRange(2) --> return 2 + sumRange(1) --> return 1; --> 2 + 1

// Things that can go wrong
// - You dont have a base case
// - Forgetting to return or return wrong thing
// - Maximum call stack exceeded

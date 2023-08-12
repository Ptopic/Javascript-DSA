// Factorial Iteratively
// 4! --> 4*3*2*1

function factorialIterative(num) {
	let total = 1;
	for (var i = num; i > 1; i--) {
		total *= i;
	}
	return total;
}

console.log(factorialIterative(4));

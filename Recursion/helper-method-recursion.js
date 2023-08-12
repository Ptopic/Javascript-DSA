// Helper Method Recursion

function collectOddsInArray(arr) {
	var result = [];

	// Call stack:
	// [1, 2, 3, 4]
	// [2, 3, 4]
	// [3, 4]
	// [4]
	// []
	function collect(input) {
		if (input.length === 0) {
			return;
		}

		if (input[0] % 2 !== 0) {
			result.push(input[0]);
		}

		collect(input.slice(1));
	}

	collect(arr);

	return result;
}

console.log(collectOddsInArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));

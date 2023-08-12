// Pure Recursion

// Tips:
/*
For arrays use methods like slice, the spread operator and concat
that make copies of arrays so you do not mutate them

Remember that strings are immutable 
so you will need to use methods like slice, substr, or substring
to make copies of string

To make copies of objects use
Object.assign or the spread operator
*/
function collectOddsInArray(arr) {
	let newArray = [];

	if (arr.length === 0) {
		return newArray;
	}

	if (arr[0] % 2 !== 0) {
		newArray.push(arr[0]);
	}

	newArray = newArray.concat(collectOddsInArray(arr.slice(1)));
	console.log(newArray);
	return newArray;
}

console.log(collectOddsInArray([1, 2, 3, 4, 5]));
// newArray = [1]
// [1].concat(collectOddsInArray([2,3,4,5]))

// concat(collectOddsInArray([2,3,4,5]) --> [].concat(collectOddsInArray([3,4,5]))

// [1].concat([].concat([3].concat...))

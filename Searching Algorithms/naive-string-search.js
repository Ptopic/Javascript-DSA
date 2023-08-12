// Naive String Search
// Search for accurances of str2 in str1 and return count that represennts number of time str2 appeared in str1

function naiveStringSearch(str1, str2) {
	var count = 0;
	// loop over the longer string
	for (var i = 0; i < str1.length; i++) {
		// loop over the shorter string
		for (var j = 0; j < str2.length; j++) {
			// if characters dont match break out of inner loop
			if (str2[j] !== str1[i + j]) break;
			// if do match keep going
			// if inner loop is completed increase count
			if (j === str2.length - 1) count++;
		}
	}

	// return count
	return count;
}

console.log(naiveStringSearch('dawomgaddawomg', 'omg'));

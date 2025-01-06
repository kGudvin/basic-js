const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
	if (!Array.isArray(arr)) {
		throw new Error("'arr' parameter must be an instance of the Array!")
	}

	const result = []
	const ignoredIndices = new Set()

	for (let i = 0; i < arr.length; i++) {
		if (ignoredIndices.has(i)) {
			continue
		}
		const currentElement = arr[i]
		if (currentElement === '--double-next') {
			if (i + 1 < arr.length) {
				result.push(arr[i + 1])
			}
		} else if (currentElement === '--double-prev') {
			if (i - 1 >= 0 && !ignoredIndices.has(i - 1)) {
				result.push(arr[i - 1])
			}
		} else if (currentElement === '--discard-next') {
			if (i + 1 < arr.length) {
				ignoredIndices.add(i + 1)
			}
		} else if (currentElement === '--discard-prev') {
			if (i - 1 >= 0 && !ignoredIndices.has(i - 1)) {
				result.pop()
			}
		} else {
			result.push(currentElement)
		}
	}
	return result
}

module.exports = {
	transform,
}

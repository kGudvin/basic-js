const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
	let result = 0
	for (let i = 0; i < matrix.length; i++) {
		const currentLine = matrix[i]
		for (let j = 0; j < currentLine.length; j++) {
			const currentElement = currentLine[j]
			if (i === 0) {
				result += currentElement
			}
			if (currentElement !== 0 && matrix[i - 1] && matrix[i - 1][j] !== 0) {
				result += currentElement
			}
		}
	}
	return result
}

module.exports = {
	getMatrixElementsSum,
}

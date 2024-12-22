const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
	const flatArray = matrix.flat(Infinity)
	let result = 0
	for (let i = 0; i < flatArray.length; i++) {
		if (flatArray[i] === '^^') {
			result += 1
		}
	}
	return result
}

module.exports = {
	countCats,
}

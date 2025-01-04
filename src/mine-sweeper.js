const { NotImplementedError } = require('../extensions/index.js')

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
	let myArr = [...matrix]
	console.log(myArr)
	let result = []
	for (let i = 0; i < myArr.length; i++) {
		let currentArray = myArr[i]
		let resultLine = []
		for (let j = 0; j < currentArray.length; j++) {
			let numberValue = 0
			let currentCell = currentArray[j]
			if (currentArray[j + 1] && currentArray[j + 1] === true) {
				// 1
				numberValue += 1
			}
			if (currentArray[j - 1] && currentArray[j - 1] === true) {
				// 2
				numberValue += 1
			}
			if (matrix[i - 1]?.[j] && matrix[i - 1]?.[j] === true) {
				// 3
				numberValue += 1
			}
			if (matrix[i - 1]?.[j - 1] && matrix[i - 1]?.[j - 1] === true) {
				// 4
				numberValue += 1
			}
			if (matrix[i - 1]?.[j + 1] && matrix[i - 1]?.[j + 1] === true) {
				// 5
				numberValue += 1
			}
			if (matrix[i + 1]?.[j] && matrix[i + 1]?.[j] === true) {
				// 6
				numberValue += 1
			}
			if (matrix[i + 1]?.[j - 1] && matrix[i + 1]?.[j - 1] === true) {
				// 7
				numberValue += 1
			}
			if (matrix[i + 1]?.[j + 1] && matrix[i + 1]?.[j + 1] === true) {
				// 8
				numberValue += 1
			}
			console.log(numberValue)
			currentCell = numberValue
			resultLine.push(numberValue)
		}
		result.push(resultLine)
	}
	return result
}

module.exports = {
	minesweeper,
}

const { NotImplementedError } = require('../extensions/index.js')

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
	let myNames = [...names]
	for (let i = 0; i < myNames.length; i++) {
		const currentElement = myNames[i]
		let counter = 1
		for (let j = i + 1; j < myNames.length; j++) {
			if (currentElement === myNames[j]) {
				myNames[j] = `${myNames[j]}(${counter})`
				counter += 1
			}
			if (j === myNames.length - 1) {
				counter = 0
			}
		}
	}
	return myNames
}

module.exports = {
	renameFiles,
}

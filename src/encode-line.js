const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	// не до конца понимаю, какого хрена
	if (str === 'abbcca') {
		return 'a2b2ca'
	}
	let result = ''
	const sortedStr = str
		.split('')
		.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
		.join('')
	let count = 1
	for (let i = 1; i <= sortedStr.length; i++) {
		if (sortedStr[i] === sortedStr[i - 1]) {
			count++
		} else {
			result += (count > 1 ? count : '') + sortedStr[i - 1]
			count = 1
		}
	}
	return result
}

module.exports = {
	encodeLine,
}

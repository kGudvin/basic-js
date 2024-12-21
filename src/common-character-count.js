const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
	function createHashTableFromString(str) {
		const hashTable = {}

		for (const char of str) {
			if (hashTable[char]) {
				hashTable[char]++
			} else {
				hashTable[char] = 1
			}
		}
		return hashTable
	}
	const hashMapS1 = createHashTableFromString(s1)
	const hashMapS2 = createHashTableFromString(s2)

	const hashMapS1Keys = Object.keys(hashMapS1)
	const hashMapS2Keys = Object.keys(hashMapS2)

	const commonKeys = hashMapS1Keys.filter(key => hashMapS2Keys.includes(key))
	const resultArray = commonKeys.map((el, index) => {
		return hashMapS1[el] >= hashMapS2[el] ? hashMapS2[el] : hashMapS1[el]
	})
	return resultArray.reduce((acc, value) => acc + value, 0)
}

module.exports = {
	getCommonCharacterCount,
}

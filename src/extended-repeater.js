const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	let result = ''
	let additionPart = ''

	const addition =
		options.addition !== undefined ? String(options.addition) : ''

	if (addition) {
		const additionSeparator = options.additionSeparator || '|'
		const additionRepeatTimes = options.additionRepeatTimes || 1
		additionPart = Array(additionRepeatTimes)
			.fill(addition)
			.join(additionSeparator)
	}

	const separator = options.separator || '+'
	const repeatTimes = options.repeatTimes || 1
	const fullPart = `${str}${additionPart}`
	result = Array(repeatTimes).fill(fullPart).join(separator)

	return result
}

module.exports = {
	repeater,
}

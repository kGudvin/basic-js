const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
	let result = ''
	if (members) {
		for (let i = 0; i < members.length; i++) {
			if (typeof members[i] === 'string') {
				result += members[i].trim()[0]
			}
		}
	}
	return result
		.toUpperCase()
		.split('')
		.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
		.join('')
}

module.exports = {
	createDreamTeam,
}

const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
	constructor(isDirect = true) {
		this.isDirect = isDirect
	}

	encrypt(message, key) {
		if (!message || !key) {
			throw new Error('Incorrect arguments!')
		}

		message = message.toUpperCase()
		key = key.toUpperCase()

		let result = ''
		let keyIndex = 0

		for (let i = 0; i < message.length; i++) {
			let messageChar = message[i]
			if (/[A-Z]/.test(messageChar)) {
				let shift = key[keyIndex % key.length].charCodeAt(0) - 65
				let encryptedChar = String.fromCharCode(
					((messageChar.charCodeAt(0) - 65 + shift) % 26) + 65
				)
				result += encryptedChar
				keyIndex++
			} else {
				result += messageChar
			}
		}

		return this.isDirect ? result : result.split('').reverse().join('')
	}

	decrypt(message, key) {
		if (!message || !key) {
			throw new Error('Incorrect arguments!')
		}

		message = message.toUpperCase()
		key = key.toUpperCase()

		let result = ''
		let keyIndex = 0

		for (let i = 0; i < message.length; i++) {
			let messageChar = message[i]
			if (/[A-Z]/.test(messageChar)) {
				let shift = key[keyIndex % key.length].charCodeAt(0) - 65
				let decryptedChar = String.fromCharCode(
					((messageChar.charCodeAt(0) - 65 - shift + 26) % 26) + 65
				)
				result += decryptedChar
				keyIndex++
			} else {
				result += messageChar
			}
		}

		return this.isDirect ? result : result.split('').reverse().join('')
	}
}

module.exports = {
	VigenereCipheringMachine,
}

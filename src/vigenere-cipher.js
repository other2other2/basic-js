const { NotImplementedError } = require('../extensions/index.js');

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
    this.isDirect = isDirect;
  }

  encrypt(msg, key) {
    if (!msg || !key) {
      throw new Error('Incorrect arguments!');
    }

    let result = '';

    for (let i = 0, j = 0; i < msg.length; i++) {
      const char = msg.toUpperCase()[i];

      if (char.match(/[A-Z]/)) {
        const keyCode = key.toUpperCase()[j % key.length].charCodeAt(0) - 65;
        const charCode = char.charCodeAt(0) - 65;
        const encryptedCharCode = (charCode + keyCode) % 26 + 65;
        const encryptedChar = String.fromCharCode(encryptedCharCode);

        result += encryptedChar;

        j++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMsg, key) {
    if (!encryptedMsg || !key) {
      throw new Error('Incorrect arguments!');
    }

    let result = '';

    for (let i = 0, j = 0; i < encryptedMsg.length; i++) {
      const char = encryptedMsg.toUpperCase()[i];

      if (char.match(/[A-Z]/)) {
        const keyCode = key.toUpperCase()[j % key.length].charCodeAt(0) - 65;
        const charCode = char.charCodeAt(0) - 65;
        const decryptedCharCode = ((charCode - keyCode + 26) % 26) + 65;
        const decryptedChar = String.fromCharCode(decryptedCharCode);

        result += decryptedChar;

        j++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};

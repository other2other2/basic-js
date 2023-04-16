const { NotImplementedError } = require('../extensions/index.js');

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
  str = String(str);
  let repeatTimes = ('repeatTimes' in options) ? options.repeatTimes : 0;
  let separator = ('separator' in options) ? options.separator : '+';
  let addition = ('addition' in options) ? String(options.addition) : '';
  let additionRepeatTimes = ('additionRepeatTimes' in options) ? options.additionRepeatTimes : 0;
  let additionSeparator = ('additionSeparator' in options) ? options.additionSeparator : '|';

  const additionStr = () => {
    if (additionRepeatTimes === 0) return addition;
    let result = [];
    for (let i = 0; i < additionRepeatTimes; i += 1) {
      result.push(addition);
    }
    return result.join(additionSeparator);
  }

  const strAndAdditionStr = () => {
    if (repeatTimes === 0) return str + additionStr();
    let result = [];
    for (let i = 0; i < repeatTimes; i += 1) {
      result.push(str + additionStr());
    }
    return result.join(separator);
  }

  return strAndAdditionStr()
}

module.exports = {
  repeater
};

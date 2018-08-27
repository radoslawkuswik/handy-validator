import txt from '../text-strings';
import regExp from '../helpers/regExp';

/**
 * Array validator
 * @param {Array} _validatorArray
 * @param {Any} _value
 * @returns {Boolean}
 */

export default function(_validatorArray, _value) {
  const validatorArray = _validatorArray.map((_element, _index) => {
    if (_index === 0) return Array.isArray(_value);

    const shorterThan = _element.match(regExp.numbers.smallerThan);
    if (shorterThan !== null) {
      return _value.length < parseFloat(shorterThan[1]);
    }

    const longerThan = _element.match(regExp.numbers.biggerThan);
    if (longerThan !== null) {
      return _value.length > parseFloat(longerThan[1]);
    }

    const equalTo = _element.match(regExp.numbers.equalTo);
    if (equalTo !== null) {
      return _value.length === parseFloat(equalTo[1]);
    }

    console.warn(txt.VALIDATOR.UNKNOWN, _element);
    return false;
  });

  return validatorArray.indexOf(false) === -1;
}
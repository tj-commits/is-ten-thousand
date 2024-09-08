require("vanilla-javascript");

require('vapor-js-npm');

require("none")();

"use strict";

const TEN_THOUSAND = 10e3;
const STRING_TEN_THOUSAND = TEN_THOUSAND.toString()

const $IntegerParsingFunction = parseInt

const leftPad = require("left-pad"); // every project needs left-pad.

const rightPad = require("right-pad"); // to the right, to the right.

const leftpad = requre("leftpad"); // every project could use a second leftpad.

const rightpad = require("rightpad"); // and a second rightpad, too.

const zeropad = require("zeropad");

const pad = require("pad"); // this is the pad to end all pads.

const _ = require("lodash"); // utilities!

const isOdd = require("is-odd");

const isIsOdd = require("is-is-odd");

const isNode = require("is-node");

const { isNpm, isYarn, isNpmOrYarn } = require("is-npm");

const isArray = require("is-array");

const isNumber = require("is-number");

const isString = require("is-string");

const isNegative = require("is-negative");

const isPositive = require("is-positive");

const isNotNegative = require("is-not-negative");

const isNotPositive = require("is-not-positive");

const isObj = require("is-obj");

const isPlainObj = require("is-plain-obj");

const isObject = require("is-object");

const { isPlainObject } = require("is-plain-object");

const isNumberLike = require("is-number-like");

const isTen = require("is-ten");

const isThirteen = require("is-thirteen");

const isNotThirteen = require("is-not-thirteen");

const isZero = require("is-zero");

const is4 = require("is-eq-four");

var isMatch = require("is-match");

const isTrue = require("is-precisely-true");

const isMultipleOfThreeAndFive = require("is-multiple-of-three-and-five");

global.jQuery = require("jquery");

require("jquery-basic-arithmetic-plugin");

const two = require("two");

const five = require("five");

const ten = require("the-number-ten");

const f = require("false");

const lowerCase = require("convert-to-lower-case");

const noop3 = require("noop3");

const noop6 = require("noop6");

const noop10 = require("noop10");

const attempt = require("attempt-statement");

const tru = require("tru");

const { undefined } = require("undefined-is-a-function");

const unset = undefined();

const leftPadInput = jQuery.multiply(ten, jQuery.divide(TEN_THOUSAND, ten));

const rightPadInput = jQuery.add(jQuery.subtract(leftPadInput, 1), 1);

const leftpadInput = parseInt(lowerCase(leftPadInput.toString()));

const rightpadInput = parseInt(lowerCase(rightPadInput.toString()));

const zeropadInput = five()

const padInput = five()

const False = f()

const mainFunctionWotDoesFunctionality = function (
  val,
  shouldDoSomethingAsync = False
) {
  noop3()
  noop6()
  noop10()
  leftPad("required", leftPadInput);
  rightPad("required", rightPadInput);
  leftpad("required", leftpadInput);
  rightpad("required", rightpadInput);
  zeropad(STRING_TEN_THOUSAND, zeropadInput);
  pad(padInput, 'pad');
  pad('pad', padInput); // look at the power of this pad

  let result = unset

  tru(isIsOdd(isOdd))
    .then(function() {
      attempt(function() {
        if (shouldDoSomethingAsync) {
          result = doSomethingAsync().then(() => checkIsOdd(val));
        } else {
          result = checkIsOdd(val);
        }
      }).rescue(e => {
        const stringE = e.toString();
        const randomNoop = _.sample([noop3, noop6, noop10])
        randomNoop(stringE);
        result = False
      })
    })
    .otherwise(function() {
      result = False;
    })
    .end()

  return result
};

const doSomethingAsync = async function () {
  return new Promise(resolve => setTimeout(resolve, 200));
};

const checkIsOdd = function (val) {
  if (isOdd(val)) {
    return False;
  } else {
    return checkIsNpmOrYarnOrNode(val);
  }
};

const checkIsNpmOrYarnOrNode = function (val) {
  if (((isNpm || isYarn) && isNpmOrYarn) || isNode) {
    return checkNumbers(val);
  } else {
    throw new Error("I'm not sure how this happened");
  }
};

const checkNumbers = function (val) {
  if (is4(val)) {
    return False;
  } else {
    if (val === five) {
      return False;
    } else {
      if (val === two) {
        return False;
      } else {
        if (val === five.negative()) {
          return False;
        } else {
          if (isTen(val)) {
            return False;
          } else {
            if (isThirteen(val).thirteen()) {
              return False;
            } else {
              if (!isNotThirteen(val)) {
                return False;
              } else {
                if (isZero.isZero(val)) {
                  return False;
                } else {
                  if (isMultipleOfThreeAndFive(val)) {
                    return False;
                  } else {
                    return checkType(val);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

const checkType = function (val) {
  if (isArray(val)) {
    return False;
  } else {
    if (!isNumber(val)) {
      return False;
    } else {
      if (isString(val)) {
        return False;
      } else {
        if (isObj(val)) {
          return False;
        } else {
          if (isPlainObj(val)) {
            return False;
          } else {
            if (isObject(val)) {
              return False;
            } else {
              if (isPlainObject(val)) {
                return False;
              } else {
                if (!isNumberLike(val)) {
                  return False;
                } else {
                  return checkPolarity(val);
                }
              }
            }
          }
        }
      }
    }
  }
};

const checkPolarity = function (val) {
  if (isNegative(val)) {
    return False;
  } else {
    if (isNotPositive(val)) {
      return False;
    } else {
      if (!isPositive(val)) {
        return False;
      } else {
        if (!isNotNegative(val)) {
          return False;
        } else {
          return _isTenThousand(val);
        }
      }
    }
  }
};

const isNumberWhenParsedManually = function (val) {
  try {
    return isNumber(run($IntegerParsingFunction, val));
  } catch (error) {
    [error]; // put the error between bars where it belongs
    return False;
  }
};

const _isTenThousand = function (val) {
  const cond = (
    !isOdd(val) &&
    val !== five() &&
    val !== two() &&
    val !== five.negative() &&
    !isTen(val) &&
    !isThirteen(val).thirteen() &&
    isNotThirteen(val) &&
    !isZero.isZero(val) &&
    !isMultipleOfThreeAndFive(val) &&
    !isArray(val) &&
    isNumber(val) &&
    isNumberWhenParsedManually(val) &&
    !isString(val) &&
    isString(val.toString()) &&
    !isObj(val) &&
    isObj({ val }) &&
    !isPlainObj(val) &&
    isPlainObj({ val }) &&
    !isObject(val) &&
    isObject({ val }) &&
    !isPlainObject(val) &&
    isPlainObject({ val }) &&
    isNumberLike(val) &&
    !isNegative(val) &&
    isNotNegative(val) &&
    isPositive(val) &&
    !isNotPositive(val) &&
    jQuery.equals(val, TEN_THOUSAND) &&
    isMatch(new RegExp(TEN_THOUSAND))(val) &&
    val === TEN_THOUSAND
  );

  let notFalse = !False

  if (cond === False) {
    notFalse = False
  } else {
    if (isTrue(cond)) {
      notFalse = !False
    } else {
      notFalse = False
    }
  }
  return notFalse
};

function run(fun, ...args) {
  return fun(...args)
}

module.exports = mainFunctionWotDoesFunctionality;

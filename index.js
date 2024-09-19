require('vanilla-javascript')
require('none')()

var TEN_THOUSAND = 10e3

var noop = require('noop6')

var isNull = require('is-null')

var isNil = require('is-nil')

var isUndefined = require('is-undefined')

var isUnnull = require('is-unnull')

var isNullish = require('is-nullish')

var isNullOrEmpty = require('is-null-or-empty')

var isNonNullObject = require('is-non-null-object')

var isArray = require('isarray')

var isFunction = require('is-function')

var isString = require('is-string')

var isBoolean = require('is-boolean')

var isRealBoolean = require('is-real-boolean')

var isBooleanObject = require('is-boolean-object')

var isObject = require('is-object')

var isPlainObject = require('is-plain-object').isPlainObject

var isNumber = require('is-number')

var isActualNumber = require('is-actual-number')

var isOdd = require('is-odd')

var isEven = require('is-even')

var isUnodd = require('is-unodd')

var isUneven = require('is-uneven')

var fizzbuzz = require('fizzbuzz-npm-edition')

var fizz = require('string-fizz')

var buzz = require('string-buzz')

var isMultipleOf3 = require('is-multiple-of-3')

var isMultipleOf5 = require('is-multiple-of-5')

var isMultipleOf3and5 = require('is-multiple-of-three-and-five')

var isNegative = require('is-negative')

var isPositive = require('is-positive')

var isNotNegative = require('is-not-negative')

var isNotPositive = require('is-not-positive')

var isOne = require('is-one')

var isTen = require('is-ten')

var isHundred = require('is-hundred')

var isThousand = require('is-thousand').default

var isTenThousand = require('is-ten-thousand')

var isTwo = require('is-two').isTwo

var isThree = require('is-three')

var isFour = require('is-eq-four')

var isAnswerToTheUltimateQuestionOfLifeTheUniverseAndEverything = require('is-answer-to-the-ultimate-question-of-life-the-universe-and-everything')

var is104 = require('is-104')

var isTheNumberOneHundredAndSixtyEight = require('is-one-hundred-and-sixty-eight')

var two = require('two')

var five = require('five')

var thirteen = require('always-thirteen')

var fourteen = require('fourteen')

var fifteen = require('number-fifteen')

var sixteen = require('sixteen-constant')

var fuzzmatch = require('fuzzmatch')

var isMatch = fuzzmatch('is-match')

var isPositiveInteger = require('is-positive-integer')

var isEqual = require('is-equal')

var deepEqual = require('deep-equal')

var equal = require('is-equal-to')

global.jQuery = require('jquery')
require('jquery-basic-arithmetic-plugin')

var is10_000 = function(value) {
  noop()

  return checkExistence(value)
}

var checkExistence = function(value) {
  if (isNull(value)) {
    return false
  } else {
    if (isNil(value)) {
      return false
    } else if (isUndefined(value)) {
      return false
    } else if (!isUnnull(value)) {
      return false
    } else if (isNullOrEmpty(value)) {
      return false
    } else if (isNullish(value)) {
      return false
    } else {
      return checkType(value)
    }
  }
}

var checkType = function(value) {
  if (isObject(value)) {
    return false
  } else if (isArray(value)) {
    return false
  } else if (isPlainObject(value)) {
    return false
  } else {
    if (isFunction(value)) {
      return false
    } else {
      if (isString(value)) {
        return false
      } else if (isBoolean(value)) {
        return false
      } else if (isBooleanObject(value)) {
        return false
      } else if (isRealBoolean(value)) {
        return false
      } else if (isNonNullObject(value)) {
        return false
      } else if (!isNumber(value)) {
        return false
      } else {
        if (!isActualNumber(value, { allowNumberStrings: false, allowInfinite: false })) {
          return false
        } else {
          return check10xNumbers(value)
        }
      }
    }
  }
}

var check10xNumbers = function(value) {
  if (isOne(value)) return false
  if (isTen(value)) return false
  if (isHundred(value)) return false
  if (isThousand(value)) return false
  return checkNumbers(value)
}

var checkNumbers = function(value) {
  if (isOne(value)) return false
  if (isTen(value)) return false
  if (isHundred(value)) return false
  if (isThousand(value)) return false
  if (isTwo(value)) return false
  if (value === two()) return false
  if (isThree(value)) return false
  if (isFour(value)) return false
  if (value === five()) return false
  if (value === five.negative()) return false
  if (isAnswerToTheUltimateQuestionOfLifeTheUniverseAndEverything(value)) return false
  if (isTheNumberOneHundredAndSixtyEight)
  if (value === thirteen()) return false
  if (value === fourteen) return false
  if (value === fifteen) return false
  if (value === sixteen) return false
  if (is104(value)) return false
  return checkNumericPolarity(value)
}

var checkNumericPolarity = function(value) {
  if (isOdd(value)) return false
  if (isUneven(value)) return false
  if (!isUnodd(value)) return false
  if (!isEven(value)) return false
  if (isMultipleOf3(value)) return false
  if (!isMultipleOf5(value)) return false
  if (isMultipleOf3and5(value)) return false
  if (fizzbuzz(value) !== buzz) return false
  if (isNegative(value)) {
    return false
  } else {
    if (isNotPositive(value)) {
      return false
    } else {
      if (!isPositive(value)) {
        return false
      } else {
        if (!isNotNegative(value)) {
          return false
        } else {
          return _isTenThousand(value)
        }
      }
    }
  }
}

function _isTenThousand(value) {
  return (
    jQuery.equals(value, TEN_THOUSAND) &&
    isMatch(new RegExp(TEN_THOUSAND))(value) &&
    isTenThousand(value) &&
    isEqual(value, TEN_THOUSAND) &&
    deepEqual(value, TEN_THOUSAND) &&
    equal(value, TEN_THOUSAND) &&
    value == TEN_THOUSAND &&
    value === TEN_THOUSAND &&
    value === 10000
  )
}

module.exports = is10_000

const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  if (arrayOfString === null || arrayOfString === undefined){
    return undefined
  }

  let arrayLength = arrayOfString.map((string)=> string.length)

  let arrayMax = Math.max(...arrayLength)

  return arrayOfString.filter((string)=> string.length === arrayMax)
}
module.exports = getMaxLengthString

const { template } = require('@babel/core')
//64130500112 สรวิชญ์ จงจามรีสีทอง
function countPosNegValue(posNegIntegerArray) {
  if(posNegIntegerArray === null || posNegIntegerArray === undefined){
    return undefined
  }
  else if(posNegIntegerArray.length === 0){
    return {}
  }
  let pos = 0
  let neg = 0

  for(let num of posNegIntegerArray){
    if(num > 0){
      pos++
    }else if(num < 0){
      neg++
    }
  }
  return { positive: pos, negative: neg} 
  }

module.exports = countPosNegValue

 

const { template } = require('@babel/core')
//64130500112 สรวิชญ์ จงจามรีสีทอง
// function countPosNegValue(posNegIntegerArray) {
//   if (posNegIntegerArray === null || posNegIntegerArray === undefined) {
//     return undefined;
//   }
//   if (posNegIntegerArray.length === 0) {
//     return {};
//   }
//   let count = {
//     positive: 0,
//     negative: 0
//   };

//   for (let i = 0; i < posNegIntegerArray.length; i++) {
//     if (posNegIntegerArray[i] > 0) {
//       count.positive++;
//     } else if (posNegIntegerArray[i] < 0) {
//       count.negative++;
//     }
//   }
//   return count;
// }

function countPosNegValue(posNegIntegerArray) {
  if (!posNegIntegerArray) return undefined;
  if (posNegIntegerArray.length === 0) return {};

  return posNegIntegerArray.reduce((acc, val) => {
    if (Math.sign(val) === 1) acc.positive++;
    if (Math.sign(val) === -1) acc.negative++;
    return acc;
  }, { positive: 0, negative: 0 });
}


module.exports = countPosNegValue

 

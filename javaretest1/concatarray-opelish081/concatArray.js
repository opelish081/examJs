 const { template } = require('@babel/core')

// function concatArray(arr1, arr2) {
//   if (!arr1 && !arr2){
//     return undefined
//   }
//   else if (arr1 === [] && arr2 === []){
//     return []
//   }
//   else if (!arr1){
//     return arr2
//   }
//   else if (!arr2){
//     return arr1
//   }
// else {
//   return arr1.concat(arr2)
// }
// }
concatArray(null,null)
 module.exports = concatArray


 function concatArray(arr1, arr2) {
  if (!arr1 && !arr2){
    return undefined
  }
  else if (arr1 === [] && arr2 === []){
    return []
  }
  else if (!arr1){
    return arr2
  }
  else if (!arr2){
    return arr1
  }
  else{
    return arr1.concat(arr2)
  }
 }
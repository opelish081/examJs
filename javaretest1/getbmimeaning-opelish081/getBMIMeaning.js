const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  let BMI = weight/(height*height)
  return BMI 
}

function getBMIMeaning(weight, height) {
let BMI = calculateBMI(weight, height)
if (BMI < 18.5){
  return "Underweight"
}
else if (BMI >= 18.5 && BMI <= 24.9){
  return "Normal weight"
}
else if (BMI > 25){
  return "Overweight"
}
}

module.exports = getBMIMeaning

// function calculateBMI(weight, height) {
//   let BMI = weight/(height * height)
//     return BMI
// }
// // // - BMI < 18.5 จะแสดงข้อความ "Underweight"
// // // - BMI อยู่ในช่วง 18.5 -24.9 จะแสดงข้อความ "Normal weight"
// // // - BMI > 25.0 จะแสดงข้อความ "Overweight"

// function getBMIMeaning(weight, height){
//   let BMI = calculateBMI(weight, height)
//   if (BMI < 18.5){
//     return "Underweight"
//   }
//   else if (BMI >= 18.5 && BMI <= 24.9){
//     return "Normal weight"
//   }
//   else if (BMI > 25){
//     return "Overweight"
//   }
// }


const { template } = require('@babel/core')

//64130500112 สรวิชญ์ จงจามรีสีทอง
function countCovidStatus(covidStatusArray) {
if(covidStatusArray === null || covidStatusArray === undefined){
  return undefined
}
else if(covidStatusArray.length==0){
  return {}
}

else {
  let negativeandlowrisk = 0
  let negativeandhighrisk = 0
  let positive = 0
  let result = {}
for (const covidStatus of covidStatusArray){
  if(covidStatus === 'negative and low risk'){
    negativeandlowrisk++
  }
  else if(covidStatus === 'negative and high risk'){
    negativeandhighrisk++
  }
  else if(covidStatus === 'positive'){
    positive++
  }
}
  if(negativeandlowrisk > 0) {
    result['negative and low risk'] = negativeandlowrisk
  }
  if (negativeandhighrisk > 0) {
    result['negative and high risk'] = negativeandhighrisk
  }
  if (positive > 0) {
    result['positive'] = positive
  }
  return result
}
}

module.exports = countCovidStatus

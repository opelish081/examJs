const { template } = require('@babel/core')

//64130500112 สรวิชญ์ จงจามรีสีทอง
function countCovidStatus(covidStatusArray) {
if(covidStatusArray === null || covidStatusArray === undefined){
  return undefined
}
else if(covidStatusArray.length==0){
  return {}
}


  let lowrisk = 0
  let highrisk = 0
  let positive = 0
  let result = {}
for (const covidStatus of covidStatusArray){
  if(covidStatus === 'negative and low risk'){
    lowrisk++
  }
  else if(covidStatus === 'negative and high risk'){
    highrisk++
  }
  else if(covidStatus === 'positive'){
    positive++
  }
}
  if(lowrisk > 0) {
    result['negative and low risk'] = lowrisk
  }
  if (highrisk > 0) {
    result['negative and high risk'] = highrisk
  }
  if (positive > 0) {
    result['positive'] = positive
  }
  return result
}


module.exports = countCovidStatus

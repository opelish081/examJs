const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  let min = n1 < n2 && n1 < n3 ? n1 : n2 < n3 ? n2 : n3;
  let max = n1 > n2 && n1 > n3 ? n1 : n2 > n3 ? n2 : n3;
  let total = [n1, n2, n3];
  total.splice(total.indexOf(min),1);
  total.splice(total.indexOf(max),1);
  let med = total[0];

  return {
    min: min,
    mid: med,
    max: max
  };
}
module.exports = minMedMax

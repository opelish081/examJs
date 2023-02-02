const { template } = require('@babel/core')
//64130500112 สรวิชญ์ จงจามรีสีทอง
function findAllIndex(yourString, yourSearch) {
  indices = []
  let currentIndex = yourString.indexOf(yourSearch)
  while (currentIndex != -1) {
    indices.push(currentIndex)
    currentIndex = yourString.indexOf(yourSearch, currentIndex +1)}
    return indices
}
module.exports = findAllIndex

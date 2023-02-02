const { template } = require('@babel/core')
//64130500112 สรวิชญ์ จงจามรีสีทอง 
function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {
if(allItems === null || allItems === undefined){return undefined}
if(allItems.length===0){return []}
if(rowsPerPage <= 0){return allItems}
if(currentPage <= 0){return allItems}

return allItems.slice(rowsPerPage*(currentPage-1),(rowsPerPage*currentPage))
}

module.exports = getItemsOfCurrentPage
























// if(allItems === null || allItems === undefined){
  //   return undefined
  // }
  // if(allItems.length === 0){
  //   return []
  // }
  // if(rowsPerPage <= 0){
  //   return allItems
  // }
  // if(currentPage <= 0){
  //   return allItems
  // }

  // return allItems.slice (rowsPerPage*(currentPage-1),(rowsPerPage*currentPage))
  // // return itemrowpepage.length>0?itemrowpepage:[]
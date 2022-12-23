function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {
  if(allItems === null || allItems === undefined){
    return undefined
  }
  if(allItems.length === 0){
    return []
  }
  if(rowsPerPage <= 0){
    return allItems
  }
  if(currentPage <= 0){
    return allItems
  }

  const itemrowpepage=allItems.slice (rowsPerPage*(currentPage-1),(rowsPerPage*currentPage))
  return itemrowpepage.length>0?itemrowpepage:[]
}

function gretting(person){return `hello,${person}`}

// module.exports = {getItemsOfCurrentPage,gretting}
export {getItemsOfCurrentPage,gretting}

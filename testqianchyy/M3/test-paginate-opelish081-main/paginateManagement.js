const { template } = require('@babel/core')
// import { getItemsOfCurrentPage, getTotalPages } from './lib/paginate.js'
// import { products } from './data/products.js'

const { getItemsOfCurrentPage, getTotalPages } = require('./lib/paginate.js')
const products = require('./data/products.js')

// 64130500112  สรวิชญ์ จงจามรีสีทอง
function paginateManagement(items, rows) {
  const rowsPerPage = rows
  const products = items


  const showItemsOfCurrentPage = (currentPageNumber) => {
    // let allItem = getItemsOfCurrentPage(products,currentPageNumber,rowsPerPage)
    // let getLi = document.getElementById('products')
    // for(i = 0; i < allItem.length;i++){
    //   let newLi = document.createElement('li')
    //   newLi.textContent = `ID:${getItemsOfCurrentPage.id}, NAME:${getItemsOfCurrentPage.name}`
    //   getLi.appendChild(newLi)
    // }
    // นายโค้ด

    // let item = getItemsOfCurrentPage(products,currentPageNumber,rowsPerPage)
    // const ulEle = document.getElementById('products')
    // for(const i of item){
    //   const leEle = document.createElement('li')
    //   leEle.textContent = `ID:${i.id}, NAME:${i.name}`
    //   ulEle.appendChild(leEle)
    // }
    // non code


    let items = getItemsOfCurrentPage(products, currentPageNumber, rowsPerPage)
    const ulElement = document.getElementById('products')

    for (const item of items) {
    const liElement = document.createElement('li')
    liElement.textContent = `ID:${item.id}, NAME:${item.name}`
    ulElement.appendChild(liElement)
    }
    
  }


  const pageHandler = (event) => {
    // let buttonColor = document.querySelectorAll('button')
    // for (let i = 0; i < buttonColor.length; i++) {
    //     buttonColor[i].style = 'border: 1px solid #999'
    // }
    // if(event){
    //   document.getElementById('products').textContent = ''
    //   showItemsOfCurrentPage(event.target.id)
    //   document.getElementById(event.target.id).style = 'background-color: LightSteelBlue'
    // }else{
    //   showItemsOfCurrentPage(1)
    //   document.getElementById(1).style = 'background-color: LightSteelBlue'
    // }
    // ตามแบบนายจะได้ หน้าเว็บถูก แต่ node ไม่ถูก


    // const removetext = document.getElementById('products')
    // removetext.textContent = ''

    // const firstButt = document.querySelector('button')
    // let checkButt = event?.target??firstButt

    // let allButt = document.querySelectorAll('button')
    // for(let i = 0;i < allButt.length;i++){
    //   allButt[i].setAttribute('style','border: 1px solid #999')
    // }
    // showItemsOfCurrentPage(checkButt.textContent)
    // checkButt.setAttribute('style','background-color: LightSteelBlue')
    // non code



    // clean button click styles
    const pagesStyle = document.querySelectorAll('button')
    pagesStyle.forEach((page) => (page.style = 'border: 1px solid #999'))

    //clean previous page's items
    const productsUl = document.getElementById('products')
    productsUl.textContent = ''

    //calculating current page
    const currentPage = event?.target.id ?? 1
    showItemsOfCurrentPage(currentPage, rowsPerPage)

    //add button click style to a current page
    const targetPageButton = document.getElementById(currentPage)
    targetPageButton.style = 'background-color: LightSteelBlue'
    
  }


  const showPageNumbers = () => {
    const totalPage = getTotalPages(products,rowsPerPage)
    let page = document.getElementsByClassName('pagination')[0]
    for (let i = 1; i <= totalPage; i++) {
      let newButton = document.createElement('button')
      newButton.textContent = i
      newButton.setAttribute('id',i)
      newButton.addEventListener('click', pageHandler)
      page.appendChild(newButton)
    }
    
  }


  return {
    showPageNumbers,
    pageHandler
  }

}


module.exports = paginateManagement
// export { paginateManagement }
// const { showPageNumbers, pageHandler } = paginateManagement(products, 10)
// showPageNumbers()
// pageHandler()




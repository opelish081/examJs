// import { products } from './data/products.js'
const { template } = require('@babel/core')
const products = require('./data/products.js')

//64130500112 สรวิชญ์ จงจามรีสีทอง
function itemList(userItems) {
  const items = userItems

  const initialPage = () => {
    let text = document.querySelector('input')
    text.addEventListener('input',filterItemsHandler)
    showItems(items)




    // let typeText = document.querySelectorAll('input')[0]
    // typeText.addEventListener('input', filterItemsHandler)
    // showItems(items)
  }

  const filterItemsHandler = (event) => {
    let text = event.target.value
    let filterText = items.filter(e => e.keywords.toLowerCase().includes(text.toLowerCase()))
    showItems(filterText)





    // let targetvalue = event.target.value
    // let filterItem = items.filter(e => e.keywords.toLowerCase().includes(targetvalue.toLowerCase()))
    // showItems(filterItem)
  }

  const showItems = (items) => {
    let arrayOfItem = document.getElementById('items')
    arrayOfItem.textContent = ''
    for (let i = 0; i < items.length; i++) {
      let createLi = document.createElement('li')
      createLi.textContent = `ID:${items[i].id}, NAME:${items[i].name}, KEYWORDS:${items[i].keywords}`
      arrayOfItem.appendChild(createLi)
    }






    // let ulItems = document.getElementById('items')
    // ulItems.textContent = ''
    // for (let i = 0; i < items.length; i++) {
    //   let liEle = document.createElement('li')
    //   liEle.textContent = `ID:${items[i].id}, NAME:${items[i].name}, KEYWORDS:${items[i].keywords}`
    //   ulItems.appendChild(liEle)
    // }
  }

  return {
    initialPage,
    filterItemsHandler,
    showItems
  }
}
module.exports = itemList
// export { itemList }
// const { initialPage, filterItemsHandler, showItems } = itemList(products)
// initialPage()

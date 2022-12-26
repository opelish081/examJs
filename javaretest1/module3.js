const tagP = document.createElement('p')
// <p id=1001 >Hello</p>
tagP.setAttribute('id','1001')
tagP.textContent='Hello'

const bodyNode = document.body
bodyNode.appendChild(tagP)
console.log(bodyNode)


const divElement = document.body.children[1]

const ulElement = document.createElement('ul') //<ul></ul>

const li1Element = document.createElement('li')
li1Element.textContent='Name1'

const li2Element = document.createElement('li')
li2Element.textContent='Name1'

ulElement.appendChild(li1Element)
ulElement.appendChild(li2Element)

divElement.appendChild(ulElement)

const div1 = document.getElementById('1')

const div = document.querySelectorAll('div')

div[1]
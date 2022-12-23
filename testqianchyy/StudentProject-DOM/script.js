let listfirstfood = document.getElementById('favorFood')
alert(`My most favorited food is ${listfirstfood.children[0].textContent}` )

let listsecondfood = document.createElement('li')
listsecondfood.textContent = 'bualoy'
listfirstfood.appendChild(listsecondfood)
alert(`My second favorited food is ${listfirstfood.children[1].textContent}`)

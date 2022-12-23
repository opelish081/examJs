let quotes = [
  "Do Your Best and Keep Going",
  "Do not Give up",
  "Everyone makes mistake, This Is How You Can Love and Forgive Yourself",
];

window.addEventListener("load" ,() => {
  alert(quotes[Math.floor(Math.random()*quotes.length)])
})

const buttonred = document.getElementById('red')
buttonred.addEventListener("click", () => {
  let body = document.body
  body.style = 'background-color: red'
})

const buttongreen = document.getElementById('green')
buttongreen.addEventListener("click", () => {
  let body = document.body
  body.style = 'background-color: green'
})

const buttonblue = document.getElementById('blue')
buttonblue.addEventListener("click", () => {
  let body = document.body
  body.style = 'background-color: blue'
})


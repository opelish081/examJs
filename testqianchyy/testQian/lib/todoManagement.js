const Todo = require('./todo.js')

function todoManagement() {
  let todos = []
  function addTodo(desc) {
    let newtodo = new Todo(desc)
    todos.push(newtodo)
    return newtodo.id
  }
  function removeTodo(removeId) {
    todos = todos.filter((todo) => todo.id !== removeId)
  }
  function findTodo(searchId) {
    return todos.find((todo) => todo.id === searchId)
  }
  function getTodos() {
    return todos
  }
  function getNumberOfDone() {
    return todos.filter(e => e.done).length
  }
  function getNumberOfNotDone() {
    return todos.filter(e => !e.done).length
  }

  return {
    addTodo,
    removeTodo,
    findTodo,
    getTodos,
    getNumberOfDone,
    getNumberOfNotDone
  }
}
module.exports = todoManagement

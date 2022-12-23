function todoUserInterface() {
  function showTodoItem(newId, newDescription) {
    let listTodo = document.getElementById('listTodo')

    let todoItem = document.createElement('div')
    todoItem.setAttribute('class', "todoItem")
    todoItem.setAttribute('id', newId)

    let pTag = document.createElement('p')
    pTag.textContent = newDescription

    let buttonnotdone = document.createElement('button')
    buttonnotdone.textContent = 'Not Done'

    let remove = document.createElement('button')
    remove.textContent = 'remove'

    todoItem.appendChild(pTag)
    todoItem.appendChild(buttonnotdone)
    todoItem.appendChild(remove)

    listTodo.appendChild(todoItem)

  }
  function showNumberOfDone(numberOfDone) {
    let done = document.getElementById('done')
    done.textContent = 'Number of Done:' + numberOfDone
  }
  function showNumberOfNotDone(numberOfNotDone) {
    let notdone = document.getElementById('notDone')
    notdone.textContent = 'Number of Not Done:' + numberOfNotDone
  }
  return { showTodoItem, showNumberOfDone, showNumberOfNotDone }
}
module.exports = todoUserInterface

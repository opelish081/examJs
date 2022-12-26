class Todo{
    static runningId = 1
    constructor(description){
        this.id=Todo.runningId++
        this.description=description
    }
    getTodo(){
        return {id:this.id,description:this.description}
    }
    setDescription(newDescription){
        return this.description=newDescription
    }
}

// todo List
let todos=[]
function addTodo(desc){
    return todos.push(new Todo(desc))
}

function removeTodo(removeId){
    todos = todos.filter(td=>td.id!==removeId)
}

function findTodo(searchId){
    return todos.find(td=>td.id === searchId)
}

function getTodos(){
    return todos
}

console.log(addTodo('title'))
console.log(getTodos())
console.log('------------------')
console.log(addTodo('title2'))
console.log(getTodos())
console.log('------------------')
console.log(removeTodo(2))
console.log(getTodos())

console.log('------------------')
console.log(findTodo(2))
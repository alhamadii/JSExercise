// let myTodos = ['Buy Bread', 'Go to Gym', 'Record youtube videos']
// console.log(myTodos.indexOf('Buy Bread'));

const newTodos =[{
    title: 'Buy Bread',
    isDone: false,
}, {
    title: 'Go to Gym',
    isDone: false,
} ,{
    title: 'Record youtube videos',
    isDone: true,
}];
// console.log(newTodos[0].title);

// const index = newTodos.findIndex(function(item, index){
//     return item.title === 'Go to Gym'
// })
// console.log(index);

const findTodo = function(myTodos, title){
    const index = myTodos.findIndex(function(todo, index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return myTodos[index]
}
let printMe = findTodo(newTodos, 'Go to Gym')
console.log(printMe);

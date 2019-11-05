// const seyHello = function(name){
//     return `Hey there, ${name} !`
// }
// console.log(seyHello('hamad'));

const seyHello = (name) => `Hey there, ${name} !`;

// console.log(seyHello('hamad'));

const toDos = [{
    title: 'Buy bread',
    isDone: true
}, {
    title: 'Go to gym',
    isDone: true
}, {
    title: 'Record youtube video',
    isDone: false
}]

const thingsDone = toDos.filter((todo) => todo.isDone === true)

//  console.log(thingsDone);

const myTodos = [{
    title: 'fix car',
    isDone: true
}, {
    title: 'fix mobile',
    isDone: false
}, {
    title: 'fix mobile' ,
    isDone: true
}, {
    title: 'go to work',
    isDone: false
}, {
    title: 'play football',
    isDone: true
}, {
    title: 'fix my pc',
    isDone: false
}]

const checkList = myTodos.filter((todo) => todo.isDone === false)
const myIndex = myTodos.findIndex((todo) => todo.isDone === false)
console.log(checkList);
console.log(myIndex);
console.log(checkList[0].title);
checkList.forEach((todo) => console.log(todo.title)
)
// for (let index = 0; index < checkList.length; index++) {
//     const element = checkList[index].title;
//     console.log(element);
    
// }




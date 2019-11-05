// const sayHello = function(name){
//     return `Hello ${name}`;
// }
// console.log(sayHello('hamad'));

// const sayHello2 = (name) => {`Hello ${name}`};
// console.log(sayHello2('ahmad'));

// const todo =[{
//     title: 'Buy Bread',
//     isDone: true,
// }, {
//     title: 'Go to gym',
//     isDone: true,
// }, {
//     title: 'Record youtube video',
//     isDone: false,
// }]
// 
// const thingsDone = todo.filter((todo) => todo.isDone === true)
// thingsDone.forEach(doneElment => console.log(doneElment.isDone))
// thingsDone.forEach(doneitems => console.log(thingsDone.indexOf(doneitems)))
// console.log(thingsDone[0].isDone);

const cameras = {
    price: 600,
    weight: 2000,
    myDes: function(){
        return `This canon is of ${this.price} ${this.weight}`
    }
}
console.log(cameras.myDes());

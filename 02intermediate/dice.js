let numOne = 22;
let numTwo = 7;
result = numOne / numTwo
let floatRes = result.toFixed(2);
// console.log(floatRes);
// console.log(Math.floor(floatRes));
// console.log(Math.ceil(floatRes));
let counter = 100;
let list = []
for (let index = 0; index < counter; index++) {
    let upper = 25;
    let lower = 20;
    
    let myRandom = Math.floor(Math.random() * (upper - lower + 1)) + lower

    list.push(myRandom)
    
} 
// let upper = 25;
// let lower = 20;

// let myRandom = Math.floor(Math.random() * (upper - lower + 1)) + lower

// console.log(myRandom);
console.log(list);

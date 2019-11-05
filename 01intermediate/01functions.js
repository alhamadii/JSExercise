let sayHello = function(name){
    console.log(`greating message for ${name}`);
    console.log(`Hey ${name}`);
    
}
// sayHello('hamad')
let fullNameMaker = function(firstName, lastName){
    console.log('Welcome to LOC');
    console.log(`Happy to have you, ${firstName} ${lastName} `);
    
}
// fullNameMaker('hamad','ahmad')

let myAdder = function(num1, num2){
    let added = num1 + num2
    return added
}
// console.log(myAdder(3, 8));

let myMulti = function(num3, num4){
    // let multi = num3 * num4
    // return multi
    return num3 * num4
}
// console.log(myMulti(3 ,7));

let guestUser = function(name = 'unName', courseCount = 0){
    // return 'hello '+ name + 'and your count is : ' + courseCount;
    return `hello ${name} and your count is: ${courseCount}`;
}
console.log(guestUser('hamad'));

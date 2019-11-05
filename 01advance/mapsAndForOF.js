var hamad = {
    name: 'I am Hamad',
    age: 39,
    isActive: true,
}

var marry = {
    name: 'I am marry',
    age: 33,
    isActive: true,
}

var sam = {
    name: 'I am sam',
    age: 22,
    isActive: false,

}

let users = new Map()
// console.log(typeof users);
users.set('hamad', hamad)
users.set('marry', marry)
users.set('sam', sam)

// console.log(users.size);
// console.log(users.get('hamad'));
// console.log(users.keys());
// console.log(users.values());
// for (const key of users.keys()) {
//     console.log(key);
// }

// for (const value of users.values()) {
//     console.log(value.isActive);
    
// }

for (const [key, value] of users.entries()) {
    // console.log(key + '=' + value.name);
    // console.log(`${key} = ${value.name}`);
    
}

// let name = (nameIs)=> users(nameIs).age;
// console.log(name);

users.forEach((value, key) => console.log(`${key} = ${value.name}`))
localStorage.setItem('hero', 'thor')
localStorage.setItem('todo', 'buy ice tea');
var myHero = localStorage.getItem('hero');
// alert(myHero)
console.log(myHero);

console.log(localStorage.getItem('todo'));

localStorage.setItem('todo', 'record video');
console.log(localStorage.getItem('todo'));

localStorage.removeItem('hero')

myHero = localStorage.getItem('hero');
console.log(myHero);


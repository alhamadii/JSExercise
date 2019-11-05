// alert('connected')

// var h = document.createElement('h1');
// var myValue = document.createTextNode('Hello World');
// h.appendChild(myValue);
// document.querySelector('h1').appendChild(h);
// let val = 5;
// while (val >0) {
//     console.log(val);
//     val--;
// }
var ul = document.getElementById('list');
var li;
 

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem)

var removeAllButton = document.getElementById('all');
removeAllButton.addEventListener('click', rAll)

function addItem (){
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item);
    if (item === '') {
        // document.getElementById('etodo').textContent = 'Enter your todo';
        var pAlert = document.createElement('p');
        var text =document.createTextNode('Enter your todo');
        pAlert.appendChild(text);
        var input = document.querySelector('p');
        input.appendChild(pAlert);

        // pAlert.setAttribute('id', 'etodo');
        // pAlert.textContent = 'Enter your todo';
        // pAlert.textContent= 'Enter your todo';
        // setTimeout(() => {
        //     pAlert.className = 'visual';
        // }, 2);
        // console.log(document.getElementsByClassName('.controls'));
        
        return false;


    } else {
        document.getElementById('etodo').textContent ='';
        li = document.createElement('li');

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');
        
        var label = document.createElement('label');
        label.setAttribute('for', 'item');
        
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        setTimeout(() => {
            li.className = 'visual';
        }, 2);
        input.value = '';
        
    }
}
function removeItem(){
    // console.log('Delete button clicked');
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        // const element = li[index];
        // console.log(element);
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
    }
}

function rAll(){
    temp =ul.children
    // for (let index = 0; index < temp.length; index++) {
    //     const element = array[index];
    //     ul.removeChild(element);
    // }
    while (temp.length > 0) {
        ul.removeChild(temp[0]);
    }
   
   console.log(temp.length)
   
}
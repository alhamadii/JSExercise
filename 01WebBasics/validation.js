// alert('connected')
function myValidation(){
    // let myValue =document.querySelector('#myform').value
    let myValue =document.getElementById('myform').value;
    if (isNaN(myValue) || myValue<1 || myValue >20) {
        console.log('not a valid input');
        document.getElementById('idone').textContent = 'not a valid input'
        
    } else{
        console.log('this input is ok');
        document.getElementById('idone').textContent =  'this input is ok'

    }
}

document.querySelector('.myform').addEventListener('submit', (event) =>{
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.realName.value);
    event.target.username.value = '';
    event.target.realName.value = '';
})
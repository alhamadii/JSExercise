// alert('File is attached')
// const myPElments = document.querySelector('p');
// myPElments.textContent = 'I am being change using JS'
// console.log(myPElments);

// myPElments = document.querySelectorAll('p');
// myPElments.forEach(function(p){
    // p.textContent = 'I am changed using loop in js'
    // myPElments.forEach((p) => p.textContent = 'I am changed using loop in js');

    // console.log(document.title);
    // document.title = 'Changed'

    // console.log(document.getElementById('idone'));

    // const myElement = document.querySelectorAll('.classone')
    // console.log(myElement[0]);
    
    document.querySelector('#myform').addEventListener('input', () => {
        console.log(event.target.value);
        
    })
let myFunc = function(cMark, tMark){
    let pMark = (cMark / tMark)*100
    let myGrad = ''
    if (pMark >= 90){
        myGrad = 'A'  
    }else if (pMark >= 80){
        myGrad = 'B'
    }else if (pMark >= 70){
        myGrad = 'C' 
    }else if (pMark >= 60){
        myGrad = 'D' 
    }else {
        myGrad = 'F'
    }
    return console.log(`Your mark is ${pMark} and grad is: ${myGrad}`);
}
 let getGrad = myFunc(60, 100)
console.log(getGrad);

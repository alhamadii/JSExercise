let userEmail = 'lco123';
let password = '12341345666';

// let temp = '   hamad ahmad yousif   '
// temp2 = temp.trim();
// console.log(password.length);
// console.log(userEmail.toUpperCase());
// console.log(temp2);
// console.log(temp);

let userChecker = function(myString){
    if ((myString.includes('123')) && (myString.length >= 6)) {
        return true
    }else{
        return false
    }
}
let passChecker = function(myPass){
    if ((myPass.includes('1234')) && (myPass.length > 8)) {
        return true
    }else {
        return false
    }
}
console.log(userChecker(userEmail));
console.log(passChecker(password));


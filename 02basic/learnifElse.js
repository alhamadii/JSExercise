if (false) {
    // console.log("I'm inside block ");
    // console.log("I'm still inside block ");
}
else if(false){
    // console.log("I'm inside IF IN CAPS");
}
else{
    // console.log('Notice this part');
    
}

var whoIsHere = 'teacher0'

if (whoIsHere === 'user') {
    console.log('greating message for user');
    console.log('Allow acess to view all courses');
}else if (whoIsHere === 'teacher') {
    console.log('greating message for teacher');
    console.log('Allow acess to view his courses');
}else{
    console.log('Message:please vervify your email');
    console.log('send user an email for verification');
}
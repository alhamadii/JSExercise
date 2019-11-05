let isVerified = false;
let isLoggedIn = true;
let hasPaymentToken =true;
let isGuset = true;

if (isVerified && isLoggedIn && hasPaymentToken) {
    console.log('greating message to user');
    console.log('grant access to paid course');
} else if (isVerified || isGuset){
    console.log('Allow free previews');
}else{
    console.log('please contact admin');
    
}
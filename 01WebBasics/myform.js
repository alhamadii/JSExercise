
document.querySelector('.Hform').addEventListener('submit', (x) => {
    x.preventDefault();
     console.log(x.target.username.value);
     console.log(x.target.email.value);
     console.log(x.target.password.value);
     console.log(x.target.passwordCom.value);
     if (x.target.password.value != x.target.passwordCom.value) {
        document.getElementById('id').textContent = 'Password Do not match'

    }
    x.target.username.value = '';
    x.target.email.value = '';
    x.target.password.value = '';
    x.target.passwordCom.value = '';
})
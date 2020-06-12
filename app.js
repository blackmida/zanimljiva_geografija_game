// DOM ELEMENTS
const buttonUpdateUsername = document.querySelector('#buttonUpdateUsername');
let inputUsername = document.querySelector('#inputUsername');
let usernameError = document.querySelector('#usernameError');

// RegEx for Username
const usernameRegexp = /^\S*$/;

buttonUpdateUsername.addEventListener('click', () => {
    let username = inputUsername.value;
    if(usernameRegexp.test(username)){
        alert('Nema space!')
    }
    else{
        inputUsername.value = '';
        usernameError.innerHTML = 'Username ne sme da ima space (prazna polja).';
        setTimeout(function(){
            usernameError.innerHTML = '';
        }, 2000);
    }
})
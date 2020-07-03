import { Term } from "./term.js";


// DOM ELEMENTS
const buttonUpdateUsername = document.querySelector('#buttonUpdateUsername');
let inputUsername = document.querySelector('#inputUsername');
let usernameError = document.querySelector('#usernameError');

let formAddTerm = document.querySelector('#formAddTerm');
let inputTerm = document.querySelector('#inputTerm');

let usernameModal = document.querySelector('#modalUsername');
// RegEx for Username
const usernameRegexp = /^\S*$/;


// Here is the button which create/update username
buttonUpdateUsername.addEventListener('click', () => {
    let username = inputUsername.value;
    if(usernameRegexp.test(username)){
        localStorage.setItem('usernameLS', username);
        usernameError.innerHTML = `Dobrodosao ${username}!`;
        setTimeout(function(){
            usernameError.innerHTML = '';
            usernameModal.style.display = "none";
        }, 2000);

    }
    else{
        inputUsername.value = '';
        usernameError.innerHTML = 'Username ne sme da ima space (prazna polja).';
        setTimeout(function(){
            usernameError.innerHTML = '';
            
        }, 2000);
    }
});

formAddTerm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Check and replace everything that is not letter
    // Check and repalce all underscores
    let term = inputTerm.value.replace(/[^A-Ž]+/gi, "").replace(/[_]+/gi, "");
    term = term[0].toUpperCase() + term.slice(1).toLowerCase();
    console.log(term);
})
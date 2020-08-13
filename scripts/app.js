import { Term } from "./term.js";


// DOM ELEMENTS
// const buttonUpdateUsername = document.querySelector('#buttonUpdateUsername');
const formUpdateUsername = document.querySelector('#formUpdateUsername');
let inputUsername = document.querySelector('#inputUsername');
let usernameError = document.querySelector('#usernameError');


const formAddTerm = document.querySelector('#formAddTerm');
let inputTerm = document.querySelector('#inputTerm');
let selectCategoryAddTerm = document.querySelector('#selectCategoryAddTerm');

let usernameModal = document.querySelector('#modalUsername');
// RegEx for Username
const usernameRegexp = /^\S*$/;


let buttonHallOfFame = document.querySelector('#buttonHallOfFame');

formUpdateUsername.addEventListener('submit', (e) => {
    e.preventDefault();
    let username = inputUsername.value;
    if (usernameRegexp.test(username)) {
        localStorage.setItem('usernameLS', username);
        usernameError.innerHTML = `Dobrodosao ${username}!`;
        // OVDE JE POKUSAJ STILIZACIJE PORUKE PRILIKOM PRIJAVE
        // usernameError.innerHTML = `<p style="color: green;">Dobrodosao ${username}!</p>Dobrodosao ${username}!`;
        setTimeout(function () {
            usernameError.innerHTML = '';
            usernameModal.style.display = "none";
        }, 2000);

    }
    else {
        inputUsername.value = '';
        usernameError.innerHTML = 'Username ne sme da ima space (prazna polja).';
        setTimeout(function () {
            usernameError.innerHTML = '';

        }, 2000);
    }
});

formAddTerm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (selectCategoryAddTerm.value != '') {
        // Check and replace everything that is not letter
        // Check and repalce all underscores
        let termFromForm = inputTerm.value.replace(/[^A-Ž]+/gi, "").replace(/[_]+/gi, "");
        termFromForm = termFromForm[0].toUpperCase() + termFromForm.slice(1).toLowerCase();

        let category = selectCategoryAddTerm.value;

        let term = new Term(category, termFromForm);
        term.checkTermInDatabase();
    }
    else{
        alert('Morate da izaberete kategoriju!')
    }
    formAddTerm.reset();
})
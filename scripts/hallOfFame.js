import { Term } from "./term.js";
let term = new Term();

let tdUserName = document.querySelectorAll('.tdUserName');
let tdTerms = document.querySelectorAll('.tdTerms');

term.topFiveUsersByTerms(data => {
    let listOfObjects = {};
    data.forEach(function (x) {
        listOfObjects[x] = (listOfObjects[x] || 0) + 1;
    })

    // Kreiram niz sa od liste objekata i onda vrsim njeno sortiranje i izdvajanje najboljih 5
    let topFiveSorted = Object.entries(listOfObjects).sort((a, b) => (a[1] < b[1]) ? 1 : -1).slice(0, 5);

    // topListUl.innerHTML = '';

    topFiveSorted.forEach((o, i) => {
        tdUserName[i].innerHTML = o[0];
        tdTerms[i].innerHTML = o[1];
        // topListUl.innerHTML += `<li>${o[0]}: ${o[1]}</li>`;
    })
})
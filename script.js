// MODAL 
// Get the modal
var modalStartGame = document.getElementById("modalStartGame");
var modalUsername = document.querySelector('#modalUsername');
var modalAddTerm = document.querySelector('#modalAddTerm');

// Get the button that opens the modal
var buttonStartGame = document.getElementById("buttonStartGame");
var buttonLogin = document.querySelector('#buttonLogin');
var buttonAddTerm = document.querySelector('#buttonAddTerm');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var closeUsername = document.querySelector('#closeUsername');
var closeAddTerm = document.querySelector('#closeAddTerm');

// When the user clicks the button, open the modal 
buttonStartGame.onclick = function() {
  modalStartGame.style.display = "block";
}

buttonLogin.onclick = function(){
  modalUsername.style.display = 'block';
  buttonLogin.style.outline = 'none';
}

buttonAddTerm.addEventListener('click', () => {
  modalAddTerm.style.display = 'block';
})

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalStartGame.style.display = "none";
}
closeUsername.onclick = function(){
  modalUsername.style.display = "none";
}
closeAddTerm.onclick = function(){
  modalAddTerm.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalStartGame || event.target == modalUsername || event.target == modalAddTerm) {
    modalStartGame.style.display = "none";
    modalUsername.style.display = "none";
    modalAddTerm.style.display = "none";
  }
}

let buttonVsComputer = document.querySelector('#buttonVsComputer');
buttonVsComputer.addEventListener('click', () => {
  console.log('Kliknuto');
})
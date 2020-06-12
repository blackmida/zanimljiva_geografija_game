// MODAL 
// Get the modal
var modalStartGame = document.getElementById("modalStartGame");
var modalUsername = document.querySelector('#modalUsername');

// Get the button that opens the modal
var buttonStartGame = document.getElementById("buttonStartGame");
var buttonLogin = document.querySelector('#buttonLogin');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var closeUsername = document.querySelector('#closeUsername');

// When the user clicks the button, open the modal 
buttonStartGame.onclick = function() {
  modalStartGame.style.display = "block";
}

buttonLogin.onclick = function(){
  modalUsername.style.display = 'block';
  buttonLogin.style.outline = 'none';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalStartGame.style.display = "none";
}
closeUsername.onclick = function(){
  modalUsername.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalStartGame || event.target == modalUsername) {
    modalStartGame.style.display = "none";
    modalUsername.style.display = "none";
  }
}

let buttonVsComputer = document.querySelector('#buttonVsComputer');
buttonVsComputer.addEventListener('click', () => {
  console.log('Kliknuto');
})
// Get the modal -myModalreg old name
var regmodal = document.getElementById("myModalRegister");

// Get the button that opens the modal - myBtnreg old name
var btn = document.getElementById("myBtnRegister");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeRegister")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  regmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  regmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == regmodal) {
    regmodal.style.display = "none";
  }
}
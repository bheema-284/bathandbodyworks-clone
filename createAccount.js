document.querySelector("#form").addEventListener("submit", signUp);
<<<<<<< HEAD
var userData = JSON.parse(localStorage.getItem("userDatabase"));
function signUp(event) {
  event.prevetDefault();
=======
var userData = JSON.parse(localStorage.getItem("userDatabase")) || [];

function signUp(event) {
  event.preventDefault();
>>>>>>> 3da0ab532f3fec41e2ebd9a4453a3c44e81794fb
  var frname = document.querySelector("#inf1").value;
  var lasname = document.querySelector("#inf2").value;
  var email = document.querySelector("#inf3").value;
  var conemail = document.querySelector("#inf4").value;
  var postal = document.querySelector("#inf5").value;
  var pass = document.querySelector("#inf6").value;

  var userCred = {
    fname: frname,
    lname: lasname,
    email: email,
    cemail: conemail,
    postal: postal,
    pass: pass,
  };
  userData.push(userCred);
  localStorage.setItem("userDatabase", JSON.stringify(userData));
  window.location.href = "sign.html";
}

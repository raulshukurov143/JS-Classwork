let nameInput = document.querySelector("#name");
let surnameInput = document.querySelector("#surname");
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let checkbox = document.querySelector("#checkbox");
let checked = document.querySelector("#checked");
let submitBtn = document.querySelector("#submit");

nameInput.addEventListener("focus", function () {
  this.style.backgroundColor = "grey";
});
nameInput.addEventListener("mouseout", function () {
  this.style.backgroundColor = "transparent";
  this.style.color = "transparent";
});
nameInput.addEventListener("mouseup", function () {
  this.style.color = "black";
});

surnameInput.addEventListener("mouseover", function () {
  this.style.backgroundColor = "red";
});
surnameInput.addEventListener("mouseout", function () {
  this.style.backgroundColor = "transparent";
});
emailInput.addEventListener("contextmenu", function () {
  this.style.backgroundColor = "red";
});
emailInput.addEventListener("blur", function () {
  this.style.backgroundColor = "transparent";
});
passwordInput.addEventListener("click", function () {
  this.value = "12345";
});
passwordInput.addEventListener("mouseout", function () {
  this.value = "";
});
// checkbox.addEventListener("focus",function(){
//     checked.style.visibility="visible"
// })

submitBtn.setAttribute("disabled","")
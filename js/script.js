var link = document.querySelector(".form-popup");
var popup = document.querySelector(".popup");
var shadow = document.querySelector(".overlay");
var close = document.querySelector(".btn-close");
var name = popup.querySelector("[name=text]");

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("popup-show");
  shadow.classList.add("overlay-show");
  name.focus();
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("popup-show");
  shadow.classList.remove("overlay-show");
});



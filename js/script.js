var link = document.querySelector(".form-popup");
var popup = document.querySelector(".write-us");
var close = popup.querySelector(".btn-close");
var login = popup.querySelector("[name=text]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=email]");

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("popup-content-show");
  login.focus();
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("popup-content-show");
  popup.classList.remove("popup-error");
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

form.addEventListener("submit", function (event) {
  if (!Text.value || !email.value) {
    event.preventDefault();
    popup.classList.remove("popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-error");
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains(".popup-content-show")) {
      popup.classList.remove("popup-content-show");
      popup.classList.remove("popup-error");
    }
  }
});
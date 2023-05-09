let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}

var homeBtn = document.getElementById("#home");
var carsBtn = document.getElementById("#cars");
var aboutBtn = document.getElementById("#about");
var partsBtn = document.getElementById("#parts");

homeBtn.addEventListener("click", function() {
    window.location.href = "#home";
});

carsBtn.addEventListener("click", function() {
    window.location.href = "#cars";
});

aboutBtn.addEventListener("click", function() {
    window.location.href = "#about";
});

partsBtn.addEventListener("click", function() {
    window.location.href = "#parts";
});

loginBtn.addEventListener("click", function() {
    window.location.href = "login";
});
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('register-Link');
const btnpopup = document.querySelector('Btnlogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.Add('active');
})
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})
btnpopup.addEventListener('click', () => {
    wrapper.classList.Add('active-popup');
})
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
})
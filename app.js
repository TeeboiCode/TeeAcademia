const closeBtn = document.getElementById('close');
const menuBtn = document.getElementById('menu');
const sideBar = document.querySelector('.nav-sideBar');
let body = document.querySelector('body');
const preloader = document.getElementById('preloader');
const preloaderOthers = document.getElementById('preloaderOthers');
const logoSlide = document.getElementById('logoSlide');
const cardLogo = document.getElementById('cardLogo');

let copy = logoSlide.cloneNode(true);

cardLogo.appendChild(copy);

closeBtn.addEventListener('click', ()=>{
    sideBar.style.top = "-600px"
});

menuBtn.addEventListener('click', ()=>{
    sideBar.style.top = "0"
});

window.onload = function() {
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 1000);
};



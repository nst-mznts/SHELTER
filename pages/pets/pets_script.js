/*
Create a burger menu
*/
const logo = document.querySelector('.logo');
const logoMobile = document.querySelector('.logo-mobile');
const burger = document.querySelector(".burger");
const mobileBurger = document.querySelector(".mobile_burger");

// Open menu
burger.addEventListener('click',() => {
    let x = document.getElementById("links");
    x.style.display = "block";
    logoMobile.style.display = 'flex';
    logo.style.display = 'none';
    burger.style.display = 'none';
});

// Close menu
mobileBurger.addEventListener('click',() => {
    let x = document.getElementById("links");
    x.style.display = "none";
    logoMobile.style.display = 'none';
    logo.style.display = 'block';
    burger.style.display = 'block';
});
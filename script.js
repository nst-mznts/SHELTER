let pet = [];
fetch('./pets.json')
    .then(response => {
        pet = response.json();
    })
    .then(data => {
        console.log(data);
    });
setTimeout(()=>console.log(pet[0]));

const burger = document.querySelector(".burger");
burger.addEventListener('click',() => {
    let x = document.getElementById("links");
    if (x.style.display === "block") {
        x.style.display = "none";
        burger.src = "./assets/icons/Burger.svg";
    } else {
        x.style.display = "block";
        burger.src = "./assets/icons/Burger-vert.svg";
    }
});


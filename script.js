/*
Read json data from the file with information about pets
*/
let pet = [];
fetch('./pets.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        pet = data;
        console.log(data);
    });

/*
Create a burger menu
*/
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

/*
Create a pop-up window with pet descriptions
*/
let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');

// Open pop-up
openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
        let id = e.target.id;
        for (let i=0; i < pet.length; i++) {
            if (pet[i]['name'] === id) {
                let titleDescription = document.createElement('div');
                titleDescription.classList.add('active-h3');
                titleDescription.innerHTML = pet[i];
                popup.appendChild(titleDescription);
                /*let titleDescription = document.createElement('h3');
                titleDescription.classList.add('active-h3');
                titleDescription.innerHTML = id;
                popup.appendChild(titleDescription);*/
            }
        }
    })
});

// Close pop-up
closePopupButton.addEventListener('click',() => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});




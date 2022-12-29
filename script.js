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
let popupContent = document.querySelector('.popup-content');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');

// Open pop-up
openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
        const id = e.target.id;
        const dFrag = document.createDocumentFragment();
        for (let i=0; i < pet.length; i++) {
            if (pet[i]['name'] == id) {
                let wrapper = document.createElement('div');
                wrapper.classList.add('active-wrapper');
                dFrag.appendChild(wrapper);
                let petName = document.createElement('h3');
                petName.classList.add('active-h3');
                petName.innerHTML = id;
                wrapper.appendChild(petName);
                let type = document.createElement('h4');
                type.classList.add('active-h4');
                type.innerHTML = pet[i]['type']+' - '+pet[i]['breed'];
                wrapper.appendChild(type);
                let description = document.createElement('p');
                description.classList.add('active-p');
                description.innerHTML = pet[i]['description'];
                wrapper.appendChild(description);
                let wrap = document.createElement('div');
                wrapper.appendChild(wrap);
                let list = document.createElement('ul');
                wrap.appendChild(list);
                let age = document.createElement('li');
                age.innerHTML = 'Age: '+pet[i]['age'];
                list.appendChild(age);
                let inoculations = document.createElement('li');
                inoculations.innerHTML = 'Inoculations: '+pet[i]['inoculations'];
                list.appendChild(inoculations);
                let diseases = document.createElement('li');
                diseases.innerHTML = 'Diseases: '+pet[i]['diseases'];
                list.appendChild(diseases);
                let parasites = document.createElement('li');
                parasites.innerHTML = 'Parasites: '+pet[i]['parasites'];
                list.appendChild(parasites);
            }
        }
        popupContent.appendChild(dFrag);
    })
});

// Close pop-up
closePopupButton.addEventListener('click',() => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
    document.querySelector('.active-wrapper').remove();
});




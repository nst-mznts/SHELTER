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
                let image = document.createElement("img");
                image.classList.add('active-img');
                image.src = pet[i]['img'];
                wrapper.appendChild(image);
                let contentWrap = document.createElement('div');
                contentWrap.classList.add('content-wrapper');
                wrapper.appendChild(contentWrap);
                let petName = document.createElement('h3');
                petName.classList.add('active-h3');
                petName.innerHTML = id;
                contentWrap.appendChild(petName);
                let type = document.createElement('h4');
                type.classList.add('active-h4');
                type.innerHTML = pet[i]['type']+' - '+pet[i]['breed'];
                contentWrap.appendChild(type);
                let description = document.createElement('p');
                description.classList.add('active-p');
                description.innerHTML = pet[i]['description'];
                contentWrap.appendChild(description);
                let wrap = document.createElement('div');
                wrap.classList.add('about-pet_list');
                contentWrap.appendChild(wrap);
                let list = document.createElement('ul');
                list.classList.add('pet_list');
                wrap.appendChild(list);
                let age = document.createElement('li');
                age.classList.add('about-pet');
                let a = 'Age: ';
                age.innerHTML = '<b>' + a + '</b>' + pet[i]['age'];
                list.appendChild(age);
                let inoculations = document.createElement('li');
                inoculations.classList.add('about-pet');
                let inoc = 'Inoculations: ';
                inoculations.innerHTML = '<b>' + inoc + '</b>' + pet[i]['inoculations'];
                list.appendChild(inoculations);
                let diseases = document.createElement('li');
                diseases.classList.add('about-pet');
                let dis = 'Diseases: ';
                diseases.innerHTML = '<b>' + dis + '</b>' + pet[i]['diseases'];
                list.appendChild(diseases);
                let parasites = document.createElement('li');
                parasites.classList.add('about-pet');
                let par = 'Parasites: ';
                parasites.innerHTML = '<b>' + par + '</b>' + pet[i]['parasites'];
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




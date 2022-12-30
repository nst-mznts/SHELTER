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
const openPopup = (e) => {
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
};

openPopupButtons.forEach((button) => {
	button.addEventListener('click', openPopup);
});

// Close pop-up
closePopupButton.addEventListener('click',() => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
    document.querySelector('.active-wrapper').remove();
});

/*
Create slider
*/
const BTN_LEFT = document.querySelectorAll(".button-left");
const BTN_RIGHT = document.querySelectorAll(".button-right");
const CAROUSEL = document.getElementById("carousel-cards");
const ITEM_LEFT = document.getElementById("item-left");
const ITEM_RIGHT = document.getElementById("item-right");

const createCardTemplate = () => {
    const card = document.createElement("div");
    card.classList.add("card");
    const button = document.createElement("a");
    button.href = "#";
    button.innerText = "Learn more";
    button.classList.add("open-popup");
    button.classList.add("card__button");
    card.appendChild(button);
    button.addEventListener('click', openPopup);
    return card;
};
  
const moveLeft = () => {
    CAROUSEL.classList.add("transition-left");
    BTN_LEFT.forEach((button) => {
        button.removeEventListener('click', moveLeft);
    });
    BTN_RIGHT.forEach((button) => {
        button.removeEventListener('click', moveRight);
    });
};
  
const moveRight = () => {
    CAROUSEL.classList.add("transition-right");
    BTN_LEFT.forEach((button) => {
        button.removeEventListener('click', moveLeft);
    });
    BTN_RIGHT.forEach((button) => {
        button.removeEventListener('click', moveRight);
    });
};

BTN_LEFT.forEach((button) => {
    button.addEventListener('click', moveLeft);
});

BTN_RIGHT.forEach((button) => {
    button.addEventListener('click', moveRight);
});

let numbers = [];
const getRandomNumber = (min, max) => {
    if (numbers.length == 6) {
		numbers = [];
	}
	const number = Math.floor(min + Math.random() * (max - min));
	if (numbers.includes(number)) {
		return getRandomNumber(min, max);
	} else {
		numbers.push(number);
		return number;
	}
};

CAROUSEL.addEventListener("animationend", (animationEvent) => {
    let changedItem;
    if (animationEvent.animationName === "move-left") {
      CAROUSEL.classList.remove("transition-left");
      changedItem = ITEM_LEFT;
      document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
    } else {
      CAROUSEL.classList.remove("transition-right");
      changedItem = ITEM_RIGHT;
      document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
    }
    
    changedItem.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        const card = createCardTemplate();
        let num = getRandomNumber(0, 8);
        changedItem.appendChild(card);
        let images = document.createElement("img");
        images.src = pet[num]['img'];
        images.classList.add("card-img");
        card.appendChild(images);
        let petName = document.createElement("h4");
        petName.innerText = pet[num]['name'];
        petName.classList.add("pet-name");
        card.appendChild(petName);
    };

    BTN_LEFT.forEach((button) => {
        button.addEventListener('click', moveLeft);
    });
    
    BTN_RIGHT.forEach((button) => {
        button.addEventListener('click', moveRight);
    });
});
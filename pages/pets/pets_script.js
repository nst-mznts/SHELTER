/*
Read json data from the file with information about pets
*/
let pet = [];
fetch('../../pets.json')
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
            image.src = "../." + pet[i]['img'];
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
Pagination
*/
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7];

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

shuffle(arr);

let notesOnPage;
let windowInnerWidth;

windowInnerWidth = window.innerWidth;
if (windowInnerWidth >= 1280) {
  notesOnPage = 8;
} else if (1280 > windowInnerWidth && windowInnerWidth >= 768) {
  notesOnPage = 6;
} else if (768 > windowInnerWidth && windowInnerWidth >= 320) {
  notesOnPage = 3;
}

//function windowSize() {
//};
//window.addEventListener('resize', windowSize);

let card = document.querySelector('#carousel-cards');
let pagination = document.querySelector('#pagination');
let countOfItems = Math.ceil(arr.length / notesOnPage);

let showPage = (function() {
	let active;
	
	return function(item) {
		if (active) {
			active.classList.remove('active');
            active.style.display = 'none';
		}
		active = item;
		item.classList.add('active');
        item.style.display = 'block';
		let pageNum = +item.innerHTML;
		
		let start = (pageNum - 1) * notesOnPage;
		let end = start + notesOnPage;
		
		let notes = arr.slice(start, end);
        console.log(notes);
		
		card.innerHTML = '';
		for (let note of notes) {
			let wr = document.createElement('div');
            wr.classList.add('card-pet');
			card.appendChild(wr);
			createCell(note, wr);
		}
	};
}());

let items = [];
for (let i = 1; i <= countOfItems; i++) {
	let number = document.createElement('div');
    number.classList.add('pages');
    number.style.display = 'none';
	number.innerHTML = i;
    number.style.order = 2;
	pagination.appendChild(number);
	items.push(number);
}

showPage(items[0]);

for (let item of items) {
	item.addEventListener('click', function() {
		showPage(this);
	});
}

function createCell(text, wr) {
	let picture = document.createElement('img');
	picture.src = "../." + pet[text]['img'];
	wr.appendChild(picture);
    let name = document.createElement('h4');
    name.classList.add('pet-name');
    name.innerHTML = pet[text]['name'];
    wr.appendChild(name);
    let button = document.createElement('a');
    button.classList.add('card__button');
    button.classList.add('open-popup');
    button.id = pet[text]['name'];
    button.href = '#';
    button.innerHTML = 'Learn more';
    wr.appendChild(button);
}

document.querySelector('.start').addEventListener('click',() => {
  showPage(items[0]);
  document.querySelector('.start').classList.add('disabled');
  document.querySelector('.prev').classList.add('disabled');
  document.querySelector('.end').classList.remove('disabled');
  document.querySelector('.next').classList.remove('disabled');
});

document.querySelector('.end').addEventListener('click',() => {
  showPage(items[items.length - 1]);
  document.querySelector('.end').classList.add('disabled');
  document.querySelector('.next').classList.add('disabled');
  document.querySelector('.start').classList.remove('disabled');
  document.querySelector('.prev').classList.remove('disabled');
});


document.querySelector('.next').addEventListener('click',() => {
  document.querySelector('.start').classList.remove('disabled');
  document.querySelector('.prev').classList.remove('disabled');
  let currentPage = +document.querySelector('.active').innerHTML;
  if (currentPage == items.length-1) {
    document.querySelector('.next').classList.add('disabled');
    document.querySelector('.end').classList.add('disabled');
    showPage(items[currentPage]);
  } else if (currentPage > items.length-1) {
    showPage(items[currentPage-1]);
  } else {
    showPage(items[currentPage]);
  }
});

document.querySelector('.prev').addEventListener('click',() => {
  document.querySelector('.next').classList.remove('disabled');
  document.querySelector('.end').classList.remove('disabled');
  let currentPage = +document.querySelector('.active').innerHTML;
  if (currentPage-1 == 1) {
    document.querySelector('.prev').classList.add('disabled');
    document.querySelector('.start').classList.add('disabled');
    showPage(items[currentPage-2]);
  } else if (currentPage-1 > 1) {
    showPage(items[currentPage-2]);
  }
});

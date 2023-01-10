/*
Read json data from the file with information about pets
fetch('../../pets.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        pet = data;
        console.log(pet);
    });
*/
let pet = [
    {
      "name": "Jennifer",
      "img": "./assets/images/pets-jennifer.jpg",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "./assets/images/pets-sophia.jpg",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "./assets/images/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "./assets/images/pets-scarlet.jpg",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "./assets/images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "./assets/images/pets-timmy.jpg",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "./assets/images/pets-freddie.jpg",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "./assets/images/pets-charly.jpg",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
];


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
    document.body.style.overflow = 'hidden';
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

// Close the pop-up window by pressing the close button
closePopupButton.addEventListener('click',() => {
    document.body.style.overflow = '';
    popupBg.classList.remove('active');
    popup.classList.remove('active');
    document.querySelector('.active-wrapper').remove();
});

// Close the pop-up window by clicking outside the popup boundaries
document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
        document.body.style.overflow = '';
        document.querySelector('.active-wrapper').remove();
    }
});

// Hover effect for popup background and close button
popupContent.addEventListener('mouseout',() => {
    popupBg.style.background = '#292929';
    closePopupButton.style.background = '#F1CDB3';
});
  
popupContent.addEventListener('mouseover',() => {
    popupBg.style.background = 'rgba(41, 41, 41, 0.6)';
    closePopupButton.style.background = '';
});
  
closePopupButton.addEventListener('mouseover',() => {
    popupBg.style.background = '#292929';
    closePopupButton.style.background = '#F1CDB3';
});
  
closePopupButton.addEventListener('mouseout',() => {
    popupBg.style.background = 'rgba(41, 41, 41, 0.6)';
    closePopupButton.style.background = '';
});

/*
Pagination
*/
let arr = [];
let numbers = [];

const getRandomNumber = (min, max) => {
    if (numbers.length == 8 ) {
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

const makeArrey = () => {
	do {
    for (let i=0; i < 8; i++){
    	arr.push(getRandomNumber(0, 8));
    }
  }
  while (arr.length < 41);
};

makeArrey();
console.log(arr);
console.log(arr.length);

let notesOnPage;
let windowInnerWidth = window.innerWidth;
if (windowInnerWidth >= 1280) {
  notesOnPage = 8;
} else if (1280 > windowInnerWidth && windowInnerWidth >= 768) {
  notesOnPage = 6;
} else if (768 > windowInnerWidth && windowInnerWidth >= 320) {
  notesOnPage = 3;
};

let card = document.querySelector('#carousel-cards');
let pagination = document.querySelector('#pagination');
let countOfItems = Math.ceil(arr.length / notesOnPage);

let showPage = (function() {
	let active = document.querySelector('.active');
	
	return function(item) {
		if (active) {
			active.classList.remove('active');
            active.style.display = 'none';
		};
		active = item;
		item.classList.add('active');
        item.style.display = 'flex';
		let pageNum = +item.innerHTML;
		
		let start = (pageNum - 1) * notesOnPage;
		let end = start + notesOnPage;
		
		let notes = arr.slice(start, end);
		console.log(notes);
		card.innerHTML = '';
		for (let note of notes) {
			let wr = document.createElement('div');
            wr.classList.add('card');
			card.appendChild(wr);
			createCell(note, wr);
		};
	};
}());

let items = [];
for (let i = 1; i <= countOfItems; i++) {
	let number = document.createElement('button');
    number.classList.add('pages');
    number.style.display = 'none';
	number.innerHTML = i;
    number.style.order = 2;
	pagination.appendChild(number);
	items.push(number);
};

showPage(items[0]);

function createCell(text, wr) {
	let image = document.createElement("img");
	image.src = "../." + pet[text]["img"];
    image.classList.add('card-img');
    image.alt = "Pet " +  pet[text]['name'];
	wr.appendChild(image);
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
    button.addEventListener('click', openPopup);
    wr.appendChild(button);
};

const startBtn = document.querySelector('.start');
const endBtn = document.querySelector('.end');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

startBtn.addEventListener('click',() => {
    showPage(items[0]);
    startBtn.disabled = 'true';
    prevBtn.disabled = 'true';
    startBtn.classList.add('disabled');
    prevBtn.classList.add('disabled');
    endBtn.removeAttribute("disabled");
    nextBtn.removeAttribute("disabled");
    endBtn.classList.remove('disabled');
    nextBtn.classList.remove('disabled');
});

endBtn.addEventListener('click',() => {
    showPage(items[items.length - 1]);
    endBtn.disabled = 'true';
    nextBtn.disabled = 'true';
    endBtn.classList.add('disabled');
    nextBtn.classList.add('disabled');
    startBtn.removeAttribute("disabled");
    prevBtn.removeAttribute("disabled");
    startBtn.classList.remove('disabled');
    prevBtn.classList.remove('disabled');
});


nextBtn.addEventListener('click',() => {
    endBtn.removeAttribute("disabled");
    nextBtn.removeAttribute("disabled");
    startBtn.removeAttribute("disabled");
    prevBtn.removeAttribute("disabled");
    startBtn.classList.remove('disabled');
    prevBtn.classList.remove('disabled');
    let currentPage = +document.querySelector('.active').innerHTML;
    if (currentPage == items.length-1) {
        endBtn.disabled = 'true';
        nextBtn.disabled = 'true';
        nextBtn.classList.add('disabled');
        endBtn.classList.add('disabled');
        showPage(items[currentPage]);
    } else if (currentPage > items.length-1) {
        showPage(items[currentPage-1]);
    } else {
        showPage(items[currentPage]);
    }
});

prevBtn.addEventListener('click',() => {
    endBtn.removeAttribute("disabled");
    nextBtn.removeAttribute("disabled");
    startBtn.removeAttribute("disabled");
    prevBtn.removeAttribute("disabled");
    nextBtn.classList.remove('disabled');
    endBtn.classList.remove('disabled');
    let currentPage = +document.querySelector('.active').innerHTML;
    if (currentPage-1 == 1) {
        startBtn.disabled = 'true';
        prevBtn.disabled = 'true';
        prevBtn.classList.add('disabled');
        startBtn.classList.add('disabled');
        showPage(items[currentPage-2]);
    } else if (currentPage-1 > 1) {
        showPage(items[currentPage-2]);
    }
});
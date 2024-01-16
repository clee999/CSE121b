/* W02-Task - Profile Home Page */



/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Carl Lee";

let currentYear = new Date().getFullYear();

let profilePicture = 'images/carllee.png';


/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");

const foodElement = document.getElementById("food");

const yearElement = document.getElementById("year");

const imageElement = document.getElementById ("home");


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}<strong>`;

yearElement.textContent = currentYear;

imageElement.setAttribute('src', profilePicture);

imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

let favouriteFood = ["Jerk Chicken, ", "Rice and Peas, ", "Steak and Chips, ", "Salt fish fritters, "," Fried dumplings "];


let foodContent = "";
favouriteFood.forEach(food => {
    foodContent += food
});

foodElement.innerHTML += `<br>${foodContent}</br>`;



favouriteFood.shift();

foodContent = "";
favouriteFood.forEach(food => {
    foodContent += food;
});

foodElement.innerHTML += `<br>${foodContent}</br>`;

favouriteFood.pop();

foodContent = "";
favouriteFood.forEach(food => {
    foodContent += food;
});

foodElement.innerHTML += `<br>${foodContent}</br>`;

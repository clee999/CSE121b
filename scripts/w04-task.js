/* LESSON 3 - Programming Tasks */

let profilePicture = 'images/carllee.png'

/* Profile Object  */

let myProfile = {

    name: "Carl",
    photo: 'images/carllee.png',
    favouriteFood: [
        "Jerk Chicken, ",
        "Rice and Peas, ", 
        "Steak and Chips, ", 
        "Salt fish fritters, ",
        "Fried dumplings "
    ],

    hobbies: [
        "A.I computing",
        "Music Composition",
        "Film",
        "Design"
    ],
    placesLived: [],
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "London, England",
        length: "10 years", 
    },

    {
        place: "York, England",
        length: "2 years"
    },

    {
        place: "Cardiff, Wales",
        length: "1 year"
    }
    

       

)

/* DOM Manipulation - Output */
/* Name */

document.querySelector("#name ").textContent = myProfile.name; 

/* Photo with attributes */

let imageElement = document.getElementById("photo")
imageElement.setAttribute('src', myProfile.photo)

imageElement.setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
let favouriteFoodList = document.querySelector("#favorite-foods");
myProfile.favouriteFood.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    favouriteFoodList.appendChild(li);
    
});


/* Hobbies List */

let hobbiesList = document.querySelector("#hobbies");
myProfile.hobbies.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    hobbiesList.appendChild(li);

});



/* Places Lived DataList */

let placeList = document.querySelector("#places-lived");
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    placeList.appendChild(dt);

    let dd = document.createElement("dd");
    dd.textContent = "Length of time: " + place.length;
    placeList.appendChild(dd);

});





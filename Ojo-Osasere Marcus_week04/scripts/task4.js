let mySelf = {
    name: "Ojo-Osasere Ayodeji Marcus",
    photo: "images/marcus.jpeg",
    favoriteFoods: ["Yam", "Plantain"],
    hobbies: ["Swimming", "Dancing", "Diving"],
    placesLived: [{
            place: "Lagos",
            len: "4 Years"
        },
        {
            place: "Accra",
            len: "3 weeks"
        },
        {
            place: "Abuja",
            len: "5 weeks"
        },
        {
            place: "Uyo",
            len: "14 years"
        },
        {
            place: "Benin",
            len: "6 Years"
        }
    ]
};


// Assign the value of the name property (of the object declared above) to the HTML <span> who's ID is name

document.querySelector("#name").innerHTML = mySelf.name;

//Assign the value of the photo property as the src attribute of the HTML <img> who's ID is photo

document.querySelector("img").src = mySelf.photo;

//Assign the value of the name property as the alt attribute of the HTML <img> who's ID is photo

document.querySelector("img").alt = mySelf.name;

// For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <ul> element
// Append the <li> elements created above as children of the HTML <ul> element who's ID is favorite-foods

const food = mySelf.favoriteFoods.map((foodItem) => `<li>${foodItem}</li>`);

document.querySelector("#favorite-foods").innerHTML = food.join("");

// Repeat Step 4 for each hobby in the hobbies property
// Repeat Step 5 using the HTML <ul> element with an ID of hobbies
const hobbies = mySelf.hobbies.map((foodItem) => `<li>${foodItem}</li>`);
document.querySelector("#hobbies").innerHTML = hobbies.join("");

//For each object in the placesLived property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
// Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived

const lived = mySelf.placesLived.map((place) => `<dt>${place.place}</dt><dd>${place.len}</dd>`);

document.querySelector("#places-lived").innerHTML = lived.join("");



let currentYear = new Date().getFullYear();

document.querySelector("#year").innerHTML = currentYear
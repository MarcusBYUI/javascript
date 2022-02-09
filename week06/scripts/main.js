// main.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [{
            place: "Rexburg, ID",
            length: "5 years",
        },
        {
            place: "Ammon, ID",
            length: "3 years",
        },
        {
            place: "Sandy, UT",
            length: "1 year",
        },
    ],
};

myInfo.favoriteFoods.map((food) => {
    let html = document.createElement("li");
    html.textContent = food;
    //document.querySelector("#favorite-foods").appendChild(html);
});

// Create a function that will take a food string and return that string embedded in some html. (<li>food</li>)
function favFood(food) {
    return `<li>${food}</li>`;

}
// Create a function that will take a place string and return that string embedded in some html. The place is a bit more complex. We have the location and the length. You can use the following for the template: <dt>${place.place}</dt><dd>${place.length}</dd>)
function placeLived(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

// Create a function that will take a list, and a callback function to produce an HTML template. The function should transform our list by looping over it calling the template function once for each item in the list. The function should return all of the HTML strings flattened into one long string.
function output(list, call) {
    return list.map(call).join("");

}

// Call the function above once for the placesLived list and again for the favoriteFoods list. Set the innerHTML of the appropriate HTML element to the results of the function call.

document.querySelector("#favorite-foods").innerHTML = output(myInfo.favoriteFoods, favFood);
document.querySelector("#places-lived").innerHTML = output(myInfo.placesLived, placeLived);
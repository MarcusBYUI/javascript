// main.js
const url = "https://pokeapi.co/api/v2/pokemon";
let results = null;
const section = document.querySelector("#output");
const list = document.querySelector("#outputList");
// takes a fetch response and checks to make sure it was OK.
// then returns the body of the response as a PROMISE to some JSON.
function convertToJson(response) {
    if (response.ok) {
        return response.json();
    } else {
        console.log("error:", response);
    }
}
// this is where we would do whatever we needed to do with the resulting data.
function doStuff(data) {
    results = data;
    let html = `<h2> ${results.name} </h2>
                <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
    section.innerHTML = html;
    console.log("first: ", results);
}
// read this as: make a request to URL, WHEN it finishes THEN run convertToJson
// WHEN it finishes THEN run doStuff
fetch(url).then(convertToJson).then(doStuffList);
// meanwhile...continue with the rest of the program...
console.log("second: ", results);

function doStuffList(data) {
    console.log(data);
    const pokeList = data.results;
    pokeList.sort(compare);
    console.log(pokeList);
    let html = pokeList.map(function(line) {
        return `<li>${line.name}</li>`;
    });
    list.innerHTML = html.join(" ");
    console.log(data.results[0].name);


}

function compare(a, b) {
    if (a.name > b.name) {
        // sort b before a
        return 1;
    } else if (a.name < b.name) {
        // a and b different but unchanged (already in the correct order)
        return -1;
    } else return 0; // a and b are equal
}
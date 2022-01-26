let daycount = 12;
let targetEvent = "Christmas";

const newParagraph = document.createElement("p");
newParagraph.innerText = `There are  ${daycount} days until ${targetEvent}!`;
document.body.appendChild(newParagraph);


const newImage = document.createElement("img")
newImage.setAttribute('src', 'https://placeimg.com/200/200/animals')
newImage.setAttribute('alt', 'Just a placeholder')
document.body.appendChild(newImage)

const newSection = document.createElement("section")
const newH2 = document.createElement("h2")
const newP = document.createElement("p")

newH2.innerText = "CSE 121b"
newP.innerText = "Welcome to Javascript Language"

newSection.appendChild(newH2)
newSection.appendChild(newP)

document.body.appendChild(newSection)
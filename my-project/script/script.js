function script() {
    // sets the output text to loading when a click is made so the user can know to wait
    document.querySelector("#output-text").value = "Loading . . .";
    let type = document.querySelector("#type").value;
    let number = document.querySelector(".number").value;

    // checking to see if the front end seslection for a sentence or a paragraph
    switch (type) {
        case "paragraph":

            request(`https://baconipsum.com/api/?type=all-meat&paras=${number}&start-with-lorem=1`);
            break;

        case "sentence":

            request(`https://baconipsum.com/api/?type=all-meat&sentences=${number}&start-with-lorem=1`);


    }

}

// API fetcha and output is made to the display in a paragraph format
function request(url) {
    fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                console.log("error: ", response);
            }
        })
        .then((data) => {

            const html = data.map((list) => {
                return `&emsp;&emsp;${list} <br> <br>`;
            });
            document.querySelector("#output-text").innerHTML = html.join("");

        });
}
//copy funtion
// function copy() {
//     let text = document.querySelector("#output-text").textContent;
//     navigator.clipboard.writeText(text);

// }

function copy() {
    let text = document.querySelector("#output-text").textContent;

    let copyText = document.createElement("input");
    document.body.appendChild(copyText);
    copyText.value = text;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard
        .writeText(copyText.value)
        .then(() => {
            alert("successfully copied");
        })
        .catch(() => {
            alert("something went wrong");
        });
    document.removeChild(copyText);
}
// on button click to generate
document.querySelector("#generate").addEventListener("click", script);
// on load to set the display text
window.addEventListener("load", script);

//copy
document.querySelector("#copy").addEventListener("click", copy);
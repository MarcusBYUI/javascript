const steps = ['one', 'two', 'three'];

const stepsHtml = steps.map(
    function(step) {
        // return element for new_array
        return `<li>${step}</li>`;
    })

document.querySelector("#myList").innerHTML = stepsHtml.join("");
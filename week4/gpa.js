let totalGPA = 0;

function gpaCalc(i) {
    i = i.toLowerCase();


    if (i === "a+" || i === "a") {
        totalGPA += 4;
    } else if (i === "a-") {
        totalGPA += 3.7;
    } else if (i === "b+") {
        totalGPA += 3.3;
    } else if (i === "b") {
        totalGPA += 3;
    } else if (i === "b-") {
        totalGPA += 2.7;
    } else if (i === "c+") {
        totalGPA += 2.3;
    } else if (i === "c") {
        totalGPA += 2.0;
    } else if (i === "c-") {
        totalGPA += 1.7;
    } else if (i === "d+") {
        totalGPA += 1.3;
    } else if (i === "d") {
        totalGPA += 1;
    } else {
        totalGPA += 0;

    }
}


function userGPA() {
    input = document.querySelector('#grades').value;
    let gpaArr = input.split(',');
    console.log(gpaArr);
    gpaArr.forEach(gpaCalc);
    gpaResult = totalGPA / gpaArr.length;
    document.querySelector("#output").innerHTML = gpaResult;
    totalGPA = 0;

}

document.querySelector("#submitButton").addEventListener("click", userGPA);
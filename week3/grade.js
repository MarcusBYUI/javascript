const grades = ['A', 'B', 'A'];

function checkGrade(grade) {
    let count = 0;
    if (grade === "A") {
        count = 4;
    } else if (grade === "B") {
        count = 3;
    }
    return count;
};

const points = grades.map(checkGrade);

console.log(points);
const reducer = (x, y) => x + y;

const reducedArray = points.reduce(reducer);
console.log(reducedArray / points.length);

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const result = fruits.filter(words => words.length >= 6);

console.log(result);


const numbers = [12, 34, 21, 54];

const luckyNumber = 21;

console.log(numbers.indexOf(luckyNumber));
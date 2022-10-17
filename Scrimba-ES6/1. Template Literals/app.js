//Template Literals
let word1 = 'Shehroz';
let word2 = 'Irfan';

// const fullName = word1 + ' ' + word2;
const fullName = `${word1} ${word2}`;

let num1 = 2;
let num2 = 5;
// const sum = num1 + num2;
const sum = `${num1 + num2 }`;

// let example = 'Hello\nWorld';
let example = `
Hello
World
!
`;
document.getElementById("example").innerText = example;
console.log(example)
console.log(sum);
console.log(fullName);
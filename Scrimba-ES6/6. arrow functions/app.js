//arrow function

//function declaration

function simple () {
    console.log("I'm a function");
}

simple();

//anonymous function
const myFunc = function () {
    console.log("I'm anonymous function!");
}

myFunc();

//arrow function
const myArrowFunc = () => {
    return "I'm an arrow function";
}
console.log(myArrowFunc());

//arrow function with parameter
const myArrFunc = (food) => {
    return `I like to eat ${food}`;
}

console.log(myArrFunc('pasta'));

//arrow function short syntax
const myArrFuncShort = food => `I like to eat ${food}`;

console.log(myArrFuncShort('Biryani'));
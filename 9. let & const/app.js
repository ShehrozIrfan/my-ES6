//var, let, const

//var = function scoped
//let = block scoped
//const = block scoped

//using var
function sayHello () {
    for(var i = 0; i < 5; i ++) {
        console.log(i);
    }

    console.log("Outside: i = " + i);
}
sayHello();

//using let
function sayHi () {
    for(let i = 0; i < 5; i++) {
        console.log(i);
    }

    //the below statement will show error because 'let' is block scoped and can only be accessed within that block.
    // console.log("Outside: i = " + i);
}
sayHi();

//=================================
//const
//=================================

const num = 5;
//the below statement will show error because we can't change re-assign the value of const.
// num = 4;
console.log(num);

//const in arrays
const arr = [];
arr.push('John');
console.log(arr);
arr[0] = 'Doe';
console.log(arr[0]);
console.log(arr);

//the below statement will show error
// arr = ['Lilly'];

//const in objects
const person = {};

person.name = 'John';
console.log(person);
person.name = 'Doe';
console.log(person);

//the below statement will show error
// person = { name: 'Salena' }
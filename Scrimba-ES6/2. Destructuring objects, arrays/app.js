//Destructuring objects

// const person = {
//     name: 'John Wick',
//     age: 30,
//     address: {
//         city: 'Los Angeles'
//     }
// }
// console.log(person.name);
// console.log(person.age);
// console.log(person.address);
// console.log(person.address.city);

// const {name: fullName, age} = person;
// console.log(`${fullName} is ${age} years old!`);

// const {address: { city }} = person;
// console.log(`${fullName} lives in ${city}`)


/*
    **** Challenge ****
    
    For this challenge destruture the following object.
*/

// const student = {
//     name: "Kyle",
//     age: 24,
//     projects: {
//         diceGame: "Two player dice game using JavaScript"
//     }
// }

// const {name, age, projects: { diceGame }} = student;

// console.log(name);
// console.log(age);
// console.log(diceGame);

//Destructuring Arrays

let [firstName, middleName, lastName] = ['Dylan', 'Coding God', 'Israel'];

// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);

console.log(firstName);

firstName = 'John';
console.log(firstName);

console.log(middleName);
console.log(lastName);
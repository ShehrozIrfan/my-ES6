//spread operator

const contacts = ['John', 'Daniel', 'Maria'];

// const myContacts = contacts;
// myContacts.push('Salena');

// console.log(contacts);
// console.log(myContacts);

//using spread operator
const myContacts = [...contacts];
console.log(contacts, myContacts);

myContacts.push('Salena');
console.log(contacts,myContacts);

//spread operator in objects
const person = {
    name: 'Max',
    age: 23,
    hobbies: ['Reading', 'coding']
}

const myPerson = {
    ...person, 
    salary: 80000,
    position: 'software developer'
}
console.log(person);
console.log(myPerson);

/*
    **** Challenge ****
    
    Imagine you are going out to do some grocery shopping.
    So you have an array called shoppingList with all the products you want to buy.
    
    Now that you are inside of the shop, you have a basket with all the products from your list, but you want to add a few more.
    
    Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add some new products into it. 

*/

const shoppingList = ['eggs', 'bread', 'milk'];

const shoppingBasket = [ ...shoppingList, 'butter', 'pasta'];

console.log(shoppingList);
console.log(shoppingBasket);

//==================================
//Rest Operator
//==================================

// function saySomething(nums) {
//     console.log(arguments);
// }
function saySomething(...nums) {
    console.log(nums);
}

saySomething(4,3,9,3,0);
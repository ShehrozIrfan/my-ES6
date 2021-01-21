//default parameters

//simple example
const favFood = (food) => {
    console.log(`My Favorite food is ${food}!`);
}

favFood('Pasta');

//example with default parameters
const favFruit = (fruit = 'Mango') => {
    console.log(`My favorite fruit is ${fruit}!`);
}

favFruit();

/*
**** Challenge *****

Create a function that receives a parameter of food.
If your parameter food is going to have a value of "milk"
the function should print into the console the following:

"I'm going to buy milk from the grocery shop"

But if you dont pass a value to your parameter food, it should print
"I'm going to buy something from the grocery shop"

*/

const shoppingFood = (food = 'something') => {
    console.log(`I'm going to buy ${food} from the grocery shop`)
}

shoppingFood();
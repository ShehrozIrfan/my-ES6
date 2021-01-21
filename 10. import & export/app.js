//import and export
//always add type='module' in index.html file in 'script' tag if you're using import and export.

import { data } from './example.js';

//importing the add function
import { add } from './example.js';

import  person  from './example.js';

const updatedData = data;
updatedData.push(10);
console.log(data);

/*
**Challenge**

Inside of the file data.js, create a function add, that will receive 2 numbers and return the sum of them.
Make sure to export this function.

- Import the function add, into the index.js file
- Create a variable result, that will hold the result of the function add when you call it and pass 2 numbers into it.
- print into the console the value of the variable result;

*/

const result = add(4, 3);
console.log(result);

//================================
// default export 
//================================

console.log(person);
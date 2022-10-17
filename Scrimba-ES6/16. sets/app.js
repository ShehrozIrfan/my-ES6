//sets

const exam = new Set([1,1,1,2,2,2]);

console.log(exam.size);
//adding value to set
exam.add(3);
console.log(exam.size);
//deleting value from set - it deletes all the occurances of the value
exam.delete(2);
console.log(exam.size);

//finding a set has certain value - it will return true if the values exists.
console.log(exam.has(1));

//removing all the values from set
exam.clear();
console.log(exam);

//we can also apply 'foreach' or 'forof' to sets



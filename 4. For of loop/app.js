//For of loop

//applying on number
const nums = [5, 3, 2];
let total = 0;

for(const num of nums) {
    console.log(num);
    total += num;
}

console.log(total);

//applying on string
const chars = 'Hello World!';
for(const char of chars) {
    console.log(char);
}

// Challenge - For Of Loop

// Using the For of Loop, iterate through the array and print into the console, a message like:
// Tom lives in Lisbon

const students = [ 
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris"},
    { name: "Kate", city: "Sidney" }
];

for(const student of students) {
    console.log(`${student.name} lives in ${student.city}`);
}
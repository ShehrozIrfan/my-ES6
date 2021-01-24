import  { Animal, Cat }  from './animal.js';

//creating object
const animal = new Animal('animal', '4');
console.log(animal);
console.log(animal.type);
console.log(animal.legs);
animal.type = 'Dog';
console.log(animal);

animal.makeNoise('Meow');
//for static methods we don't need to create object
console.log(Animal.returnSomeNum());

console.log(animal.metaData);

//creating object of cat
const cat = new Cat('Cat', 4, true);
console.log(cat);
cat.makeNoise();
//calling the metadata from the parent class
console.log(cat.metaData);
//creating a class

export class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }

    //class method
    makeNoise(sound = 'Loud Sound') {
        console.log(sound);
    }

    //get property
    get metaData() {
        return `Type: ${this.type}, Legs: ${this.legs}`;
    }
    //static class method
    static returnSomeNum () {
        return 10;
    }
}

//Inheritance
export class Cat extends Animal {
    constructor(type, legs, tail) {
        super(type, legs);
        this.tail = tail;
    }
    //over-riding the makeNoise method
    makeNoise(sound = 'Meow') {
        console.log(sound);
    }
}

/* 
**Classes Challenge**:

Create a class Player with the following:
- Add a Name and Country properties
- Add a function that when it runs should print into the console ("Messi was born in Argentina");
- Make sure to adapt this function to receive dynamic Names and Clubs.

Create a Subclass called TennisPlayer that extends from the class Player
- Add a new property Age.
- Add a function that when it runs should print into the console something similar ("Rafael Nadal is 34 years old and knows how to play Tennis");
- Make sure the Name and Age are dynamic.
*/

class Player {
    constructor(name, country) {
        this.name = name;
        this.country = country;
    }
    introduce() {
        console.log(`${this.name} was born in ${this.country}`);
    }
}

class TennisPlayer extends Player {
    constructor(name, country, age) {
        super(name,country);
        this.age = age;
    } 
    playTennis() {
        console.log(`${this.name} is ${this.age} years old and knows how to play Tennis`)
    }
}
const messi = new Player('Messi', 'Argentina');
messi.introduce();

const tennis = new TennisPlayer('Roger Federor', 'Spain', 38);
tennis.playTennis();
tennis.introduce();
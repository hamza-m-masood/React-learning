class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        // return 'Hi ' + this.name + '!'
        return `Hi, I am ${this.name}. `
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major = 'undecided') {
        super(name, age)
        this.major = major

    }

    hasMajor() {
        //empty string is a false value, negating it once gives you true, negating it twice gives you false
        return !!this.major
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`
        }
        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if(!!this.homeLocation){
            greeting += `I'm visiting from ${this.homeLocation}`
        }
        return greeting
    }
}

const me = new Student("Hamza Masood", 23, "computer science");
const other = new Student();


const traveller = new Traveller("Uzair Masood", 16, "Ireland");
console.log(traveller.getGreeting())

const otherTraveller = new Traveller();
console.log(otherTraveller.getGreeting())
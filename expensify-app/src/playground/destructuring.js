console.log("destructuring")
const person = {
    name: "andrew",
    age: 26,
    location: {
        city: "Philadelphia",
        temp: 92
    }
}

const { name, age } = person

console.log(`${name} is ${age}`) 
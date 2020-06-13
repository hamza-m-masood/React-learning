
//OBJECT DESTRUCTURING

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

//destructuing object and using a different name instead of name and age

const { name: namee, age: howOld } = person
console.log(`${namee} is ${howOld}`)

//setting default values for variable if it does not exist in object

const { city = "hyuuuuu", temp: temperature = 23 } = person.location
console.log(`${city} is ${temperature}`)

//you can also rename and assign default value

const book = {
    title: 'Ego is the Enemy',
    authoer: 'Ryan Holiday',
    publisher: {
        name: 'penguin'
    }
}

const { name: publisherName = "self-published" } = book.publisher
console.log(publisherName)



////////ARRAY DESTRUCTURING

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']

// const [street, city, state, zip] = address

// console.log(`You are in ${address[1]} ${address[2]}`)
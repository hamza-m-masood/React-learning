var nameVar = "Andrew";
var nameVar = "Mike";
console.log("nameVar", nameVar);

let nameLet = "Jen";
nameLet = "Julie";
console.log("nameLet", nameLet);

const nameConst = "frank";
console.log("nameConst", nameConst);

//Block scoping
//var based variables are function scoped
//let and const are block scoped which does include functions
//always use const, use let if you need to, and never use var.  
const fullName = "Andrew Mead";

if (fullName) {
    var firstName = fullName.split(" ")[0]
    console.log(firstName)
}

console.log(firstName)

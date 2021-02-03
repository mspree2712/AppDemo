// Comment. The computer ignores this
console.log("Hello there world");

// ES 5
var x = 1;

// ES 6
let y = 1;
const z = 1;

let variableOne = 5;
let variableTwo = 6;

console.log("variableOne: " + variableOne + " - variableTwo: " + variableTwo);

let variableThree = variableOne + variableTwo;
variableThree += 1;
console.log(variableThree);

function addNumbers(a, b){
    return a + b;
}

console.log("Output: " + addNumbers(22,32));

// x = addNumbers(5,6);
let otherFunction = addNumbers;
x = otherFunction(22,56)
console.log("X: " + x)

// JSON
let personA = {
                name: "Paul",
                email: "paul.craven@simpson.edu"
              };

console.log(personA);
console.log(personA.name);
console.log(personA['name']);

// ES6 class
class PersonB {
    constructor(){
        this.name = "";
        this.email= "";
    }
    fullName() {
        return this.name + " " + this.email;
    }
}

let personB = new PersonB();
personB.name = "Mary";
personB.email = "mary.mary@simpson.edu"
console.log(personB);
console.log(personB.fullName())

// ES5 Class
var personD = {
    firstName: "Paul",
    lastName: "Craven",
    fullName: function() {
        return this.firstName +" "+ this.lastName
    }
}

console.log(personD.fullName());

// Loop
for(let i = 0; i < 10; i++) {
    console.log(i)
}

var colors = ["red","green", "blue"]
for (let i = 0; i < colors.length; i++){
    console.log(colors[i])
}

var personF = {name: "Paul", email: "paul.craven@simpson.edu"}

for (let field in personF) {
    console.log(field + "=" + personF[field])
}

let a = 5;
let b = 6;
if (a == b) {
    console.log("a==b");
}

a = "Paul";
b = "Paul";
if (a === b) {
    console.log("a=b");
}

a = 5;
b = 6;
let c = a + b;

console.log(c);

c = a.toString() + b.toString()
console.log(c);

a = "5";
b = "6";
c = Number(a) + Number(b);
console.log(c);


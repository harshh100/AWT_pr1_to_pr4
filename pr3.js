// 1. let
let x = 10;
if (true) {
    let x = 20; // This creates a new variable x inside the block
    console.log(x); // Output: 20
}
console.log(x); // Output: 10


// 2. const
const PI = 3.14;
// PI = 3.1415; // Error: Assignment to constant variable.

const colors = ["red", "green", "blue"];
// colors = ["yellow", "orange"]; // Error: Assignment to constant variable.
colors.push("yellow"); // Allowed, as the array is mutable.
console.log(colors); // Output: ["red", "green", "blue", "yellow"]


// 3. Arrow fuction

// Regular function
function add(a, b) {
    return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

console.log(add(2, 3)); // Output: 5
console.log(addArrow(2, 3)); // Output: 5


// 4. Spread of operator

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log(newNumbers); // Output: [1, 2, 3, 4, 5]

// 5. for/of loop

const cs = ["red", "green", "blue"];

for (const color of cs) {
    console.log(color);
}

// 6. map object

const myMap = new Map();

myMap.set("name", "Harsh");
myMap.set("age", 19);

console.log(myMap.get("name")); // Output: "Harsh"
console.log(myMap.get("age")); // Output: 19


// 7. set object
const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicates are ignored

console.log(mySet); // Output: Set { 1, 2 }

// 8. classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
    }
}

const hp = new Person("Harsh", 19);
hp.sayHello(); // Output: "Hello, my name is harsh, and I am 19 years old."


// 9. promises

function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating async operation
        setTimeout(() => {
            const data = "Resolved data";
            // resolve the promise with the data
            resolve(data);
            // or reject the promise with an error
            // reject("Error occurred");
        }, 2000);
    });
}

fetchData()
    .then((result) => console.log(result))
    .catch((error) => console.error(error));


// 10. symbol

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2); // Output: false

// 11. default parameters

function greet(name = "Anonymous") {
    console.log(`Hello, ${name}!`);
}

greet(); // Output: "Hello, Anonymous!"
greet("harsh"); // Output: "Hello, Harsh!"

// 12. fuction rest parameter

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10



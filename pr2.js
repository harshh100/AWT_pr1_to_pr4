let numbersArray = [1, 2, 3, 4, 5];

console.log("Length of the array:", numbersArray.length);

console.log("Element at index 2:", numbersArray[2]);
console.log("Element at index 4:", numbersArray[4]);

numbersArray.push(6); // Add an element at the end
console.log("After push(6):", numbersArray);

numbersArray.pop(); // Remove the last element
console.log("After pop():", numbersArray);

numbersArray.shift(); // Remove the first element
console.log("After shift():", numbersArray);

numbersArray.unshift(0); // Add an element at the beginning
console.log("After unshift(0):", numbersArray);

delete numbersArray[2]; // Delete an element (leaves undefined at that index)
console.log("After delete:", numbersArray);
// console.log("numbersArray[2]", numbersArray[2]);

const joinedArray = numbersArray.join("-"); // Join elements with "-"
console.log("Joined Array:", joinedArray);

const otherArray = [7, 8, 9];
const concatenatedArray = numbersArray.concat(otherArray); // Concatenate two arrays
console.log("Concatenated Array:", concatenatedArray);

const splicedArray = numbersArray.splice(2, 2, 10, 11); // Remove 2 elements starting from index 1 and add 10, 11
console.log("After splice():", numbersArray);

const slicedArray = concatenatedArray.slice(1, 4); // Extract elements from index 1 to index 3 (4-1)
console.log("Sliced Array:", slicedArray);

const flatArray = [1, [2, 3], [4, [5]]];
console.log("Flat Array:", flatArray.flat()); // Flatten nested arrays


// Object representing a person
console.log("person object");
const person = {
    name: "Harsh Patel",
    age: 19,
    gender: "Male"
};

// Function to display person's details
function displayPersonDetails(personObj) {
    console.log("Name:", personObj.name);
    console.log("Age:", personObj.age);
    console.log("Gender:", personObj.gender);
}

// Display person's details
displayPersonDetails(person);

// Exercise 1: Determine array length and conditional check

/*
Create a function called myAlphabetLength that logs the length of the myAlphabet array.
If the length is 5 or more, log: "Array length is sufficient".
Otherwise, log: "Array length is too short."
*/
// Write your function here

const myAlphabetLength = () => {
    let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F','G'];
    if (myAlphabet.length >= 5) {
        return "Array length is sufficient"
    }
    else {
        return "Array length is too short."
    }
}
myAlphabetLength()


// Exercise 2: Iterate over the planets array and log each planet with its index

/*
Log each planet in the planets array along with its index.
Expected outcome:
"Planet: Mercury, Index: 0"
...
"Planet: Jupiter, Index: 4"
*/
// Write your code here


const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'];

planets.forEach((planet, index) => {
    console.log(`Planet: ${planet}, Index: ${index}`)
})


// Exercise 3: Log array items with their types using mixedValues array

/*
Iterate over the mixedValues array, logging each item, its index, and data type.
Expected outcome:
"Item: 42, Index: 0, Type: number"
...
"Item: undefined, Index: 5, Type: undefined"
*/
// Write your code here

const mixedValues = [42, 'Hello', true, { name: 'Fox' }, null, undefined];

mixedValues.forEach((mixedValue, index) => {
    console.log(`Item: ${mixedValue}, Type: ${index}, Type: ${typeof mixedValue}`)
})


// Exercise 4: Log each item of myArr without using a loop

/*
Log each item in myArr without explicitly using a loop.
Expected outcome: 1, "Dog", 3.14, false
*/
// Write your code here


let myArr = [1, 'Dog', 3.14, false];
myArr.forEach(myarrr => console.log(myarrr))


// Exercise 5: Find common animal species between reserve1Animals and reserve2Animals

/*
Identify and log any animal species found in both reserve1Animals and reserve2Animals.
Expected outcome:
"Common species: Fox"
"Common species: Bear"
*/
// Write your code here

let reserve1Animals = ['Fox', 'Deer', 'Owl', 'Bear'];
let reserve2Animals = ['Bear', 'Wolf', 'Eagle', 'Fox'];

let commonAnimals = reserve1Animals.filter(animal => reserve2Animals.includes(animal))
commonAnimals.forEach(animal => {
    console.log(`Common species: ${animal}`)
})


// Exercise 6: Log each letter of names from the animalNames array

/*
For each item in the animalNames array, log every letter.
Expected outcome:
"Letters in 'Lion': L, i, o, n"
...
"Letters in 'Panda': P, a, n, d, a"
*/
// Write your code here

let animalNames = ['Lion', 'Tiger', 'Panda'];
animalNames.forEach(animalName => console.log(`Letters in ${animalName}: ${animalName.split('').join(',')}`))



// Exercise 7: Filter only positive temperatures from the temperatures array

/*
Write a function getPositiveTemperatures that returns a new array
containing only temperatures greater than 0 from the temperatures array.
Expected outcome: [5, 15, 20, 2]
*/
// Write your function here

const getPositiveTemperatures = () => {
    let temperatures = [-10, 5, -3, 15, -8, 20, 2];
    let positiveTemperatures = temperatures.filter(temperature => temperature > 0)
    console.log(positiveTemperatures)
}
getPositiveTemperatures()


// Exercise 8: Find the index of "Fox" in the zooAnimals array

/*
Find and store the index of "Fox" in the zooAnimals array.
Expected outcome: "Index of Fox: 3"
*/
// Write your code here

let zooAnimals = ['Elephant', 'Giraffe', 'Panda', 'Fox', 'Kangaroo'];
let foxIndex = zooAnimals.indexOf('Fox')
console.log(`Index of Fox: ${foxIndex}`)


// Exercise 9: Try to find the index of an animal not in zooAnimals
/*
Find the index of "Penguin" in the zooAnimals array.
If it's not found, log "Penguin is not in the zoo."
Expected outcome: -1
*/
// Write your code here


let zooAnimals = ['Elephant', 'Giraffe', 'Panda', 'Fox', 'Kangaroo'];

console.log(zooAnimals.indexOf('Penguin'))


// Exercise 10: Replace "Giraffe" with "Cheetah" in zooAnimals
/*
Replace "Giraffe" with "Cheetah" in the zooAnimals array.
Expected outcome: ['Elephant', 'Cheetah', 'Panda', 'Fox', 'Kangaroo']
*/
// Write your code here

let zooAnimals = ['Elephant', 'Giraffe', 'Panda', 'Fox', 'Kangaroo'];

zooAnimals.splice(1,1,'Cheetah')
console.log(zooAnimals)


// Exercise 11: Sort the safariAnimals array alphabetically

/*
Sort the safariAnimals array in alphabetical order.
Expected outcome: ['Elephant', 'Gazelle', 'Leopard', 'Zebra']
*/
// Write your code here

let safariAnimals = ['Zebra', 'Leopard', 'Elephant', 'Gazelle'];
console.log(safariAnimals.sort())


// Exercise 12: Reverse the order of the safariAnimals array
/*
Reverse the order of the safariAnimals array.
Expected outcome: ['Zebra', 'Leopard', 'Gazelle', 'Elephant']
*/
// Write your code here

let safariAnimals = ['Zebra', 'Leopard', 'Elephant', 'Gazelle'];

console.log(safariAnimals.reverse())



// Exercise 13: Check if "Tiger" is in zooAnimals
/*
Check if the zooAnimals array includes "Tiger".
Expected outcome:
true (if the array contains "Tiger")
false (if it does not)
*/
// Write your code here

let safariAnimals = ['Zebra', 'Leopard', 'Elephant', 'Gazelle'];

console.log(safariAnimals.includes('Tiger'))


// Exercise 14: Find all occurrences of "John" in attendees

/*
Find all positions where "John" appears in the attendees array.
Expected outcome: [0, 2, 4]
*/
// Write your code here


let attendees = ['John', 'Sarah', 'John', 'Alex', 'John'];

let johnPosition = []
attendees.forEach((attendee, index) => {
    if (attendee === 'John') {
        johnPosition.push(index)
    }
})
console.log(johnPosition)


// Exercise 15: Convert all names in attendees array to uppercase
/*
Create a new array where every name in attendees is written in uppercase.
Expected outcome: ['JOHN', 'SARAH', 'JOHN', 'ALEX', 'JOHN']
*/
// Write your code here


let attendees = ['John', 'Sarah', 'John', 'Alex', 'John'];

let upperAttendes = attendees.map(attendee => attendee.toUpperCase())
console.log(upperAttendes)


// Exercise 16: Merge forestAnimals and farmAnimals arrays

/*
Merge forestAnimals and farmAnimals into a new array.
Expected outcome: ['Deer', 'Bear', 'Wolf', 'Cow', 'Sheep', 'Goat']
*/
// Write your code here


let forestAnimals = ['Deer', 'Bear', 'Wolf'];
let farmAnimals = ['Cow', 'Sheep', 'Goat'];

let allAnimals = forestAnimals.concat(farmAnimals)
console.log(allAnimals)


// Exercise 17: Remove first and last elements from birdSpecies

/*
Remove the first and last elements from the birdSpecies array.
Expected outcome: ['Owl', 'Hawk', 'Sparrow']
*/
// Write your code here

let birdSpecies = ['Eagle', 'Owl', 'Hawk', 'Sparrow', 'Penguin'];

birdSpecies.shift()
birdSpecies.pop()
console.log(birdSpecies)


// Exercise 18: Use `splice` to remove and replace elements in numbers

/*
Use splice to remove "30" and replace it with "25" and "27".
Expected outcome: [10, 20, 25, 27, 40, 50]
*/
// Write your code here

let numbers = [10, 20, 30, 40, 50];
numbers.splice(2,1,25,27)
console.log(numbers)


// Exercise 19: Increase each price by 10% using `map`

/*
Create a new array where each price is increased by 10%.
Expected outcome: [5.5, 11, 16.5, 22]
*/
// Write your function here

let prices = [5, 10, 15, 20];
let increasedPrices = prices.map(price => price * 1.1)
console.log(increasedPrices)


// Exercise 20: Filter words longer than 5 letters using `filter`

/*
Create a new array containing only words longer than 5 letters from the words array.
Expected outcome: ['banana', 'cherry', 'strawberry']
*/
// Write your function here

let words = ['apple', 'banana', 'cherry', 'kiwi', 'strawberry'];

let newArray = words.filter(word => word.length > 5)
console.log(newArray)
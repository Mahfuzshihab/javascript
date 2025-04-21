/* Task 1: Fix the Greeting Function  
Should return "Hello, [name]!".  
If no name is provided, return "Hello, guest!".  
*/


function greet(name) {
    return "Hello, " + (name || "guest") + "!";
}

console.log(greet("Alice")); 


console.log(greet());


/* Task 2: Fix the Price Calculation  
Should multiply `price` by `quantity`.  
If `quantity` is missing, default to `1`.  
*/


function calculatePrice(price, quantity = 1) {
    return price * quantity;
}
console.log(calculatePrice(10, 2));


console.log(calculatePrice(5)); 


/* Task 3: Fix Even Number Checker  
Should return `true` if number is even, otherwise `false`.  
*/

function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(7));


/* Task 4: Fix Loop Off-by-One Error  
Should log numbers from 1 to 5.  
*/

function countToFive() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
countToFive();



/* Task 5: Fix Array Indexing Issue  
Should return the last item of the array.  
*/

function getLastItem(arr) {
    return arr[arr.length - 1];
}

// Debug & Test
console.log(getLastItem(["apple", "banana", "cherry"])); // Expected: "cherry"
console.log(getLastItem([1, 2, 3])); // Expected: 3




/* Task 6: Debug JSON Parsing  
Should parse a JSON string into an object.  
*/


function parseJson(jsonString) {
    return JSON.parse(jsonString);
}
console.log(parseJson('{"name": "Alice", "age": 25}')); // Expected: { name: "Alice", age: 25 }
console.log(parseJson("{ name: 'Alice', age: 25 }"));   // Expected: Error (invalid JSON)


/* Task 7: Debug Object Property Access  
Should return the user’s email from an object.  
*/


function getEmail(user) {
    return user.email;
}
console.log(getEmail({ name: "Alice", email: "alice@example.com" })); // Expected: "alice@example.com"



/* Task 8: Debug Nested Function Calls  
Should return the square of a number after doubling it.  
*/


function double(num) {
    return num * 2;
}

function square(num) {
    return num * num; 
}

function processNumber(num) {
    return square(double(num));
}

console.log(processNumber(3)); 
console.log(processNumber(4));


/* Task 9: Fix Sorting Algorithm  
Should return an array of numbers sorted in ascending order.  
*/


function sortNumbers(arr) {
    return arr.sort((a, b) => b - a);
}

console.log(sortNumbers([5, 3, 9, 1]));
console.log(sortNumbers([20, 100, 3, 50]));


/* Task 10: Debug Nested Data Processing  
Should return a list of full names from an array of user objects.  
*/

const users = [
    { firstName: "Alice", lastName: "Smith" },
    { firstName: "Bob", lastName: "Jones" },
];

function getFullNames(users) {
    return users.map(user => user.firstName + " " + user.lastName);
}
console.log(getFullNames(users));


/* Task 11: Debug Object Data Transformation  
Should return an array of user names from a nested data structure.  
*/

const userData = {
    users: [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
    ],
};

function getUserNames(data) {
    return data.users.map(user => user.name); 


}

console.log(getUserNames(userData));


/* Task 12: Debug Complex Function  
Should filter products under a given price from an array of products.  
*/

const products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },

    { name: "Mouse", price: 50 },
];

function filterProducts(products, maxPrice) {
    return products
        .filter(product => product.price < maxPrice)
        .map(product => product.name);

}
console.log(filterProducts(products, 1000));


/* Task 13: Debug LocalStorage Data Saving  
Should save a user object to LocalStorage and retrieve it.  
*/


function saveUser(user) {
    localStorage.setItem("user", JSON.stringify(user));


}
function getUser() {
    return JSON.parse(localStorage.getItem("user"));
}
saveUser({ name: "Alice", age: 25 });
console.log(getUser());


/* Task 14: Debug a Loop that Processes Array  
Should return an array of squared numbers.  
*/

function squareNumbers(arr) {
    let squaredArr = [];
    for (let i = 0; i <= arr.length; i++) {

        squaredArr.push(arr[i] * arr[i]);
    }
    return squaredArr;
}

console.log(squareNumbers([1, 2, 3, 4]));


/* Task 15: Debug Nested Object Handling  
Should return an array of students who scored above 80.  
*/


const students = [
    { name: "Alice", score: 90 },


    { name: "Bob", score: 75 },

    { name: "Charlie", score: 85 },
];

function getTopStudents(studentList) {
    return studentList
        .filter(student => student.score > 80)
        .map(student => student.name);

}

console.log(getTopStudents(students));
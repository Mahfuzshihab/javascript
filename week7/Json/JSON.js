/* Task 1
Create a JavaScript object named `student` with properties:
- `name`
- `age`
- `grade`
Convert the object into a JSON string and log it to the console.
*/

// Your code here


const student = {
    name: "Shihab",
    age:20,
    grade: "A+"
};

const stringJson = JSON.stringify(student);
console.log(stringJson);



/* Task 2
Take the JSON string from Task 1 and convert it back into a JavaScript object.
Log the `name` property of the converted object.
*/

// Your code here

const stringStudent = '{"name":"Shihab","age":20,"grade":"A+"}';
 const objectStudent = JSON.parse (stringStudent);
 console.log(objectStudent);
 


/* Task 3
Create an array named `classroom`, where each element is an object representing a student.
Each student object should have properties for `name`, `age`, and `grade`.
Convert the array into a JSON string and log it to the console.
*/

// Your code here
const classroom = [{
    name: "Shihab",
    age: 24,
    grade: "A+"
},
{
    name: "Jane",
    age: 23,
    grade: "B+"
}
];

const stringClassroom = JSON.stringify(classroom);
console.log(stringClassroom);

/* Task 4
Take the JSON string from Task 3, convert it back into a JavaScript array,
and log the names of all students in the classroom.
*/

// Your code here

const classString = '[{"name": "Shihab", "age":24, "grade":"A+" }, {"name":"Jane", "age":23, "grade":"B+"}]';

const classRoomName = JSON.parse(classString);

console.log(classRoomName);



/* Task 5
Create an object named `weatherReport` with the following properties:
- `temperature`
- `humidity`
- `conditions` (e.g., "Sunny", "Rainy")

Convert the object into a JSON string and store it in a variable named `weatherJSON`.
Then, parse the JSON string back into an object and log the `conditions` property.
*/

// Your code here

let weatherReport = {
    temperature: 40,
    humidity: 60,
    conditions: "Blizzard"
};
let weatherJSON = JSON.stringify(weatherReport);

let weatherJSONParse = JSON.parse(weatherJSON);
console.log(weatherJSONParse.conditions);




/* Task 6
Define an array named `movies`, where each movie has:
- `title`
- `director`
- `rating`

Convert this array into a JSON string, then parse it back into a JavaScript object.
Log all movie titles with a rating higher than 8.
*/

// Your code here

let movies = '[{"title":"Hero", "director":"James", "rating": 8.5},{"title":"Zero", "director":"Cames", "rating": 8}]';

let moviesJson = JSON.stringify(movies)
let moviesObj = JSON.parse(moviesJson)
console.log(moviesObj);




/* Task 7
Write a function `filterHighRatedMovies(jsonString)` that:
- Takes a JSON string representing an array of movie objects.
- Converts it into a JavaScript array.
- Returns a new array containing only movies with a rating higher than 8.
*/

// Your code here






/* Task 8
Define an object named `shoppingCart` with:
- `items` (an array of product objects, each with `name` and `price`)
Convert `shoppingCart` into a JSON string and log it to the console.
*/

// Your code here

/* Task 9
Write a function `totalCartValue(jsonString)` that:
- Takes a JSON string representing a shopping cart.
- Converts it into a JavaScript object.
- Returns the total price of all items in the cart.
*/

// Your code here

/* Task 10
Create an object named `gameProgress` with:
- `level`
- `score`
- `livesRemaining`

Convert the object into a JSON string and log it.
Parse the JSON back into an object and update the `score` property by adding 100 points.
Log the updated object.
*/

// Your code here
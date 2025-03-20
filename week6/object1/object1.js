/* Task 1
Create a JavaScript array named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`.
Add at least two book objects to this collection.
*/

const library = [
    {title: 'Hamlet', author: 'William Shakespeare', yearPublished: 1623},
    {title: 'The Tempest', author: 'William Shakespeare', yearPublished: 1611},
    {title: 'Othello', author: 'William Shakespeare', yearPublished: 1604},
    {title: 'Macbeth', author: 'William Shakespeare', yearPublished: 1623},
]


/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/


const library = [
    {title: 'Hamlet', author: 'William Shakespeare', yearPublished: 1623},
    {title: 'The Tempest', author: 'William Shakespeare', yearPublished: 1611},
    {title: 'Othello', author: 'William Shakespeare', yearPublished: 1604},
    {title: 'Macbeth', author: 'William Shakespeare', yearPublished: 1623},
]

console.log(library[0].title)
library[1].yearPublished = 1615
console.log(library)


/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/


const library = [
    {title: 'Hamlet', author: 'William Shakespeare', yearPublished: 1623},
    {title: 'The Tempest', author: 'William Shakespeare', yearPublished: 1611},
    {title: 'Othello', author: 'William Shakespeare', yearPublished: 1604},
    {title: 'Macbeth', author: 'William Shakespeare', yearPublished: 1623},
]

library[0].genres = 'Play'
library[0]['isAvailable'] = true

console.log(library)


/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

const library = [
    {title: 'Hamlet', author: 'William Shakespeare', yearPublished: 1623},
    {title: 'The Tempest', author: 'William Shakespeare', yearPublished: 1611},
    {title: 'Othello', author: 'William Shakespeare', yearPublished: 1604},
    {title: 'Macbeth', author: 'William Shakespeare', yearPublished: 1623},
]

class Book {
    constructor (title, author, yearPublished) {
        this.title = title
        this.author = author
        this.yearPublished = yearPublished
    }
}
const newBook = new Book ('King Lear', 'William Shakespeare', 1606)

library.push(newBook)
console.log(library)


/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

const createBook = (title, author, yearPublished, genres) => {
    const book = {
        title: title,
        author: author,
        yearPublished: yearPublished,
        genres: genres
    };

    return book
}

const book1 = createBook('Hamlet', 'William Shakespeare', 1623)
const book2 = createBook('The Tempest', 'William Shakespeare', 1611)
const book3 = createBook('Othello', 'William Shakespeare', 1604)
const book4 = createBook('Macbeth', 'William Shakespeare', 1623)

console.log(book1)
console.log(book2)
console.log(book3)
console.log(book4)


/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/


const library = [
    {title: 'Hamlet', author: 'William Shakespeare', yearPublished: 1623},
    {title: 'The Tempest', author: 'William Shakespeare', yearPublished: 1611},
    {title: 'Othello', author: 'William Shakespeare', yearPublished: 1604},
    {title: 'Macbeth', author: 'William Shakespeare', yearPublished: 1623},
]

const convertJSON = JSON.stringify(library)
console.log(convertJSON)

const convertParse = JSON.parse(convertJSON)
console.log(convertParse)
console.log(convertParse[0].title)


/* Task 7
Create an array named `students`, where each student has a `name`, `age`, and `grade`.
Log the name of any student who has a grade higher than 90.
*/

const students = [
    {Name: 'Alice', Age: 23, Grade: 87},
    {Name: 'Bob', Age: 26, Grade: 92},
    {Name: 'Denver', Age: 21, Grade: 94},
    {Name: 'Emma', Age: 23, Grade: 89},
]

students.forEach(student => {
    if (student.Grade > 90) {
        console.log(student.Name)
    }
})


/* Task 8
Define an object named `car` with properties for `brand`, `model`, `year`, and `isElectric`.
Use a function to check if the car is electric. If it is, log `"This car is eco-friendly!"`. Otherwise, log `"This car runs on fuel."`
*/

const car = {
    brand: 'Toyota',
    model: 'Prius',
    year: 2023,
    isElectric: true
}

const checkElcetric = () => {
    if (car.isElectric) {
        return `The car is eco-friendly`
    }
    else {
        return `This car runs on fuel`
    }
}
checkElcetric()


/* Task 9
Create a `movies` array where each movie is an object with properties for `title`, `director`, and `rating`.
Write a loop that logs all movie titles with a rating higher than 8.
*/

const movies = [
    {title: 'Jaws', director: 'Steven Spielberg', rating: 10},
    {title: 'Spartacus', director: 'Stanley Kubrick', rating: 7},
    {title: 'Silence', director: 'Martin Scorsese', rating: 9},
    {title: 'The Game ', director: 'David Fincher', rating: 7.5},
]

movies.forEach(movie => {
    if (movie.rating > 8) {
        console.log(movie.title)
    }
})


/* Task 10
Write a function `findOldestCar` that takes an array of car objects and returns the car with the earliest `year`.
*/


const cars = [
    { brand: 'Toyota', model: 'Prius', year: 2022 },
    { brand: 'Marcedes', model: 'G63', year: 2023 },
    { brand: 'BMW', model: 'I8', year: 2025 },
    { brand: 'Tesla', model: 'Model 3', year: 2018 }
  ];

function findOldestCar(cars) {

    let oldestCar = cars[0];
    for (let i = 1; i < cars.length; i++) {
        if (cars[i].year < oldestCar.year) {
        oldestCar = cars[i];
        }
    }

    return oldestCar;
}
const oldestCar = findOldestCar(cars);
console.log(oldestCar);


/* Task 11
Define a `userProfiles` array containing objects representing users.
Each user should have a `username`, `email`, and `isAdmin` property.
Write a function that filters and returns only the users who are administrators.
*/

const userProfiles = [
    {username: 'Alice', email: 'alice@gmail.com', isAdmin: true},
    {username: 'Bob', email: 'bob23@gmail.com', isAdmin: false},
    {username: 'Charlie', email: 'charlie@gmail.com', isAdmin: false},
    {username: 'Denver', email: 'denvo@gmail.com', isAdmin: true},
]

const admin = () => {
    userProfiles.forEach(userProfile => {
        if (userProfile.isAdmin) {
            console.log(userProfile.username)
        }
    })
}
admin()


/* Task 12
Define an array named `orders`, where each order contains `orderId`, `customerName`, `totalAmount`, and `status` (either "pending" or "completed").
Write a function that returns only the completed orders.
*/


const orders = [
    {orderID: 4668, customerName: 'Andrew', totalAmount: 27, status: 'pending'},
    {orderID: 4686, customerName: 'Beldon', totalAmount: 13, status: 'completed'},
    {orderID: 8763, customerName: 'Carnett', totalAmount: 17, status: 'completed'},
    {orderID: 7865, customerName: 'Devol', totalAmount: 9, status: 'pending'},
]

const completedOrders = () => {
    orders.forEach(order => {
        if (order.status == 'completed') {
            console.log(order)
        }
    })
}
completedOrders()


/* Task 13
Create an object named `smartphone` with properties for `brand`, `model`, `batteryLife`, and `is5GEnabled`.
Write a function that logs `"This phone supports 5G!"` if `is5GEnabled` is `true`, otherwise logs `"This phone does not support 5G."`
*/


const smartphone = {
    brand: 'Xiaomi',
    model: '11 Lite',
    batteryLife: '4200MHz',
    is5GEnabled: true
}

const logs5G = () => {
    if (smartphone.is5GEnabled) {
        console.log('This phone supports 5G!')
    }
    else {
        console.log('This phone does not support 5G.')
    }
}
logs5G()


/* Task 14
Define an object named `fox` with properties `name`, `age`, and `habitat`.
Write a function that logs `"This fox is young"` if its age is under 3, `"This fox is an adult"` if 3 or older.
*/

const fox = {
    Name: 'Cannion',
    Age: 4,
    Habitat: 'Finland'
}
const foxAge = () => {
    if (fox.Age < 3) {
        console.log('This fox is young')
    }
    else {
        console.log('This fox is an adult')
    }
}
foxAge()


/* Task 15
Define an array named `employees`, where each employee has `name`, `position`, and `salary`.
Write a function that calculates the total salary of all employees in the company.
*/


const employees = [
    {Name: 'Alice', Position: 'Cook', Salary: 2200},
    {Name: 'Bob', Position: 'Kitchen Assistant', Salary: 1600},
    {Name: 'Charlie', Position: 'Waiter', Salary: 1400},
    {Name: 'Emma', Position: 'Cashier', Salary: 1800}
]

const calculate = () => {
    const total = employees.reduce((initial, employee) => initial + employee.Salary, 0)
    console.log(total)
  }
  calculate()
/* Task 1
Create an object `weather` that contains properties `temperature`, `humidity`, and `condition` (e.g., "Sunny", "Rainy").
Write a function that logs `"Take an umbrella!"` if it's rainy.
*/

const weather = {
    temperature: '5 degress',
    humidity: '72%',
    condition: 'Sunny'
}

const weatherReport = () => {
    if (weather.condition == 'Rainy') {
        return 'Take an umbrella'
    }
    else if (weather.condition == 'Sunny') {
        return 'Nothing to worry about'
    }
}
weatherReport()


/* Task 2
Define an object named `shoppingCart` that contains an array of items.
Each item has `name`, `price`, and `quantity`.
Write a function that calculates the total price of all items in the cart.
*/

const shoppingCart = {
    items: [
        {Name: 'Wrist watch', price: 255, quantity: 1},
        {Name: 'Shirt', price: 75, quantity: 2},
        {Name: 'Trouser', price: 35, quantity: 2}
    ]
}

const calculatePrice = () => {
    const total = shoppingCart.items.reduce((initial, item) => initial + item.price, 0)
    console.log(total)
}
calculatePrice()


/* Task 3
Create an array of objects named `restaurants`, each with properties `name`, `cuisineType`, and `rating`.
Write a function that returns only the restaurants with a rating of 4 or higher.
*/


const restaurants = [
    {Name: 'Osteria dei Gusti', cuisineType: 'Italian', rating: 4.7},
    {Name: 'Ravintola Yarsa', cuisineType: 'Nepalese', rating: 3.5},
    {Name: 'Flät no 14', cuisineType: 'Finnish', rating: 4},
    {Name: 'Skiffer Postipuisto', cuisineType: 'Mexican', rating: 3.7}
]

const higherRating = () => {
    restaurants.forEach(restaurant => {
        if (restaurant.rating >= 4) {
            console.log(restaurant)
        }    
    })
}
higherRating()


/* Task 4
Define an object named `bankAccount` with properties `accountHolder`, `balance`, and `transactions` (an array of numbers).
Write a function that calculates the total balance after all transactions.
*/

const bankAccount = {
    accountHolder: 'Marley',
    balance: 725,
    transactions: [175,25,50,20,5,15]
}

const finalBalance = () => {
    const totalTransaction = bankAccount.transactions.reduce((initial, transaction) => initial + transaction , 0)
    console.log(`Total transaction: ${totalTransaction}`)
    const balance = bankAccount.balance - totalTransaction
    console.log(`Total balance: ${balance}`)
}
finalBalance()


/* Task 5
Create an array `students` where each student has `name`, `scores` (array of numbers), and `averageScore` (initially null).
Write a function that calculates and updates each student's `averageScore`.
*/


const students = [
    {Name: 'Alice', Scores: [72,67,79,83], averageScore: []},
    {Name: 'Bob', Scores: [77,72,84,78], averageScore: []},
    {Name: 'Charles', Scores: [87,66,80,81], averageScore: []},
    {Name: 'Frank', Scores: [83,74,74,79], averageScore: []},
]

const calculateAverage = () => {
    students.forEach(student => {
        const totalScore = student.Scores.reduce((Score, initial) => Score + initial, 0)
        const avgScore = totalScore / (student.Scores.length)
        student.averageScore.push(avgScore)
        console.log(student)
    })
}
calculateAverage()


/* Task 6
Define an array named `courses`, each containing `courseName`, `instructor`, and `studentsEnrolled`.
Write a function that logs the course name of any course with more than 30 students.
*/


const courses = [
    {courseName: 'Physics', instructor: 'Alice', studentsEnrolled: 32},
    {courseName: 'Chemistry', instructor: 'Ballion', studentsEnrolled: 26},
    {courseName: 'Math', instructor: 'Hernandez', studentsEnrolled: 25},
    {courseName: 'Sustainable Development', instructor: 'Inigo', studentsEnrolled: 37},
]

const enroll = () => {
    courses.forEach(course => {
        if (course.studentsEnrolled > 30) {
            console.log(course.courseName)
        }
    })
}
enroll()


/* Task 7
Create an object `pet` with properties `species`, `name`, and `isVaccinated`.
Write a function that returns `"Vaccination required"` if the pet is not vaccinated.
*/

const pet = {
    Species: 'Cat',
    Name: 'Bilai',
    isVaccinated: true
}

const vaccinated = () => {
    if (!pet.isVaccinated) {
        return 'Vaccination required'
    }
    else {
        return 'Pet is vaccinated'
    }
}
vaccinated()


/* Task 8
Define an object named `city` with properties `name`, `population`, and `landmark`.
Write a function that logs `"This is a big city!"` if the population exceeds 1,000,000.
*/

const city = {
    Name: 'Helsinki',
    Population: 656920,
    landmark: 'Cathedral'
}

const cityType = () => {
    if (city.Population > 1000000) {
        return 'This is a big city'
    }
    else {
        return 'This is not so big city'
    }
}
cityType()


/* Task 9
Create an array `transactions`, where each transaction is an object with `type` ("credit" or "debit") and `amount`.
Write a function that calculates the total balance after processing all transactions.
*/

const transactions = [
    {type: 'credit', amount: 2000},
    {type: 'credit', amount: 400},
    {type: 'debit', amount: 375},
    {type: 'credit', amount: 200},
    {type: 'debit', amount: 835},
]

let balance = 0

const calculateMoney = () => {
  transactions.forEach(transaction => {
    if (transaction.type == 'credit') {
      balance += transaction.amount
    }
    else if (transaction.type == 'debit') {
      balance -= transaction.amount
    }
  })
  return balance
}
calculateMoney()



/* Task 10
Define an object named `foxPack` containing an array of fox objects.
Each fox has `name`, `age`, and `furColor`.
Write a function that filters out only the foxes that are younger than 2.
*/


const foxPack = {
    foxes: [
        {Name: 'Antony', Age: 2, furColor: 'Brown'},
        {Name: 'Alpha', Age: 1, furColor: 'Orange'},
        {Name: 'Charlie', Age: 2, furColor: 'Yellow'},
        {Name: 'Koln', Age: 0.5, furColor: 'Brown'},
    ]
}

const foxAge = () => {
    const age = foxPack.foxes.filter(fox => fox.Age < 2)
    console.log(age)
}
foxAge()


/* Task 11
Create an object `gameCharacter` with properties `name`, `level`, `health`, and `inventory` (an array).
Write a function that logs all items in the character’s inventory.
*/


const gameCharacter = {
    Name: 'Vito Scaletta',
    level: 5,
    health: 100,
    inventory: ['Grenade', 'Bandage', 'Thompson']
}

const accessInventory = () => {
    gameCharacter.inventory.forEach(invento => {
        console.log(invento)
    })
}
accessInventory()


/* Task 12
Define an array named `employees`, where each employee has a `name`, `role`, and `workingHours`.
Write a function that finds and logs employees who work more than 40 hours.
*/

const employees = [
    {Name: 'Alice', role: 'Chef', workingHours: 52},
    {Name: 'Bob', role: 'Kitchen assistant', workingHours: 42},
    {Name: 'Charlie', role: 'Cashier', workingHours: 38},
    {Name: 'Emma', role: 'Cleaner', workingHours: 32},
]

const findHours = () => {
    employees.forEach(employee => {
        if (employee.workingHours > 40) {
            console.log(employee.Name)
        }
    })
}
findHours()


/* Task 13
Create an array `musicAlbums` where each album has `title`, `artist`, and `releaseYear`.
Write a function that logs albums released after 2000.
*/

const musicAlbums = [
    {title: 'Starboy', artist: 'The Weeknd', releaseYear: 2018},
    {title: 'Born Slippy', artist: 'Underworld', releaseYear: 1996},
    {title: 'No Scrubs', artist: 'TLC', releaseYear: 1999},
    {title: 'Congratulations', artist: 'Post Malone', releaseYear: 2016}
]

const findMusic = () => {
    musicAlbums.forEach(musicAlbum => {
        if (musicAlbum.releaseYear > 2000) {
            console.log(musicAlbum)
        }
    })
}
findMusic()


/* Task 14
Define an array named `cars`, each containing `brand`, `model`, and `horsepower`.
Write a function that finds and returns the car with the highest horsepower.
*/

const cars = [
    {brand: 'Toyota', model: 'Prius', horsepower: 194},
    {brand: 'Marcedes', model: 'G63', horsepower: 585},
    {brand: 'BMW', model: 'I8', horsepower: 369},
    {brand: 'Audi', model: 'R8', horsepower: 602},
    {brand: 'Nissan', model: 'GTR', horsepower: 565}
]

const findingHighestHP = () => {
    return cars.reduce((highest, car) => {
        if (car.horsepower > highest.horsepower) {
            return car
        }
        else {
            return highest
        }
    })
}
findingHighestHP()


/* Task 15
Create an array of `airports`, where each airport has `name`, `country`, and `flightsPerDay`.
Write a function that finds the airport with the most daily flights.
*/

const airports = [
    {Name: 'Helsinki Airport', Country: 'Finland', flightsPerDay: 500},
    {Name: 'Sharjah Airport', Country: 'UAE', flightsPerDay: 400},
    {Name: 'Delhi Airport', Country: 'India', flightsPerDay: 600},
    {Name: 'Stockholm Airport', Country: 'Sweden', flightsPerDay: 350},
    {Name: 'Oslo Airport', Country: 'Norway', flightsPerDay: 270}
]

const mostFlights = () => {
    return airports.reduce((most, airport) => {
        if (airport.flightsPerDay > most.flightsPerDay) {
            return airport
        }
        else {
            return most
        }
    })
}
mostFlights()
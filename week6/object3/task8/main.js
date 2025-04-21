/* Task 8
Create a constructor function `Car` that takes `brand`, `model`, and `year`.
In the constructor, add a method `age()` that calculates the car’s age.
Instantiate a new `Car` and display its age on the webpage.
*/

class Car {
    constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  age = function() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
   }; 
}

const myCar = new Car("Toyota", "Corolla", 2020);

const carAge = document.getElementById('carAge')

const calculateAge = () => {
    carAge.textContent = `Age of the car is ${myCar.age()} years`
}
calculateAge()
/* Task 12
Create a constructor function `Employee` with `name`, `position`, and `salary`.
Add a method `increaseSalary(percent)` that increases the salary by a given percentage.
Create an employee and increase their salary dynamically.
*/

class Employee {
    constructor (name, position, salary) {
      this.name = name
      this.position = position
      this.salary = salary
    }
    increaseSalary(percent) {
      this.salary = this.salary + (this.salary * (percent / 100))
    }
  }
  const person1 = new Employee('Adel', 'Cook', 2000)
  person1.increaseSalary(10)
  console.log(person1)
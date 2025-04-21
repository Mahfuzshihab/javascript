/* Task 1
Create a constructor function `User` that takes `username` and `email` as parameters.
It should create an object with these properties and a method `showInfo` that logs user details.
Instantiate a new user and call `showInfo()`.
*/

// Your code here
function User(username, email) {
    this.username = username;
    this.email = email;
  
    this.showInfo = function () {
      console.log(`Username: ${this.username}, Email: ${this.email}`);
    };
  }
  
  const user1 = new User("John", "john@example.com");
  user.showInfo();
  
  /* Task 2
  Modify Task 1: Use an ES6 `class` instead of a constructor function to define `User`.
  Add a method `changeEmail(newEmail)` that updates the user's email.
  */
  
  // Your code here
  
  class User {
    constructor(username, email) {
      this.username = username;
      this.email = email;
    }
  
    changeEmail(newEmail) {
      this.email = newEmail;
    }
  
    showInfo() {
      console.log(`Username: ${this.username}, Email: ${this.email}`);
    }
  }
  
  const user2 = new User("John", "john@example.com");
  user.showInfo();
  user.changeEmail("john@gmail.com");
  user.showInfo();
  
 
  

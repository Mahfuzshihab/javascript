const validatePassword = () => {
    while (true) {
      let password = window.prompt("Input password");
      if (password == "correct123") {
        return "Access granted!";
      } else {
        console.log("Try again");
      }
    }
  };
  validatePassword();






  /* 
Write a function named validatePassword:
- Use a loop to allow the user to input a password.
- If the password is "correct123", log: "Access granted!" and exit the loop.
- If incorrect, prompt the user again with: "Try again!".
 */
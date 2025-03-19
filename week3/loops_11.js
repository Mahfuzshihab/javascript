const generateMultiplicationTable = () => {
    let number = Number(window.prompt("Take a number"));
    for (i = 1; i < 11; i++) {
      let multiply = `${number} x ${i} = ${number * i}`;
      console.log(multiply);
    }
  };
  generateMultiplicationTable();


  /* 

Write a function named generateMultiplicationTable:
- Take a number (e.g., 5) as input.
- Use a loop to generate the multiplication table for that number.
Log the table in the console.

Example for 5:

5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
 */
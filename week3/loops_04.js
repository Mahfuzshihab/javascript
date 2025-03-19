const countEvenNumbers = () => {
    let count = 0;
    let input;
    for (i = 0; i < 20; i++) {
      let input = Number(window.prompt("Input numbers (20 times):"));
      console.log(input);
      if (input % 2 == 0) {
        count++;
      }
    }
    console.log(`There are ${count} even numbers`);
  };
  countEvenNumbers();


  /* 
Write a function named countEvenNumbers:
- Prompt the user to input 20 numbers one by one.
- After all numbers are entered, log how many of them were even.
Display the result in the console. 
*/
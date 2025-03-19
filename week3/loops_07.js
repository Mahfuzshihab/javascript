const sumAndAverage = () => {
    let store = [];
    let sum = 0;
    let count = 0;
    for (i = 0; i < 10; i++) {
      let input = Number(window.prompt("Input numbers"));
      console.log(input);
      store.push(input);
      sum = sum + input;
      count++;
    }
    small = Math.min(...store);
    large = Math.max(...store);
    let average = sum / count;
    console.log("Sum of these numbers", sum);
    console.log("Average of this numbers", average);
    console.log("Smallest of these numbers is", small);
    console.log("Largest of these numbers is", large);
  };
  sumAndAverage();


  /* 
Write a function named sumAndAverage:
- Ask the user to input ten numbers.
- Calculate and log:
    - The sum of the numbers.
    - The average of the numbers.
    - The smallest and largest numbers.
Display all results in the console.
*/
const sumFromOneToHundred = () => {
    let sum = 0;
    for (i = 1; i < 101; i++) {
      console.log(i);
      sum = sum + i;
    }
    console.log(`Sum of 1 to 100 is ${sum}`);
  };
  sumFromOneToHundred();


  /* 
Write a function named sumFromOneToHundred:
- Use a loop to calculate the sum of all numbers from 1 to 100.
Log the final sum in the console.
*/
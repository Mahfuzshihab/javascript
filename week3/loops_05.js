const calculateAverageUntilZero = () => {
    let average;
    let count = 0;
    let add = 0;
    while (true) {
      let ask = Number(window.prompt("Input numbers (enter 0 to stop)"));
      if (ask == 0) {
        break;
      }
      add = add + ask;
      count++;
    }
    average = add / count;
    console.log(`The average of this numbers: ${average}`);
  };
  calculateAverageUntilZero();


  /* 
Write a function named calculateAverageUntilZero:
- Continuously prompt the user to input numbers.
- Stop asking for inputs when the user enters 0.
- Calculate and log the average of all entered numbers in the console once the loop ends.
 */
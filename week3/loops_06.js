const askToContinue = () => {
    let sum = 0;
    let count = 0;
    let cont;
    while (true) {
      let aNumber = Number(window.prompt("Enter a number"));
      console.log("The number is", aNumber);
      cont = String(window.prompt("Do you want to enter another number? (y/n)"));
      if (cont == "y") {
        askToContinue;
      } else {
        break;
      }
      sum = sum + aNumber;
      count++;
    }
    let average = sum / count;
    console.log("Average of the numbers", average);
  };
  askToContinue();



  /* 
Write a function named askToContinue:
- Prompt the user to enter a number.
- Then, ask: "Do you want to continue giving numbers? (y/n)".
- If the user answers "y", ask for another number.
- If the user answers "n", stop asking and log the average of all entered numbers in the console. 
*/
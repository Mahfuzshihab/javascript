const countdownTimer = () => {
    let aNumber = Number(window.prompt("Input number"));
    for (i = 0; i < aNumber + 1; i++) {
      console.log(aNumber - i);
    }
    console.log("Times up!");
  };
  countdownTimer();

  /* 
Write a function named countdownTimer:
- Take a number (e.g., 10) as input and simulate a countdown in the console.
Log each number in descending order until 0, and then log: "Time's up!".
 */
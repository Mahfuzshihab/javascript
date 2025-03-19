const findMinMax = () => {
    let store = [];
    let howMany = Number(window.prompt("How many numbers you want to input?"));
    console.log(`You choose to input ${howMany} numbers`);
    for (i = 0; i < howMany; i++) {
      let input = Number(window.prompt("Input numbers"));
      console.log(input);
      store.push(input);
    }
    max = Math.max(...store);
    min = Math.min(...store);
    console.log(`Maximum number ${max}`);
    console.log(`Minimum number ${min}`);
  };
  findMinMax();


  /* 
Write a function named findMinMax:
- Ask the user how many numbers they want to input.
- Then prompt them to enter that many numbers.
- Once all numbers are entered, determine and log:
- The smallest number.
- The largest number.
Display the results in the console. 
*/
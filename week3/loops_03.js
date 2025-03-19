const calculateAverageSpeed = () => {
    let distance = Number(window.prompt("Input distance (Kilometers)"));
    console.log(`Distance = ${distance}`);
    let time = Number(window.prompt("Input time (Hours)"));
    console.log(`Time = ${time}`);
    let avgSpeed = distance / time;
    console.log(`Average speed is: ${avgSpeed}`);
  };
  calculateAverageSpeed();


  /* 
Write a function named calculateAverageSpeed:
- Continuously prompt the user to input distance (in kilometers) and time (in hours).
- After each input, calculate and log the average speed in the console.
- Stop asking for inputs when the user enters 0 for distance. 
*/

/* 
Write a function named planAdventure:
Take three parameters: isWeekend, isSunny, and likesFoxes.
Use logical operators:
If it’s the weekend AND sunny AND likes foxes, return "Perfect day for a fox adventure!"
If it’s the weekend OR sunny, return "Good day, but not perfect."
Otherwise, return "Maybe another day."
Call the function with different combinations of conditions. 
*/

const planAdventure = (isWeekend, isSunny, likesFoxes) => {
    if ((isWeekend == true, (isSunny = true), likesFoxes == true)) {
      return "Perfect day for a fox adventure!";
    } else if (isWeekend == true || isSunny == true) {
      return "Good day, but not perfect.";
    } else {
      return "Maybe another day.";
    }
  };
  console.log(planAdventure(true, true, true));
  console.log(planAdventure(true, true, false));
  console.log(planAdventure(false, false, false));
  console.log(planAdventure(false, false, true));
  console.log(planAdventure(true, false, true));
  console.log(planAdventure(fasle, true, fasle));
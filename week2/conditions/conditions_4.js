const canEat = (isHungry, hasFood) => {
    if (isHungry == true && hasFood == true) {
      return "Time to eat!";
    } else if (isHungry == false || hasFood == false) {
      return "You need to find food!";
    }
  };
  console.log(canEat(true, true));
  console.log(canEat(false, false));
  console.log(canEat(true, false));
  console.log(canEat(false, true));
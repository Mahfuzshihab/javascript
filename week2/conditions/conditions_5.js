const checkAnimal = (animalType) => {
    if (animalType == "fox") {
      return "You have a clever companion!";
    } else {
      return "Not a fox, but still cool!";
    }
  };
  console.log(checkAnimal("fox"));
  console.log(checkAnimal("cat"));
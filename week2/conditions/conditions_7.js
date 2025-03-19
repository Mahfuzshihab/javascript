
/* 
Write a function named getAnimalDescription:
Take a parameter favoriteAnimal.
Use a switch statement to:
If "fox", return "Foxes are sly and smart!"
If "dog", return "Dogs are loyal friends."
If "cat", return "Cats are curious and independent."
For any other animal, return "All animals are awesome!"
Call the function with different animal names. 
*/

const getAnimalDescription = (favoriteAnimal) => {
    if (favoriteAnimal == "fox") {
      return "Foxes are sly and smart!";
    } else if (favoriteAnimal == "dog") {
      return "Dogs are loyal friends.";
    } else if (favoriteAnimal == "cat") {
      return "Cats are curious and independent.";
    } else {
      return "All animals are awesome!";
    }
  };
  console.log(getAnimalDescription("fox"));
  console.log(getAnimalDescription("dog"));
  console.log(getAnimalDescription("cat"));
  console.log(getAnimalDescription("horse"));
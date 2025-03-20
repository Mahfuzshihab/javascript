const btn = document.getElementById("addFruitBtn");
const fruitList = document.getElementById("fruitList");

const fruitInput = () => {
  const input = document.getElementById("fruitInput");
  const inputValue = input.value.trim();

  if (inputValue) {
    const listItem = document.createElement("li");
    listItem.textContent = inputValue;
    fruitList.appendChild(listItem);
    input.value = "";
  }
};

btn.addEventListener("click", fruitInput);

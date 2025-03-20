const btn = document.getElementById("btn");
const input = document.getElementById("input");
const txt = document.getElementById("txt");

const changeBackground = () => {
  txt.style.backgroundColor = "green";
};
btn.addEventListener("click", changeBackground);

const changeColor = () => {
  const inputValue = input.value;
  txt.style.color = inputValue;
};
input.addEventListener("input", changeColor);
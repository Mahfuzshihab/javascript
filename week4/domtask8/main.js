const btn = document.getElementById("btn");
const txt = document.getElementById("txt");

let count = 0;

const counter = () => {
  txt.textContent = `Click: ${count}`;
  count++;
};

btn.addEventListener("click", counter);

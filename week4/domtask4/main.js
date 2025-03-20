const displayText = document.getElementById("displayText");
const input = document.getElementById("input");

const liveText = () => {
  const inputValue = input.value;
  displayText.textContent = inputValue;
};
input.addEventListener("input", liveText);
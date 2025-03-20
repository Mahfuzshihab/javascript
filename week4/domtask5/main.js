const btn = document.getElementById("btn");

const txtVisibility = () => {
  const txt = document.getElementById("txt");
  if (txt.style.display === "none") {
    txt.style.display = "block";
  } else {
    txt.style.display = "none";
  }
};

btn.addEventListener("click", txtVisibility);

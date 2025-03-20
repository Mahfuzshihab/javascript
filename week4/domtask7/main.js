const form = document.getElementById("form");
form.addEventListener("submit", function () {
  const name = document.getElementById("name").value;
  const mail = document.getElementById("mail").value;
  if (!name || !mail) {
    alert("Please fill all the fields");
  } else {
    alert("Form submitted!");
  }
});

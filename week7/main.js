// Select Elements
const backToTopBtn = document.querySelector("#backToTopBtn");
const overlay = document.querySelector("#overlay");
const showBtn = document.querySelector("#Showbtn");
const closeBtn = document.querySelector("#closeBtn");

// Show Modal
showBtn.addEventListener("click", () => {
  overlay.style.display = "flex";
  overlay.style.opacity = "0";
  setTimeout(() => {
    overlay.style.opacity = "1";
  }, 10);
});

// Close Modal on Close Button Click
closeBtn.addEventListener("click", () => {
  overlay.style.opacity = "0";
  setTimeout(() => {
    overlay.style.display = "none";
  }, 300);
});

// Close Modal by Clicking Outside of Modal Content
overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    overlay.style.opacity = "0";
    setTimeout(() => {
      overlay.style.display = "none";
    }, 300);
  }
});

// Show/Hide Back to Top Button
window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// Scroll Back to Top
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Select Dark Mode Button
const darkModeBtn = document.querySelector("#darkModeBtn");

darkModeBtn.addEventListener("click", myFunction);

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

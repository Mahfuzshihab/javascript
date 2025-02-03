const paragraph = document.getElementById(`text`);
console.log(paragraph.textContent);

function alertText() {
  console.log("Button was clicked");

  paragraph.textContent = "Hello World";
}


function changeBack() {

    paragraph.textContent = "Lorem ipsum dolor sit amet";



    
}

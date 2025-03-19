const magic8Ball = () => {
    let question = String(window.prompt("Ask a question"));
    console.log(`Question asked: ${question}`);
    let random = Math.floor(Math.random(1, 8) * 8);
    console.log(`You got the number: ${random}`);
    if (random == 0) {
      alert("Yes, definitely!");
    } else if (random == 1) {
      alert("No COmment, try again.");
    } else if (random == 2) {
      alert("Let me think again");
    } else if (random == 3) {
      alert("Ask your friend.");
    } else if (random == 4) {
      alert("Better not tell you now.");
    } else if (random == 5) {
      alert("Outlook is so good.");
    } else if (random == 6) {
      alert("Signs point to yes.");
    } else if (random == 7) {
      alert("Big No");
    } else if (random == 8) {
      alert("Up to you");
    }
  };
  magic8Ball();
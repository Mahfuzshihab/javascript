/* Task 13
Create an object `timer` with `seconds` and a method `start()` that counts seconds up.
Display the timer in an HTML element and update it every second.
*/

const timer = {
    seconds: 0,
  
    start() {
      setInterval(() => {
        this.seconds++;
        document.getElementById('timer').textContent = `Seconds: ${this.seconds}`;
      }, 1000);
    }
  };
  timer.start();
  
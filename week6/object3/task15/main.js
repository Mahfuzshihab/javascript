/* Task 15
Create an object `foxTracker` with a `foxes` array.
Add an input field and button that allows users to add new foxes (with name and location) to the array.
Display the list of foxes dynamically in an HTML element.
*/

const foxTracker = {
    foxes: []
};

const list = document.getElementById('list')
const displayFoxes = () => {
    foxTracker.foxes.forEach(function(fox) {
        const foxList = document.createElement("li");
        foxList.textContent = `Name: ${fox.name} - Location: ${fox.location}`;
        list.appendChild(foxList);
    });
}

document.getElementById("btn").addEventListener("click", function() {
    const foxName = document.getElementById("name").value;
    const foxLocation = document.getElementById("location").value;

    if (foxName && foxLocation) {
        foxTracker.foxes.push({ name: foxName, location: foxLocation });

        document.getElementById("name").value = "";
        document.getElementById("location").value = "";

        displayFoxes();
    } else {
        alert("Please enter both name and location!");
    }
});
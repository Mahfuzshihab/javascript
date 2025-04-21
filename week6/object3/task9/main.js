/* Task 9
Create an array `users` where each user has `name` and `score`.
Add a button in HTML that sorts the users by score in descending order and updates the displayed list.
*/

const users = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 },
    { name: "David", score: 95 },
    { name: "Emma", score: 88 }
];
function displayUsers(usersArray) {
    const userList = document.getElementById("userList");
    userList.innerHTML = '';

    usersArray.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name}: ${user.score}`;
        userList.appendChild(li);
    });
}


displayUsers(users);


document.getElementById("sortButton").addEventListener("click", function() {
    users.sort((a, b) => b.score - a.score);
    displayUsers(users);
})
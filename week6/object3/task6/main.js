/* Task 6
Define a `Task` constructor that takes `title`, `description`, and `completed`.
Add a button in HTML that, when clicked, adds a new `Task` object to a `tasks` array and displays it on the page.
*/


function Task(title, description, completed) {
    this.title = title;
    this.description = description;
    this.completed = completed;
}

let tasks = [];

const btn = document.getElementById('btn')

const addTask = () => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const completed = document.getElementById('completed').checked;

    const newTask = new Task(title, description, completed);
    tasks.push(newTask);
    displayTasks();
}

btn.addEventListener('click', addTask)

function displayTasks() {
    const taskList = document.getElementById('task-list');
    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = `Title: ${task.title}, Description: ${task.description}, Completed: ${task.completed}`;
        taskList.appendChild(listItem);
        document.getElementById('title').value = ''
        document.getElementById('description').value = ''
        document.getElementById('completed').checked = ''
    });
}
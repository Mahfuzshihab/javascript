a
/* Task 1
Store a string `"Hello, LocalStorage!"` in LocalStorage under the key `"message"`.
Retrieve it and log it to the console.
*/

const message = 'Hello, LocalStorage!';
localStorage.setItem('message', message);

const retrieve = localStorage.getItem('message');
console.log(retrieve); 



/* Task 2
Create an object `userSettings` with:
- `theme` ("dark" or "light")
- `language` ("English", "Spanish", etc.)

Convert it to a JSON string and store it in LocalStorage.
Retrieve it, parse it, and log the `theme` property.
*/

const userSettings = {
    theme: 'dark',
    language: 'English'
}

const userSettingsConvert = JSON.stringify(userSettings)
localStorage.setItem('preferences', userSettingsConvert)

localStorage.getItem('preferences')
const parseUserSettings = JSON.parse(localStorage.getItem('preferences'))
console.log(parseUserSettings.theme)


/* Task 3
Define an array `favoriteBooks` with at least three book objects (`title` and `author`).
Store the array in LocalStorage.
Retrieve and parse it, then log the titles of all books.
*/

const favoriteBooks = [
    {title: 'Toil Chitrer Bhoot', author: 'Manik Bandopaddhay'},
    {title: 'Robinson Crusoe', author: 'Daniel Defoe'},
    {title: 'Dracula', author: 'Bram Stocker'},
    {title: 'Milton', author: 'William Blake'}
]

const convertingBooks = JSON.stringify(favoriteBooks)
localStorage.setItem('Books', convertingBooks)

const retrieve = localStorage.getItem('Books')
const perseBooks = JSON.parse(retrieve)

perseBooks.forEach(perseBook => {
    console.log(perseBook.title)
})


/* Task 4
Write a function `saveToLocalStorage(key, object)` that:
- Converts an object to JSON.
- Stores it in LocalStorage under the provided key.
Test it by saving an object and retrieving it.
*/

const saveToLocalStorage = (key, object) => {
    localStorage.setItem(key, JSON.stringify(object))
}
saveToLocalStorage('country', {country: 'Finland', Capital: 'Helsinki'})

const getObject = JSON.parse(localStorage.getItem('country'))
console.log(getObject)



/* Task 5
Write a function `getFromLocalStorage(key)` that:
- Retrieves a value from LocalStorage.
- Parses it if it's JSON.
- Logs the retrieved value.
*/


const getFromLocalStorage = (key) => {
    const storedValue = localStorage.getItem(key);

    if (storedValue === null) {
        console.log('No values found for  key:', key);
        return null;
    }

    try {
        const parsedValue = JSON.parse(storedValue);
        console.log('Retrieved value (parsed):', parsedValue);
        return parsedValue;
    } catch (e) {
        console.log('Retrieved value (raw):', storedValue);
        return storedValue;
    }
}


/* Task 6
Create an object `userProfile` with:
- `username`
- `email`
- `preferences` (an object with `theme` and `notifications`)

Save it to LocalStorage.
Retrieve and update the `theme` property to `"dark mode"`, then log the updated object.
*/


const userProfile = {
    username: 'Shihab',
    email: 'ex@mple.com',
    preferences: {
        theme: 'light mode',
        notifications: true
    }
}

const convertUserProfile = JSON.stringify(userProfile)
localStorage.setItem('profile', convertUserProfile)

const retrieveProfile = JSON.parse(localStorage.getItem('profile'))
retrieveProfile.preferences.theme = 'dark mode'
console.log(retrieveProfile)


/* Task 7
Define an object `shoppingList` with an array `items` (strings).
Save it to LocalStorage.
Write a function `addItemToList(item)` that:
- Retrieves `shoppingList` from LocalStorage.
- Adds a new item.
- Saves the updated list back to LocalStorage.
- Logs the updated list.
*/

const shoppingList = {
    items: ['Mac', 'Bag', 'Speaker']
}

const stringifyList = JSON.stringify(shoppingList)
localStorage.setItem('list', stringifyList)

const addItemToList = (item) => {
    const retrieveList = JSON.parse(localStorage.getItem('list'))
    retrieveList.items.push(item)

    const updatedList = JSON.stringify(retrieveList)
    localStorage.setItem('list', updatedList)

    console.log(updatedList)
}

addItemToList('Cable');

/* Task 8
Create a counter object with:
- `count` (starting at 0)
Store it in LocalStorage.
Write a function `incrementCounter()` that:
- Retrieves the counter.
- Increases `count` by 1.
- Saves the updated counter.
- Logs the new count.
*/


const counter = {
    count: 0
}

const stringifyCounter = JSON.stringify(counter)
localStorage.setItem('count', stringifyCounter)

const incrementCounter = () => {
    const retrieveCounter = JSON.parse(localStorage.getItem('count'))
    retrieveCounter.count += 1
    const stringifyRetrieveCounter = JSON.stringify(retrieveCounter)
    localStorage.setItem('count', stringifyRetrieveCounter)
    console.log(retrieveCounter.count)
}
incrementCounter()


/* Task 9
Create an array `tasks`, where each task is an object (`id`, `description`, `completed`).
Save it to LocalStorage.
Write a function `markTaskComplete(taskId)` that:
- Retrieves `tasks` from LocalStorage.
- Finds the task with the given ID and sets `completed` to `true`.
- Saves the updated tasks.
- Logs the updated list.
*/  

const tasks = [
    {id: 2145, description: 'Task 1 description', completed: false},
    {id: 7322, description: 'Task 2 description', completed: true},
    {id: 8273, description: 'Task 3 description', completed: false},
]

const tasksStringify = JSON.stringify(tasks)
localStorage.setItem('tasks', tasksStringify)

const markTaskComplete = (taskId) => {
    const retrieveTasks = JSON.parse(localStorage.getItem('tasks'))
    const task = retrieveTasks.find(task => task.id === taskId);
    if (task) {
        task.completed = true;
    } else {
        console.log(`Task with id ${taskId} not found.`);
        return;
    }

    localStorage.setItem('tasks', JSON.stringify(retrieveTasks))
    console.log(retrieveTasks)
}
markTaskComplete(8273)


/* Task 10
Write a function `clearLocalStorage()` that removes all data stored in LocalStorage.
Call it and confirm LocalStorage is empty.
*/

const clearLocalStorage = () => {
    localStorage.clear()
}
clearLocalStorage()

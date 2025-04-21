/* Task 10
Create an object `shoppingList` with an array `items`.
Add an input field and button to allow users to add new items to `items` and display the updated list.
*/

const shoppingList = {
    items : []
}

const input = document.getElementById('input')
const btn = document.getElementById('btn')
const list = document.getElementById('list')

const listAdd = () => {
    const inputItems = input.value
    if (inputItems) {
        shoppingList.items.push(inputItems)
        inputItems.value = ''
        addItems()
    }
}

const addItems = () => {
    shoppingList.items.forEach(item => {
        const itemsList = document.createElement('li')
        itemsList.textContent = item
        list.appendChild(itemsList)
    })
}
btn.addEventListener('click', listAdd)
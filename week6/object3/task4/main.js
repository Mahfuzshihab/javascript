/* Task 4
Create an object `counter` with a `value` property.
Add two buttons in HTML: one to increase `value`, another to decrease it.
Display `value` in an HTML element and update it dynamically when buttons are clicked.
*/

const counter = {
    value: 0
}

const firstBtn = document.getElementById('first-btn')
const secondBtn = document.getElementById('second-btn')
const para = document.getElementById('para')

const clickPlus = () => {
    counter.value++
    para.textContent = `Value: ${counter.value}`
}
firstBtn.addEventListener('click', clickPlus)

const clickMinus = () => {
    counter.value--
    para.textContent = `Value: ${counter.value}`
}
secondBtn.addEventListener('click', clickMinus)
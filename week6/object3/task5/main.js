/* Task 5
Create an object `product` with `name`, `price`, and `quantity`.
Add an input field in HTML where the user can enter a quantity to purchase.
Update the `quantity` property and display the total price dynamically.
*/

const product = {
    Name: 'Mobile',
    price: 200,
    quantity: 1
}

const para = document.getElementById('pri')
const input = document.getElementById('input')

const purchase = () => {
   const quantity = Number(input.value)
   product.quantity = quantity
   const totalPrice = product.price * product.quantity
   para.textContent = `Total price: ${totalPrice}`
}
input.addEventListener('input', purchase)
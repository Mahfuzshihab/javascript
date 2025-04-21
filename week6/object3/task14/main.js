/* Task 14
Create a constructor function `Book` that takes `title`, `author`, and `pages`.
Create a simple book library that allows users to add books via an HTML form and displays them dynamically.
*/

class Book {
    constructor (title, author, pages) {
        this.title = title
        this.author = author
        this.pages = pages
    }
}

const books = []


const btn = document.getElementById('btn')
const list = document.getElementById('list')


const bookAdd = () => {
    
    books.forEach(book => {
        const bookList = document.createElement('li')
        bookList.textContent = `Book: ${book.title}, Author: ${book.author}, Pages: ${book.pages}`
        list.appendChild(bookList)
    })
}

const bookForm = () => {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const newBook = new Book(title, author, pages)
    books.push(newBook)
    bookAdd()
}
btn.addEventListener('click', bookForm)
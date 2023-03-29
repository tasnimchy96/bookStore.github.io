// Retrieve books from localStorage or set empty array
let books = JSON.parse(localStorage.getItem('books')) || [];

// Display all books saved in the collection
function displayBooks() {
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = '';
  // Define the removeBook function before it is called
  function removeBook(index) {
    books = books.filter((book, i) => i !== index);
    localStorage.setItem('books', JSON.stringify(books));
    displayBooks();
  }
  books.forEach((book, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
    <p>${book.title}</p>
    <p>${book.author}</p>
    <hr>
    `;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
      removeBook(index);
    });
    li.appendChild(removeBtn);
    bookList.appendChild(li);
  });
}

// Add new book to the collection
function addBook(event) {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  books.push({ title, author });
  localStorage.setItem('books', JSON.stringify(books));
  displayBooks();
  event.target.reset();
}

// Event listener for form submission
document.getElementById('addForm').addEventListener('submit', addBook);

// Initial display of books
displayBooks();

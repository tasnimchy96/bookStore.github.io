let books = JSON.parse(localStorage.getItem("books")) || [];

function displayBooks() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";
  books.forEach((book, index) => {
    const li = document.createElement("li");
    li.textContent = `${book.title} by ${book.author}`;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      removeBook(index);
    });
    li.appendChild(removeBtn);
    bookList.appendChild(li);
  });
}

function addBook(event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  console.log(title);
  console.log(author);
  const author = document.getElementById("author").value;
  books.push({ title, author });
  localStorage.setItem("books", JSON.stringify(books));
  displayBooks();
  event.target.reset();
}

// function removeBook(index) {
//   books = books.filter((books, i) => i !== index);
//   localStorage.setItem("books", JSON.stringify(books));
//   displayBooks();
// }

// document.getElementById("addBtn").addEventListener("click", addBook);

// displayBooks();

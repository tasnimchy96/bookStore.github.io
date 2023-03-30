class BookCollection {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.bookList = document.getElementById('bookList');
    this.addForm = document.getElementById('addForm');
    this.addForm.addEventListener('submit', this.addBook.bind(this));
    this.displayBooks();
  }

  addBook(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    this.books.push({ title, author });
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
    event.target.reset();
  }

  removeBook(index) {
    this.books = this.books.filter((book, i) => i !== index);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  displayBooks() {
    this.bookList.innerHTML = '';
    this.books.forEach((book, index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>"${book.title}" by ${book.author}</td>
      `;
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.addEventListener('click', () => {
        this.removeBook(index);
      });

      removeBtn.classList.add('removeBtn');
      tr.appendChild(removeBtn);
      this.bookList.appendChild(tr);
    });
  }
}

const bookCollection = new BookCollection();

bookCollection();

// const list = document.querySelector('#list');
// const addNew = document.querySelector('#add-new');
// const contact = document.querySelector('#contact');

// list.addEventListener('click', () => {
//   list.style.display = 'block';
//   addNew.style.display = 'none';
//   contact.style.display = 'none';
// });

// addNew.addEventListener('click', () => {
//   addNew.style.display = 'block';
//   list.style.display = 'none';
//   contact.style.display = 'none';
// });

// contact.addEventListener('click', () => {
//   contact.style.display = 'flex';
//   list.style.display = 'none';
//   addNew.style.display = 'none';
// });

// function showList() {
//   document.getElementById("list-info").classList.add("display_block");
//   document.getElementById("add-new-info").classList.add("display_none");
//   document.getElementById("contact-info").classList.add("display_none");
//   console.log("list");
// }
// function showAdd() {
//   document.getElementById("add-new-info").classList.add("display_block");
//   document.getElementById("list-info").classList.add("display_none");
//   document.getElementById("contact-info").classList.add("display_none");
// }
// function showContact() {
//   document.getElementById("contact-info").classList.add("display_flex");
//   document.getElementById("list-info").classList.add("display_none");
//   document.getElementById("add-new-info").classList.add("display_none");
// }

// document.getElementById("list").addEventListener("click", showList());
// document.getElementById("add-new").addEventListener("click", showAdd());
// document.getElementById("contact").addEventListener("click", showContact);

const listInfo = document.getElementById('list-info');
const addNewInfo = document.getElementById('add-new-info');
const contactInfo = document.getElementById('contact-info');

function showList() {
  listInfo.classList.toggle('display_block');
  addNewInfo.classList.toggle('display_none');
  contactInfo.classList.toggle('display_none');
}

function showAdd() {
  addNewInfo.classList.toggle('display_block');
  listInfo.classList.toggle('display_none');
  contactInfo.classList.toggle('display_none');
}

function showContact() {
  contactInfo.classList.toggle('display_flex');
  listInfo.classList.toggle('display_none');
  addNewInfo.classList.toggle('display_none');
}

document.getElementById('list').addEventListener('click', showList);
document.getElementById('add-new').addEventListener('click', showAdd);
document.getElementById('contact').addEventListener('click', showContact);

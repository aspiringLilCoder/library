
const addBook = document.querySelector("#submit"); 
const archive = document.querySelector("#archive"); 
let readBtn;
let removeBtn;

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


addBook.addEventListener("click", addBookToLibrary);

function addBookToLibrary() {
  const titleVal = document.querySelector("#title").value; 
  const authorVal = document.querySelector("#author").value; 
  const pagesVal = document.querySelector("#pages").value; 
  const readCheck = document.querySelector("#read").checked; 

  let newBook = new Book(titleVal,authorVal,pagesVal, readCheck)
  console.log(newBook);
  myLibrary.push(newBook);

  document.getElementById('archive').innerHTML = '';

  for (let i = 0; i < myLibrary.length; i++) {
    console.log("hey");
    const el = myLibrary[i];

    let book = document.createElement("div");
    book.classList.add("book");

    let details = document.createElement("div");
    details.classList.add("details");

    book.appendChild(details);

    let title = document.createElement("p");
    title.textContent = `Title: ${el.title}`;

    let author = document.createElement("p");
    author.textContent = `Author: ${el.author}`;

    let pages = document.createElement("p");
    pages.textContent = `${el.pages} pages`;

    let read = document.createElement("button");
    read.classList.add("read");
    if (el.read) {
      read.textContent = "Read";
    } else {
      read.textContent = "Not Yet Read";
    }

    details.appendChild(title);
    details.appendChild(author);
    details.appendChild(pages);
    details.appendChild(read);

    let remove = document.createElement("button");
    remove.classList.add("remove")
    remove.textContent = "Remove"
    book.appendChild(remove);

    document.querySelector("#archive").appendChild(book);
    readBtn = document.querySelectorAll(".read");
    removeBtn = document.querySelectorAll(".remove");
  }
  readBtn.forEach(el => el.addEventListener("click", function() {
    if (el.textContent == "Read") {
      el.textContent = "Not Yet Read"
    } else {
      el.textContent = "Read"
    }
  }));
  
  removeBtn.forEach(el => el.addEventListener("click", function() {
    (el.parentElement).remove();
  }));
  
}



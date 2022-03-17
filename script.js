
const form = document.querySelector("#add"); 
const archive = document.querySelector("#archive"); 

class Book {
  constructor(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  }
  
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();
});

function addBookToLibrary() {
  const titleVal = document.querySelector("#title").value; 
  const authorVal = document.querySelector("#author").value; 
  const pagesVal = document.querySelector("#pages").value; 
  const readCheck = document.querySelector("#read").checked; 

  let newBook = new Book(titleVal,authorVal,pagesVal, readCheck)
  console.log(newBook);

    let book = document.createElement("div");
    book.classList.add("book");
   

    let details = document.createElement("div");
    details.classList.add("details");

    book.appendChild(details);

    let title = document.createElement("p");
    title.textContent = `Title: ${newBook.title}`;

    let author = document.createElement("p");
    author.textContent = `Author: ${newBook.author}`;

    let pages = document.createElement("p");
    pages.textContent = `${newBook.pages} pages`;

    let hasread = document.createElement("button");
    hasread.classList.add("read");
    if (readCheck) {
      hasread.textContent = "Read";
    } else {
      hasread.textContent = "Not Yet Read";
    }

    details.appendChild(title);
    details.appendChild(author);
    details.appendChild(pages);
    details.appendChild(hasread);

    let remove = document.createElement("button");
    remove.classList.add("remove")
    remove.textContent = "Remove"
    book.appendChild(remove);

    document.querySelector("#archive").appendChild(book);
    const removeBtn = document.querySelectorAll(".remove");


    hasread.addEventListener("click", () => {
      if (hasread.textContent == "Read") {
        hasread.textContent = "Not Yet Read";
      } else if(hasread.textContent == "Not Yet Read") {
        hasread.textContent = "Read";
      }
    })
   
  
  
  removeBtn.forEach(el => el.addEventListener("click", function() {
    (el.parentElement).remove();
  }));
  
}




const addBook = document.querySelector("#submit"); 
const archive = document.querySelector("#archive"); 



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
    const readBtn = document.querySelectorAll(".read");
    const removeBtn = document.querySelectorAll(".remove");


    readBtn.forEach(el => el.addEventListener("click", () => {

      if (el.innerText == "Read") {
        el.innerText = "Not Yet Read";
      } else if(el.innerText == "Not Yet Read") {
        el.innerText = "Read";
      }

    }, false))
   
  
  
  removeBtn.forEach(el => el.addEventListener("click", function() {
    (el.parentElement).remove();
  }));
  
}



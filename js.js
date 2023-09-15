const formCont = document.querySelector(".formCont")
const addBookButton = document.querySelector(".addBook") 
const add = document.querySelector("#add")
const inputs = document.querySelectorAll("input")
const container = document.querySelector(".container")


const myLibrary = [];


function Book(image, title,author,pages,read) {
    this.image = createImageBitmap
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}


function addBook(book){
    myLibrary.push(book)
}

console.log

add.addEventListener("click", () => {
  const image = document.querySelector("#image").files[0]; 
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = parseInt(document.querySelector("#pages").value);
  
  // Get the selected radio button's id
  let selectedId = null;
  const readRadioButtons = document.querySelectorAll("[name='read']");
  readRadioButtons.forEach(radioButton => {
    if (radioButton.checked) {
        selectedId = radioButton.id;
    }
  });

  let book = new Book(image, title, author, pages, selectedId); // Use selectedId here

  addBook(book);  

  // Clear form inputs
  const inputs = document.querySelectorAll("input");
  inputs.forEach(input => {
      if (input.type === "checkbox" || input.type === "radio") {
          input.checked = false; 
      } else if (input.type === "file") {
          input.value = ""; 
      } else {
          input.value = ""; 
      }
  });

  updateLibrary()
  formCont.style.display = "none";
  container.style.filter = "none";
});



addBookButton.addEventListener("click",() =>{
  container.style.filter = "blur(5px)";
  formCont.style.display="grid";
//
})


function updateLibrary(){
  const booksContainer = document.querySelector(".booksContainer");

  // Clear existing content in the container
  booksContainer.innerHTML = "";

  // Loop through the array and create HTML elements for each book
  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("card");

    const bookImage = document.createElement("img");
    bookImage.classList.add("bookImage");
    bookImage.style.backgroundImage = `url(${book.image})`;

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = book.title;

    const author = document.createElement("div");
    author.classList.add("author");
    author.textContent = book.author;

    const pages = document.createElement("div");
    pages.classList.add("pages");
    pages.textContent = `${book.pages} pages`;

    bookCard.appendChild(bookImage);
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);

    booksContainer.appendChild(bookCard);
  });
}


/*
let book1 = {
  title:"The Hobbit",
  author:"tolken",
  pages:365,
  read:true
}

addBook(book1)

console.log(myLibrary)

*/
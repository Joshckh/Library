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
  const read = document.querySelectorAll("[name='read']").checked;


  let book = new Book(image, title, author, pages, read);

  
  addBook(book);

 
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


  formCont.style.display = "none";
});



addBookButton.addEventListener("click",() =>{
  container.style.filter = "blur(5px)";
  formCont.style.display="grid";
//
})


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
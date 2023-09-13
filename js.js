const myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}


function addBook(book){
    myLibrary.push(book)
}


const formCont = document.querySelector(".formCont")
const addBookButton = document.querySelector(".addBook") 

addBookButton.addEventListener("click",() =>{
  formCont.style.display="grid"
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
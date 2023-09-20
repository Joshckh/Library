// Select DOM elements
const formCont = document.querySelector(".formCont"); // Selects the form container
const addBookButton = document.querySelector(".addBook"); // Selects the "Add Book" button
const add = document.querySelector("#add"); // Selects the "Add" button inside the form
const inputs = document.querySelectorAll("input"); // Selects all input elements
const container = document.querySelector(".container"); // Selects the container element
const removeButtons = document.querySelectorAll(".deleteButton"); // Selects all "Remove" buttons
const deleteButtons = document.querySelectorAll(".deleteButton"); // Selects all "Delete" buttons

// Create an array to store books
const myLibrary = [];

// Define a constructor function for a Book
function Book(image, title, author, pages, read) {
  this.image = image;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Function to add a book to the library
function addBook(book) {
  myLibrary.push(book);
}

// Function to delete a book from the library
function delBook(title) {
  // Ask for confirmation
  const confirmed = confirm(`Are you sure you want to remove the book "${title}"?`);

  if (confirmed) {
    for (let i = 0; i < myLibrary.length; i++) {
      if (title === myLibrary[i].title) {
        myLibrary.splice(i, 1); // Remove the book with the matching title
        break; // Exit the loop after the book is deleted
      }
    }

    // Update the library display after removing the book
    updateLibrary();
  }
}

function toggleReadStatus(index) {
  myLibrary[index].read = !myLibrary[index].read; // Toggle the read status
  updateLibrary(); // Update the library display to reflect the changes
}

// Function to update the library display
function updateLibrary() {
  const booksContainer = document.querySelector(".booksContainer");

  // Clear existing content in the container
  booksContainer.innerHTML = "";

  // Loop through the array and create HTML elements for each book
  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("card");

    const bookImage = document.createElement("div");
    bookImage.classList.add("bookImage");

    if (book.image) {
      // Create an <img> element and set its src attribute if an image exists
      const imgElement = document.createElement("img");
      imgElement.src = book.image;
      imgElement.alt = book.title; // Add alt text if needed
      bookImage.appendChild(imgElement);
    }

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = book.title;

    const author = document.createElement("div");
    author.classList.add("author");
    author.textContent = book.author;

    const pages = document.createElement("div");
    pages.classList.add("pages");
    pages.textContent = `${book.pages} pages`;

    const delButton = document.createElement("button");
    delButton.classList.add("deleteButton");
    delButton.textContent = "Remove";
    delButton.addEventListener("click", (event) => {
      // Get the book title associated with the clicked button
      const bookTitle = event.target.parentElement.querySelector(".title").textContent;

      // Call the delBook function to remove the book by title
      delBook(bookTitle);
    });

    const readStatus = document.createElement("button");
    readStatus.addEventListener("click", () => {
      toggleReadStatus(index); // Call the function to toggle the read status
    });

    // Initialize the button text and class based on the initial read status
    if (myLibrary[index].read === true) {
      readStatus.classList.add("statusRead");
      readStatus.textContent = "Read";
    } else {
      readStatus.classList.add("statusNotRead");
      readStatus.textContent = "Not Read";
    }

    // Append elements to the book card
    bookCard.appendChild(bookImage);
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(delButton);
    bookCard.appendChild(readStatus);

    // Append the book card to the books container
    booksContainer.appendChild(bookCard);
  });
}

// Event listener for the "Add" button click
add.addEventListener("click", () => {
  // Get values from form inputs
  const imageInput = document.querySelector("#image");
  const image = imageInput.files[0];
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = parseInt(document.querySelector("#pages").value);

  // Get the selected radio button's id
  let selectedId = null;
  const readRadioButtons = document.querySelectorAll("[name='read']");
  readRadioButtons.forEach((radioButton) => {
    if (radioButton.checked) {
      selectedId = radioButton.id;
    }
  });

  // Determine the read status based on the selected radio button
  let readStatus = false; // Default to false
  if (selectedId === "true") {
    readStatus = true;
  }

  // Create a new Book object with the read status
  let book = new Book(null, title, author, pages, readStatus); // Default to null for image

  // Check if an image has been selected
  if (image) {
    // Create an object URL for the image
    book.image = URL.createObjectURL(image);
  }

  // Add the book to the library
  addBook(book);

  // Clear form inputs
  inputs.forEach((input) => {
    if (input.type === "checkbox" || input.type === "radio") {
      input.checked = false;
    } else if (input.type === "file") {
      input.value = "";
    } else {
      input.value = "";
    }
  });

  // Update the library display
  updateLibrary();

  // Hide the form and remove the blur effect
  formCont.style.display = "none";
  container.style.filter = "none";
});

// Event listener for the "Add Book" button click
addBookButton.addEventListener("click", () => {
  // Apply a blur effect and display the form
  container.style.filter = "blur(5px)";
  formCont.style.display = "grid";
});

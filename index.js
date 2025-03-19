function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books") // Sends the fetch request
      .then(response => response.json()) // Converts response to JSON
      .then(data => renderBooks(data)) // Calls renderBooks() with the data
      .catch(error => console.error("Error fetching books:", error)); // Handles errors
}

function renderBooks(books) {
  const bookList = document.getElementById("book-list"); // Get the book list element
  books.forEach(book => {
      const listItem = document.createElement("li"); // Create list item
      listItem.textContent = book.name; // Set book name
      bookList.appendChild(listItem); // Append to the list
  });
}

document.addEventListener("DOMContentLoaded", fetchBooks); // Call fetchBooks when page loads

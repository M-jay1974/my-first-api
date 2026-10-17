
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const books = [
  {
    id: 1,
    title: "The Hobbit",
    author: "J.R.R. Tolkien"
  },
  {
    id: 2,
    title: "Dune",
    author: "Frank Herbert"
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell"
  }
];

// Home route
app.get("/", (req, res) => {
  res.send("Hello! My first server is running.");
});

// Get all books
app.get("/books", (req, res) => {
  res.status(200).json(books);
});

// Get one book by ID
app.get("/books/:id", (req, res) => {
  const bookId = Number(req.params.id);
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return res.status(404).json({
      error: "Not found."
    });
  }

  res.status(200).json(book);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

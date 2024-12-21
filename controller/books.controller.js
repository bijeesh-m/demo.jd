const Books = require("../model/book.model");

module.exports.getAllBooks = async (req, res) => {
    const books = await Books.find();
    res.send(books);
};

module.exports.getBookById = async (req, res) => {
    const bookId = req.params.id;
    const book = books.find((book) => book.id === Number(bookId));
    res.render("new", { book, user: true });
};

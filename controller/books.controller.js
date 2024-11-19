const books = require("../data");

module.exports.getAllBooks = async (req, res) => {
    res.send(books);
};

module.exports.getBookById = async (req, res) => {
    const bookId = req.params.id;
    const book = books.find((book) => book.id === Number(bookId));
    res.send(book);
};

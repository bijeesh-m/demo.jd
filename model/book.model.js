const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    title: {
        type: String,
    },
    author: {
        type: String,
    },
    genre: {
        type: String,
    },
    publicationYear: {
        type: Number,
    },
    price: {
        type: Number,
    },
});

const bookModel = mongoose.model("book", bookSchema);
module.exports = bookModel;

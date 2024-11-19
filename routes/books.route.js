const express = require("express");
const bookController = require("../controller/books.controller");

const router = express.Router();

router.get("/", bookController.getAllBooks);

router.get("/:id", bookController.getBookById);

module.exports = router;

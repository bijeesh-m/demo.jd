const express = require("express");
const bookController = require("../controller/books.controller");
const Authenticate = require("../middlewares/auth.middleware");
const checkRole = require("../middlewares/checkRole");

const router = express.Router();

router.get("/", Authenticate, bookController.getAllBooks);

router.get("/:id", Authenticate, checkRole(["admin", "user"]), bookController.getBookById);

module.exports = router;

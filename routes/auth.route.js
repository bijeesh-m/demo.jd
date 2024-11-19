const express = require("express");

const router = express.Router();

router.post("/register", (req, res) => {
    res.send("This is register route!");
});

router.post("/login", (req, res) => {
    res.send("This is login route!");
});

module.exports = router;

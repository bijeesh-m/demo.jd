const express = require("express");
const authRoute = require("./routes/auth.route");
const bookRoute = require("./routes/books.route");
require("dotenv").config();

const app = express();

app.use("/auth", authRoute);
app.use("/books", bookRoute);

app.listen(process.env.PORT, (err) => {
    console.log("Server is running on port 4000!");
});

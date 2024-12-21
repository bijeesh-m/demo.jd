const express = require("express");
const authRoute = require("./routes/auth.route");
const bookRoute = require("./routes/books.route");
const orderRoute = require("./routes/orders.route");
const Orders = require("./model/orders.model");
const mongoose = require("mongoose");

const cookieParser = require("cookie-parser");

const Users = require("./model/user.model");

require("dotenv").config();

const dbConnect = require("./config/db.config");

const cors = require("cors");

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

dbConnect();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/auth", authRoute);
app.use("/books", bookRoute);
app.use("/orders", orderRoute);

app.get("/users", async (req, res) => {
    const users = await Users.find();
    console.log(users);
});

app.put("/user/:id", async (req, res) => {
    const userId = req.params.id;
    const user = await Users.findById(userId);
    user.username = "varun";
    user.save();
});

app.listen(process.env.PORT, (err) => {
    console.log("Server is running on port 4000!");
});

const mongoose = require("mongoose");

const dbConnect = () => {
    mongoose
        .connect(process.env.MONGODB_CONN_URI)
        .then((res) => {
            console.log("Database connected successfully!");
        })
        .catch((err) => console.log(err.message));
};

module.exports = dbConnect;

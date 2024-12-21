const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email:String,
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    mob: {
        type: Number,
    },
    role: {
        type: String,
        default: "user",
    },
});

userSchema.pre("save", async function () {
    if (!this.isModified("password")) {
        return;
    }
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;

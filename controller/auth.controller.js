const User = require("../model/user.model");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

module.exports.register = async (req, res) => {
    try {
        const userDetails = req.body;
        const user = await User.findOne({ email: userDetails.email });
        if (user) {
            res.status(409).send("User already exists!");
        } else {
            const user = await User.create(userDetails);
            res.json({ message: "Registration success!", user });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.login = async (req, res) => {
    const { password, email } = req.body;
    try {
        const IsExist = await User.findOne({ email: email });

        if (IsExist) {
            const auth = await bcrypt.compare(password, IsExist.password);
            if (auth) {
                const secret = process.env.JWT_SECRET;
                const token = jwt.sign({ id: IsExist._id, username: IsExist.username, role: IsExist.role }, secret, {
                    expiresIn: 60 * 60 * 1000,
                });
                console.log(token);
                res.cookie("authToken", token, { httpOnly: true, expiresIn: "1hr" });
                res.status(200).json({ message: "Success", IsExist, token });
            } else {
                res.status(401).json({ message: "password is incorrect!" });
            }
        } else {
            res.status(404).json({ message: "User is not found!" });
        }
    } catch (error) {
        console.log(error);
    }
};

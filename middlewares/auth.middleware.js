const jwt = require("jsonwebtoken");

const Authenticate = (req, res, next) => {
    const token = req.cookies.authToken;
    console.log(token);

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
            if (err) {
                res.status(401).json({ message: "Unauthorized", err: err.message });
            } else {
                console.log(data);
                req.role = data.role;
                req.user = data.id;
                next();
            }
        });
    } else {
        res.status(401).send("Unauthorized!");
    }
};

module.exports = Authenticate;

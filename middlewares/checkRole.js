const checkRole = (roles) => {
    return (req, res, next) => {
        console.log(req.role);
        if (roles.includes(req.role)) {
            next();
        } else {
            res.send("Authetication failed!");
        }
    };
};

module.exports = checkRole;

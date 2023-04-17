const startUsersRoutes = (app) => {
    const user = require("../controllers/user.controller.js");
    var router = require("express").Router();
    router.post("/:type", user.controlUser);
    app.use('/api/users', router);
};

module.exports = {
    startUsersRoutes
};
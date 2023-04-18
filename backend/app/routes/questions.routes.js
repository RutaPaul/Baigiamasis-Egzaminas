const startQuestionsRoutes = (app) => {
    const question = require("../controllers/question.controller.js");
    var router = require("express").Router();
    router.get("/", question.getQuestions);
    app.use('/api/questions', router);
};

module.exports = {
    startQuestionsRoutes
};
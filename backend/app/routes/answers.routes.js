const startAnswersRoutes = (app) => {
    const answer = require("../controllers/answer.controller.js");
    var router = require("express").Router();
    router.get("/question/:id", answer.getAnswersByQuestionID);
    router.get('/count/:id', answer.getCountByQuestionID);
    router.post("/:id", answer.createAnswer);
    app.use('/api/answers', router);
};

module.exports = {
    startAnswersRoutes
};
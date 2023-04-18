const startQuestionsRoutes = (app) => {
    const question = require("../controllers/question.controller.js");
    var router = require("express").Router();
    router.get("/", question.getQuestions);
    router.post("/", question.createQuestion);
    router.post("/like/:id", question.likeQuestion);
    router.post("/dislike/:id", question.dislikeQuestion);
    app.use('/api/questions', router);
};

module.exports = {
    startQuestionsRoutes
};
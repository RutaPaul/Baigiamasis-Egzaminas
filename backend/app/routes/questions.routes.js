const startQuestionsRoutes = (app) => {
    const question = require("../controllers/question.controller.js");
    var router = require("express").Router();
    router.get("/", question.getQuestions);
    router.get('/:id', question.getQuestion);
    router.get("/user/:username", question.getUserQuestions);
    router.get("/top/:count", question.getTopQuestions);
    router.post("/", question.createQuestion);
    router.post("/complete/:id", question.completeQuestion);
    router.post("/like/:id", question.likeQuestion);
    router.post("/dislike/:id", question.dislikeQuestion);
    router.delete("/:id", question.deleteQuestion);
    router.patch("/:id", question.updateQuestion);
    app.use('/api/questions', router);
};

module.exports = {
    startQuestionsRoutes
};
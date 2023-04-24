const startAnswersRoutes = (app) => {
    const answer = require("../controllers/answer.controller.js");
    var router = require("express").Router();
    router.get("/question/:id", answer.getAnswersByQuestionID);
    router.get('/count/:id', answer.getCountByQuestionID);
    router.get('/:id', answer.getAnswer);
    router.post("/like/:id", answer.likeAnswer);
    router.post("/dislike/:id", answer.dislikeAnswer);
    router.post("/:id", answer.createAnswer);
    router.patch("/:id", answer.updateAnswer);
    router.delete("/:id", answer.deleteAnswer);
    app.use('/api/answers', router);
};

module.exports = {
    startAnswersRoutes
};
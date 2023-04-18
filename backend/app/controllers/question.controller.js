const Question = require("../models/question.models.js");

exports.getQuestions = (req,res) => {
    Question.getQuestions((err,data)=>{
        if(err)
            res.status(500).send({message: err.message || "some error occured while getting questions"});
        else res.send(data);
    })
}

exports.createQuestion = (req, res) => {
    const newQuestion = new Question({
        Username: req.body.Username,
        Question: req.body.Question,
    });

    Question.createQuestion(newQuestion, (err,data)=>{
        if (err)
        res.status(500).send({message: err.message || "Some error occurred while creating new question."});
        else res.send(data);
    })
}

exports.likeQuestion = (req, res) => {
    const id = req.params.id;
    Question.like(id, (err,data)=>{
        if(err)
        res.status(500).send({message: err.message || "Some error occurred while liking a question."});
        else res.send(data);
    })
}

exports.dislikeQuestion = (req, res) => {
    const id = req.params.id;
    Question.dislike(id, (err,data)=>{
        if(err)
        res.status(500).send({message: err.message || "Some error occurred while disliking a question."});
        else res.send(data);
    })
}



const Answer = require("../models/answer.models.js");


exports.getAnswersByQuestionID = (req,res) => {

    Answer.getAnswersByQuestionID(req.params.id, (err,data) => {
        if(err)
            res.status(500).send({message:err.message || " Some error "});
        else
            res.send(data);
    })
}

exports.getCountByQuestionID = (req,res) => {
    Answer.getCountByQuestionID(req.params.id, (err,data) => {
        if(err)
            res.status(500).send({message:err.message || " Some Error "});
        else 
            res.send(data);
    })
}

exports.createAnswer = (req, res) => {
    const newAnswer = new Answer({
        UserID: req.body.UserID,
        Answer: req.body.Answer,
        QuestionID: req.params.id
    });

    Answer.createAnswer(newAnswer, (err,data)=>{
        if (err)
        res.status(500).send({message: err.message || "Some error occurred while creating new answer."});
        else res.send(data);
    })
}
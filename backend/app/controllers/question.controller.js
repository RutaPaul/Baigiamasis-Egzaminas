const Question = require("../models/question.models.js");

exports.getQuestions = (req,res) => {
    Question.getQuestions((err,data)=>{
        if(err)
            res.status(500).send({message: err.message || "some error occured while getting questions"});
        else res.send(data);
    })
}
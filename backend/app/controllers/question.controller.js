const Question = require("../models/question.models.js");

exports.getQuestions = (req,res) => {
    Question.getQuestions((err,data)=>{
        if(err)
            res.status(500).send({message: err.message || "some error occured while getting questions"});
        else res.send(data);
    })
}

exports.getQuestion = (req,res) => {
  Question.getQuestion(req.params.id, (err,data)=>{
    if(err)
      res.status(500).send({});
    else res.send(data);
  })
}

exports.getTopQuestions = (req,res) => {
    Question.getTopQuestions(req.params.count, (err,data)=>{
        if(err)
            res.status(500).send({message: err.message || "some error occured while getting questions"});
        else res.send(data);
    })
}

exports.getUserQuestions = (req,res) => {
    Question.getUserQuestions(req.params.username, (err,data) => {
        if(err)
            res.status(500).send({message:err.message || " Some error "});
        else
            res.send(data);
    })
}

exports.createQuestion = (req, res) => {
    const newQuestion = new Question({
        Username: req.body.Username,
        Question: req.body.Question,
        Title: req.body.Title
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

exports.completeQuestion = (req,res) => {
  const id = req.params.id;
  Question.completeQuestion(id, (err,data)=>{
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

exports.deleteQuestion = (req, res) => {
    Question.deleteQuestion(req.params.id, (err) => {
      if (err)
        res.status(500).send({message: err.message || "Some error occurred while deleting question."});
      else { 
        res.send({ message: `Question was deleted successfully!` });
      };
  });
  };

  exports.updateQuestion = (req, res) => {
    Question.updateQuestion(
      req.params.id,
      new Question(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found question with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating question with id " + req.params.id
            });
          }
        } else res.send(data);
      }
    );
  };


const Answer = require("../models/answer.models.js");

exports.getAnswersByQuestionID = (req,res) => {
  Answer.getAnswersByQuestionID(req.params.id, (err,data) => {
    if(err)
      res.status(500).send({message:err.message || " Some error "});
    else
      res.send(data);
  })
}

exports.getAnswer = (req,res) => {
  Answer.getAnswer(req.params.id, (err,data) => {
    if(err)
      res.status(500).send({message:err.message || " Some error "});
    else
      res.send(data);
  })
}

exports.deleteAnswer = (req, res) => {
  Answer.deleteAnswer(req.params.id, (err) => {
    if (err)
      res.status(500).send({message: err.message || "Some error occurred while deleting question."});
    else { 
      res.send({ message: `Question was deleted successfully!` });
    };
});
};


exports.updateAnswer = (req, res) => {
  Answer.updateAnswer(
    req.params.id,
    new Answer(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found answer with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating answer with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

exports.likeAnswer = (req, res) => {
  const id = req.params.id;
  Answer.like(id, (err,data)=>{
    if(err)
      res.status(500).send({message: err.message || "Some error occurred while liking a question."});
    else res.send(data);
  })
}

exports.dislikeAnswer = (req, res) => {
  const id = req.params.id;
  Answer.dislike(id, (err,data)=>{
    if(err)
      res.status(500).send({message: err.message || "Some error occurred while disliking a question."});
    else res.send(data);
  })
}



exports.getCountByQuestionID = (req,res) => {
  Answer.getCountByQuestionID(req.params.id, (err,data) => {
    if(err)
      res.status(500).send({message:err.message || " Some Error "});
    else res.send(data);
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
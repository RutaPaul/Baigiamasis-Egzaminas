const sql = require("./db.js");

const Answer = function(answer){
    this.UserID = answer.UserID;
    this.Answer = answer.Answer;
    this.QuestionID = answer.QuestionID;
    this.Likes = 0;
    this.Dislikes = 0;
    this.Date = new Date();
}

Answer.getAnswersByQuestionID = (id, result) => {
    let query = `SELECT U.Username, A.Date, A.Likes, A.Dislikes, A.Answer, A.ID FROM ANSWERS A INNER JOIN QUESTIONS Q ON Q.ID = A.QuestionID INNER JOIN USERS U ON U.ID = A.UserID WHERE Q.ID=` + id;
    sql.query(query, (err,res)=>{
        if(err){
            result(err,null);
        }
        else {
            result(null,res);
        }

    })
}

Answer.getCountByQuestionID = (id, result) => {
    let query = `SELECT COUNT(ID) AS NumberOfAnswers FROM Answers WHERE Answers.QuestionID = ` + id;
    sql.query(query, (err,res)=>{
        if(err){
            result(err,null);
        }
        else {
            result(null, res);
        }
    })
}

Answer.createAnswer = (newAnswer, result) => {
    let query = `SELECT U.ID FROM USERS U WHERE U.USERNAME ='` + newAnswer.UserID + "'";
    sql.query(query, (err,res)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else {
            console.log(res[0]);
            newAnswer.UserID = res[0].ID;
            sql.query("INSERT INTO ANSWERS SET ?", newAnswer, (err, res) => {
                if (err) {
                  console.log("error: ", err);
                  result(err, null);
                  return;
                }
            
                console.log("created answer: ", { id: res.insertId, ...newAnswer });
                result(null, { id: res.insertId, ...newAnswer });
              });
        }
    })
  };


module.exports = Answer;
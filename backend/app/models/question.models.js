const sql = require("./db.js");

const Question = function(question){
    this.UserID = question.Username;
    this.Question = question.Question;
    this.Date = new Date();
    this.Likes = 0;
    this.Dislikes = 0;
}

Question.getQuestions = (result) => {
    let query = `SELECT Q.ID, Q.Date, Q.Likes, Q.Dislikes, Q.Question, U.Username FROM QUESTIONS Q INNER JOIN USERS U ON U.ID = Q.UserID `;
    sql.query(query, (err,res)=>{
        if(err){

        }
        else {
            result(null,res);
        }

    })
}
Question.createQuestion = (newQuestion, result) => {

    let query = `SELECT U.ID FROM USERS U WHERE U.USERNAME ='` + newQuestion.UserID + "'";
    sql.query(query, (err,res)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else {
            console.log(res[0].ID);
            newQuestion.UserID = res[0].ID;
            sql.query("INSERT INTO QUESTIONS SET ?", newQuestion, (err, res) => {
                if (err) {
                  console.log("error: ", err);
                  result(err, null);
                  return;
                }
            
                console.log("created question: ", { id: res.insertId, ...newQuestion });
                result(null, { id: res.insertId, ...newQuestion });
              });
        }
    })

    
  };

module.exports = Question;
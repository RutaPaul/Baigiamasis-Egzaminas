const sql = require("./db.js");

const Question = function(question){
    this.Username = user.Username;
    this.Password = user.Password;
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

module.exports = Question;
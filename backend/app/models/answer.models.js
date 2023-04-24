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
    let query = `SELECT U.Username, A.Date, A.Edited, A.QuestionID, A.Likes, A.Dislikes, A.Answer, A.ID FROM ANSWERS A INNER JOIN QUESTIONS Q ON Q.ID = A.QuestionID INNER JOIN USERS U ON U.ID = A.UserID WHERE Q.ID=` + id;
    sql.query(query, (err,res)=>{
        if(err){
            result(err,null);
        }
        else {
            result(null,res);
        }

    })
}

Answer.deleteAnswer = (id, result) => {
    sql.query(`DELETE FROM ANSWERS WHERE ID = ?`, id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }

        console.log(`deleted question detail with ${id}`);
        result(null, res);
    });
  };

Answer.getAnswer = (id,result) => {
    let query = `SELECT U.Username, A.Date, A.QuestionID, A.Likes, A.Edited, A.Dislikes, A.Answer, A.ID FROM ANSWERS A INNER JOIN USERS U ON U.ID = A.UserID WHERE A.ID=` + id;
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
  
Answer.like = (id, result) => {
    let query = `SELECT A.LIKES FROM ANSWERS A WHERE A.ID ='` + id + "'";
    sql.query(query, (err,res)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else {
            let likes = res[0].LIKES;
            likes = likes + 1;
            let queryLikes = `UPDATE ANSWERS SET LIKES='`+ likes +`' WHERE ID='`+id+"'";
            sql.query(queryLikes, (err,res)=>{
                if(err){
                    console.log(err);
                    result(err,null);
                }
                else {
                    result(null,res);
                }
            })
        }
    })
}

Answer.dislike = (id, result) => {
    let query = `SELECT A.DISLIKES FROM ANSWERS A WHERE A.ID ='` + id + "'";
    sql.query(query, (err,res)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else {
            let dislikes = res[0].DISLIKES;
            dislikes = dislikes + 1;
            let queryDislikes = `UPDATE ANSWERS SET DISLIKES='`+ dislikes +`' WHERE ID='`+id+"'";
            sql.query(queryDislikes, (err,res)=>{
                if(err){
                    console.log(err);
                    result(err,null);
                }
                else {
                    result(null,res);
                }
            })
        }
    })
}

Answer.updateAnswer = (id, answer, result) => {
    sql.query(
        "UPDATE ANSWERS SET Answer = ?, Edited = ? WHERE ID = ?",
        [answer.Answer, '1', id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found question with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log(res);
            console.log("updated question: ", { id: id, ...answer });
            result(null, { id: id, ...answer });
        }
    );
};

module.exports = Answer;
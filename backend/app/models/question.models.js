const sql = require("./db.js");

const Question = function(question){
    this.UserID = question.Username;
    this.Question = question.Question;
    this.Title = question.Title;
    this.Date = new Date();
    this.Likes = 0;
    this.Dislikes = 0;
}

Question.getQuestions = (result) => {
    let query = `SELECT Q.ID, Q.Title, Q.Date, Q.Likes, Q.Dislikes, Q.Question, U.Username FROM QUESTIONS Q INNER JOIN USERS U ON U.ID = Q.UserID `;
    sql.query(query, (err,res)=>{
        if(err){
            result(err,null);
        }
        else {
            result(null,res);
        }

    })
}

Question.getQuestion = (id, result) => {
    let query = `SELECT Q.ID, Q.Title, Q.Date, Q.Likes, Q.Dislikes, Q.Question, U.Username FROM QUESTIONS Q INNER JOIN USERS U ON U.ID = Q.UserID WHERE Q.ID ='` + id + "'";
    sql.query(query, (err,res)=>{
        if(err){
            result(err,null);
        }
        else {
            result(null,res);
        }
    })
}

Question.getTopQuestions = (top, result) => {
    let query = `SELECT Q.ID, Q.Title, Q.Date, Q.Likes, Q.Dislikes, Q.Question, U.Username FROM QUESTIONS Q INNER JOIN USERS U ON U.ID = Q.UserID LIMIT `+ top;
    sql.query(query, (err,res)=>{
        if(err){
            result(err,null);
        }
        else {
            result(null,res);
        }
    })
}


Question.getUserQuestions = (username, result) => {
    let query = `SELECT Q.ID, Q.Title, Q.Date, Q.Likes, Q.Dislikes, Q.Question, U.Username FROM QUESTIONS Q INNER JOIN USERS U ON U.ID = Q.UserID WHERE U.USERNAME ='` + username + `'`;
    sql.query(query, (err,res)=>{
        if(err){
            result(err, null);
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

  Question.like = (id, result) => {
    let query = `SELECT Q.LIKES FROM QUESTIONS Q WHERE Q.ID ='` + id + "'";
    sql.query(query, (err,res)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else {
            let likes = res[0].LIKES;
            likes = likes + 1;
            let queryLikes = `UPDATE QUESTIONS SET LIKES='`+ likes +`' WHERE ID='`+id+"'";
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

  Question.dislike = (id, result) => {
    let query = `SELECT Q.DISLIKES FROM QUESTIONS Q WHERE Q.ID ='` + id + "'";
    sql.query(query, (err,res)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else {
            let dislikes = res[0].DISLIKES;
            dislikes = dislikes + 1;
            let queryDislikes = `UPDATE QUESTIONS SET DISLIKES='`+ dislikes +`' WHERE ID='`+id+"'";
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

  Question.deleteQuestion = (id, result) => {
    sql.query(`DELETE FROM QUESTIONS WHERE ID = ?`, id, (err, res) => {
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

  Question.updateQuestion = (id, question, result) => {
    sql.query(
      "UPDATE QUESTIONS SET Question = ?, Title = ? WHERE ID = ?",
      [question.Question, question.Title, id],
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
        console.log("updated question: ", { id: id, ...question });
        result(null, { id: id, ...question });
        }
      );
  };

module.exports = Question;
const sql = require("./db.js");
const bcrypt = require("bcrypt");

const User = function(user){
    this.Username = user.Username;
    this.Password = user.Password;
}

User.Register = (newUser, result) => {

    let query = `SELECT * FROM USERS `;
    query += `WHERE USERS.Username = '${newUser.Username}' `


    sql.query(query, (err,res)=>{ 
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.length == 0){
            sql.query("INSERT INTO USERS SET ?", newUser, (err, res) => {
                if (err) {
                  console.log("error: ", err);
                  result(err, null);
                  return;
                }
            
                console.log("created new user: ", { id: res.insertId, ...newUser });
                result(null, { id: res.insertId, ...newUser });
              });

        }
        else {
            result({message:"Username is taken"}, null);
        }
    })
}

User.Login = (username, password, result) =>{
    let query = `SELECT * FROM USERS `;
    query += `WHERE USERS.Username = '${username}' `
    sql.query(query, (err,res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null, false);
            return;
        }

        if(res.length == 0){
            result(null, "Incorrect Username", false);
        }

        if(res.length == 1){
            bcrypt.compare(password, res[0].Password, function(err, auth) {
                if(err) result(err,null,false);
                if(auth) result(null, username, true)
                else result(null, "Incorrect Password", false)
            });

        }
    })

}


module.exports = User;
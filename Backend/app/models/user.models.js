const sql = require("./db.js");

const User = function(user){
    this.Username = user.Username;
    this.Password = user.Password;
}

User.Register = (newUser, result) => {
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


module.exports = User;
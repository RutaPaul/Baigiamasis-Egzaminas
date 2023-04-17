const User = require("../models/user.models.js");

exports.controlUser = (req,res) => {

    switch(req.params.type.toUpperCase()){
        case "REGISTER":
            const newUser = new User({
                Username: req.body.Username,
                Password: req.body.Password
            });
            User.Register(newUser, (err,data)=>{
                if (err)
                res.status(500).send({message: err.message || "Some error occurred while creating new user."});
                else res.send(data);
            })
        break;

        case "LOGIN":
            User.Login(req, (err,data)=>{
                
            })
        break;

        case "LOGOUT":

        break;
        default:
            res.status(404).send({message:"Such operation does not exists"})
        break;
    }    
}
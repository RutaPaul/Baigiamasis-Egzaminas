const User = require("../models/user.models.js");
const bcrypt = require("bcrypt");

exports.controlUser = (req,res) => {

    switch(req.params.type.toUpperCase()){
        case "REGISTER":

            bcrypt.genSalt(10, (err, salt) => {
                if(err) console.log(err);
                bcrypt.hash(req.body.Password, salt, function(err, hash) {
                    if(err) console.log(err);

                    const newUser = new User({
                        Username: req.body.Username,
                        Password: hash
                    });

                    User.Register(newUser, (err,data)=>{
                        if (err)
                        res.status(500).send({message: err.message || "Some error occurred while creating new user."});
                        else res.send(data);
                    })
                });
            })  
            
        break;

        case "LOGIN":
            User.Login(req.body.Username, req.body.Password, (err,data, success)=>{
                if (err)
                    res.status(500).send({message: err.message || "Some error occurred while creating new user."});
                else if(success)
                    res.status(200).send({username:data})
                else 
                    res.status(404).send({message: data})
            })
        break;

        case "LOGOUT":

        break;
        default:
            res.status(404).send({message:"Such operation does not exists"})
        break;
    }    
}
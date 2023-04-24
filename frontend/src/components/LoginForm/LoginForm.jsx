import React, {useState, useEffect} from "react";
import {UserValidation} from "../../utils/api";
import "./loginForm.css";

const handleSubmit = (event) => {
    let type = event.nativeEvent.submitter.value;
    let username = event.target[0].value;
    let password = event.target[1].value;
    UserValidation(username,password,type,setAuthentication);   
    event.preventDefault();
}

let setAuthentication = null; 

const LoginForm = (props) => {
    useEffect(() => {
        setAuthentication = props.setAuthentication;
    }, []);
    return(
        <form className="LoginForm" onSubmit={handleSubmit}>
            <input type="text" name="loginUsername" placeholder="username..." />
            <input type="password" name="loginPassword" placeholder="password..."/>
            <div className="loginFormButtons">
                <input type="submit" className="btn btn-outline-dark" value="Login" />
                <input type="submit" className="btn btn-outline-dark" value="Register" />
            </div>
        </form>
    )
}

export default LoginForm;

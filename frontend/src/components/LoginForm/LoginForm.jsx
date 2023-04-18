import React, {useState, useEffect} from "react";
import {UserValidation} from "../../utils/api";
import "./loginForm.css";

const handleSubmit = (event) => {
    let type = event.nativeEvent.submitter.value;
    let username = event.target[0].value;
    let password = event.target[0].value;
    UserValidation(username,password,type, setAuthentication);   
    event.preventDefault();
}

let setAuthentication = null; 

const LoginForm = (props) => {
    useEffect(() => {
        setAuthentication = props.setAuthentication;
    }, []);
    return(
        <form className="LoginForm" onSubmit={handleSubmit}>
            <label>
                <p>Username:</p>
                <input type="text" name="loginUsername" />
            </label>
            <label>
                <p>Password:</p>
                <input type="password" name="loginPassword" />
            </label>
            <div className="loginFormButtons">
                <input type="submit" className="btn btn-outline-dark" value="Login" />
                <input type="submit" className="btn btn-outline-dark" value="Register" />
            </div>
        </form>
    )
}

export default LoginForm;

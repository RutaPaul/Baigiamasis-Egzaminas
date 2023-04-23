import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {createAnswer} from "../../../../utils/api"
import "./answerform.css";

const handleSubmit = (event) => {
    let answer = event.target[0].value;
    createAnswer(answer, questionID, username);   
    event.preventDefault();
}

let username = null;
let questionID = null;
const AnswerForm = (props) => {

    let  {id} = useParams();

    useEffect(() => {
        username = props.username;
        questionID = id;
    }, []);


    return (
        <>
        {
            props.username ? 
            <form className="questionForm" onSubmit={handleSubmit}>
                <label>
                    <p>Answer:</p>
                    <textarea name="answer" />
                </label>
                <input type="submit" className="btn btn-outline-dark" value="Submit" />
            </form>
            :
            ""
        }
        </>
    )
}


export default AnswerForm;

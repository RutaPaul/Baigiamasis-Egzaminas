import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {createQuestion, getHomePageUrl} from "../../../utils/api"
import "./questionForm.css";

const handleSubmit = (event) => {
    let question = event.target[0].value;
    createQuestion(question,username);   
    event.preventDefault();
}

let username = null;

function QuestionForm(props) {
    let { id } = useParams();

    useEffect(() => {
        username = props.username;
    }, []);

    return (
        <>
        {
            props.username ? 
            <form className="questionForm" onSubmit={handleSubmit}>
                <label>
                    <p>Question:</p>
                    <textarea name="question" />
                </label>
                <input type="submit" className="btn btn-outline-dark" value="Submit" />
            </form>
            :
            (
            <h1>t</h1>,
            props.username,
            <h1>t</h1>
            )
        }
        </>
  );
}

export default QuestionForm;

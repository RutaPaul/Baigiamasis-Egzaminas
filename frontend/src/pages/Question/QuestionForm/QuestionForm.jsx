import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {createQuestion, updateQuestion, getQuestionByID, getHomePageUrl, getQuestionUrl} from "../../../utils/api"
import "./questionForm.css";


let username = null;

function QuestionForm(props) {

    let navigate = useNavigate();

    const getQuestion = async (id) =>{
        let data = await getQuestionByID(id);
        if(data){
            setQuestion(data[0]);
        }
    }

    const handleSubmit = (event) => {
        let title = event.target[0].value;
        let question = event.target[1].value;
        let value = event.nativeEvent.submitter.value;
        if(value == "Go Back"){
            if(id != "null"){
                navigate(getQuestionUrl(id));
            }
            else {
                navigate(getHomePageUrl());
            }
        }
        else {
            if(id != "null"){
                updateQuestion(title, question, id);  
            }
            else {
                createQuestion(title, question,username);  
            }
        }
        event.preventDefault();
    }

    let { id } = useParams();
    const [question, setQuestion] = useState(null);
    useEffect(() => {
        username = props.username;
        if(id){
            if(!question)
                getQuestion(id); 
        }
    });

    return (
        <>
        {
            props.username ? 
            <form className="questionForm" onSubmit={handleSubmit}>
                <label>
                    <p>Title:</p>
                    <textarea name="title"  defaultValue={question ? question.Title : ""}/>
                </label>
                <label>
                    <p>Question:</p>
                    <textarea name="question" defaultValue={question ? question.Question : ""}/>
                </label>
                <input type="submit" className="btn btn-outline-dark" value={id != "null" ? "Update" : "Create"} />
                <input type="submit" className="btn btn-outline-dark" value="Go Back" />
            </form>
            :
            ""
        }

        </>
  );
}

export default QuestionForm;

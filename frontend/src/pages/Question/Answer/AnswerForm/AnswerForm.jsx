import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {createAnswer, getAnswerByID, updateAnswer, deleteAnswer, getQuestionUrl} from "../../../../utils/api"
import "./answerform.css";


let username = null;
let questionID = null;
const AnswerForm = (props) => {

    let  {id} = useParams();
    let {answerID} = useParams();
    let navigate = useNavigate();

    const [answer, setAnswer] = useState(null);
    useEffect(() => {
        username = props.username;
        questionID = id;
        if(answerID != "null"){
            if(!answer)
                getAnswer(answerID); 
        }
    }, []);

    const getAnswer = async (id) =>{
        let data = await getAnswerByID(id);
        if(data){
            setAnswer(data[0]);
        }
    }

    const handleSubmit = (event) => {
        let answer = event.target[0].value;
        let value = event.nativeEvent.submitter.value;
        if(value == "Go Back"){
            navigate(getQuestionUrl(questionID));
        } else if(value == "Submit"){  
            createAnswer(answer, questionID, username);    
        }
        else if(value == "Delete"){
            deleteAnswer(answerID);
        }
        else if(value == "Update"){
            if(answerID != "null"){
                updateAnswer(answer, answerID);   
            }
        }
        event.preventDefault();
    }

    return (
        <>
        {
            <form className="questionForm" onSubmit={handleSubmit}>
                <label>
                    <p>Answer:</p>
                    <textarea name="answer" defaultValue={answer ? answer.Answer : ""}/>
                </label>
                {
                    answerID != "null" && answer && props.username == answer.Username?
                    <input type="submit" className="btn btn-outline-dark" value="Update" />
                    :
                    ""
                }

                {
                    answerID == "null" ?
                    <input type="submit" className="btn btn-outline-dark" value="Submit" />
                    :
                    ""
                }
                
                {
                    answerID != "null" && answer && props.username == answer.Username?
                    <input type="submit" className="btn btn-outline-dark" value="Delete" />
                    :
                    ""
                }

                <input type="submit" className="btn btn-outline-dark" value="Go Back" />
            </form>
        }
        </>
    )
}


export default AnswerForm;

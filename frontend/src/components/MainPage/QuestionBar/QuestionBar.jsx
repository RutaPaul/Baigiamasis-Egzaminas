import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import {getQuestionUrl, getQuestionAnswerCount} from "../../../utils/api";
import "./questionBar.css";
const QuestionBar = (props) => {

    let navigate = useNavigate();

    const [answerCount, setAnswerCount] = useState(null);

    useEffect(()=>{
        if(!answerCount){
            getAnswersCount();
        }
    })
    const getQuestion = () =>{
        navigate(getQuestionUrl(props.question.ID));
    }

    const getAnswersCount = async () => {
        const count = await getQuestionAnswerCount(props.question.ID);
        if(count[0] && count[0].NumberOfAnswers){
            setAnswerCount(count[0].NumberOfAnswers);
        }
        else {
            setAnswerCount(0);
        }
    }
    
    return(
       <div className={props.question.Edited == 1 ? "questionBarEdited" : "questionBar"} onClick={getQuestion}>
            <div className="questionBarTop">
                <div className="titleClass">
                {props.question.Title.substring(0,50)} 
                </div> 
                {"["+new Date(props.question.Date).toLocaleString() +"]"} 
                <div className="usernameClass">
                {props.question.Edited == 1 ? "[ Edited ] " : ""}{"Author: " + props.question.Username}
                </div>
                <div className="answersCountClass">
                    {"Answers: " + answerCount}
                </div>
                <div className="answersCountClass">
                    {"Likes: " + props.question.Likes}
                </div><div className="answersCountClass">
                    {"Dislikes: " + props.question.Dislikes}
                </div>
            </div>
            <div className="questionClass">
                {props.question.Question.substring(0,99)+"..."}
            </div>
       </div>
    )
}

export default QuestionBar;

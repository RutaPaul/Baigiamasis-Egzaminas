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
        navigate(getQuestionUrl(props.question.ID, props.question.Username));
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
       <div className="questionBar" onClick={getQuestion}>
            <div className="questionBarTop">
                <div className="titleClass">
                    {props.question.Title.substring(0,50)}
                </div>
                <div className="usernameClass">
                    {"Author: " + props.question.Username}
                </div>
                <div className="answersCountClass">
                    {"Answers: " + answerCount}
                </div>
            </div>
            <div className="questionClass">
                {props.question.Question.substring(0,99)+"..."}
            </div>
       </div>
    )
}

export default QuestionBar;

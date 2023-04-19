import React, {useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import {getQuestionUrl} from "../../../utils/api";
import "./questionBar.css";
const QuestionBar = (props) => {

    let navigate = useNavigate();

    const getQuestion = () =>{
        navigate(getQuestionUrl(props.question.ID, props.question.Username));
    }
    
    return(
       <div className="questionBar" onClick={getQuestion}>
        {props.question.Username}
       </div>
    )
}

export default QuestionBar;

import React, {useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import {getQuestionUrl} from "../../../utils/api"
import "./questionSidebar.css";
const QuestionSidebar = (props) => {

    let navigate = useNavigate();

    const getQuestion = () =>{
        navigate(getQuestionUrl(props.question.ID, props.question.Username));
    }
    
    return(
       <div className="questionSidebar" onClick={getQuestion}>
        {props.question.Username}
       </div>
    )
}

export default QuestionSidebar;
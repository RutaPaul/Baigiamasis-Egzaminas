import React, {useState} from "react";
import {getQuestionUrl} from "../../../utils/api";
import "./questionBar.css";
const QuestionBar = (props) => {
    return(
       <div className="questionBar" onClick={()=>{window.location.href = getQuestionUrl(props.question.ID)}}>
        {props.question.Username}
       </div>
    )
}

export default QuestionBar;

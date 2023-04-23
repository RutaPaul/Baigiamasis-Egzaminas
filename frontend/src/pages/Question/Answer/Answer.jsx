import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {createQuestion, getHomePageUrl} from "../../../utils/api"
import "./answer.css";

const Answer = (props) => {
    return (
        <div className='questionAnswer'>
            <div className='mainQuestionAnswerData'>
                <div className='mainQuestionAnswerHeader'>
                    {props.answer.Username}
                </div>
                <div className='mainQuestionAnswerText'>
                    {props.answer.Answer}
                </div>
            </div>
            <div className='answerActionBar'>

            </div>
        </div>
    )
}


export default Answer;

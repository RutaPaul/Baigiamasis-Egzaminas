import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {dislikeAnswer, likeAnswer, getAnswerFormUrl} from "../../../utils/api";
import Icon from "../../../components/Icon";

import "./answer.css";

const Answer = (props) => {
    
    let navigate = useNavigate();

    const [popularityBalance, setPopularityBalance] = useState(props.answer.Likes - props.answer.Dislikes);

    const dislikeAnswerHandle = async (id) => {
        await dislikeAnswer(id)
        setPopularityBalance(popularityBalance - 1);
    }

    const likeAnswerHandle = async (id) => {
        await likeAnswer(id)
        setPopularityBalance(popularityBalance + 1);
    }

    const editAnswer = (questionID, id) => {
        navigate(getAnswerFormUrl(questionID,id));
      }

    return (
        <div className="questionAnswer">
            <div className={props.answer.Edited == 1 ? "mainQuestionAnswerDataEdited" : 'mainQuestionAnswerData'} onClick={()=>{editAnswer(props.answer.QuestionID, props.answer.ID)}}>
                <div className='mainQuestionAnswerHeader'>
                    {props.answer.Username} {props.answer.Edited == 1 ? " (Edited)" : ""}
                </div>
                <div className='mainQuestionAnswerText'>
                    {props.answer.Answer}
                </div>
            </div>
            <div className='answerActionBar'>
                <div className='answerLike'>
                    <Icon icon="fa-regular fa-thumbs-up fa-2xl" onClick={() => {likeAnswerHandle(props.answer.ID)}} hidden={props.authentication.Authenticated ? false : true}/>
                </div>                
                <div className='popularityBalance'>
                    <p className='popularityBalanceValue'>{popularityBalance}</p>
                </div>
                <div className='answerDislike'>
                    <Icon icon="fa-regular fa-thumbs-down fa-2xl" onClick={() => {dislikeAnswerHandle(props.answer.ID)}} hidden={props.authentication.Authenticated ? false : true}/>
                </div>
            </div>
        </div>
    )
}


export default Answer;

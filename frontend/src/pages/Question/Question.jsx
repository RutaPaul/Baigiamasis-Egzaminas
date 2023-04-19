import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Icon from "../../components/Icon";
import {likeQuestion, dislikeQuestion, deleteQuestion} from "../../utils/api"
import "./question.css";

function Question(props) {
  let { id } = useParams();
  let { username } = useParams();
  return (
    <div className='mainQuestion'>
        Question        
        {id}
        {username}
        <div>
          <Icon icon="fa-solid fa-heart fa-2xl" onClick={() => {likeQuestion(id)}} clickable={true}/>
        </div>
        <div style={{marginTop: "10vh"}}>
          <Icon icon="fa-solid fa-heart-crack fa-2xl" onClick={() => {dislikeQuestion(id)}} clickable={true}/>
        </div>

        {
          username == props.authentication.Username ?
          <Icon icon="fa-solid fa-cross fa-2xl headerIcon" onClick={deleteQuestion(id)} clickable={true}/>
          :
          "Not author"
        }
    </div>
  );
}

export default Question;

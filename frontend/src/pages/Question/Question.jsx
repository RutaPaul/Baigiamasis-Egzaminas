import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Icon from "../../components/Icon";
import {likeQuestion, dislikeQuestion} from "../../utils/api"
import "./question.css";

function Question(props) {
  let { id } = useParams();
  return (
    <div className='mainQuestion'>
        Question        
        {id}
        <div>
          <Icon icon="fa-solid fa-heart fa-2xl" onClick={() => {likeQuestion(id)}} clickable={true}/>
        </div>
        <div style={{marginTop: "10vh"}}>
          <Icon icon="fa-solid fa-heart-crack fa-2xl" onClick={() => {dislikeQuestion(id)}} clickable={true}/>
        </div>

    </div>
  );
}

export default Question;

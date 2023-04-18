import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import "./question.css";

function Question(props) {
  let { id } = useParams();
  return (
    <div className='mainQuestion'>
        Question
        {id}
    </div>
  );
}

export default Question;

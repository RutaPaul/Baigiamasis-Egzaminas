import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
function Question(props) {
  let { id } = useParams();
  return (
    <>
        Question
        {id}
    </>
  );
}

export default Question;

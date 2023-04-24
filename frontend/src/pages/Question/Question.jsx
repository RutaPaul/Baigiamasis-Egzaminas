import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Icon from "../../components/Icon";
import Answer from "../Question/Answer";
import {likeQuestion, dislikeQuestion, deleteQuestion, getQuestionByID, getAnswersByQuestionID, getAnswerFormUrl, getQuestionFormUrl, completeQuestion} from "../../utils/api"
import "./question.css";

function Question(props) {
  let { id } = useParams();
  let navigate = useNavigate();

  const getQuestion = async (id) =>{
    let data = await getQuestionByID(id);
    if(data){
        setQuestion(data[0]);
    }
  }

  const editQuestion = (id) => {
    navigate(getQuestionFormUrl(id));
  }

  const completeQuestionThis = (id) => {
    completeQuestion(id);
  }

  const createAnswer = async (id) => {
    navigate(getAnswerFormUrl(id));
  }

  const getAnswers = async (id) => {
    let answers = await getAnswersByQuestionID(id);
    if(answers){
      setAnswers(answers);
    }
  }

  const dislikeQuestionHandle = async () => {
    await dislikeQuestion(id)
    getQuestion(id);
  }

  const likeQuestionHandle = async () => {
    await likeQuestion(id)
    getQuestion(id);
  }

  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState(null);
  useEffect(()=>{

      if(question?.ID != id){
        getQuestion(id);
        getAnswers(id);
      }

      let liked = document.getElementsByClassName("liked");
      if(liked[0]){
        let disliked = document.getElementsByClassName("disliked");
        if(disliked[0]){
          let sum = question.Likes + question.Dislikes; 
          let likesPercentage = (question.Likes * 100)/sum;
          let dislikesPercentage = (question.Dislikes * 100)/sum;
          let visualTearing = (100 - likesPercentage - dislikesPercentage)/2;
          likesPercentage = likesPercentage + visualTearing;
          dislikesPercentage = dislikesPercentage + visualTearing;
          liked[0].style.width = likesPercentage + "%";
          disliked[0].style.width = dislikesPercentage + "%";
        }
      }
      
  })

  return (
    <div className='mainQuestion'>
        {
          question ? 
          <>
          <div className='mainQuestionHeader'>
            <div className='mainQuestionLike'>
              <Icon icon="fa-regular fa-thumbs-up fa-2xl" onClick={() => {likeQuestionHandle()}} hidden={props.authentication.Authenticated ? false : true}/>
            </div>
            <div className='questionTitle'>
              {question.Title}
            </div>
            <div className='mainQuestionDislike'>
              <Icon icon="fa-regular fa-thumbs-down fa-2xl" onClick={() => {dislikeQuestionHandle()}} hidden={props.authentication.Authenticated ? false : true}/>
            </div>
          </div>
          <div className='mainQuestionPopularity'>
            <div className='liked'/>
            <div className='disliked'/>
          </div>
          <div className={question.Answer == 1 ? "mainQuestionTextAnswered" : "mainQuestionText"}>
            {question.Question}
          </div>
          {props.authentication.Authenticated ? 
          <div className='mainQuestionActionBar'>
            {
              question.UserID == props.authentication.ID ?
              <Icon icon="fa-regular fa-trash-can fa-2xl headerIcon" onClick={()=>{deleteQuestion(id)}} hidden={props.authentication.Authenticated ? false : true}/>
              : ""
            }
            {
              question.UserID == props.authentication.ID && question.Answer != 1 ?
              <Icon icon="fa-solid fa-pen fa-2xl headerIcon" onClick={()=>{editQuestion(id)}} hidden={props.authentication.Authenticated ? false : true}/>
              : ""
            }    
            {
              question.UserID == props.authentication.ID && question.Answer != 1 ?
              <Icon icon="fa-solid fa-check fa-2xl headerIcon" onClick={()=>{completeQuestionThis(id)}} hidden={props.authentication.Authenticated ? false : true}/>
              : ""
            }           
            {
              question.UserID == props.authentication.ID ?
              ""
              : <Icon icon="fa-regular fa-hand fa-2xl headerIcon" onClick={()=>{createAnswer(id)}} hidden={props.authentication.Authenticated ? false : true}/>
            }
          </div>
          :
          ""
          }
          
          <div className='mainQuestionAnswers'>
          {
            answers ?
              answers.map((el,index)=>(
                <Answer answer={el} key={index} authentication={props.authentication}/>
              ))
              :
              ""
          }
          </div>
          </>
          :
          "Error retrieving question."
        }
    </div>
  )
}

export default Question;

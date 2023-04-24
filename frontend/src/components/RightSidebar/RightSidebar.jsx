import React, {useState, useEffect} from "react";
import {getAllUserQuestions} from "../../utils/api";
import QuestionSidebar from "./QuestionSidebar";
import "./rightSidebar.css"
const RightSidebar = (props) => {

    const getUserQuestions = async () =>{
        let data = await getAllUserQuestions(props.authentication.Username);
        if(data){
            setUserQuestions(data);
            setUserQuestionCount(data.length);
        }
    }
    const [userQuestions, setUserQuestions] = useState(null);
    const [userQuestionCount, setUserQuestionCount] = useState(0);
    useEffect(()=>{
        if(!userQuestions){
            getUserQuestions();
        }
        else if (userQuestions && userQuestionCount != userQuestions.length){
            getUserQuestions();
        }
    })

    return (
        <>
            {
                props.authentication.Username?
                <div style={{fontSize:"x-large", fontWeight:"bolder"}}>
                    {"Your Questions"}
                </div>
                :
                ""
            }
           
            {
                userQuestions ? userQuestions.map((el,index)=>(
                    <QuestionSidebar question={el} key={index}/>
                )) : <div>User does not have any questions</div>
            }
        </>
    )
}

export default RightSidebar;
import React, {useState, useEffect} from "react";
import {getAllUserQuestions} from "../../utils/api";
import QuestionSidebar from "./QuestionSidebar";
import "./rightSidebar.css"
const RightSidebar = (props) => {

    const getUserQuestions = async () =>{
        let data = await getAllUserQuestions(props.authentication.Username);
        if(data){
            setUserQuestions(data);
        }
    }

    const [userQuestions, setUserQuestions] = useState(null);

    useEffect(()=>{
        if(!userQuestions){
            getUserQuestions();
        }
    })

    return (
        <>
            {
                userQuestions ? userQuestions.map((el,index)=>(
                    <QuestionSidebar question={el} key={index}/>
                )) : <div>User does not have any questions</div>
            }
        </>
    )
}

export default RightSidebar;
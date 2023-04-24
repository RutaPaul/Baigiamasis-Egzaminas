import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {getTopQuestions} from "../../utils/api";
import "./mainPage.css";
import QuestionBar from "./QuestionBar";

const MainPage = (props) => {
    let navigate = useNavigate();
    const getQuestions = async () =>{
        let data = await getTopQuestions(5);
        if(data){
            setQuestions(data);
        }
    }

    const getAllQuestions = () =>{
        navigate("/allquestions");
    }

    const [questions, setQuestions] = useState(null);

    useEffect(()=>{
        if(!questions){
            getQuestions();
        }
    })

    return(
        <>
        <div style={{fontSize:"xx-large", fontWeight:"bolder"}}>
            Top questions
        </div>
        {
            questions ? 
            (
                questions.map((el,index)=>(
                    <QuestionBar question={el} key={index}/>
                ))
            )
            :
            <div>No Questions available</div>
        }
        {
            questions ?
                <button style={{marginBottom:"5%", backgroundColor:"rgb(60, 151, 255)"}} className="btn btn-info" onClick={()=>{getAllQuestions()}}> See All</button>
            :
            ""
        }
        </>
    )
}

export default MainPage;
